import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CloudSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cloud Solutions
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Transform Your Business with the Cloud</h2>
              <p className="text-gray-600 leading-relaxed">
                The cloud offers businesses unparalleled flexibility, scalability, and cost savings. Our comprehensive cloud solutions help you leverage the power of the cloud to innovate, grow, and stay ahead of the competition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Cloud Solutions and Features</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of cloud services and features to meet your specific needs:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Cloud Migration:** Seamlessly migrate your existing applications and data to the cloud.
                </li>
                <li>
                  **Cloud Infrastructure Design and Management:** Design, implement, and manage scalable and reliable cloud infrastructure.
                </li>
                <li>
                  **Cloud Security:** Implement robust security measures to protect your data and applications in the cloud.
                </li>
                <li>
                  **Cloud Cost Optimization:** Optimize your cloud spending and reduce operational costs.
                </li>
                <li>
                  **Managed Cloud Services:** Offload the burden of managing your cloud environment to our experts.
                </li>
                <li>
                  **Cloud-Native Development:** Develop and deploy cloud-native applications for maximum agility and scalability.
                </li>
                {/* You can add more specific features here based on your offerings, e.g., specific cloud platforms like AWS, Azure, Google Cloud, etc. */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Cloud Solutions</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Increased flexibility and scalability.
                </li>
                <li>
                  Reduced IT infrastructure costs.
                </li>
                <li>
                  Improved business agility and innovation.
                </li>
                <li>
                  Enhanced data security and disaster recovery.
                </li>
                <li>
                  Greater accessibility and collaboration.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to move to the cloud or optimize your existing cloud environment? Contact us today for a free consultation and learn how our cloud solutions can help you achieve your business goals.
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

export default CloudSolutions;
