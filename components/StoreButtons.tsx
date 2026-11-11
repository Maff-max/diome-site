import { LIENS, WINDOWS } from '@/lib/config';

function LogoPlay() {
  return (
    <svg width="26" height="26" viewBox="40 20 430 472" aria-hidden="true">
      <polygon fill="#00a0ff" points="60,30 60,482 260,256" />
      <polygon fill="#00f076" points="60,30 260,256 330,186" />
      <polygon fill="#ffd500" points="330,186 452,256 330,326 260,256" />
      <polygon fill="#ff3a44" points="60,482 260,256 330,326" />
    </svg>
  );
}

function LogoMicrosoft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#f25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7fba00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
    </svg>
  );
}

function LogoApple() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function Bouton({
  href,
  logo,
  nom,
  primaire,
}: {
  href: string;
  logo: React.ReactNode;
  nom: string;
  primaire?: boolean;
}) {
  const actif = href.length > 0;
  return (
    <a
      className={`btn btn-store ${primaire ? 'btn-dark' : 'btn-light'}`}
      href={actif ? href : undefined}
      aria-disabled={!actif}
      {...(actif ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {logo}
      <span className="store-txt">
        <small>{actif ? 'Télécharger sur' : 'Bientôt sur'}</small>
        <b>{nom}</b>
      </span>
    </a>
  );
}

export function DownloadWindows({ clair }: { clair?: boolean }) {
  const actif = LIENS.windowsExe.length > 0;
  return (
    <a
      className={`btn btn-store ${clair ? 'btn-light' : 'btn-dark'}`}
      href={actif ? LIENS.windowsExe : undefined}
      aria-disabled={!actif}
      {...(actif ? { download: true } : {})}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12m0 0l-5-5m5 5l5-5M5 20h14" />
      </svg>
      <span className="store-txt">
        <small>{actif ? `Windows 10 et 11 · .exe · ${WINDOWS.taille}` : 'Windows 10 et 11 · bientôt'}</small>
        <b>Télécharger pour Windows</b>
      </span>
    </a>
  );
}

export default function StoreButtons() {
  return (
    <div className="cta-row" id="telecharger">
      <Bouton href={LIENS.googlePlay} logo={<LogoPlay />} nom="Google Play" primaire />
      <Bouton href={LIENS.microsoftStore} logo={<LogoMicrosoft />} nom="Microsoft Store" />
      <Bouton href={LIENS.appStore} logo={<LogoApple />} nom="App Store" />
    </div>
  );
}
