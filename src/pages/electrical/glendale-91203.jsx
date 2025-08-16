import React from 'react';
import Head from 'next/head';

const GlendaleElectrical = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo Electrical Services",
    "image": "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    "@id": "https://justbookandgo.com/electrical/glendale-91203/",
    "url": "https://justbookandgo.com/electrical/glendale-91203/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Glendale",
      "addressRegion": "CA",
      "postalCode": "91203",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.1425,
      "longitude": -118.2551
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
        "latitude": 34.1425,
        "longitude": -118.2551
      },
      "geoRadius": "25000"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>Glendale Electricians (91203) | Panel, EV, Lighting</title>
        <meta name="description" content="Licensed Glendale electricians for panels, EV chargers, lighting & troubleshooting. Same-day service in 91203/91205." />
        <meta name="keywords" content="Glendale electrician, electrical services 91203, EV charger installation, panel upgrades, lighting Glendale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/electrical/glendale-91203/" />
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
              Licensed Electricians in Glendale, CA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From panel upgrades to EV chargers and tenant improvements, our Glendale team delivers clean, code-perfect work with permit handling and same-day troubleshooting.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Get a Free Estimate</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a licensed Glendale electrician.</p>
              <a href="tel:833-413-3478" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors text-center mb-3">
                📞 Call Now: 833-413-3478
              </a>
              <p className="text-sm text-gray-500">Same-day service available</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Electrical Services in Glendale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Main Panel & Subpanel Upgrades</h3>
                <p className="text-gray-600 mb-4">Complete load calculations and panel upgrades to meet modern electrical demands.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Load calculations</li>
                  <li>• 100A to 200A upgrades</li>
                  <li>• Subpanel installations</li>
                  <li>• Code compliance updates</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">EV Charger Installation</h3>
                <p className="text-gray-600 mb-4">Professional EV charging station installation with proper permits and inspections.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NEMA 14-50 outlets</li>
                  <li>• Wall-mounted units</li>
                  <li>• Tesla & universal chargers</li>
                  <li>• Permit handling included</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">LED Retrofits & Lighting Design</h3>
                <p className="text-gray-600 mb-4">Energy-efficient lighting solutions for retail, office, and residential spaces.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• LED conversions</li>
                  <li>• Lighting design</li>
                  <li>• Dimmer installations</li>
                  <li>• Energy rebate assistance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dedicated Circuits</h3>
                <p className="text-gray-600 mb-4">New circuits for appliances, servers, shop tools, and high-power equipment.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kitchen appliance circuits</li>
                  <li>• Server room power</li>
                  <li>• Workshop tool circuits</li>
                  <li>• HVAC equipment power</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Outlet & Switch Services</h3>
                <p className="text-gray-600 mb-4">Repair and installation of outlets, switches, GFCI, and AFCI protection.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GFCI outlet installation</li>
                  <li>• AFCI breaker upgrades</li>
                  <li>• USB outlet installation</li>
                  <li>• Switch replacements</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tenant Improvement Wiring</h3>
                <p className="text-gray-600 mb-4">Complete electrical work for commercial tenant improvements and inspections.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Office build-outs</li>
                  <li>• Retail space wiring</li>
                  <li>• Restaurant electrical</li>
                  <li>• Inspection coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our Glendale Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Local Crew</h3>
                <p className="text-gray-600">Glendale-based electricians who know the area and local codes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">NEC/CEC Compliant</h3>
                <p className="text-gray-600">All work meets National and California Electrical Code standards.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tidy Finishes</h3>
                <p className="text-gray-600">Clean, professional installations with attention to detail.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Permits Included</h3>
                <p className="text-gray-600">We handle all permitting and inspection coordination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Primary Service ZIPs</h4>
                <p className="text-gray-600">91203, 91204, 91205</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Nearby Areas</h4>
                <p className="text-gray-600">Atwater Village, Eagle Rock</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Also Serving</h4>
                <p className="text-gray-600">
                  <a href="/electrical/burbank-91505/" className="text-blue-600 hover:text-blue-800">Burbank</a> | 
                  <a href="/electrical/pasadena-91101/" className="text-blue-600 hover:text-blue-800 ml-2">Pasadena</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you pull permits for electrical work?</h3>
                <p className="text-gray-600">Yes, we handle all permitting and inspection coordination for electrical work in Glendale. Permits are included in our service.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you work nights for business electrical needs?</h3>
                <p className="text-gray-600">Yes, we offer after-hours service for businesses to minimize disruption to your operations in Glendale.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">How quickly can you respond to electrical emergencies?</h3>
                <p className="text-gray-600">Our Glendale electricians typically arrive within 30-60 minutes for emergency calls and offer same-day service for non-emergency work.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide load calculations for panel upgrades?</h3>
                <p className="text-gray-600">Yes, we perform complete load calculations to ensure your new panel meets current and future electrical demands safely and efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need an Electrician in Glendale Today?</h2>
            <p className="text-xl mb-8">Don't wait for electrical issues to become safety hazards. Call now for immediate assistance in Glendale.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Get a Free Estimate Today</span>
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
                <p className="text-gray-300 mb-4">Your trusted Glendale electrical partner. Licensed, professional, and reliable service.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Glendale, CA 91203</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Glendale Electrical</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Panel Upgrades</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">EV Chargers</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">LED Lighting</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Tenant Improvements</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/electrical/burbank-91505/" className="hover:text-orange-400 transition-colors">Burbank</a></li>
                  <li><a href="/electrical/pasadena-91101/" className="hover:text-orange-400 transition-colors">Pasadena</a></li>
                  <li><a href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</a></li>
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

export default GlendaleElectrical;