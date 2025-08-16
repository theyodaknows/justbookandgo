import React from 'react';
import Head from 'next/head';

const LongBeachElectrical = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo Electrical Services",
    "image": "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    "@id": "https://justbookandgo.com/electrical/long-beach-90806/",
    "url": "https://justbookandgo.com/electrical/long-beach-90806/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "postalCode": "90806",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7701,
      "longitude": -118.1937
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
        "latitude": 33.7701,
        "longitude": -118.1937
      },
      "geoRadius": "25000"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>Long Beach Electricians (90806) | Panels, EV, Lighting</title>
        <meta name="description" content="Licensed Long Beach electricians for panel upgrades, EV chargers, lighting & troubleshooting. Serving 90806–90815. Call 833-413-3478." />
        <meta name="keywords" content="Long Beach electrician, electrical services 90806, EV charger installation, panel upgrades, lighting Long Beach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/electrical/long-beach-90806/" />
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
              Licensed Electricians in Long Beach, CA
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From panel upgrades to EV charger installs, Justbookandgo – Long Beach Electrical handles clean, code-compliant electrical work across 90806–90815. Call 833-413-3478.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Get a Free Estimate</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a licensed Long Beach electrician.</p>
              <a href="tel:833-413-3478" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors text-center mb-3">
                📞 Call Now: 833-413-3478
              </a>
              <p className="text-sm text-gray-500">Or book online for same-day service</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Electrical Services in Long Beach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Panel & Subpanel Upgrades</h3>
                <p className="text-gray-600 mb-4">Complete load calculations and panel upgrades for Long Beach homes and businesses.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Long Beach electrician upgrading electrical panel in 90806 home" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Load calculations</li>
                  <li>• 100A to 200A upgrades</li>
                  <li>• Subpanel installations</li>
                  <li>• Code compliance updates</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">EV Charger Install</h3>
                <p className="text-gray-600 mb-4">Professional EV charging station installation with permits included.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/7841419/pexels-photo-7841419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Long Beach electrician installing EV charger in residential garage" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NEMA 14-50 outlets</li>
                  <li>• Wall-mounted units</li>
                  <li>• Tesla & universal chargers</li>
                  <li>• Permits included</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lighting Retrofits/Design</h3>
                <p className="text-gray-600 mb-4">Energy-efficient lighting solutions for residential and commercial spaces.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• LED conversions</li>
                  <li>• Lighting design</li>
                  <li>• Dimmer installations</li>
                  <li>• Energy rebate assistance</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dedicated Circuits & Troubleshooting</h3>
                <p className="text-gray-600 mb-4">New circuits for appliances and electrical troubleshooting services.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kitchen appliance circuits</li>
                  <li>• Server room power</li>
                  <li>• Electrical troubleshooting</li>
                  <li>• Circuit repairs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tenant Improvement Wiring</h3>
                <p className="text-gray-600 mb-4">Complete electrical work for tenant improvements with inspections.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Office build-outs</li>
                  <li>• Retail space wiring</li>
                  <li>• Restaurant electrical</li>
                  <li>• Inspection coordination</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Outlet & Switch Services</h3>
                <p className="text-gray-600 mb-4">Installation and repair of outlets, switches, and safety devices.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GFCI outlet installation</li>
                  <li>• AFCI breaker upgrades</li>
                  <li>• USB outlet installation</li>
                  <li>• Switch replacements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our Long Beach Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">NEC/CEC Compliant</h3>
                <p className="text-gray-600">All work meets National and California Electrical Code standards.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tidy Finishes</h3>
                <p className="text-gray-600">Clean, professional installations with attention to detail.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Permit Handling</h3>
                <p className="text-gray-600">We handle all permitting and inspection coordination.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Local Crew</h3>
                <p className="text-gray-600">Long Beach-based electricians who know the area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Long Beach Areas We Serve</h2>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.742661736546!2d-118.1937!3d33.7701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd313158b6d5d7%3A0x1e3c3d8b0e5b5c5d!2sLong%20Beach%2C%20CA%2090806!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Long Beach 90806 Electrical Service Area Map"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Primary Service ZIPs</h3>
                <p className="text-gray-600">90806, 90807, 90808, 90802, 90803, 90804, 90805, 90815</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Neighborhoods</h3>
                <p className="text-gray-600">Belmont Shore, Downtown Long Beach, Naples, Alamitos Beach</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Also Serving</h3>
                <p className="text-gray-600">
                  <a href="/hvac/torrance-90501/" className="text-blue-600 hover:text-blue-800">Torrance</a> | 
                  <a href="/electrical/glendale-91203/" className="text-blue-600 hover:text-blue-800 ml-2">Glendale</a>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you pull permits for electrical work in Long Beach?</h3>
                <p className="text-gray-600">Yes, permits are included in our service. We handle all permitting and inspection coordination for electrical work in Long Beach 90806-90815.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you work nights for commercial projects?</h3>
                <p className="text-gray-600">Yes—commercial off-hours work is available to minimize disruption to your Long Beach business operations.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's your response time in Long Beach?</h3>
                <p className="text-gray-600">Our Long Beach electricians typically arrive within 30-60 minutes for emergency calls in the 90806-90815 area.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide load calculations for panel upgrades?</h3>
                <p className="text-gray-600">Yes, we perform complete load calculations to ensure your new panel meets current and future electrical demands safely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need an Electrician in Long Beach Today?</h2>
            <p className="text-xl mb-8">Don't wait for electrical issues to become safety hazards. Call now for immediate assistance in Long Beach.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Or book online for same-day service</span>
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
                <p className="text-gray-300 mb-4">Your trusted Long Beach electrical partner. Licensed, professional, and reliable service.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Long Beach, CA 90806</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Long Beach Electrical</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Panel Upgrades</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">EV Chargers</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Lighting Design</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Tenant Improvements</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/hvac/torrance-90501/" className="hover:text-orange-400 transition-colors">Torrance</a></li>
                  <li><a href="/electrical/glendale-91203/" className="hover:text-orange-400 transition-colors">Glendale</a></li>
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

export default LongBeachElectrical;