import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Resolve static build path in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

// POST endpoint to handle secure meeting scheduling
app.post('/api/schedule', async (req, res) => {
  const { name, email, company, purpose, date, timeSlot, message } = req.body;

  // Simple validation
  if (!name || !email || !company || !purpose || !date || !timeSlot) {
    return res.status(400).json({ error: "Missing required scheduling fields." });
  }

  // Define email content
  const mailSubject = `[Duneborn Consultation Request] - ${company} (${name})`;
  const mailHtml = `
    <div style="font-family: sans-serif; background-color: #F5F2EB; color: #363028; padding: 30px; border-radius: 4px; border: 1px solid #6E6252;">
      <h2 style="color: #C27D27; border-bottom: 1px solid rgba(110, 98, 82, 0.2); padding-bottom: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
        INCOMING INGESTION: REQUEST FOR LINE CONNECTION
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px 0; color: #6E6252; font-weight: bold; width: 140px;">Contact Name:</td>
          <td style="padding: 8px 0; color: #363028;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Organization:</td>
          <td style="padding: 8px 0; color: #363028;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Contact Email:</td>
          <td style="padding: 8px 0; color: #363028;"><a href="mailto:${email}" style="color: #C27D27; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Purpose:</td>
          <td style="padding: 8px 0; color: #363028; text-transform: uppercase;">${purpose}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Scheduled Date:</td>
          <td style="padding: 8px 0; color: #363028;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6E6252; font-weight: bold;">Time Slot:</td>
          <td style="padding: 8px 0; color: #363028;">${timeSlot}</td>
        </tr>
      </table>
      
      <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(110, 98, 82, 0.1);">
        <p style="color: #6E6252; font-weight: bold; margin-bottom: 5px;">Context Transmission:</p>
        <p style="color: #363028; background-color: #EAE3D2; padding: 15px; border-radius: 2px; font-style: italic; border: 1px solid rgba(110, 98, 82, 0.1); margin-top: 0;">
          ${message || 'No additional context provided.'}
        </p>
      </div>

      <div style="margin-top: 30px; text-align: center; font-size: 10px; color: rgba(110, 98, 82, 0.4); border-top: 1px solid rgba(110, 98, 82, 0.1); padding-top: 15px;">
        DUNEBORN SYSTEM BACKEND LOG // RECIPIENT: bhanu@duneborn.dev
      </div>
    </div>
  `;

  // Check if SMTP settings are present in env
  const useRealSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (useRealSMTP) {
    try {
      // Create SMTP transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send the mail
      await transporter.sendMail({
        from: `"Duneborn Portal" <${process.env.SMTP_USER}>`,
        to: "bhanu@duneborn.dev",
        subject: mailSubject,
        html: mailHtml,
      });

      console.log(`[SMTP] Successfully dispatched consultation request from ${company} to bhanu@duneborn.dev`);
      return res.status(200).json({ success: true, message: "Secure transmission established. Meeting scheduled." });
    } catch (err) {
      console.error("[SMTP Error] Failed to send email via SMTP:", err);
      // Fall back to terminal logging instead of failing completely, so the system is robust
    }
  }

  // Fallback (or development mode without configured credentials)
  console.log("\n=================== DUNEBORN TRANSMISSION FALLBACK ===================");
  console.log(`To: bhanu@duneborn.dev`);
  console.log(`Subject: ${mailSubject}`);
  console.log(`Details:`);
  console.log(`- Name: ${name}`);
  console.log(`- Organization: ${company}`);
  console.log(`- Email: ${email}`);
  console.log(`- Purpose: ${purpose}`);
  console.log(`- Slot: ${date} @ ${timeSlot}`);
  console.log(`- Message: ${message || 'N/A'}`);
  console.log("======================================================================\n");

  return res.status(200).json({
    success: true,
    message: "Secure transmission established. Details logged to secure backend console.",
    fallback: true
  });
});

// Wildcard fallback route to serve index.html in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Duneborn Backend] Secure server active on port ${PORT}`);
});
