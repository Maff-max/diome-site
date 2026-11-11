'use client';
import { useState } from 'react';
import packs from '@/lib/packs.json';

type Pack = { label: string; steps: { title: string; instruction: string; questions: string[] }[] };
const data = packs as Record<string, Pack>;

const COURT: Record<string, string> = {
  histoire: 'Histoire',
  philosophie: 'Philosophie',
  droit: 'Droit',
  lettres: 'Lettres et langues',
  social: 'Sciences humaines',
  economie: 'Économie et gestion',
  sciences: 'Sciences et ingénierie',
  sante: 'Santé et médecine',
  enseignement: 'Enseignement',
  recherche: 'Recherche',
};

function raccourcir(s: string, n = 150) {
  if (s.length <= n) return s;
  const c = s.slice(0, n);
  return c.slice(0, c.lastIndexOf(' ')) + '…';
}

export default function Disciplines() {
  const [cle, setCle] = useState('droit');
  const p = data[cle];
  return (
    <>
      <div className="chips" role="group" aria-label="Choisir une filière">
        {Object.keys(COURT).map((k) => (
          <button key={k} className="chip" aria-pressed={cle === k} onClick={() => setCle(k)}>
            {COURT[k]}
          </button>
        ))}
      </div>
      <div className="disc" key={cle}>
        <div className="disc-head">
          <b>{p.label}</b>
          <span>Les consignes changent, les cinq étapes restent</span>
        </div>
        <div className="disc-steps">
          {p.steps.map((s, k) => (
            <div key={s.title}>
              <em>ÉTAPE {k + 1}</em>
              <b>{s.title}</b>
              {raccourcir(s.instruction)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
