import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({
  src: '../public/fonts/Inter.ttf',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Diome – Lecture guidée',
  description:
    "Diome t'accompagne pas à pas dans la lecture d'un article ou d'un chapitre, du premier regard à ta fiche de lecture. Une méthode adaptée à ta filière.",
  openGraph: {
    title: 'Diome – Lecture guidée',
    description: 'Lis, surligne, reformule, critique. Une méthode adaptée à ta filière.',
    images: ['/img/icone.png'],
    locale: 'fr_FR',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#1B2745' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
