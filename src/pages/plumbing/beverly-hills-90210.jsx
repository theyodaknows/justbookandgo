import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BeverlyHillsPlumbing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo Plumbing Services",
    "image": "https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg",
    "@id": "https://justbookandgo.com/plumbing/beverly-hills-90210/",
    "url": "https://justbookandgo.com/plumbing/beverly-hills-90210/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Beverly Hills",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0736,
      "longitude": -118.4004
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0736,
        "longitude": -118.4004
      },
      "geoRadius": "25000"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>Beverly Hills Plumbers (90210) | 24/7, Licensed</title>
        <meta name="description" content="Need a Beverly Hills plumber today? 24/7 leak repair, drain cleaning & installs in 90210. Fast response. Book online or call now." />
        <meta name="keywords" content="Beverly Hills plumber, plumbing 90210, emergency plumber Beverly Hills, luxury plumbing services, drain cleaning Beverly Hills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/plumbing/beverly-hills-90210/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
            
            <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              📞 833-413-3478
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              24/7 Licensed Plumbers in Beverly Hills (90210)
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Need a reliable plumber in Beverly Hills 90210 today? Justbookandgo.com connects you with licensed, insured pros for fast, clean repairs—backed by transparent pricing and priority scheduling in Trousdale, BH Flats, and the Hills.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Get a Free Quote in Minutes</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a Beverly Hills plumbing professional.</p>
              <a href="tel:833-413-3478" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors text-center mb-3">
                📞 Call Now: 833-413-3478
              </a>
              <p className="text-sm text-gray-500">Book online and get 10% off your first service</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Beverly Hills Plumbing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Leak Detection & Repair</h3>
                <p className="text-gray-600 mb-4">High-pressure homes and luxury fixtures require expert care. We handle complex leak detection and precision repairs.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Beverly Hills plumber detecting water leak in luxury home" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Electronic leak detection</li>
                  <li>• Slab leak repair</li>
                  <li>• Luxury fixture repairs</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Drain Cleaning & Hydro-Jetting</h3>
                <p className="text-gray-600 mb-4">Root intrusions and grease buildup cleared with professional hydro-jetting equipment.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-pressure water jetting</li>
                  <li>• Root removal</li>
                  <li>• Grease trap cleaning</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Water Heater Services</h3>
                <p className="text-gray-600 mb-4">Tank and tankless water heater repair, replacement, and maintenance for Beverly Hills homes.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Beverly Hills plumber replacing water heater in luxury residence" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tankless installations</li>
                  <li>• Emergency repairs</li>
                  <li>• Energy-efficient upgrades</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Whole-Home Re-Pipe</h3>
                <p className="text-gray-600 mb-4">Complete copper and PEX re-piping services for Beverly Hills properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Copper to PEX conversion</li>
                  <li>• Minimal disruption</li>
                  <li>• Lifetime warranties</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Luxury Fixture Installs</h3>
                <p className="text-gray-600 mb-4">Designer faucets, showers, and spa tubs installed with precision and care.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Grohe, Dornbracht, Kohler</li>
                  <li>• Spa tub installations</li>
                  <li>• Custom shower systems</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">HOA & Property Management</h3>
                <p className="text-gray-600 mb-4">Specialized services for Beverly Hills HOAs and property management companies.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bulk service discounts</li>
                  <li>• Scheduled maintenance</li>
                  <li>• Emergency response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us in Beverly Hills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">BH Service Standards</h3>
                <p className="text-gray-600">Local, vetted techs who understand Beverly Hills service expectations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Spotless Cleanup</h3>
                <p className="text-gray-600">Shoe covers, floor protection, and complete cleanup after every job.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Same-day and after-hours appointments available in 90210.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">Clear estimates before work begins. No surprise charges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Plumbing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Commercial Plumbing in Beverly Hills</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Restaurants, boutiques, offices, salons—discreet, off-hours work to keep your Beverly Hills business open and running smoothly.
            </p>
            <a href="tel:833-413-3478" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors">
              Get Commercial Quote: 833-413-3478
            </a>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Beverly Hills Areas We Serve</h2>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.742661736546!2d-118.42034!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0x1e3c3d8b0e5b5c5d!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Beverly Hills 90210 Service Area Map"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Primary Service Area</h3>
                <p className="text-gray-600">90210 - Beverly Hills</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Extended Coverage</h3>
                <p className="text-gray-600">90211, 90212 (on request)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nearby Areas</h3>
                <p className="text-gray-600">
                  <a href="/plumbing/santa-monica-90401/" className="text-blue-600 hover:text-blue-800">Santa Monica</a> | 
                  <a href="/plumbing/downtown-los-angeles-90013/" className="text-blue-600 hover:text-blue-800 ml-2">Downtown LA</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you handle luxury fixture brands?</h3>
                <p className="text-gray-600">Yes—we're experienced with Grohe, Dornbracht, Kohler, Toto and more premium brands commonly found in Beverly Hills homes.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you work after-hours?</h3>
                <p className="text-gray-600">Yes, we provide 24/7 emergency coverage in 90210 with priority scheduling for Beverly Hills residents.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide camera inspections?</h3>
                <p className="text-gray-600">Yes—we offer video camera inspections with recording and written reports for insurance and documentation purposes.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's your response time in Beverly Hills?</h3>
                <p className="text-gray-600">Our Beverly Hills technicians typically arrive within 30-60 minutes for emergency calls and offer same-day service for non-emergency repairs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need a Beverly Hills Plumber Today?</h2>
            <p className="text-xl mb-8">Don't wait for small problems to become expensive repairs. Call now for immediate assistance in Beverly Hills 90210.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Or Book Online for 10% First-Service Discount</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  Just
                  <span className="text-orange-500">book</span>
                  <span className="text-blue-500">andgo</span>
                </div>
                <p className="text-gray-300 mb-4">Your trusted Beverly Hills plumbing partner. Fast, reliable, and professional service in 90210.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Beverly Hills, CA 90210</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Beverly Hills Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Plumbing</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Luxury Fixtures</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Drain Cleaning</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Water Heaters</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Los Angeles Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Plumbing Services</Link></li>
                  <li><Link href="/hvac/downtown-los-angeles-90021/" className="hover:text-orange-400 transition-colors">HVAC Services</Link></li>
                  <li><Link href="/electrical/glendale-91203/" className="hover:text-orange-400 transition-colors">Electrical Services</Link></li>
                  <li><Link href="/emergency-services/" className="hover:text-orange-400 transition-colors">Emergency Services</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</Link></li>
                  <li><Link href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</Link></li>
                  <li><Link href="/electrical/pasadena-91101/" className="hover:text-orange-400 transition-colors">Pasadena</Link></li>
                  <li><Link href="/service-areas/" className="hover:text-orange-400 transition-colors">All Areas</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
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

export default BeverlyHillsPlumbing;