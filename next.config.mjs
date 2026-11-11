/** @type {import('next').NextConfig} */
// Site 100 % statique : `npm run build` produit le dossier `out/`, prêt pour GitHub Pages ou n'importe quel hébergeur.
// Si le site est servi dans un sous-dossier (ex. maff-max.github.io/diome), définis NEXT_PUBLIC_BASE_PATH=/diome avant le build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};
export default nextConfig;
