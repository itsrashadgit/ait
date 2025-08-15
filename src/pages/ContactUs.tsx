import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowThankYouPopup(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setSubmissionError(errorData.message || 'An error occurred while sending your message.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionError('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
            Contact Us
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed text-center">
                We'd love to hear from you! Please fill out the form below or use the contact information provided to get in touch with our team.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your Message" rows={6} value={formData.message} onChange={handleInputChange} required />
                    </div>
                    {submissionError && <p className="text-red-500 text-sm">{submissionError}</p>}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">info@aromait.com</span> {/* Replace with your actual email */}
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">+8801717643014</span> {/* Replace with your actual phone number */}
                    </div>
                     <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600">+8801712836388</span> {/* Replace with your actual phone number */}
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <span className="text-gray-600">
                         235/1, West Rampura, Wapda Road<br />
                         Dhaka-1219, Bangladesh.
                      </span>
                    </div>
                    {/* Add social media links if desired */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Thank You Popup */}
      <Dialog open={showThankYouPopup} onOpenChange={setShowThankYouPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              Your message has been sent successfully. We will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactUs;