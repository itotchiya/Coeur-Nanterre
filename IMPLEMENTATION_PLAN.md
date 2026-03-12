# Cœur Nanterre — Plan d'implémentation

> Projet : Site web commercial + Plaquette commerciale
> Adresse : 64-68 Boulevard du Couchant, 92000 Nanterre
> Developer : SCCV Nanterre 22 — 22 rue Boissy d'Anglais, 75008 Paris
> Architecte : Haour Architecture
> Stack : Astro + Vue + GSAP

---

## Statut actuel (Mars 2026)

Le site est fonctionnel avec la structure complète, les animations GSAP, le simulateur de crédit,
le formulaire de téléchargement de plaquette et l'affichage des lots réels (A1–A8 + Maison T15).

---

## Phase 1 — Contenu client manquant (BLOQUANT)

Ces éléments doivent être fournis par le client avant toute mise en ligne.

### 1.1 Visuels (priorité absolue)

| Asset | Format cible | Emplacement dans le code |
|-------|-------------|--------------------------|
| Renders 3D extérieur (min. 3 angles : façade rue, vue aérienne, jardin arrière) | WebP / JPG, min 2000px large | `src/assets/render-*.avif` → remplace `arch01.avif` etc. |
| Renders 3D intérieur (séjour, chambre, terrasse) | WebP / JPG, min 2000px | `src/assets/interior-*.avif` |
| Modèle 3D interactif (Sketchfab ou équivalent) | URL Sketchfab embed | `ProgramOverview.astro` ligne 153 — remplacer l'URL `8b31e163...` |
| Photo aérienne du site (haute résolution) | JPG/WebP | `src/assets/nanterre-city.jpg` |
| Photo façade existante avant réhabilitation | JPG/WebP | `src/assets/historic-residential.avif` |

### 1.2 Informations commerciales

| Information | Où intégrer |
|-------------|-------------|
| **Numéro de téléphone réel** (actuellement `01 00 00 00 00`) | `Header.astro` ligne 203, `Footer.astro` ligne 60 |
| **Confirmation email** `contact@coeur-nanterre.fr` (boîte active ?) | `Header.astro`, `Footer.astro` |
| **Prix par lot** (grille accession TVA 5.5% ou marché libre) | `ProgramOverview.astro` — colonne prix dans le tableau des lots |
| **Date de livraison prévisionnelle** | `ProgramOverview.astro` — nœud "Livraison" dans la timeline |
| **Classe DPE estimée** (RE2020) | Section Prestations (`Lifestyle.astro`) |
| **Parking : prix et assignation par lot** | `ProgramOverview.astro` — note sous le tableau |

### 1.3 Réseaux sociaux

| Réseau | Où intégrer |
|--------|-------------|
| URL LinkedIn | `Header.astro` ligne 209, `Footer.astro` ligne 74 |
| URL Instagram | `Header.astro` ligne 212, `Footer.astro` ligne 96 |

### 1.4 Plaquette commerciale (PDF)

Le PDF placeholder est en place à `/Upload/Coeur-Nanterre-Plaquette-Commercial.pdf`.
Remplacer ce fichier par la plaquette finale une fois produite.

---

## Phase 2 — Corrections identifiées (à faire maintenant)

| # | Correction | Fichier | Statut |
|---|-----------|---------|--------|
| 1 | Adresse corrigée : "64-68 Boulevard du Couchant" | `Location.astro`, `Footer.astro` | ✅ Fait |
| 2 | Tableau des lots réels (A1–A8 + T15 Maison) intégré | `ProgramOverview.astro` | ✅ Fait |
| 3 | Compteur logements : `~10` → `9 + 1 maison` | `ProgramOverview.astro` | ✅ Fait |
| 4 | Animation GSAP pour le tableau des lots | `ProgramOverview.astro` | ✅ Fait |
| 5 | Styles CSS du tableau des lots (badges type, statuts) | `program-overview.css` | ✅ Fait |

---

## Phase 3 — Fonctionnalités à développer

### 3.1 Tableau des lots — prix et disponibilité dynamiques

