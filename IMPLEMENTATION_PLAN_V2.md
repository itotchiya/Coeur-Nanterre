# IMPLEMENTATION PLAN V2 — Documents PC3, PC4, PC5
> Source documents: PC5_1_1 PLANS TOITURE ET FACADES · PC3_1_1 PLAN EN COUPE · PC4_1_1 NOTICE DESCRIPTIVE
> Date: Mars 2026 — À valider par le client avant implémentation

---

## ⚠️ POINT CRITIQUE À RÉSOUDRE EN PRIORITÉ

Les trois PDFs désignent systématiquement l'architecte comme **Valerio Ciotola** (via Martucci 56, 80121 Naples — N.T1450), et non "Haour Architecture" comme mentionné dans les documents précédents et le site actuel.
Ces deux entités peuvent avoir des rôles distincts (Valerio = architecte de projet, Haour = conducteur de travaux local ?).
**→ À confirmer avec le client avant toute mise en ligne.**

---

## 🔴 URGENT — Remplacer les placeholders avec données confirmées

| Section | Élément | Valeur actuelle | Nouvelle valeur (PDFs) |
|---------|---------|-----------------|------------------------|
| Hero / ProjectEssence | Total logements | "9 + 1 maison" | **11 logements** (9 neufs Plot A + 2 dans maison Plot B réhabilitée/surélévée) |
| Architecture | Matériau façade | générique | Brique moulée main **RAL 7047 Télé Gris 4** (ép. min. 2,5 cm) + enduit **RAL 9010 Blanc pur** |
| Architecture | Toiture | générique | Brisis ardoise + terrassons zinc, couvertines alu gris anthracite, lames bois mélèze sur terrasses |
| Architecture | Menuiseries | générique | PVC **RAL 9016 Blanc trafic**, encadrements bois lasure **chêne clair** |
| Architecture | Volets roulants | générique | **RAL 1039 Beige Sable** — enroulement extérieur |
| Architecture | Nom architecte | "Haour Architecture" | Valerio Ciotola *(à confirmer)* |
| Architecture | BET Thermique | manquant | EURL André, Montpellier |
| Lifestyle — Parking | Specs parking | générique | 8 places R-1 dont **1 PMR (3,50 m)**, rampe 18% avec pergola bois + plantes grimpantes |
| Lifestyle — Vélos | Specs vélos | générique | Local couvert **14 m²** + 2 aires ext. **4 m²** chacune = **22 m²** total (norme dépassée) |
| Connectivity | RER | "RER A" générique | **Gare Nanterre-Ville RER A** — en face du boulevard |
| Connectivity | Bus | manquant | Lignes **367, 141, 157, 159, 160** + Noctilien |
| ProgramOverview — snapshot | Nb logements | "9 + 1 maison" | **11 logements** |
| ProgramOverview — lots table | LOT E.1 et E.2 | manquants | E.1 : 63 m² + Jardin 107 m² / E.2 : 140 m² + Jardin 40 m² |
| ProgramOverview — parking | PMR | non mentionné | 1 place PMR (3,50 m), labellisée "5-pmr" dans les plans |

---

## 🟠 HIGH — Enrichir les sections existantes

### Section Architecture
Ajouter un bloc palette matériaux avec 6 références RAL :

| # | Référence | Application |
|---|-----------|-------------|
| 1 | **RAL 9010** Blanc pur | Enduit façade (teinté dans la masse) |
| 2 | **RAL 7047** Télé Gris 4 | Brique moulée main (ép. min. 2,5 cm) |
| 3 | **RAL 9016** Blanc trafic | Menuiseries PVC |
| 4 | **RAL 1039** Beige Sable | Volets roulants (enroulement extérieur) |
| 5 | **Dune 0681** | Toile polyester micro aérée — stores à projection |
| 6 | **Ardoise + Zinc** | Brisis toiture / terrassons |

Ajouter également :
- Garde-corps : acier gris foncé
- Couvertines : aluminium gris anthracite
- Revêtement terrasses : lames de bois mélèze
- Lucarne : enduit RAL 7015
- Stores à projection : équerres aluminium gris anthracite

