import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ITConsulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IT Consulting Features
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Strategic IT Guidance for Your Business</h2>
              <p className="text-gray-600 leading-relaxed">
                Navigating the ever-changing landscape of information technology can be challenging. Our IT consulting services provide expert guidance and strategic insights to help your business leverage technology effectively, optimize your IT infrastructure, and achieve your business objectives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our IT Consulting Approach and Services</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of IT consulting services tailored to your specific needs:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **IT Strategy Development:** Develop a comprehensive IT strategy aligned with your business goals.
                </li>
                <li>
                  **IT Infrastructure Assessment:** Evaluate your current IT infrastructure and identify areas for improvement.
                </li>
                <li>
                  **Technology Selection and Implementation:** Recommend and assist with the selection and implementation of the right technologies for your business.
                </li>
                <li>
                  **Cloud Consulting:** Provide guidance on cloud adoption, migration, and management.
                </li>
                <li>
                  **Cybersecurity Consulting:** Assess your security posture and recommend measures to protect your business from cyber threats.
                </li>
                <li>
                  **Digital Transformation Consulting:** Help your business embrace digital technologies to improve efficiency and enhance customer experience.
                </li>
                {/* You can add more specific services here based on your offerings */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of IT Consulting</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Strategic IT planning and guidance.
                </li>
                <li>
                  Optimized IT infrastructure and reduced costs.
                </li>
                <li>
                  Improved business processes and efficiency.
                </li>
                <li>
                  Enhanced cybersecurity posture.
                </li>
                <li>
                  Successful digital transformation initiatives.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to get expert IT guidance for your business? Contact us today for a free consultation and learn how our IT consulting services can help you make informed technology decisions and achieve your business objectives.
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

export default ITConsulting;
