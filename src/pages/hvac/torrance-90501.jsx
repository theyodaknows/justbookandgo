import React from 'react';
import Head from 'next/head';

const TorranceHVAC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo HVAC Services",
    "image": "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg",
    "@id": "https://justbookandgo.com/hvac/torrance-90501/",
    "url": "https://justbookandgo.com/hvac/torrance-90501/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Torrance",
      "addressRegion": "CA",
      "postalCode": "90501",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.8358,
      "longitude": -118.3406
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
        "latitude": 33.8358,
        "longitude": -118.3406
      },
      "geoRadius": "25000"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>Torrance HVAC (90501) | Repairs, Installs, Maintenance</title>
        <meta name="description" content="Licensed HVAC services in Torrance: repairs, installs, PM. Serving 90501–90505. Call 833-413-3478." />
        <meta name="keywords" content="Torrance HVAC, HVAC repair 90501, air conditioning Torrance, heating repair, commercial HVAC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/hvac/torrance-90501/" />
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
              HVAC Pros in Torrance (90501–90505)
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From Old Torrance to the Southwood area, Justbookandgo – Torrance HVAC delivers same-day service for homes, offices, and warehouses. Call 833-413-3478.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Request Service Now</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a Torrance HVAC professional.</p>
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
                <p className="text-gray-600 mb-4">Fast response for critical system failures in Torrance homes and businesses.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Torrance HVAC technician repairing air conditioning unit in 90501" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Compressor failures</li>
                  <li>• Refrigerant leaks</li>
                  <li>• Motor replacements</li>
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
                  <li>• System diagnostics</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Minisplit & VRF Install/Diagnostics</h3>
                <p className="text-gray-600 mb-4">Ductless minisplit and VRF system installation and diagnostics for Torrance properties.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Torrance HVAC crew installing minisplit system in Southwood area" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ductless installations</li>
                  <li>• VRF system diagnostics</li>
                  <li>• Zone balancing</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Rooftop Unit Replacement/Install</h3>
                <p className="text-gray-600 mb-4">Complete RTU installations with permits included for Torrance commercial properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Permit handling</li>
                  <li>• Equipment installation</li>
                  <li>• System commissioning</li>
                  <li>• Crane coordination</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Thermostat & Zoning Controls</h3>
                <p className="text-gray-600 mb-4">Advanced control systems and zoning solutions for optimal comfort and efficiency.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart thermostat installation</li>
                  <li>• Zone control systems</li>
                  <li>• BAS integration</li>
                  <li>• Remote monitoring setup</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Commercial Refrigeration</h3>
                <p className="text-gray-600 mb-4">Specialized refrigeration services for Torrance restaurants and businesses.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Walk-in cooler repair</li>
                  <li>• Reach-in refrigerator service</li>
                  <li>• Ice machine maintenance</li>
                  <li>• Temperature monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Local</h3>
                <p className="text-gray-600">Torrance-based technicians who know the area and local codes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Insured</h3>
                <p className="text-gray-600">Fully licensed, bonded, and insured with COI available.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">OSHA-Trained</h3>
                <p className="text-gray-600">Certified technicians with proper safety training.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">COI Available</h3>
                <p className="text-gray-600">Certificate of Insurance available for all commercial work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Torrance Areas We Serve</h2>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.742661736546!2d-118.3406!3d33.8358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3eca6a5d5d7%3A0x1e3c3d8b0e5b5c5d!2sTorrance%2C%20CA%2090501!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Torrance 90501 HVAC Service Area Map"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Primary Service ZIPs</h3>
                <p className="text-gray-600">90501, 90502, 90503, 90504, 90505</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Neighborhoods</h3>
                <p className="text-gray-600">Old Torrance, Southwood, Del Amo, Walteria</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Also Serving</h3>
                <p className="text-gray-600">
                  <a href="/plumbing/long-beach-90802/" className="text-blue-600 hover:text-blue-800">Long Beach</a> | 
                  <a href="/hvac/burbank-91505/" className="text-blue-600 hover:text-blue-800 ml-2">Burbank</a>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide after-hours work?</h3>
                <p className="text-gray-600">Yes—we offer nights and weekends service to avoid downtime for Torrance businesses in 90501-90505.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you handle multi-site PM contracts?</h3>
                <p className="text-gray-600">Yes—single vendor, unified quarterly reports for property management companies across the South Bay area.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's your response time in Torrance?</h3>
                <p className="text-gray-600">Our Torrance technicians typically arrive within 30-60 minutes for emergency calls in the 90501-90505 area.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you service both residential and commercial properties?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive HVAC services for both homes and businesses throughout Torrance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need HVAC Service in Torrance Today?</h2>
            <p className="text-xl mb-8">Don't let HVAC issues make your home or business uncomfortable. Call now for immediate assistance.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Request Service Now</span>
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
                <p className="text-gray-300 mb-4">Your trusted Torrance HVAC partner. Fast, reliable service for homes and businesses.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Torrance, CA 90501</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Torrance HVAC</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Repairs</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Preventive Maintenance</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Minisplits</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Commercial Refrigeration</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/plumbing/long-beach-90802/" className="hover:text-orange-400 transition-colors">Long Beach</a></li>
                  <li><a href="/hvac/burbank-91505/" className="hover:text-orange-400 transition-colors">Burbank</a></li>
                  <li><a href="/electrical/glendale-91203/" className="hover:text-orange-400 transition-colors">Glendale</a></li>
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

export default TorranceHVAC;