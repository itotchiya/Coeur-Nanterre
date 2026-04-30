# Cœur Nanterre — Éléments manquants pour le site complet

> Ce document liste tout ce que le client doit fournir pour finaliser le site web et la plaquette commerciale.
> Les éléments sont classés par priorité (BLOQUANT → IMPORTANT → OPTIONNEL).

---

## 🔴 BLOQUANT — Sans ces éléments, le site ne peut pas être mis en ligne

### Visuels

| # | Élément | Détail | Utilisation |
|---|---------|--------|-------------|
| 1 | **Renders 3D extérieur — façade rue** | Vue depuis le Boulevard du Couchant. Min. 2000px, format JPG/WebP | Hero, Architecture, Plaquette |
| 2 | **Renders 3D extérieur — vue jardin/terrasse arrière** | Vue depuis le côté Lot B. Min. 2000px | Architecture, Plaquette |
| 3 | **Renders 3D extérieur — vue aérienne ou perspective** | Vue d'ensemble du projet intégré dans le quartier | Hero, Section Projet |
| 4 | **Renders 3D intérieur — séjour/cuisine** | Type T4 ou T3. Min. 2000px | Prestations, Plaquette |
| 5 | **Renders 3D intérieur — chambre principale** | Avec dressing si possible | Prestations, Plaquette |
| 6 | **Renders 3D intérieur — terrasse** | Vue depuis la terrasse la plus grande (A6 : 67m²) | Prestations, Plaquette |

> **Note :** Le seul visuel actuel est une vignette de très basse résolution dans le coin des plans d'architecte (Haour Architecture). Ce n'est pas utilisable pour le marketing.

### Informations commerciales

| # | Élément | Détail |
|---|---------|--------|
| 7 | **Numéro de téléphone commercial** | Actuellement affiché `01 00 00 00 00` (placeholder) |
| 8 | **Confirmation boîte mail active** | `contact@coeur-nanterre.fr` — cette boîte reçoit-elle les emails ? |
| ~~9~~ | ~~**Prix de vente par lot**~~ | ✅ Intégré — Grille d'accession TVA 5,5% disponible (A1–A9). Voir `GRILLE_ACCESSION.md`. ⚠️ Vérifier concordance avec plans architecte (écarts sur A5–A9). |
| 10 | **Conditions accession sociale** | Plafonds de ressources, apport minimum, PTZ éligible ? |
| 11 | **Date de livraison prévisionnelle** | Ex : "Livraison prévisionnelle T4 2027" |
| 12 | **Statut permis de construire** | Déposé ? Instruit ? Obtenu ? → Impacte la timeline du site |

---

## 🟠 IMPORTANT — Nécessaire pour un site complet et professionnel

### Modèle 3D interactif

| # | Élément | Détail |
|---|---------|--------|
| 13 | **Modèle 3D interactif du projet** | Fichier .glb / .gltf / IFC ou URL Sketchfab du vrai modèle. Actuellement : démo générique d'un appartement non lié au projet. |

> Si le BIM de Haour Architecture est disponible, il peut être converti en .glb pour Sketchfab (upload gratuit). Ou utiliser un outil comme ARES, Matterport, etc.

### Spécifications techniques

| # | Élément | Détail | Source probable |
|---|---------|--------|-----------------|
| 14 | **Classe DPE estimée** | A, B ou C ? RE2020 conforme ? | Notice descriptive |
| 15 | **Système de chauffage** | Pompe à chaleur ? Radiateurs électriques ? | Notice descriptive |
| 16 | **Sol** | Carrelage ? Parquet chêne ? Par type d'appartement | Notice descriptive |
| 17 | **Cuisine** | Équipée ou non ? Îlot central ? Marque des équipements | Notice descriptive |
| 18 | **Salle de bains / d'eau** | Douche italienne ? Marque robinetterie | Notice descriptive |
| 19 | **Recharge électrique voiture** | Le parking sous-sol intègre-t-il des bornes IRVE ? | Plans / Notice |
| 20 | **Accessibilité PMR** | Quel(s) lot(s) sont PMR accessibles ? | Plans architecte |

