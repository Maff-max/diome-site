import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import StoreButtons, { DownloadWindows } from '@/components/StoreButtons';
import MethodTabs from '@/components/MethodTabs';
import Disciplines from '@/components/Disciplines';
import { asset } from '@/lib/asset';
import { CONTACT, WINDOWS } from '@/lib/config';

const TELEPHONES = [
  ['ph_1_bibliotheque.jpg', 'Ta bibliothèque'],
  ['ph_2_lecteur.jpg', 'Le lecteur PDF'],
  ['ph_3_categorie.jpg', 'Cinq catégories'],
  ['ph_4_reformulation.jpg', 'Reformuler'],
  ['ph_5_carnet.jpg', 'Le carnet'],
  ['ph_6_parcours.jpg', 'Le parcours'],
];

const FAQ = [
  ['Diome écrit-il ma fiche de lecture à ma place ?', "Non, jamais. Diome pose les questions et garde tes surlignages, mais c'est toi qui reformules et qui critiques. C'est ce qui permet de retenir."],
  ['Mes documents sont-ils envoyés quelque part ?', "Non. Tes PDF, tes notes et tes surlignages restent sur ton appareil. Il n'y a ni publicité ni compte à créer."],
  ['Pour quelles filières ça fonctionne ?', "Histoire, philosophie, droit, lettres et langues, sciences humaines, économie et gestion, sciences et ingénierie, santé, ainsi que pour les enseignants et les chercheurs. Un parcours général existe pour les autres filières."],
  ['Sur quels appareils puis-je l\'utiliser ?', "Sur Android (Google Play), sur Windows 10 et 11 (Microsoft Store) et bientôt sur iPhone (App Store)."],
  ['Est-ce payant ?', 'Non, Diome est gratuit.'],
  ['Comment citer mes sources ?', "Chaque passage garde sa page. Les références sont copiables en BibTeX et la fiche finale s'exporte en Word ou en PDF avec les citations en notes de bas de page."],
];

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* héros */}
        <section className="hero">
          <div className="wrap">
            <h1 style={{ marginTop: 8 }}>Lis avec méthode. Retiens <span className="mark">vraiment</span>.</h1>
            <p className="sub">
              Diome t'accompagne pas à pas dans la lecture d'un article ou d'un chapitre, du premier regard jusqu'à ta fiche de lecture.
              Une méthode qui s'adapte à ta filière.
            </p>
            <StoreButtons />
            <p className="fine">Gratuit · Sans publicité · Sans compte</p>
          </div>
          <div className="stage">
            <div className="window">
              <div className="window-bar"><i /><i /><i /></div>
              <img src={asset('/img/app_3_lecteur.jpg')} alt="Le lecteur PDF de Diome avec le panneau des passages surlignés" width={1600} height={846} />
            </div>
          </div>
        </section>

        {/* pour qui */}
        <section className="section">
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">Pour qui</div>
              <h2 className="h2">Pour tous ceux qui lisent pour apprendre.</h2>
            </Reveal>
            <Reveal className="who" delay={80}>
              <div><b>Étudiants</b><p>Un article, un chapitre, un arrêt : tu sais quoi chercher et quoi noter, de la licence au master.</p></div>
              <div><b>Enseignants</b><p>Prépare un cours à partir d'un texte, avec l'objectif pédagogique et ton public en tête.</p></div>
              <div><b>Chercheurs et doctorants</b><p>Relie chaque lecture à ta question de recherche et compare avec la littérature.</p></div>
            </Reveal>
          </div>
        </section>

        {/* méthode */}
        <section className="section" id="methode" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">La méthode</div>
              <h2 className="h2">Cinq étapes, une consigne à la fois.</h2>
              <p className="sub">Fini la page blanche devant un PDF de trente pages. Diome te dit quoi faire maintenant, puis ensuite.</p>
            </Reveal>
            <Reveal delay={80}><MethodTabs /></Reveal>
          </div>
        </section>

        {/* filières */}
        <section className="section" id="filieres">
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">Ta filière</div>
              <h2 className="h2">La même méthode, les bonnes questions pour ta discipline.</h2>
              <p className="sub">Au premier lancement, dis ce que tu étudies. Choisis une filière ci-dessous pour voir les consignes réelles de l'application.</p>
            </Reveal>
            <Reveal delay={80}><Disciplines /></Reveal>
          </div>
        </section>

        {/* fonctions */}
        <section className="section" id="fonctions" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">Fonctions</div>
              <h2 className="h2">Tout ce qu'il faut pour lire, rien de plus.</h2>
            </Reveal>
            <div className="bento">
              <Reveal className="cell c-a tint-blue">
                <h3>Un lecteur PDF pensé pour l'étude</h3>
                <p>Ouvre ton PDF, surligne, et garde ton parcours à côté. Sur ordinateur, le panneau de tes passages reste visible en permanence.</p>
                <div className="shot"><img src={asset('/img/app_4_parcours.jpg')} alt="Le parcours en cinq étapes sur ordinateur" width={1600} height={846} loading="lazy" /></div>
              </Reveal>
              <Reveal className="cell c-b" delay={80}>
                <h3>Cinq couleurs, cinq rôles</h3>
                <p>Chaque surlignage a un sens, pour relire vite.</p>
                <div className="tags">
                  <span className="tag t1">Argument</span><span className="tag t2">Preuve</span><span className="tag t3">Exemple</span>
                  <span className="tag t4">Citation</span><span className="tag t5">Question</span>
                </div>
              </Reveal>
              <Reveal className="cell c-c tint-yellow">
                <h3>Chaque passage garde sa page</h3>
                <p>Tu retrouves toujours la source exacte de tes citations.</p>
              </Reveal>
              <Reveal className="cell c-d" delay={80}>
                <h3>Références en BibTeX</h3>
                <p>Copie ta référence en un geste.</p>
                <div className="code">@article&#123;auteur2024,<br />&nbsp;&nbsp;title = &#123;Titre de l'article&#125;,<br />&nbsp;&nbsp;year = &#123;2024&#125;<br />&#125;</div>
              </Reveal>
              <Reveal className="cell c-e tint-green" delay={160}>
                <h3>Export Word et PDF</h3>
                <p>Ta fiche finale, avec les citations en notes de bas de page.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ordinateur */}
        <section className="section" id="ordinateur" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">Sur ordinateur</div>
              <h2 className="h2">Un grand écran pour lire à l'aise.</h2>
              <p className="sub">
                Le lecteur PDF s'affiche en grand, avec le panneau de tes passages à côté. Installe Diome depuis le Microsoft Store,
                ou télécharge directement l'installateur.
              </p>
              <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
                <DownloadWindows />
              </div>
              <p className="fine" style={{ maxWidth: 560 }}>
                Version {WINDOWS.version} pour Windows 10 et 11. Windows peut afficher un avertissement « éditeur inconnu » :
                clique sur « Informations complémentaires », puis « Exécuter quand même ». Pour éviter cet avertissement, passe par le Microsoft Store.
              </p>
            </Reveal>
            <Reveal className="pc-duo" delay={80}>
              <div className="window"><div className="window-bar"><i /><i /><i /></div>
                <img src={asset('/img/app_2_filiere.jpg')} alt="Choix de la filière sur Windows" width={1600} height={846} loading="lazy" /></div>
              <div className="window"><div className="window-bar"><i /><i /><i /></div>
                <img src={asset('/img/app_5_carnet.jpg')} alt="Le carnet de notes sur Windows" width={1600} height={846} loading="lazy" /></div>
            </Reveal>
          </div>
        </section>

        {/* mobile */}
        <section className="section">
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">Sur téléphone</div>
              <h2 className="h2">Dans ta poche, dans le bus, entre deux cours.</h2>
            </Reveal>
            <div className="phones">
              {TELEPHONES.map(([f, l]) => (
                <figure key={f} style={{ margin: 0 }}>
                  <div className="phone"><img src={asset(`/img/${f}`)} alt={l} width={600} height={1333} loading="lazy" /></div>
                  <figcaption className="cap">{l}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* confidentialité */}
        <section style={{ padding: '0 0 112px' }}>
          <Reveal className="dark">
            <div className="wrap" style={{ padding: 0 }}>
              <div className="eyebrow">Tes données</div>
              <h2 className="h2">Ce que tu lis reste à toi.</h2>
              <p className="sub">Diome travaille sur ton appareil. Tes lectures ne sont ni envoyées, ni analysées, ni revendues.</p>
              <div className="dark-grid">
                <div><b>Sur ton appareil</b><p>PDF, notes et surlignages ne quittent pas ton téléphone ou ton ordinateur.</p></div>
                <div><b>Sans publicité</b><p>Aucune pub, aucun suivi de ton comportement.</p></div>
                <div><b>Sans compte</b><p>Tu ouvres l'application et tu commences.</p></div>
                <div><b>Tu effaces tout</b><p>Un bouton dans les réglages supprime tes données.</p></div>
              </div>
              <p style={{ marginTop: 32 }}><a href={asset('/confidentialite/')} style={{ color: 'var(--yellow)' }}>Lire la politique de confidentialité →</a></p>
            </div>
          </Reveal>
        </section>

        {/* faq */}
        <section className="section" id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">Questions fréquentes</div>
              <h2 className="h2">Tu te demandes peut-être…</h2>
            </Reveal>
            <div className="faq">
              {FAQ.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        {/* cta */}
        <section className="section final" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <Reveal>
              <img src={asset('/img/logo.svg')} alt="" width={56} height={56} style={{ margin: '0 auto 24px' }} />
              <h2 className="h2">Ouvre ton prochain PDF avec Diome.</h2>
              <p className="sub">Gratuit, sans compte, et tes lectures restent chez toi.</p>
              <StoreButtons />
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>© 2026 Maff Apps · Diome – Lecture guidée</div>
          <div>
            <a href={asset('/confidentialite/')}>Confidentialité</a>
            <a href={`mailto:${CONTACT}`}>Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
