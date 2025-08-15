import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CustomDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Custom Development Features
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Tailored Software Solutions for Your Unique Needs</h2>
              <p className="text-gray-600 leading-relaxed">
                Off-the-shelf software doesn't always fit the unique requirements of your business. Our custom development services provide you with tailored software solutions designed and built specifically to address your challenges and help you achieve your business objectives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Custom Development Approach and Features</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a comprehensive approach to custom development, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Consultation and Requirements Gathering:** We work closely with you to understand your business needs and define clear requirements.
                </li>
                <li>
                  **Custom Software Design:** Our experienced developers design software solutions tailored to your specifications.
                </li>
                <li>
                  **Agile Development:** We use agile methodologies to ensure flexibility and deliver value incrementally.
                </li>
                <li>
                  **Full Software Development Life Cycle (SDLC):** We cover all phases of the SDLC, from planning and design to development, testing, deployment, and maintenance.
                </li>
                <li>
                  **Technology Expertise:** We leverage a wide range of technologies and frameworks to build robust and scalable solutions.
                {/* You can add more specific features here based on your offerings, e.g., specific technologies, platforms, etc. */}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Custom Development</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Software tailored to your exact business needs.
                </li>
                <li>
                  Increased efficiency and productivity.
                </li>
                <li>
                  Competitive advantage through unique software capabilities.
                </li>
                <li>
                  Scalable and flexible solutions that grow with your business.
                </li>
                <li>
                  Improved data security and control.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to build a custom software solution that drives your business forward? Contact us today for a free consultation and learn how our custom development services can help you achieve your goals.
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

export default CustomDevelopment;
