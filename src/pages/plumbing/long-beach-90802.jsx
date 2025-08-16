import React from 'react';
import Head from 'next/head';

const LongBeachPlumbing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Justbookandgo Plumbing Services",
    "image": "https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg",
    "@id": "https://justbookandgo.com/plumbing/long-beach-90802/",
    "url": "https://justbookandgo.com/plumbing/long-beach-90802/",
    "telephone": "833-413-3478",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Long Beach",
      "addressRegion": "CA",
      "postalCode": "90802",
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
        <title>Long Beach Plumbers (90802) | 24/7 Licensed & Insured</title>
        <meta name="description" content="Need a plumber in Long Beach? 24/7 leak repair, drain cleaning & installs in 90802–90815. Call 833-413-3478." />
        <meta name="keywords" content="Long Beach plumber, plumbing 90802, emergency plumber Long Beach, drain cleaning, water heater repair" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/plumbing/long-beach-90802/" />
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
              24/7 Licensed Plumbers in Long Beach (90802–90815)
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From Belmont Shore to Downtown Long Beach, Justbookandgo – Long Beach Plumbing connects you with licensed, insured pros for emergency repairs, fixture installs, and re-pipes. Call 833-413-3478.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Get a Free Quote in Minutes</h2>
              <p className="text-gray-600 mb-6">Call now to speak with a Long Beach plumbing professional.</p>
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Long Beach Plumbing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Leak Detection & Repair</h3>
                <p className="text-gray-600 mb-4">Slab leaks, fixture leaks, and main line repairs with precision detection equipment.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Long Beach plumber detecting slab leak in 90802 home" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Electronic leak detection</li>
                  <li>• Slab leak repair</li>
                  <li>• Fixture leak fixes</li>
                  <li>• Main line repairs</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Drain Cleaning & Hydro-Jetting</h3>
                <p className="text-gray-600 mb-4">Root intrusions and grease buildup cleared with professional hydro-jetting equipment.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-pressure water jetting</li>
                  <li>• Root removal</li>
                  <li>• Grease trap cleaning</li>
                  <li>• Hair clog removal</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Water Heater Install/Repair</h3>
                <p className="text-gray-600 mb-4">Tank and tankless water heater service for Long Beach homes and businesses.</p>
                <img className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Long Beach plumber installing tankless water heater in Belmont Shore" />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tank water heaters</li>
                  <li>• Tankless installations</li>
                  <li>• Emergency repairs</li>
                  <li>• Energy-efficient upgrades</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Whole-Home Re-Pipe</h3>
                <p className="text-gray-600 mb-4">Complete copper and PEX re-piping services for Long Beach properties.</p>
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">HOA & Commercial Plumbing</h3>
                <p className="text-gray-600 mb-4">Specialized services for Long Beach HOAs and commercial properties.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-unit expertise</li>
                  <li>• Scheduled maintenance</li>
                  <li>• Emergency response</li>
                  <li>• Bulk service discounts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us in Long Beach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Local Pros</h3>
                <p className="text-gray-600">Long Beach-based plumbers who know the area and local codes.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Clean Finishes</h3>
                <p className="text-gray-600">Professional installations with attention to detail and cleanup.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Same-Day & After-Hours</h3>
                <p className="text-gray-600">Same-day service and after-hours appointments available.</p>
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

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Long Beach Areas We Serve</h2>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26427.742661736546!2d-118.1937!3d33.7701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd313158b6d5d7%3A0x1e3c3d8b0e5b5c5d!2sLong%20Beach%2C%20CA%2090802!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Long Beach 90802 Service Area Map"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Primary Service ZIPs</h3>
                <p className="text-gray-600">90802, 90803, 90804, 90805, 90806, 90807, 90808, 90815</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Neighborhoods</h3>
                <p className="text-gray-600">Belmont Shore, Downtown Long Beach, Naples, Alamitos Beach</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Also Serving</h3>
                <p className="text-gray-600">
                  <a href="/hvac/torrance-90501/" className="text-blue-600 hover:text-blue-800">Torrance</a> | 
                  <a href="/plumbing/santa-monica-90401/" className="text-blue-600 hover:text-blue-800 ml-2">Santa Monica</a>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you work on multi-unit buildings in Long Beach?</h3>
                <p className="text-gray-600">Yes—we're HOA specialists with experience in multi-unit buildings throughout Long Beach 90802-90815.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can you install tankless water heaters?</h3>
                <p className="text-gray-600">Yes, we install all major tankless brands with permits included for Long Beach properties.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What's your response time in Long Beach?</h3>
                <p className="text-gray-600">Our Long Beach plumbers typically arrive within 30-60 minutes for emergency calls in the 90802-90815 area.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide 24/7 emergency service?</h3>
                <p className="text-gray-600">Yes, we offer 24/7 emergency plumbing services throughout Long Beach for urgent repairs and water emergencies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Need a Long Beach Plumber Today?</h2>
            <p className="text-xl mb-8">Don't wait for small problems to become expensive repairs. Call now for immediate assistance in Long Beach.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
                📞 Call Now: 833-413-3478
              </a>
              <span className="text-white">Or book online for 10% off your first service</span>
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
                <p className="text-gray-300 mb-4">Your trusted Long Beach plumbing partner. Fast, reliable, and professional service.</p>
                <div className="text-gray-300 mb-4">
                  <p>123 Main Street</p>
                  <p>Long Beach, CA 90802</p>
                </div>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Long Beach Services</h3>
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
                  <li><a href="/hvac/torrance-90501/" className="hover:text-orange-400 transition-colors">Torrance</a></li>
                  <li><a href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</a></li>
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

export default LongBeachPlumbing;