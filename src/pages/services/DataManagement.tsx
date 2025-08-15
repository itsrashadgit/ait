import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const DataManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Data Management Services
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Unlock the Power of Your Data</h2>
              <p className="text-gray-600 leading-relaxed">
                In today's data-driven world, effective data management is essential for businesses to make informed decisions, improve efficiency, and gain a competitive edge. Our comprehensive data management services help you collect, store, organize, protect, and utilize your data effectively.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Data Management Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of data management services tailored to your specific business needs:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Database Design and Development:** Design and implement robust and scalable databases.
                </li>
                <li>
                  **Data Integration:** Consolidate data from various sources into a unified view.
                </li>
                <li>
                  **Data Warehousing and Business Intelligence:** Build data warehouses and implement BI solutions for reporting and analysis.
                </li>
                <li>
                  **Data Governance and Quality:** Establish policies and procedures to ensure data accuracy, consistency, and security.
                </li>
                <li>
                  **Data Security and Privacy:** Implement measures to protect your data from unauthorized access and comply with privacy regulations.
                </li>
                <li>
                  **Cloud Data Management:** Manage your data effectively in cloud environments.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Effective Data Management</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Improved data accuracy and reliability.
                </li>
                <li>
                  Enhanced decision-making based on trustworthy data.
                </li>
                <li>
                  Increased operational efficiency.
                </li>
                <li>
                  Better compliance with data regulations.
                </li>
                <li>
                  Reduced data-related risks.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to take control of your data? Contact us today for a free consultation and learn how our data management services can help you leverage your data for business growth.
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

export default DataManagement;
