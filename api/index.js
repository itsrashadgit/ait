import express from 'express';
import nodemailer from 'nodemailer';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('MySQL Connection Error:', err);
    process.exit(1);
  } else {
    console.log('✅ MySQL connected.');
  }
});

// Contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Store in DB
  const query = 'INSERT INTO ait_contact (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, company, message], async (err) => {
    if (err) {
      console.error('❌ DB Insert Error:', err);
      return res.status(500).json({ success: false, message: 'DB error' });
    }

    // 2. Send Email
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
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

      await transporter.sendMail(mailOptions);
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
  pool.getConnection()
    .then(connection => {
      console.log('Database connected successfully!');
      connection.release(); // Release the connection back to the pool
    })
    .catch(error => {
      console.error('Error connecting to database:', error);
    });
});