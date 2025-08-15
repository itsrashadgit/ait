import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Web Development Services
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Build Your Online Presence with Expert Web Development</h2>
              <p className="text-gray-600 leading-relaxed">
                Your website is often the first point of contact for potential customers. Our web development services create stunning, user-friendly, and high-performing websites that effectively represent your brand, engage your audience, and drive conversions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Web Development Solutions and Features</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a comprehensive range of web development services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Custom Website Development:** Build unique websites tailored to your specific business needs.
                </li>
                <li>
                  **E-commerce Development:** Create online stores with secure payment gateways and intuitive user interfaces.
                </li>
                <li>
                  **CMS Development:** Develop and customize websites using popular Content Management Systems like WordPress, Drupal, and Joomla.
                </li>
                <li>
                  **Front-End Development:** Build engaging and responsive user interfaces using the latest front-end technologies.
                </li>
                <li>
                  **Back-End Development:** Develop robust and scalable server-side applications.
                </li>
                <li>
                  **API Development and Integration:** Build and integrate APIs to connect your website with other applications.
                </li>
                <li>
                  **Website Maintenance and Support:** Ensure your website is always up-to-date, secure, and performing optimally.
                </li>
                {/* You can add more specific features here based on your offerings, e.g., specific frameworks, languages, etc. */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Professional Web Development</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  A professional and engaging online presence.
                </li>
                <li>
                  Improved user experience and customer satisfaction.
                </li>
                <li>
                  Increased brand credibility and trust.
                </li>
                <li>
                  Higher search engine rankings and organic traffic.
                </li>
                <li>
                  Increased leads and conversions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to build a powerful online presence? Contact us today for a free consultation and learn how our web development services can help you achieve your online goals.
              </p>
              <div className="mt-6 text-center">
                <a href="/contact-us" className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
