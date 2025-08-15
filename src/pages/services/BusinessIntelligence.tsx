import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const BusinessIntelligence = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Business Intelligence Services
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Gain Actionable Insights from Your Data</h2>
              <p className="text-gray-600 leading-relaxed">
                In today's competitive landscape, the ability to extract meaningful insights from your data is crucial for making informed decisions and driving business growth. Our Business Intelligence (BI) services empower you to transform raw data into actionable intelligence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Business Intelligence Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of BI services to help you unlock the value of your data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **BI Strategy and Consulting:** Develop a BI strategy aligned with your business goals.
                </li>
                <li>
                  **Data Warehousing:** Design and implement data warehouses for centralized data storage and analysis.
                </li>
                <li>
                  **ETL Development:** Extract, Transform, and Load data from various sources into your data warehouse.
                </li>
                <li>
                  **Data Visualization and Reporting:** Create interactive dashboards and reports to visualize key metrics.
                </li>
                <li>
                  **Advanced Analytics:** Utilize advanced analytical techniques to uncover hidden patterns and trends.
                </li>
                <li>
                  **BI Platform Implementation:** Implement and configure leading BI platforms.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Business Intelligence</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Improved decision-making through data-driven insights.
                </li>
                <li>
                  Enhanced operational efficiency and performance.
                </li>
                <li>
                  Increased profitability and revenue.
                </li>
                <li>
                  Better understanding of customer behavior and market trends.
                </li>
                <li>
                  Competitive advantage through informed strategies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to leverage the power of Business Intelligence? Contact us today for a free consultation and learn how our BI services can help you make smarter decisions and drive business success.
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

export default BusinessIntelligence;
