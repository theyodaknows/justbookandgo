import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Justbookandgo</title>
        <meta name="description" content="Privacy Policy for Justbookandgo plumbing, HVAC, and electrical services in Los Angeles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/privacy-policy/" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gray-900 text-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Just
              <span className="text-orange-500">book</span>
              <span className="text-blue-500">andgo</span>
            </Link>
            <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              📞 833-413-3478
            </a>
          </nav>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you request services, contact us, or create an account. This may include your name, email address, phone number, address, and service details.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Schedule and complete service appointments</li>
              <li>Communicate with you about our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our business.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold">Justbookandgo</p>
              <p className="text-gray-600">Phone: 833-413-3478</p>
              <p className="text-gray-600">Email: info@justbookandgo.com</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <Link href="/" className="text-2xl font-bold mb-4 inline-block">
                Just
                <span className="text-orange-500">book</span>
                <span className="text-blue-500">andgo</span>
              </Link>
              <p className="text-gray-300 mb-4">Professional home services across Los Angeles County</p>
              <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
            </div>
            
            <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
              <p>© 2024 Justbookandgo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;