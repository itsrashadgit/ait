import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('http://localhost:5000/api/send-email', form);
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send Message
      </button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;
