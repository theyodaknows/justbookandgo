import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span style={{ color: '#FF6B00' }}>book</span>
              <span style={{ color: '#0A84FF' }}>andgo</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#services" className="text-white hover:text-orange-400 transition-colors">Services</a>
              <Link href="/service-areas/" className="text-white hover:text-orange-400 transition-colors">Areas</Link>
              <Link href="/about/" className="text-white hover:text-orange-400 transition-colors">About</Link>
              <a
                href="https://client.housecallpro.com/customer_portal/request-link?token=bb0cf531c471455bb1cdb50364bd033f"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors"
              >
                LOG IN TO PORTAL
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <a
                href="tel:833-413-3478"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                📞 Call
              </a>
              <button
                className="navbar-burger flex items-center text-white p-3"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
              <div
                className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
                onClick={() => setIsMenuOpen(false)}
              />
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto" aria-label="Mobile">
                <div className="flex items-center mb-8">
                  <div className="text-2xl font-bold text-gray-800 tracking-tight">
                    Just
                    <span style={{ color: '#FF6B00' }}>book</span>
                    <span style={{ color: '#0A84FF' }}>andgo</span>
                  </div>
                  <button
                    className="navbar-close absolute top-6 right-6 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg className="h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <ul>
                    <li className="mb-1">
                      <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/#services">Services</a>
                    </li>
                    <li className="mb-1">
                      <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/service-areas/">
                        Service Areas
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/about/">
                        About
                      </Link>
                    </li>
                    <li className="mb-1">
                      <a
                        href="https://client.housecallpro.com/customer_portal/request-link?token=bb0cf531c471455bb1cdb50364bd033f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      >
                        Customer Portal
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-600 hover:bg-orange-700 rounded-xl" href="tel:833-413-3478">
                    📞 833-413-3478
                  </a>
                </div>
              </nav>
            </div>
            
            <a href="tel:833-413-3478" className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4 tracking-tight">
                  Just
                  <span style={{ color: '#FF6B00' }}>book</span>
                  <span style={{ color: '#0A84FF' }}>andgo</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Your trusted partner for all home service needs in Los Angeles. Fast, reliable, and professional.
                </p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Los Angeles, CA 90013</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-tight">Los Angeles Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Plumbing Services</Link></li>
                  <li><Link href="/hvac/downtown-los-angeles-90021/" className="hover:text-orange-400 transition-colors">HVAC Services</Link></li>
                  <li><Link href="/electrical/glendale-91203/" className="hover:text-orange-400 transition-colors">Electrical Services</Link></li>
                  <li><Link href="/emergency-services/" className="hover:text-orange-400 transition-colors">Emergency Services</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-tight">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</Link></li>
                  <li><Link href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</Link></li>
                  <li><Link href="/electrical/pasadena-91101/" className="hover:text-orange-400 transition-colors">Pasadena</Link></li>
                  <li><Link href="/service-areas/" className="hover:text-orange-400 transition-colors">All Areas</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 tracking-tight">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Available 24/7</li>
                  <li>Licensed & Insured</li>
                  <li>Same-Day Service</li>
                  <li>Free Estimates</li>
                </ul>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="border-t border-gray-700 pt-8 mb-8">
              <h3 className="text-lg font-bold mb-4 text-center">We Accept</h3>
              <div className="flex justify-center items-center space-x-6 flex-wrap">
                {['VISA', 'MasterCard', 'AMEX', 'Discover', 'Cash', 'Check'].map((p) => (
                  <div className="bg-white rounded px-3 py-2 mb-2" key={p}>
                    <span className="font-bold text-sm text-gray-800">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="border-t border-gray-700 pt-8 mb-8 text-center">
              <div className="flex justify-center space-x-6 text-sm">
                <Link href="/privacy-policy/" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions/" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="border-t border-gray-700 pt-8 mb-8 text-center">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.facebook.com/justbookandgola/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/justbookandgola/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.087 4.73.222 4.058.42a5.916 5.916 0 0 0-2.134 1.384A5.916 5.916 0 0 0 .42 4.058C.222 4.73.087 5.493.048 6.71.01 7.929 0 8.396 0 12.017s.01 4.087.048 5.303c.039 1.218.174 1.98.372 2.653a5.916 5.916 0 0 0 1.384 2.134 5.916 5.916 0 0 0 2.134 1.384c.673.198 1.435.333 2.653.372 1.216.039 1.683.048 5.303.048s4.087-.01 5.303-.048c1.218-.039 1.98-.174 2.653-.372a5.916 5.916 0 0 0 2.134-1.384 5.916 5.916 0 0 0 1.384-2.134c.198-.673.333-1.435.372-2.653.039-1.216.048-1.683.048-5.303s-.01-4.087-.048-5.303c-.039-1.218-.174-1.98-.372-2.653a5.916 5.916 0 0 0-1.384-2.134A5.916 5.916 0 0 0 19.67.42c-.673-.198-1.435-.333-2.653-.372C15.801.01 15.334 0 12.017 0zm0 2.16c3.317 0 3.71.013 5.02.072 1.212.055 1.87.256 2.31.425.58.225 1 .494 1.44.933.44.44.708.86.933 1.44.169.44.37 1.098.425 2.31.059 1.31.072 1.703.072 5.02s-.013 3.71-.072 5.02c-.055 1.212-.256 1.87-.425 2.31-.225.58-.494 1-.933 1.44-.44.44-.86.708-1.44.933-.44.169-1.098.37-2.31.425-1.31.059-1.703.072-5.02.072s-3.71-.013-5.02-.072c-1.212-.055-1.87-.256-2.31-.425-.58-.225-1-.494-1.44-.933-.44-.44-.708-.86-.933-1.44-.169-.44-.37-1.098-.425-2.31-.059-1.31-.072-1.703-.072-5.02s.013-3.71.072-5.02c.055-1.212.256-1.87.425-2.31.225-.58.494-1 .933-1.44.44-.44.86-.708 1.44-.933.44-.169 1.098-.37 2.31-.425 1.31-.059 1.703-.072 5.02-.072zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12.017 16a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68zm6.162-10.96a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/justbookandgola" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>© 2024 Justbookandgo. All rights reserved. | Licensed, Bonded & Insured in Los Angeles County</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;