### Section Architecture — copy à ajouter (confirmé par la notice)
- "Espaces de vie orientés plein Sud — apports solaires optimisés"
- "Appartements traversants ou à double exposition — ventilation naturelle croisée"
- "Cohérence de palette entre Plot A neuf et maison existante Plot B"
- "Toitures traitées comme une 5ème façade — équipements techniques intégrés discrètement"
- Heights : Plot A faîtage **12,85 m** / Plot B faîtage **12,00 m**

### Section ProjectEssence — statistiques confirmées à ajouter
- **+70 %** des logements bénéficient d'un espace extérieur généreux (surface moyenne **48 m²**)
- **4 logements** avec entrée individuelle directe sur rue
- Parcelle **818 m²** — Zone PLU UA — EPT Paris Ouest La Défense
- Référence cadastrale : **000 CR 5**

### Section Lifestyle — enrichir les chips de specs sur les cartes existantes

| Carte | Specs à ajouter |
|-------|----------------|
| Terrasses | "Lames de bois mélèze — garde-corps acier gris foncé — stores Dune 0681" |
| Jardins RDC | "De 40 m² (E.1) à 107 m² (E.2) — clôtures grillage RAL vert 6005 + haies végétales" |
| Parking | "1 place PMR 3,50 m — pergola bois + plantes grimpantes sur rampe 18%" |
| Local vélos | "22 m² total — 14 m² couvert + 2 × 4 m² ext. — norme dépassée" |
| Ascenseur | Confirmé : édicule ascenseur visible sur le plan de toiture Plot A |

### Section ProgramOverview — Timeline
Ajouter date confirmée : **Permis de construire déposé le 12.05.2022**

---

## 🟡 OPTIONNEL — Nouvelles sections à créer

### NOUVELLE SECTION A — "Matériaux & Finitions"
**Emplacement suggéré :** entre Architecture et ProgramOverview

Contenu :
- Grille visuelle de 6 swatches couleur avec références RAL
- Description par matériau (façade, toiture, menuiseries, stores, garde-corps, terrasses)
- Citation architecturale sur la cohérence de palette

### NOUVELLE SECTION B — "Espaces verts & Paysage"
**Emplacement suggéré :** entre Lifestyle et CreditSimulator

Contenu confirmé par la notice :
- 5 arbres remarquables conservés sur le boulevard
- 4 nouvelles plantations : 2 Aubépines à deux styles + 2 Bourdaines
- 76 m² zone verte protégée en fond de parcelle (PLU)
- Pergola bois + plantes grimpantes sur la rampe de parking
- Cheminements piétons : béton désactivé beige
- Éclairage paysager : wall lights, spotlights, floor spotlights
- Carrefour piéton/voiture : revêtement podotactile PMR

### NOUVELLE SECTION C — "Conformité & Garanties" *(optionnel, proche du footer)*
Tableau de conformité PLU (rassurant pour les acquéreurs) :
- Zone UA confirmée ✓
- Hauteur maîtrisée ≤ 12 m ✓
- 8 places de parking sous-sol ✓
- 1 place PMR ✓
- 22 m² stationnement vélos (norme : 16,5 m²) ✓
- 9 arbres plantés/conservés ✓
- Gestion pluviale à la parcelle ✓
- Permis de construire déposé 12.05.2022 ✓

---

## ❌ Confirmé ABSENT des documents — ne pas inventer

| Élément | Statut |
|---------|--------|
| Classe DPE (A/B/C...) | ❌ Absent — le BET thermique est EURL André mais aucune valeur fournie |
| Label RE2020 / valeurs Bbio | ❌ Absent |
| Type de chauffage (PAC, gaz, électrique) | ❌ Absent |
| Bornes de recharge VE (IRVE) | ❌ Non mentionné malgré présence PMR |
| Date de livraison | ❌ Absent — PC déposé 12.05.2022 mais délai de construction non précisé |
| Finitions intérieures (sol, carrelage SdB, cuisine) | ❌ Absent — niveau CCMA/DPGF non fourni |
| Valeurs acoustiques (dB) | ❌ Zonage acoustique mentionné mais aucune valeur |

---

## 💡 Découverte bonus

Le plan de toiture (PC5) identifie un **"Édicule Ascenseur"** sur Plot A — l'ascenseur est confirmé par le permis de construire. La mention "Ascenseur 630 kg" déjà présente dans la section Lifestyle est donc validée.

---

## Données techniques complètes extraites

