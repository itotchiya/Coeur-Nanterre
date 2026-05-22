import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

interface LeadPayload {
  civility?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  postalCode?: string;
  address?: string;
  purpose?: string;
  lot?: string;
  recaptchaToken?: string;
}

function esc(str: string | undefined | null): string {
  if (!str) return "—";
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
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return json({ error: "Corps de requête invalide" }, 400);
  }

  const { recaptchaToken, firstName, lastName, email, phone, address } = payload;

  // Basic required field check
  if (!firstName || !lastName || !email || !phone || !address || !recaptchaToken) {
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

  // SMTP configuration
  const smtpHost = import.meta.env.SMTP_HOST;
  const smtpPort = Number(import.meta.env.SMTP_PORT) || 465;
  const smtpUser = import.meta.env.SMTP_USER;
  const smtpPass = import.meta.env.SMTP_PASS;
  const smtpFrom = import.meta.env.SMTP_FROM ?? "service@coeurnanterre.fr";
  const leadTo = import.meta.env.LEAD_TO ?? "contact@coeurnanterre.fr";
  const leadBcc = import.meta.env.LEAD_BCC;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return json({ error: "Configuration SMTP manquante" }, 500);
  }

  const lotLabel = payload.lot ? `Lot ${esc(payload.lot)}` : "Plaquette générale";
  const civLabel = payload.civility === "madame" ? "Mme" : payload.civility === "monsieur" ? "M." : "";
  const purposeLabel = payload.purpose === "investment" ? "Investissement" : payload.purpose === "residence" ? "Résidence principale" : "—";

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Nouvelle demande — ${esc(lotLabel)}</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
  <h2 style="color:#282e69;border-bottom:2px solid #eb585b;padding-bottom:8px">
    Nouvelle demande — Cœur Nanterre
  </h2>
  <p style="color:#666;font-size:14px">Programme : <strong>${esc(lotLabel)}</strong></p>
  <table style="width:100%;border-collapse:collapse;margin-top:16px">
    <tr><td style="padding:8px;border-bottom:1px solid #eee;width:40%;color:#666">Civilité</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(civLabel)}</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Nom</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(lastName)}</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Prénom</td><td style="padding:8px;border-bottom:1px solid #eee"><strong>${esc(firstName)}</strong></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Code postal</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(payload.postalCode)}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Adresse postale</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(address)}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Projet</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(purposeLabel)}</td></tr>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#999">
    Reçu le ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })} — Cœur Nanterre
  </p>
</body>
</html>`;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Cœur Nanterre <${smtpFrom}>`,
      to: leadTo,
      ...(leadBcc ? { bcc: leadBcc } : {}),
      subject: `Nouvelle demande plaquette — ${lotLabel} — ${esc(lastName)} ${esc(firstName)}`,
      html,
    });
  } catch (err) {
    console.error("SMTP error:", err);
    return json({ error: "Erreur d'envoi email" }, 502);
  }

  return json({ success: true });
};
