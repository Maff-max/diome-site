'use client';
import { useEffect, useState } from 'react';
import { asset } from '@/lib/asset';

export default function Nav() {
  const [defile, setDefile] = useState(false);
  useEffect(() => {
    const f = () => setDefile(window.scrollY > 8);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  return (
    <header className={`nav ${defile ? 'scrolled' : ''}`}>
      <div className="wrap">
        <a className="brand" href="#">
          <img src={asset('/img/logo.svg')} alt="" width={30} height={30} />
          DIOME
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          <a className="btn btn-ghost" href="#methode">Méthode</a>
          <a className="btn btn-ghost" href="#filieres">Filières</a>
          <a className="btn btn-ghost" href="#fonctions">Fonctions</a>
          <a className="btn btn-ghost" href="#faq">Questions</a>
          <a className="btn btn-dark" href="#telecharger" style={{ height: 38, marginLeft: 8 }}>Télécharger</a>
        </nav>
      </div>
    </header>
  );
}
