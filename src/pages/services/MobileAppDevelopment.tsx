import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mobile App Development Services
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Reach Your Audience on the Go with Custom Mobile Apps</h2>
              <p className="text-gray-600 leading-relaxed">
                In today's mobile-first world, having a strong mobile presence is essential for connecting with your audience and delivering seamless user experiences. Our mobile app development services create custom, high-performing mobile applications for iOS and Android that meet your specific business needs and engage your users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mobile App Development Solutions and Features</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a comprehensive range of mobile app development services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Custom Mobile App Development:** Build unique mobile apps tailored to your business requirements.
                </li>
                <li>
                  **iOS App Development:** Develop native applications for the Apple ecosystem.
                </li>
                <li>
                  **Android App Development:** Develop native applications for the Android platform.
                </li>
                <li>
                  **Cross-Platform Development:** Build apps that work seamlessly on both iOS and Android using frameworks like React Native or Flutter.
                </li>
                <li>
                  **UI/UX Design for Mobile:** Create intuitive and engaging user interfaces and experiences.
                </li>
                <li>
                  **Mobile Backend Development:** Develop robust and scalable backend infrastructure for your mobile apps.
                </li>
                <li>
                  **Mobile App Maintenance and Support:** Ensure your app is always up-to-date and performing optimally.
                </li>
                {/* You can add more specific features here based on your offerings, e.g., specific technologies, industries served, etc. */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Professional Mobile App Development</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Increased customer engagement and loyalty.
                </li>
                <li>
                  Enhanced brand visibility and recognition.
                </li>
                <li>
                  Improved business efficiency and productivity.
                </li>
                <li>
                  New revenue streams and business opportunities.
                </li>
                <li>
                  Competitive advantage in the mobile market.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to launch your mobile app? Contact us today for a free consultation and learn how our mobile app development services can help you succeed in the mobile market.
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

export default MobileAppDevelopment;
