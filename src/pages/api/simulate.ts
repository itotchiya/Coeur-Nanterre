import type { APIRoute } from "astro";

export const prerender = false;

interface SimulatorPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  region?: string;
  city?: string;
  job?: string;
  salary?: string;
  existingCredit?: string;
  existingMonthly?: number;
  propertyType?: string;
  amount?: number;
  duration?: number;
  rate?: number;
  monthlyPayment?: number;
  recaptchaToken?: string;
}

function esc(str: string | number | undefined | null): string {
  if (str == null) return "—";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: SimulatorPayload;

  try {
    payload = await request.json();
  } catch {
    return json({ error: "Corps de requête invalide" }, 400);
  }

  const { recaptchaToken, firstName, lastName, email, phone, amount, duration, rate, monthlyPayment } = payload;

  // Basic required field check
  if (!firstName || !lastName || !email || !phone || !recaptchaToken) {
    return json({ error: "Champs obligatoires manquants" }, 400);
  }

  // Verify reCAPTCHA
  const secret = import.meta.env.RECAPTCHA_SECRET;
  if (!secret) return json({ error: "Configuration serveur manquante" }, 500);

  try {
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(recaptchaToken)}`,
    });
    const verifyData = (await verifyRes.json()) as { success: boolean; score?: number };
    if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
      return json({ error: "Vérification reCAPTCHA échouée" }, 400);
    }
  } catch {
    return json({ error: "Impossible de vérifier le reCAPTCHA" }, 502);
  }

  // Send email via Resend API
  const resendKey = import.meta.env.RESEND_API_KEY;
  const resendFrom = import.meta.env.RESEND_FROM_ADDRESS ?? "sebastien@neowimmo.com";
  const leadTo = import.meta.env.LEAD_TO ?? "sebastien@neowimmo.com";
  const leadBcc = import.meta.env.LEAD_BCC;

  if (!resendKey) {
    return json({ error: "Configuration Resend manquante" }, 500);
  }

  const salaryLabels: Record<string, string> = {
    low: "< 2 000 €",
    med: "2 000 - 4 000 €",
    high: "4 000 - 6 000 €",
    vhigh: "+ 6 000 €",
  };

  const propertyLabels: Record<string, string> = {
    t1bis: "T1 bis",
    t2: "T2",
    t3: "T3",
    t3duplex: "T3 duplex",
    t4: "T4",
  };

  const regionLabels: Record<string, string> = {
    idf: "Île-de-France",
    auvergne: "Auvergne-Rhône-Alpes",
    bourgogne: "Bourgogne-Franche-Comté",
    bretagne: "Bretagne",
    centre: "Centre-Val de Loire",
    corse: "Corse",
    "grand-est": "Grand Est",
    "hauts-de-france": "Hauts-de-France",
    normandie: "Normandie",
    "nouvelle-aquitaine": "Nouvelle-Aquitaine",
    occitanie: "Occitanie",
    "pays-de-la-loire": "Pays de la Loire",
    provence: "Provence-Alpes-Côte d'Azur",
  };

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Nouvelle simulation — Cœur Nanterre</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
  <h2 style="color:#282e69;border-bottom:2px solid #eb585b;padding-bottom:8px">
    Nouvelle simulation de crédit — Cœur Nanterre
  </h2>
  <p style="color:#666;font-size:14px">Soumis le <strong>${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</strong></p>

  <h3 style="margin-top:24px;color:#282e69">Identité</h3>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px;border-bottom:1px solid #eee;width:40%;color:#666">Nom</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(lastName)}</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Prénom</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(firstName)}</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
  </table>

  <h3 style="margin-top:24px;color:#282e69">Profil</h3>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px;border-bottom:1px solid #eee;width:40%;color:#666">Région</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(regionLabels[payload.region ?? ""] ?? payload.region)}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Ville</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(payload.city)}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Situation professionnelle</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(payload.job)}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Revenus nets mensuels</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(salaryLabels[payload.salary ?? ""] ?? payload.salary)}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Crédit en cours</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(payload.existingCredit === "yes" ? `Oui (${payload.existingMonthly} €/mois)` : "Non")}</td></tr>
  </table>

  <h3 style="margin-top:24px;color:#282e69">Projet & Simulation</h3>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px;border-bottom:1px solid #eee;width:40%;color:#666">Type de bien</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(propertyLabels[payload.propertyType ?? ""] ?? payload.propertyType)}</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Montant du projet</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(amount?.toLocaleString("fr-FR"))} €</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Durée</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(duration)} ans</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Taux d'intérêt</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(rate)} %</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Mensualité estimée</td><td style="padding:8px;border-bottom:1px solid #eee;font-size:18px;color:#eb585b"><strong>${esc(monthlyPayment?.toLocaleString("fr-FR"))} €</strong></td></tr>
  </table>

  <p style="margin-top:24px;font-size:12px;color:#999">
    Reçu via le simulateur de crédit — Cœur Nanterre
  </p>
</body>
</html>`;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: `Cœur Nanterre <${resendFrom}>`,
        to: leadTo,
        ...(leadBcc ? { bcc: leadBcc } : {}),
        subject: `Nouvelle simulation crédit — ${esc(lastName)} ${esc(firstName)}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errData = await resendRes.json().catch(() => ({}));
      console.error("Resend error:", errData);
      return json({ error: "Erreur d'envoi email" }, 502);
    }
  } catch (err) {
    console.error("Resend error:", err);
    return json({ error: "Erreur d'envoi email" }, 502);
  }

  return json({ success: true });
};
