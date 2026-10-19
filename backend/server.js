const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// CORS support
const rawAllowedOrigin = process.env.FRONTEND_URL || '*';
const allowedOrigin = rawAllowedOrigin === '*' ? '*' : rawAllowedOrigin.replace(/\/$/, '');
app.use((req, res, next) => {
  const requestOrigin = req.headers.origin;
  if (allowedOrigin === '*' || !requestOrigin) {
    res.header('Access-Control-Allow-Origin', '*');
  } else {
    const normalizedRequestOrigin = requestOrigin.replace(/\/$/, '');
    if (normalizedRequestOrigin === allowedOrigin) {
      res.header('Access-Control-Allow-Origin', requestOrigin);
    } else {
      res.header('Access-Control-Allow-Origin', allowedOrigin);
    }
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const mailRecipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === 'true';

let transporter = null;
if (smtpHost && smtpUser && smtpPass && mailRecipient) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
} else {
  console.warn('WARNING: Missing SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL in your .env file.');
}

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message.' });
  }

  if (!transporter) {
    console.log(`[Contact Form - Mock Received] From: ${name} (${email}) - Message: ${message}`);
    return res.json({ message: 'Asante! Ujumbe wako umepokelewa (Message sent successfully).' });
  }

  const mailOptions = {
    from: smtpUser,
    replyTo: `${name} <${email}>`,
    to: mailRecipient,
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ message: 'Ujumbe wako umetumwa kikamilifu! (Your message has been sent successfully.)' });
  } catch (error) {
    console.error('Error sending email:', error);
    const debug = process.env.DEBUG === 'true' || process.env.NODE_ENV !== 'production';
    const resp = { message: 'Unable to send email right now. Please try via WhatsApp or email directly.' };
    if (debug) {
      resp.error = error && (error.message || String(error));
    }
    return res.status(500).json(resp);
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Aziry Tech Portfolio & AI Sales Showcase', uptime: process.uptime() });
});

// Fallback to index.html for frontend
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Aziry Tech Portfolio server running on http://localhost:${PORT}`);
});
