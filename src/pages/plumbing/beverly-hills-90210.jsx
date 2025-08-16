import React from 'react';
import Head from 'next/head';

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
            <div className="text-2xl font-bold tracking-tight">
              Just
              <span className="text-orange-500">book</span>
              <span className="text-blue-500">andgo</span>
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
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Beverly Hills Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Primary Service Area</h4>
                <p className="text-gray-600">90210 - Beverly Hills</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Extended Coverage</h4>
                <p className="text-gray-600">90211, 90212 (on request)</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nearby Areas</h4>
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
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</a></li>
                  <li><a href="/plumbing/downtown-los-angeles-90013/" className="hover:text-orange-400 transition-colors">Downtown LA</a></li>
                  <li><a href="/plumbing/glendale-91203/" className="hover:text-orange-400 transition-colors">Glendale</a></li>
                  <li><a href="/service-areas/" className="hover:text-orange-400 transition-colors">All Areas</a></li>
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