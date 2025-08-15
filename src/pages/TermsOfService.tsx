import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all terms incorporated herein by reference. If you do not agree to these terms, you may not access or use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or revise these Terms of Service at any time. By continuing to access or use our website and services after any changes to these terms, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Use of Our Website and Services</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to use our website and services for lawful purposes only and in accordance with these Terms of Service. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Violate any applicable laws or regulations.
                </li>
                <li>
                  Infringe upon the rights of others.
                </li>
                <li>
                  Transmit any harmful or malicious code.
                </li>
                <li>
                  Interfere with the operation of our website or services.
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on our website and services, including text, graphics, logos, images, and software, is the property of our company or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website and services are provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. We do not warrant that our website or services will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall our company be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Email: info@aromait.com</p> {/* Replace with your actual legal contact email */}
                {/* Add other contact information if available */}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
