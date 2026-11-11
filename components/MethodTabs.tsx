'use client';
import { useState } from 'react';

const ETAPES = [
  {
    t: 'Préparer',
    court: 'Dis pourquoi tu lis ce document.',
    long: "Avant d'ouvrir le PDF, Diome te pose les bonnes questions : de quoi s'agit-il, qui écrit, et qu'est-ce que tu cherches ? Tu lis avec un but, pas au hasard.",
    ex: "Pourquoi lis-tu ce texte : cours, mémoire, examen, curiosité ?",
  },
  {
    t: 'Lire et surligner',
    court: 'Repère les passages importants.',
    long: "Surligne dans le PDF avec cinq catégories : argument, preuve, exemple, citation, question. Chaque passage garde sa page, tu retrouves toujours la source.",
    ex: "Surligne un passage à partir de la page 12.",
  },
  {
    t: 'Reformuler',
    court: 'Écris chaque passage avec tes mots.',
    long: "C'est l'étape qui fait retenir. Diome ne rédige rien à ta place : il te demande de dire le passage avec tes propres mots.",
    ex: "Reformule un passage avec tes mots.",
  },
  {
    t: 'Critiquer',
    court: 'Note ce que tu penses des arguments.',
    long: "Les arguments tiennent-ils ? Les preuves suffisent-elles ? Selon ta filière, les questions changent : sources en histoire, portée en droit, niveau de preuve en santé.",
    ex: "L'auteur prouve-t-il vraiment ce qu'il avance ?",
  },
  {
    t: 'Fiche finale',
    court: 'Vérifie tes références et exporte.',
    long: "Tout est réuni : tes reformulations, tes citations avec leur page, tes références. Exporte en Word ou en PDF, avec les citations en notes de bas de page.",
    ex: "Exporter la fiche en Word ou en PDF.",
  },
];

export default function MethodTabs() {
  const [i, setI] = useState(0);
  const e = ETAPES[i];
  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Les cinq étapes">
        {ETAPES.map((x, k) => (
          <button key={x.t} className="tab" role="tab" aria-selected={i === k} onClick={() => setI(k)}>
            <span className="n">{k + 1}</span>
            <div>
              <b>{x.t}</b>
              <span>{x.court}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="panel" role="tabpanel" key={i}>
        <h3>{e.t}</h3>
        <p>{e.long}</p>
        <div className="ask">
          <small>Prochaine action proposée</small>
          {e.ex}
        </div>
      </div>
    </div>
  );
}
