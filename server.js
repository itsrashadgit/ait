// api/server.js
import express from 'express';
//import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// Load environment variables from .env
//dotenv.config();
dotenv.config({ path: process.env.NODE_ENV === "production" ? ".env" : ".env.local" });

const app = express();

// Use environment variable for port
const port = process.env.PORT || 3000;
// Database connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10, // Adjust as needed
  queueLimit: 0
});

// Middleware
//app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies


// Email sending endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation (you can add more robust validation)
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // 1. Insert into MySQL
  const query = 'INSERT INTO ait_contact (name, email, phone, company, message, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, company, message, created_at, updated_at], async (err, result) => {
    if (err) {
      console.error('MySQL insert error:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }

  // 2. Send Email
  try {
    // Create a transporter object using your email service's SMTP details
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: '📩 New Contact Message',
      html: `
        <div style="font-family:sans-serif;">
          <h2>New Message from Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
      res.status(200).json({ success: true, message: 'Message saved and emailed!' });
    } catch (error) {
      console.error('❌ Email Error:', error);
      res.status(500).json({ success: false, message: 'Email sending failed' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
  console.log('Connecting to database...');
  db.getConnection()
    .then(connection => {
      console.log('Database connected successfully!');
      connection.release(); // Release the connection back to the pool
    })
    .catch(error => {
      console.error('Error connecting to database:', error);
    });
});