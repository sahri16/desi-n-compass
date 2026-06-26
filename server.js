import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS must be configured.');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, date, guests, msg } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  if (!CONTACT_RECIPIENT) {
    return res.status(500).json({
      success: false,
      message: 'Server is not configured with a contact recipient email.',
    });
  }

  try {
    const transporter = getTransporter();

    const html = `
      <h2>New reservation request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Preferred Date:</strong> ${date || 'Not provided'}</p>
      <p><strong>Guests:</strong> ${guests || 'Not provided'}</p>
      <p><strong>Message:</strong><br/>${msg ? msg.replace(/\n/g, '<br/>') : 'No message'}</p>
    `;

    await transporter.sendMail({
      from: `${process.env.SMTP_FROM || process.env.SMTP_USER}`,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Reservation request from ${name}`,
      html,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully. We will contact you soon.',
    });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send email right now. Please try again later.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
