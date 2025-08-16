import React from 'react';
import Head from 'next/head';

const SantaMonicaPlumbing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo Plumbing Services",
    "image": "https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg",
    "@id": "https://justbookandgo.com/plumbing/santa-monica-90401/",
    "url": "https://justbookandgo.com/plumbing/santa-monica-90401/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0195,
      "longitude": -118.4912
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
        "latitude": 34.0195,
        "longitude": -118.4912
      },
      "geoRadius": "25000"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Head>
        <title>Santa Monica Plumbers (90401) | 24/7 • Licensed</title>
        <meta name="description" content="Need a plumber in Santa Monica? 24/7 leak repair, drains & installs in 90401–90405. Fast, clean service. Call 833-413-3478." />
        <meta name="keywords" content="Santa Monica plumber, plumbing 90401, emergency plumber Santa Monica, drain cleaning, water heater repair" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/plumbing/santa-monica-90401/" />
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
              24/7 Licensed Plumbers in Santa Monica (90401–90405)
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Need a reliable Santa Monica plumber today? Justbookandgo – Santa Monica Plumbing connects you with licensed, insured pros for fast, tidy repairs across Downtown SM, Pico, Ocean Park, and Sunset Park. Call 833-413-3478.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Get a Free Quote in Minutes</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a Santa Monica plumbing professional.</p>
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Santa Monica Plumbing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Leak Detection & Repair</h3>
                <p className="text-gray-600 mb-4">Slab leaks, wall leaks, and fixture repairs with precision detection equipment.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Santa Monica plumber detecting slab leak in 90401 home" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Electronic leak detection</li>
                  <li>• Slab leak repair</li>
                  <li>• Wall leak repairs</li>
                  <li>• Fixture leak fixes</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Drain Cleaning & Hydro-Jetting</h3>
                <p className="text-gray-600 mb-4">Root intrusions, grease buildup, and hair clogs cleared with professional equipment.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-pressure water jetting</li>
                  <li>• Root removal</li>
                  <li>• Grease trap cleaning</li>
                  <li>• Hair clog removal</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Water Heater Repair/Replace</h3>
                <p className="text-gray-600 mb-4">Tank and tankless water heater service for Santa Monica homes and businesses.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Santa Monica plumber installing tankless water heater in Ocean Park" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tank water heaters</li>
                  <li>• Tankless installations</li>
                  <li>• Emergency repairs</li>
                  <li>• Energy-efficient upgrades</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Whole-Home Re-Pipe</h3>
                <p className="text-gray-600 mb-4">Complete copper and PEX re-piping services for Santa Monica properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Copper to PEX conversion</li>
                  <li>• Minimal disruption</li>
                  <li>• Lifetime warranties</li>
                  <li>• Permit handling</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Fixture Installs</h3>
                <p className="text-gray-600 mb-4">Faucets, shower valves, and garbage disposer installations with precision.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kitchen faucets</li>
                  <li>• Shower valve replacement</li>
                  <li>• Garbage disposer install</li>
                  <li>• Bathroom fixtures</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">HOA & Property Management</h3>
                <p className="text-gray-600 mb-4">Specialized services for Santa Monica HOAs and property management companies.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bulk service discounts</li>
                  <li>• Scheduled maintenance</li>
                  <li>• Emergency response</li>
                  <li>• Multi-unit expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us in Santa Monica</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Local, Vetted Technicians</h3>
                <p className="text-gray-600">Santa Monica-based plumbers with shoe covers and floor protection.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Same-day and after-hours appointments available in all SM ZIPs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Upfront Estimates</h3>
                <p className="text-gray-600">Clear pricing before work begins. No surprise charges.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed, bonded, and insured for your protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Plumbing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Commercial Plumbing in Santa Monica</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Restaurants, retail, offices, fitness studios — off-hours service to keep you open and running smoothly in Downtown SM, Third Street Promenade, and Santa Monica Pier areas.
            </p>
            <a href="tel:833-413-3478" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors">
              Get Commercial Quote: 833-413-3478
            </a>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Santa Monica Areas We Serve</h3>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.742661736546!2d-118.4912!3d34.0195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2b4c7a7%3A0x1e3c3d8b0e5b5c5d!2sSanta%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Santa Monica 90401 Service Area Map"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Primary Service ZIPs</h4>
                <p className="text-gray-600">90401, 90402, 90403, 90404, 90405</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Key Neighborhoods</h4>
                <p className="text-gray-600">Downtown SM, Pico, Ocean Park, Sunset Park</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Also Serving</h4>
                <p className="text-gray-600">
                  <a href="/plumbing/beverly-hills-90210/" className="text-blue-600 hover:text-blue-800">Beverly Hills</a> | 
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you handle beach-area properties with older lines?</h3>
                <p className="text-gray-600">Yes—camera inspections & hydro-jetting available for older Santa Monica properties near the beach with aging pipe systems.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you replace tankless units?</h3>
                <p className="text-gray-600">Yes, we install/replace most brands with permits. Our Santa Monica team handles all major tankless water heater brands.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency service?</h3>
                <p className="text-gray-600">24/7 dispatch in all Santa Monica ZIPs (90401-90405). Our emergency plumbers respond quickly to urgent calls.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's your response time in Santa Monica?</h3>
                <p className="text-gray-600">Our Santa Monica plumbers typically arrive within 30-60 minutes for emergency calls and offer same-day service for non-emergency repairs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need a Santa Monica Plumber Today?</h2>
            <p className="text-xl mb-8">Don't wait for small problems to become expensive repairs. Call now for immediate assistance in Santa Monica.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Or Book Online for 10% off your first service</span>
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
                <p className="text-gray-300 mb-4">Your trusted Santa Monica plumbing partner. Fast, reliable, and professional service.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Santa Monica, CA 90401</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Santa Monica Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Plumbing</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Drain Cleaning</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Water Heaters</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Re-Piping</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</a></li>
                  <li><a href="/plumbing/downtown-los-angeles-90013/" className="hover:text-orange-400 transition-colors">Downtown LA</a></li>
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

export default SantaMonicaPlumbing;