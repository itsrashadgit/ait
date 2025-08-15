import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const TeamCollaboration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Team Collaboration Features
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Enhance Teamwork and Productivity</h2>
              <p className="text-gray-600 leading-relaxed">
                Effective team collaboration is essential for businesses to succeed in today's interconnected world. Our team collaboration features provide the tools and capabilities your teams need to communicate, share information, and work together seamlessly, regardless of their location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Team Collaboration Features</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of features to facilitate effective team collaboration:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Real-time Messaging and Chat:** Instant communication for quick questions and updates.
                </li>
                <li>
                  **File Sharing and Document Collaboration:** Easily share and collaborate on documents in real-time.
                </li>
                <li>
                  **Video Conferencing and Online Meetings:** Conduct virtual meetings with high-quality audio and video.
                </li>
                <li>
                  **Task Management and Project Tracking:** Organize tasks, track progress, and manage projects effectively.
                </li>
                <li>
                  **Shared Calendars and Scheduling:** Coordinate schedules and avoid conflicts.
                </li>
                <li>
                  **Integrations with Other Tools:** Connect with your existing productivity and business applications.
                {/* You can add more specific features here based on your offerings */}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Benefits of Effective Team Collaboration</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  Improved communication and information flow.
                </li>
                <li>
                  Increased productivity and efficiency.
                </li>
                <li>
                  Enhanced teamwork and morale.
                </li>
                <li>
                  Faster decision-making.
                </li>
                <li>
                  Greater flexibility for remote and distributed teams.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Started Today</h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to empower your teams with effective collaboration tools? Contact us today for a free consultation and learn how our team collaboration features can enhance your team's productivity and success.
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

export default TeamCollaboration;
