# Grille d'Accession — GDP Nanterre (92000)
## 68 rue du Couchant — 9 logements

> Source : `Grille accession Nanterre.xlsx` (fourni par le client)
> TVA applicable : **5,5 %** (accession sociale aidée)
> Date de livraison : non renseignée dans le fichier

---

## Tableau des prix par lot

| Lot | Étage | Type | SHAB | Annexes | Surface pondérée | Prix TTC | Prix/m² pond. | Parking | Place(s) |
|-----|-------|------|------|---------|-------------------|----------|----------------|---------|----------|
| A1 | RDC | T4 | 76,00 m² | Jardin 48 m² | 84,00 m² | **570 000 €** | 6 786 €/m² | 50 000 € | 1 & 2 |
| A2 | RDC | T2 | 51,50 m² | Jardin 46 m² | 59,50 m² | **395 000 €** | 6 639 €/m² | — | — |
| A3 | RDC | T3 duplex | 60,00 m² | Jardin 56 m² | 68,00 m² | **476 000 €** | 7 000 €/m² | 30 000 € | 5 |
| A4 | R+1 | T4 | 77,50 m² | — | 77,50 m² | **479 000 €** | 6 181 €/m² | 50 000 € | 3 & 4 |
| A5 | R+1 | T2 | 46,50 m² | Balcon 10 m² | 51,50 m² | **348 000 €** | 6 757 €/m² | — | — |
| A6 | R+2 | T3 | 54,00 m² | Balcon 26 m² | 62,00 m² | **410 000 €** | 6 613 €/m² | 25 000 € | 6 |
| A7 | R+2 | T1 bis | 39,00 m² | Balcon 56 m² | 47,00 m² | **329 000 €** | 7 000 €/m² | 25 000 € | 7 |
| A8 | R+3 | T3 | 51,50 m² | — | 51,50 m² | **336 000 €** | 6 525 €/m² | 25 000 € | 8 |
| A9 | R+3 | T1 bis | 36,50 m² | — | 36,50 m² | **249 000 €** | 6 822 €/m² | — | — |

---

## Récapitulatif

| | Valeur |
|---|---|
| Nombre de lots | 9 |
| SHAB totale | 492,50 m² |
| Surface pondérée totale | 537,50 m² |
| **Total lots (TTC)** | **3 592 000 €** |
| **Total parkings (TTC)** | **205 000 €** |
| **Total général** | **3 797 000 €** |

---

## Parking sous-sol — Attribution par lot

| Place | Lot | Prix TTC |
|-------|-----|----------|
| 1 | A1 | inclus dans 50 000 € (2 places) |
| 2 | A1 | inclus dans 50 000 € (2 places) |
| 3 | A4 | inclus dans 50 000 € (2 places) |
| 4 | A4 | inclus dans 50 000 € (2 places) |
| 5 | A3 | 30 000 € |
| 6 | A6 | 25 000 € |
| 7 | A7 | 25 000 € |
| 8 | A8 | 25 000 € |

> **Note :** 8 places de parking au total. A2, A5 et A9 n'ont pas de parking assigné.
> Les parkings pour A1 et A4 (2 places chacun) sont vendus ensemble au prix de 50 000 € TTC le lot.

---

## Fourchette de prix par type

| Type | Lots concernés | Prix min TTC | Prix max TTC |
|------|----------------|-------------|-------------|
| T1 bis | A7, A9 | 249 000 € | 329 000 € |
| T2 | A2, A5 | 348 000 € | 395 000 € |
| T3 | A3 (duplex), A6, A8 | 336 000 € | 476 000 € |
| T4 | A1, A4 | 479 000 € | 570 000 € |

---

## Notes importantes

### ⚠️ Discordance avec les plans architecte (Haour Architecture, jan/fév 2026)

Le fichier Excel liste **9 lots (A1–A9)** sans maison, tandis que les plans architecte identifient **8 lots (A1–A8) + 1 maison T15 (312,91 m²)**.

Écarts constatés :

| Lot | Excel | Plans architecte |
|-----|-------|-----------------|
| A5 | T2 — 46,5 m² | T1 — 29,33 m² |
| A6 | T3 — 54 m² | T4 — 93,11 m² |
| A7 | T1 bis — 39 m² | T3 — 53,92 m² |
| A8 | T3 — 51,5 m² | T1b — 32,59 m² |
| A9 | T1 bis — 36,5 m² | *n'existe pas dans les plans* |
| T15 | *absent de l'Excel* | Maison — 312,91 m² |

**Conclusion :** La grille d'accession semble correspondre à une version antérieure du programme (avant les plans de janvier/février 2026). **Demander au client quelle version fait foi** avant d'afficher les prix en ligne.

### TVA 5,5 %

Les prix TTC à 5,5 % indiquent que le programme est en **accession sociale aidée** (zone ANRU ou dispositif similaire). Cela implique des conditions de ressources pour les acquéreurs. Ces conditions ne sont pas détaillées dans le fichier — les demander au client (plafonds revenus, apport min, PTZ éligible).

### Prix au m² pondéré

La fourchette de prix au m² pondéré s'étale de **6 181 €/m²** (A4 — T4 sans annexes) à **7 000 €/m²** (A3 duplex et A7 — lots avec grandes annexes). Cela reste cohérent pour du neuf en accession sociale à Nanterre (zone B1).

---

## Intégration dans le site web

Les données de cette grille ont été intégrées aux endroits suivants :

| Élément | Composant | Statut |
|---------|-----------|--------|
| Prix TTC par lot dans le tableau | `ProgramOverview.astro` | ✅ Intégré |
| Surfaces SHAB (selon Excel) | `ProgramOverview.astro` | ✅ Intégré |
| Attribution parking par lot | `ProgramOverview.astro` | ✅ Intégré |
| Prix indicatifs simulateur crédit | `CreditSimulator.astro` | ✅ Mis à jour |
| Lot A9 (absent des plans) | `ProgramOverview.astro` | ⚠️ Affiché avec note |
| Maison T15 | `ProgramOverview.astro` | ⚠️ Hors grille — prix sur demande |

---

*Source : Grille accession Nanterre.xlsx — Mars 2026*
