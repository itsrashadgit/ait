import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Digital Marketing Services
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Elevate Your Online Presence</h2>
              <p className="text-gray-600 leading-relaxed">
                In today's digital landscape, a strong online presence is crucial for business success. Our comprehensive digital marketing services are designed to help you reach your target audience, increase brand visibility, drive traffic to your website, and generate leads and sales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Digital Marketing Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of digital marketing services tailored to your specific business needs and goals:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Search Engine Optimization (SEO):** Improve your website's ranking in search engine results to attract organic traffic.
                </li>
                <li>
                  **Pay-Per-Click (PPC) Advertising:** Run targeted advertising campaigns on search engines and social media platforms.
                </li>
                <li>
                  **Social Media Marketing:** Build a strong social media presence and engage with your audience.
                </li>
                <li>
                  **Content Marketing:** Create valuable and engaging content to attract and retain customers.
                </li>
                <li>
                  **Email Marketing:** Nurture leads and build customer relationships through effective email campaigns.
                </li>
                <li>
                  **Analytics and Reporting:** Track your digital marketing performance and gain insights for optimization.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Experienced Team:** Our team of digital marketing experts has a proven track record of delivering results.
                </li>
                <li>
                  **Data-Driven Approach:** We use data and analytics to inform our strategies and optimize campaigns for maximum ROI.
                </li>
                <li>
                  **Customized Solutions:** We tailor our services to your unique business needs and target audience.
                </li>
                <li>
                  **Transparent Reporting:** We provide regular reports on your digital marketing performance and are always available to answer your questions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to take your online presence to the next level? Contact us today for a free consultation and learn how our digital marketing services can help you achieve your business goals.
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

export default DigitalMarketing;
