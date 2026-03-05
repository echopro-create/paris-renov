import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, type, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await resend.emails.send({
            from: 'D.A. BAT <noreply@da-bat.com>',
            to: 'tchoudinov@hotmail.fr',
            replyTo: email,
            subject: `Nouveau devis - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #B8860B; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">
            Nouvelle demande de devis
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px; font-weight: bold; width: 140px;">Nom :</td>
              <td style="padding: 12px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Email :</td>
              <td style="padding: 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px; font-weight: bold;">Téléphone :</td>
              <td style="padding: 12px;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Type de projet :</td>
              <td style="padding: 12px;">${type || 'Non spécifié'}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 12px; font-weight: bold; vertical-align: top;">Message :</td>
              <td style="padding: 12px;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Envoyé depuis da-bat.com le ${new Date().toLocaleDateString('fr-FR', {
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            })}
          </p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
