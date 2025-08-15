import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const SystemIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            System Integration Services
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Seamlessly Connect Your Business Systems</h2>
              <p className="text-gray-600 leading-relaxed">
                In today's complex business environment, organizations rely on a variety of disparate systems and applications. System integration is the key to connecting these systems, streamlining processes, and improving overall efficiency. Our system integration services help you achieve a unified and harmonious IT landscape.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our System Integration Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of system integration services to meet your specific needs:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Enterprise Application Integration (EAI):** Integrate diverse applications across your organization.
                </li>
                <li>
                  **Data Integration:** Consolidate data from different sources for a unified view.
                </li>
                <li>
                  **API Integration:** Connect your systems and applications through robust APIs.
                </li>
                <li>
                  **Cloud Integration:** Integrate your on-premises systems with cloud-based applications and services.
                </li>
                <li>
                  **Legacy System Integration:** Integrate older, legacy systems with modern applications.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of System Integration</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Improved operational efficiency and streamlined workflows.
                </li>
                <li>
                  Enhanced data accessibility and accuracy.
                </li>
                <li>
                  Increased business agility and flexibility.
                </li>
                <li>
                  Reduced IT complexity and costs.
                </li>
                <li>
                  Better collaboration and communication across departments.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to integrate your systems and transform your business? Contact us today for a free consultation and learn how our system integration services can help you achieve a seamless and efficient IT environment.
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

export default SystemIntegration;
