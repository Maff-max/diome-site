import type { Metadata } from 'next';
import { asset } from '@/lib/asset';
import { CONTACT } from '@/lib/config';

export const metadata: Metadata = { title: 'Politique de confidentialité – Diome' };

export default function Page() {
  return (
    <main className="legal">
      <p><a href={asset('/')}>← Retour à l'accueil</a></p>
      <h1>Politique de confidentialité de Diome</h1>
      <p>Dernière mise à jour : 11 novembre 2026</p>
      <p>Diome est une application de lecture scientifique guidée pour les étudiants, enseignants et chercheurs. Elle existe sur Android et sur Windows. Cette page explique ce qu'elle fait de tes données, en clair.</p>

      <h2>Ce qui reste sur ton appareil</h2>
      <p>Tes PDF, tes surlignages, tes notes, tes reformulations, tes critiques, tes signets, tes références et ton choix de filière sont enregistrés <strong>uniquement sur ton appareil</strong> (téléphone ou ordinateur). Diome ne les envoie jamais à un serveur. Si tu désinstalles l'application ou si tu choisis « Tout effacer » dans les réglages, ils sont supprimés.</p>

      <h2>Ce qui est envoyé</h2>
      <p>Si tu choisis de créer ton profil, <strong>ton prénom</strong> est envoyé à l'équipe Diome (hébergé chez Google Firebase, dans l'Union européenne). Il sert à savoir qui utilise l'application et à te saluer par ton prénom.</p>
      <p>Avec ton prénom, Diome enregistre aussi :</p>
      <ul>
        <li>un identifiant aléatoire propre à ton installation (il n'est lié ni à ton appareil ni à ton identité) ;</li>
        <li>le système de l'appareil (Android ou Windows) et la version de l'application ;</li>
        <li>la date de création du profil et la date de ta dernière ouverture de l'application.</li>
      </ul>
      <p>Si tu ne crées pas de profil, ton prénom n'est pas envoyé. Au démarrage, l'application peut toutefois créer une connexion anonyme auprès de Google Firebase : elle ne contient aucune information sur toi, seulement un identifiant aléatoire qui permet de sécuriser l'envoi.</p>

      <h2>Rapports de plantage</h2>
      <p>Si l'application plante, un rapport technique peut être envoyé à l'équipe Diome (Google Firebase Crashlytics) pour corriger le problème : modèle de l'appareil, version du système et de l'application, et description de l'erreur. Il ne contient ni tes PDF, ni tes notes, ni tes citations. Tu peux désactiver cet envoi à tout moment dans Réglages, « Rapports de plantage ».</p>

      <h2>Ton avis</h2>
      <p>Le bouton « Donner mon avis » ouvre WhatsApp avec un message prêt à envoyer à l'équipe Diome. Rien n'est envoyé sans que tu valides l'envoi dans WhatsApp. Ton numéro de téléphone est alors visible de l'équipe, comme pour tout message WhatsApp.</p>

      <h2>Ce que Diome ne fait pas</h2>
      <ul>
        <li>Pas de publicité.</li>
        <li>Pas de statistiques d'usage ni de suivi de ton comportement dans l'application.</li>
        <li>Pas de revente ni de partage de tes données.</li>
        <li>Pas de lecture de ton contenu (PDF, notes, citations).</li>
      </ul>

      <h2>Tes droits</h2>
      <p>Tu peux supprimer ton profil à tout moment depuis « Mon profil » puis « Supprimer mon profil » : ton prénom est effacé de l'appareil et du serveur. Tu peux aussi demander l'effacement de tes données ou y accéder en écrivant à l'adresse ci-dessous. Conformément au RGPD, tu peux saisir la CNIL si tu estimes que tes droits ne sont pas respectés.</p>

      <h2>Contact</h2>
      <p><a href={`mailto:${CONTACT}`}>{CONTACT}</a></p>

      <h2>Modifications</h2>
      <p>Si cette politique change, la date ci-dessus est mise à jour et l'application t'en informe.</p>
    </main>
  );
}
