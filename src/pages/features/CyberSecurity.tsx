import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cyber Security Features
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Protect Your Business from Digital Threats</h2>
              <p className="text-gray-600 leading-relaxed">
                In today's interconnected world, cyber threats are constantly evolving. Protecting your business-critical data and systems from malicious attacks is paramount. Our comprehensive cyber security features and services provide robust protection against a wide range of digital threats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Cyber Security Features and Services</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of cyber security solutions to safeguard your business:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Threat Detection and Prevention:** Proactive monitoring and advanced technologies to detect and prevent cyber attacks.
                </li>
                <li>
                  **Vulnerability Assessment and Penetration Testing:** Identify and address security weaknesses in your systems.
                </li>
                <li>
                  **Endpoint Security:** Protect your devices and endpoints from malware and other threats.
                </li>
                <li>
                  **Network Security:** Secure your network infrastructure from unauthorized access.
                </li>
                <li>
                  **Data Encryption and Security:** Encrypt sensitive data and implement robust access controls.
                </li>
                <li>
                  **Security Information and Event Management (SIEM):** Centralized logging and analysis of security events.
                </li>
                <li>
                  **Incident Response and Disaster Recovery:** Plan and prepare for responding to security incidents and recovering from data loss.
                </li>
                <li>
                  **Security Awareness Training:** Educate your employees on best practices for cyber security.
                </li>
                {/* You can add more specific features here based on your offerings */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Robust Cyber Security</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Protection of sensitive data and intellectual property.
                </li>
                <li>
                  Prevention of business disruption and financial losses.
                </li>
                <li>
                  Compliance with industry regulations and data privacy laws.
                </li>
                <li>
                  Maintenance of customer trust and brand reputation.
                </li>
                <li>
                  Reduced risk of cyber attacks.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to strengthen your cyber defense? Contact us today for a free consultation and learn how our cyber security features and services can protect your business from digital threats.
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

export default CyberSecurity;