Quand le client fournit les prix et les statuts :

```
// Dans ProgramOverview.astro, mettre à jour chaque ligne :
// Remplacer "Sur demande" par le prix TTC
// Changer lot-status--available en lot-status--reserved ou lot-status--sold
```

Si le projet grandit, migrer vers un fichier de données :
```
// src/data/lots.ts
export const lots = [
  { id: "A1", etage: "RDC", type: "T4", surface: 77.58, annexes: "Terrasse 38,86 m² + Jardin 7,10 m²", prix: null, statut: "available" },
  ...
]
```

### 3.2 Carte interactive (section Adresse)

Actuellement : image statique du plan de masse.
À implémenter : carte Mapbox GL ou Google Maps avec marqueur + POI.

```
// Remplacer MapPlaceholder.astro par un vrai composant carte
// Pins à afficher :
// - Le projet (64-68 Bvd du Couchant)
// - Nanterre-Préfecture RER A (vérifier distance réelle)
// - Marché de Nanterre
// - École / Crèche la plus proche
// - Commerces de proximité
```

### 3.3 Formulaire de téléchargement — backend

Actuellement : formulaire front-end uniquement (sauvegarde localStorage).
À implémenter : envoi des leads par email ou vers un CRM.

Option A — Email simple (Resend / Brevo) :
```
// Créer src/pages/api/brochure.ts (Astro endpoint)
// Recevoir POST avec FormData
// Envoyer email à contact@coeur-nanterre.fr avec les coordonnées du prospect
```

Option B — CRM (HubSpot / Salesforce) :
```
// Intégrer le SDK HubSpot
// Créer un contact à chaque soumission
```

### 3.4 Visite virtuelle (optionnel)

Si le client fournit un tour 360° :
```
// Intégrer Matterport embed ou Krpano dans ProgramOverview.astro
// Remplacer l'iframe Sketchfab actuelle
```

### 3.5 SEO & Meta

```
// Mettre à jour src/layouts/Layout.astro :
// - og:image → render 3D de la façade
// - description → texte commercial officiel
// - Schema.org RealEstateListing markup
```

---

## Phase 4 — Avant mise en ligne

| Tâche | Responsable |
|-------|------------|
| Vérifier `Mentions légales` (lien dans footer pointe vers `#`) | Dev |
| Vérifier `Politique de confidentialité` (lien dans footer pointe vers `#`) | Dev + Client (RGPD) |
| Créer `/mentions-legales` page avec : nom société, SIRET, hébergeur, éditeur | Dev + Client |
| Créer `/politique-de-confidentialite` page | Dev + Client |
| Tester formulaire de téléchargement sur mobile | Dev |
| Vérifier que le PDF `/Upload/Coeur-Nanterre-Plaquette-Commercial.pdf` est la version finale | Client |
| Vérifier simulateur de crédit (taux et durées) | Client |
| Test de performance Lighthouse (cible : > 90) | Dev |
| Test accessibilité (contraste, focus, aria) | Dev |
| Configurer domaine + SSL | Dev + Client |

---

## Architecture des fichiers source

```
src/
├── assets/              ← Images sources (remplacer les placeholders)
├── components/
│   ├── sections/        ← Un fichier par section de la page
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectEssence.astro
│   │   ├── Location.astro       ← Adresse corrigée ✅
│   │   ├── Connectivity.astro
│   │   ├── Architecture.astro
│   │   ├── ProgramOverview.astro  ← Tableau lots ajouté ✅
│   │   ├── Lifestyle.astro
│   │   ├── CreditSimulator.astro
│   │   ├── BrochureCta.astro
│   │   ├── LegalMentions.astro
│   │   └── Footer.astro         ← Adresse corrigée ✅
│   └── ui/              ← Composants réutilisables
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/              ← CSS par section

public/
├── Assets/              ← Logos SVG
└── Upload/
    └── Coeur-Nanterre-Plaquette-Commercial.pdf  ← Remplacer par la version finale
```

---

*Dernière mise à jour : Mars 2026*