> La notice descriptive (`Notice descriptive Nanterre mars 2026.docx`) contient probablement ces informations — elle n'était pas lisible en texte. Demander au client de la partager en PDF texte ou de copier les points clés.

### Parking & annexes

| # | Élément | Détail |
|---|---------|--------|
| 21 | **Attribution parking par lot** | 8 places (01–08) en sous-sol. Quelle place va avec quel appartement ? |
| 22 | **Prix du parking** | Inclus dans le prix du lot ou vendu séparément ? |
| 23 | **Cave** | Y a-t-il des caves ? Assignées à quels lots ? |

### Contact & identité

| # | Élément | Détail |
|---|---------|--------|
| 24 | **URL LinkedIn** | La page LinkedIn du programme ou de la société | Header + Footer |
| 25 | **URL Instagram** | Le compte Instagram du programme ou de la société | Header + Footer |
| 26 | **Nom du conseiller commercial** | Qui gère les prospects ? Prénom + nom pour personnaliser le contact |
| 27 | **Logo promoteur** | Logo SCCV Nanterre 22 ou logo maison mère à afficher côté Haour Architecture | Footer / Plaquette |

---

## 🟡 OPTIONNEL — Améliore l'expérience mais pas bloquant

| # | Élément | Détail |
|---|---------|--------|
| 28 | **Vidéo / animation du projet** | Flythrough 3D ou animation architecturale. Format MP4/WebM | Section Architecture |
| 29 | **Visite virtuelle intérieure** | Tour 360° Matterport ou équivalent | Section Programme |
| 30 | **Photo du quartier — marché** | Photo réelle du marché de Nanterre (pas placeholder) | Section Atouts |
| 31 | **Photo du quartier — commerces** | Photo réelle de la rue commerçante | Section Atouts |
| 32 | **Photo RER A Nanterre** | Station Nanterre-Préfecture ou Nanterre-Ville (préciser laquelle + distance à pied) | Section Atouts |
| 33 | **Plan de situation personnalisé** | Carte avec POI (école, transport, commerces) propre au projet | Section Adresse |
| 34 | **Charte graphique** | Palette couleurs, typographies, logo si différent de celui déjà intégré | Global |

---

## Récapitulatif pour l'email client

Voici la liste simplifiée à envoyer au client :

```
Bonjour,

Pour finaliser le site web Cœur Nanterre, nous avons besoin des éléments suivants :

URGENT (bloquant) :
1. Renders 3D de la façade extérieure (min. 3 angles)
2. Renders 3D intérieurs (séjour, chambre, terrasse)
3. Numéro de téléphone commercial
4. Prix de vente par appartement
5. Date de livraison prévisionnelle

IMPORTANT :
6. Modèle 3D du projet (fichier .glb ou lien Sketchfab)
7. Classe DPE estimée
8. Fiche technique : sol, cuisine, salle de bains, chauffage
9. Attribution des places de parking
10. URL LinkedIn et Instagram

OPTIONNEL :
11. Vidéo/animation du projet
12. Photos réelles du quartier (marché, commerces, RER)
13. Plan de situation avec points d'intérêt
```

---

## Ce qui est déjà intégré (fourni par le client)

| Élément | Statut |
|---------|--------|
| Adresse : 64-68 Boulevard du Couchant, 92000 Nanterre | ✅ Intégré |
| Plans architecte tous niveaux (Haour, Jan 2026) | ✅ Disponibles |
| Liste complète des 9 lots + maison T15 avec surfaces | ✅ Intégré dans le tableau |
| Plan de masse (Lot A + Lot B) | ✅ Disponible |
| Grille d'accession (Excel) | ✅ Intégré — Prix TTC par lot dans tableau + simulateur. Voir `GRILLE_ACCESSION.md`. |
| Notice descriptive (Word) | ✅ Disponible (specs à extraire) |
| Transport : RER A → La Défense 8 min, Châtelet 20 min | ✅ Intégré |
| Concept commercial : "Cœur Nanterre" | ✅ Intégré |
| Logo programme | ✅ Intégré |
| Plaquette PDF (version démo) | ✅ En place (`/Upload/Coeur-Nanterre-Plaquette-Commercial.pdf`) |

---

*Dernière mise à jour : Mars 2026*