### Hauteurs NGF (Plot A — immeuble neuf)
| Niveau | Hauteur relative | NGF |
|--------|-----------------|-----|
| R-1 (parking) | −2,45 m | 27,75 NGF |
| RDC | +1,50 m | 31,70 NGF |
| R+1 | +4,72 m | 34,92 NGF |
| R+2 | +7,74 m | 37,94 NGF |
| Acrotère intermédiaire | +5,69 m | 35,89 NGF |
| Égout | +11,10 m | 41,30 NGF |
| **Faîtage** | **+12,85 m** | **43,05 NGF** |

### Hauteurs NGF (Plot B — maison existante surélévée)
| Niveau | Hauteur relative | NGF |
|--------|-----------------|-----|
| RDC | +0,00 m | 30,20 NGF |
| R+1 | +2,72 m | 32,92 NGF |
| R+2 | +5,44 m | 35,64 NGF |
| R+3 | +8,16 m | 38,36 NGF |
| Acrotère | +10,49 m | 40,69 NGF |
| Égout | +10,61 m | 40,81 NGF |
| **Faîtage** | **+12,00 m** | **42,20 NGF** |

### Surfaces par lot (notice descriptive)
| Lot | SHAB | Espace extérieur | Type |
|-----|------|-----------------|------|
| LOT E.1 | 63,0 m² | Jardin 107 m² | Maison existante réhab |
| LOT E.2 | 140,0 m² | Jardin 40 m² | Maison surélévée |
| LOT A.1 | 76,0 m² | Jardin 48 m² | Neuf |
| LOT A.2 | 51,5 m² | Jardin 46 m² | Neuf |
| LOT A.3 | 60,0 m² | Jardin 56 m² | Neuf — duplex |
| LOT A.4 | 77,5 m² | — | Neuf |
| LOT A.5 | 46,5 m² | Terrasse 10 m² | Neuf |
| LOT A.6 | 54,0 m² | Terrasse 26–32 m² | Neuf |
| LOT A.7 | 39,0 m² | Terrasse 56 m² | Neuf |
| LOT A.8 | 51,5 m² | — | Neuf |
| LOT A.9 | 36,5 m² | — | Neuf |
| **TOTAL** | **798,5 m²** | | |
| SDP totale | **846,0 m²** | | |

### Répartition typologique
| Type | Nb | % |
|------|----|----|
| T1/T2 | 6 | 55 % |
| T3 | 1 | 9 % |
| T4/T5 | 4 | 36 % |
| **Total** | **11** | |

### Parking (R-1, sous Plot A)
- 8 places standard (2,50 m de large)
- 1 place PMR (3,50 m de large) — "5-pmr"
- 7 m² aire deux-roues motorisés
- Rampe d'accès : 18 % de pente
- Habillage rampe : pergola bois + plantes grimpantes
- Allée de manœuvre : 5,00 m

### Stationnement vélos
- Local couvert : 14 m² (remise existante, accès direct)
- 2 aires extérieures : 4 m² chacune (le long du cheminement piéton)
- Local O.M. adjacent : 9 m²
- Total vélos : **22 m²** (norme requise : 16,5 m²) ✓

### Plantations & paysage
- 5 arbres remarquables conservés (boulevard)
- 2 arbres abattus (nécessaires à la construction)
- 4 nouvelles plantations : 2 Aubépines à deux styles + 2 Bourdaines
- Zone verte protégée fond de parcelle : ~76 m²
- Clôtures jardins privatifs : grillage rigide RAL vert 6005, h. 1 m + haies
- Clôture rue : barreaudage ajouré motif végétal, h. 2 m, bahut 0,80 m
- Cheminements : béton désactivé beige
- Éclairage paysager : appliques murales + spots encastrés + spots au sol

### Informations juridiques & urbanisme
- Référence cadastrale : **000 CR 5**
- Surface cadastrale : **811 m²** / surface mesurée : **818 m²**
- Zone PLU : **UA** (urbaine mixte, centre ancien Nanterre)
- EPT : **Paris Ouest La Défense du Grand Paris**
- Permis de construire déposé : **12.05.2022** — Indice A
- Maître d'ouvrage : **SCCV Nanterre 22**, 22 rue Boissy d'Anglais, 75008 Paris
- Architecte (selon PDFs) : **Valerio Ciotola**, via Martucci 56, 80121 Naples

---

*Dernière mise à jour : Mars 2026*
