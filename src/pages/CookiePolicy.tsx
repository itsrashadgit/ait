import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">What are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work or to work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies for several purposes. Some cookies are necessary for the website to function properly, while others help us understand how you use our website, improve your browsing experience, and show you relevant advertisements. The types of cookies we may use include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  **Essential Cookies:** These cookies are strictly necessary for the basic functionality of our website and enable you to navigate and use its features.
                </li>
                <li>
                  **Analytical/Performance Cookies:** These cookies collect information about how you use our website, such as which pages you visit and if you encounter any errors. This data is used to improve the performance of our website.
                </li>
                <li>
                  **Functional Cookies:** These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, more personal features.
                </li>
                <li>
                  **Targeting/Advertising Cookies:** These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of our website.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Here are some resources on how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40c9-3da6-a3b4-b9da1329f64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple Safari</a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Email: info@aromait.com</p>
                {/* Add other contact information if available, similar to Privacy Policy */}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
