# Variables d'environnement — Cœur Nanterre

Ce document liste **toutes les variables d'environnement** requises pour le bon fonctionnement du site en production (Vercel).

---

## 🔴 Requises (sans elles, les formulaires retournent une erreur 500)

| Variable | Description | Où l'obtenir |
|---|---|---|
| `RECAPTCHA_SECRET` | Clé secrète reCAPTCHA v3 (serveur) | [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin) |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails | [Resend Dashboard](https://resend.com/api-keys) |

---

## 🟡 Optionnelles (valeurs par défaut en place)

| Variable | Description | Défaut |
|---|---|---|
| `RESEND_FROM_ADDRESS` | Adresse d'expédition des emails | `sebastien@neowimmo.com` |
| `LEAD_TO` | Adresse destinataire des leads | `sebastien@neowimmo.com` |
| `LEAD_BCC` | Adresse en copie cachée (BCC) | *(aucune)* |

---

## ⚠️ À noter — Clé reCAPTCHA côté client

La **clé site** reCAPTCHA (publique) est actuellement **en dur** dans le code source :

```
6LdbYfcsAAAAALNgEbbq-RkkmPBT15ITV8V2KSUT
```

Elle apparaît dans :
- `src/components/sections/BrochureCta.astro`
- `src/components/sections/CreditSimulator.astro`

> **Recommandation** : si vous devez changer de clé un jour, pensez à la remplacer dans les deux fichiers.

---

## 📋 Comment ajouter sur Vercel

1. Allez sur [vercel.com](https://vercel.com) → sélectionnez le projet `nanterre`
2. Cliquez sur **Settings** → **Environment Variables**
3. Ajoutez chaque variable une par une :
   - **Name** : le nom de la variable (ex: `RECAPTCHA_SECRET`)
   - **Value** : la valeur secrète
   - **Environment** : cochez au minimum **Production** (et `Preview` / `Development` si besoin)
4. Cliquez sur **Save**
5. **Redéployez** le projet : *Deployments* → les trois points `...` sur le dernier déploiement → **Redeploy**

> ⚠️ **Important** : Vercel n'injecte pas les nouvelles variables dans un déploiement existant. Un redeploy est obligatoire.

---

## 🧪 Vérifier après déploiement

1. Ouvrez le site en production
2. Remplissez le formulaire "Télécharger la plaquette"
3. Ouvrez la console navigateur (F12)
4. Si vous voyez toujours `Configuration serveur manquante` → la variable `RECAPTCHA_SECRET` est encore absente
5. Si vous voyez `Configuration Resend manquante` → la variable `RESEND_API_KEY` est encore absente

---

## 📁 Fichiers concernés côté code

- `src/pages/api/lead.ts` — endpoint du formulaire plaquette
- `src/pages/api/simulate.ts` — endpoint du simulateur de crédit
