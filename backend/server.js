const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rawAllowedOrigin = process.env.FRONTEND_URL || '*';
const allowedOrigin = rawAllowedOrigin === '*' ? '*' : rawAllowedOrigin.replace(/\/$/, '');
app.use((req, res, next) => {
  const requestOrigin = req.headers.origin;
  if (allowedOrigin === '*' || !requestOrigin) {
    res.header('Access-Control-Allow-Origin', allowedOrigin);
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

if (!smtpHost || !smtpUser || !smtpPass || !mailRecipient) {
  console.warn('WARNING: Missing SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL in your .env file.');
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message.' });
  }

  if (!smtpHost || !smtpUser || !smtpPass || !mailRecipient) {
    return res.status(500).json({ message: 'Email service is not configured. Please check backend settings.' });
  }

  const mailOptions = {
    from: `${name} <${email}>`,
    to: mailRecipient,
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    // If DEBUG=true or not in production, return the underlying error message to help debugging
    const debug = process.env.DEBUG === 'true' || process.env.NODE_ENV !== 'production';
    const resp = { message: 'Unable to send email. Please try again later.' };
    if (debug) {
      resp.error = error && (error.message || String(error));
      resp.stack = error && error.stack;
    }
    return res.status(500).json(resp);
  }
});

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Azizi Portfolio Backend',
    message: 'Backend is running successfully on Render',
    time: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
