import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Justbookandgo</title>
        <meta name="description" content="Terms and Conditions for Justbookandgo plumbing, HVAC, and electrical services in Los Angeles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/terms-and-conditions/" />
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Services</h2>
            <p className="text-gray-600 mb-6">
              Justbookandgo provides plumbing, HVAC, and electrical services throughout Los Angeles County. All services are performed by licensed, insured professionals.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Scheduling and Cancellation</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Service appointments must be scheduled in advance</li>
              <li>Cancellations must be made at least 2 hours before scheduled appointment</li>
              <li>Emergency services are available 24/7 with additional charges</li>
              <li>We reserve the right to reschedule appointments due to weather or emergency situations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Payment is due upon completion of services</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Estimates are provided free of charge</li>
              <li>Additional charges may apply for after-hours or emergency services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Warranty</h2>
            <p className="text-gray-600 mb-6">
              We warrant our workmanship for 90 days from the date of service completion. Parts and equipment are covered by manufacturer warranties. This warranty does not cover damage due to misuse, normal wear and tear, or acts of nature.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Our liability is limited to the cost of the services provided. We are not responsible for consequential or incidental damages. Our total liability shall not exceed the amount paid for services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditions;