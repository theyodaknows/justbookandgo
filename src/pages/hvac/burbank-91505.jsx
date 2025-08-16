import React from 'react';
import Head from 'next/head';

const BurbankHVAC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo HVAC Services",
    "image": "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
    "@id": "https://justbookandgo.com/hvac/burbank-91505/",
    "url": "https://justbookandgo.com/hvac/burbank-91505/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Burbank",
      "addressRegion": "CA",
      "postalCode": "91505",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.1808,
      "longitude": -118.3090
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
        "latitude": 34.1808,
        "longitude": -118.3090
      },
      "geoRadius": "25000"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>Burbank HVAC (91505) | Commercial & Residential | 24/7</title>
        <meta name="description" content="Licensed HVAC in Burbank: RTUs, VRF, minisplits, repairs & maintenance. Serving 91502–91506. Call 833-413-3478." />
        <meta name="keywords" content="Burbank HVAC, commercial HVAC 91505, residential HVAC Burbank, VRF systems, minisplit installation, rooftop units" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/hvac/burbank-91505/" />
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
              Licensed HVAC Pros in Burbank (Commercial & Residential)
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From studio campuses and offices to homes in Magnolia Park, Justbookandgo – Burbank HVAC delivers fast diagnostics, clean installs, and dependable maintenance. Call 833-413-3478.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Request a Same-Day Visit</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a Burbank HVAC professional.</p>
              <a href="tel:833-413-3478" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors text-center mb-3">
                📞 Call Now: 833-413-3478
              </a>
              <p className="text-sm text-gray-500">Emergency repairs available 24/7</p>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Core Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency Repairs</h3>
                <p className="text-gray-600 mb-4">Fast response for critical system failures in Burbank studios and offices.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Burbank HVAC technician repairing commercial unit in Media District" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Compressor failures</li>
                  <li>• Motor replacements</li>
                  <li>• Refrigerant leaks</li>
                  <li>• Control system failures</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Preventive Maintenance</h3>
                <p className="text-gray-600 mb-4">Scheduled maintenance to prevent costly downtime and extend equipment life.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Filter replacements</li>
                  <li>• Belt inspections</li>
                  <li>• Coil cleaning</li>
                  <li>• Drain pan service</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">VRF/VRV & Minisplit Systems</h3>
                <p className="text-gray-600 mb-4">Variable refrigerant flow systems and ductless minisplit diagnostics and installation.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Burbank HVAC crew installing VRF system in Magnolia Park office" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• System diagnostics</li>
                  <li>• Zone balancing</li>
                  <li>• Indoor unit service</li>
                  <li>• Minisplit installations</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Rooftop Unit Replace/Install</h3>
                <p className="text-gray-600 mb-4">Complete RTU installations with permits and crane coordination for Burbank businesses.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Permit pulling</li>
                  <li>• Crane scheduling</li>
                  <li>• Equipment installation</li>
                  <li>• System commissioning</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Thermostats, Smart Controls & Zoning</h3>
                <p className="text-gray-600 mb-4">Advanced control systems and zoning solutions for optimal comfort and efficiency.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart thermostat installation</li>
                  <li>• Zone control systems</li>
                  <li>• BAS integration</li>
                  <li>• Remote monitoring setup</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Server-Room & Spot-Cooling Solutions</h3>
                <p className="text-gray-600 mb-4">Specialized cooling for server rooms and precision temperature control needs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Server room cooling</li>
                  <li>• Precision air conditioning</li>
                  <li>• Spot cooling units</li>
                  <li>• Temperature monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries & Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Industries & Areas We Serve</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Media/Production</h4>
                <p className="text-sm text-gray-600">Studios and production facilities requiring precise climate control</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Post-Houses</h4>
                <p className="text-sm text-gray-600">Post-production facilities with server room cooling needs</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Retail</h4>
                <p className="text-sm text-gray-600">Shopping centers and retail spaces in Burbank</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Gyms</h4>
                <p className="text-sm text-gray-600">Fitness centers requiring robust ventilation systems</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-2">Multi-Tenant Offices</h4>
                <p className="text-sm text-gray-600">Office buildings with zone control requirements</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">ZIP Codes Served</h4>
              <p className="text-gray-600">91501, 91502, 91503, 91504, 91505, 91506</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">OSHA-Trained & Insured</h3>
                <p className="text-gray-600">Fully certified technicians with COI available for all commercial work.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Service Photos & Logs</h3>
                <p className="text-gray-600">Detailed documentation and photos after every visit for your records.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">After-hours and weekend service to minimize business disruption.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Response</h3>
                <p className="text-gray-600">Priority response for Burbank Media District and surrounding areas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Burbank Coverage Area</h2>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.742661736546!2d-118.3090!3d34.1808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0x5eeb7dd5b5b5b5b5!2sBurbank%2C%20CA%2091505!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Burbank 91505 HVAC Service Area Map"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Primary Service ZIPs</h3>
                <p className="text-gray-600">91502, 91503, 91504, 91505</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Neighborhoods</h3>
                <p className="text-gray-600">Media District, Magnolia Park, Rancho</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Also Serving</h3>
                <p className="text-gray-600">
                  <a href="/hvac/glendale-91203/" className="text-blue-600 hover:text-blue-800">Glendale</a> | 
                  <a href="/hvac/downtown-los-angeles-90021/" className="text-blue-600 hover:text-blue-800 ml-2">Downtown LA</a>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide after-hours work?</h3>
                <p className="text-gray-600">Yes—we offer nights and weekends service to avoid downtime for Burbank studios and businesses.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you handle multi-site PM contracts?</h3>
                <p className="text-gray-600">Yes—single vendor, unified quarterly reports for property management companies with multiple Burbank locations.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's your response time in Burbank?</h3>
                <p className="text-gray-600">Our Burbank technicians typically arrive within 30-60 minutes for emergency calls in the 91502-91506 area.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you service both commercial and residential properties?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive HVAC services for both commercial facilities and residential homes throughout Burbank.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need HVAC Service in Burbank Today?</h2>
            <p className="text-xl mb-8">Don't let HVAC issues shut down your studio or make your home uncomfortable. Call now for immediate assistance.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Request Same-Day Visit</span>
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
                <p className="text-gray-300 mb-4">Your trusted Burbank HVAC partner. Fast, reliable commercial and residential service.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Burbank, CA 91505</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Burbank HVAC</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Repairs</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">VRF Systems</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Minisplits</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">PM Programs</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/hvac/glendale-91203/" className="hover:text-orange-400 transition-colors">Glendale</a></li>
                  <li><a href="/hvac/downtown-los-angeles-90021/" className="hover:text-orange-400 transition-colors">Downtown LA</a></li>
                  <li><a href="/electrical/pasadena-91101/" className="hover:text-orange-400 transition-colors">Pasadena</a></li>
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

export default BurbankHVAC;