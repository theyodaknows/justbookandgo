import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      city: 'Downtown Los Angeles',
      zips: ['90013', '90014', '90021'],
      description: 'Industrial/Wholesale district with heavy commercial mix and recurring facilities needs.',
      services: ['plumbing', 'hvac', 'electrical'],
      neighborhoods: ['Arts District', 'Fashion District', 'Historic Core']
    },
    {
      city: 'Beverly Hills',
      zips: ['90210', '90211', '90212'],
      description: 'High-income residential area requiring premium service and luxury fixture expertise.',
      services: ['plumbing', 'hvac', 'electrical'],
      neighborhoods: ['Trousdale', 'BH Flats', 'The Hills']
    },
    {
      city: 'Santa Monica',
      zips: ['90401', '90402', '90403', '90404', '90405'],
      description: 'Large daytime population from tourism and offices creating steady residential and commercial demand.',
      services: ['plumbing', 'hvac', 'electrical'],
      neighborhoods: ['Third Street Promenade', 'Santa Monica Pier', 'Ocean Park']
    },
    {
      city: 'Glendale',
      zips: ['91203', '91204', '91205'],
      description: 'Significant employment base with mixed-use development and corporate footprints.',
      services: ['plumbing', 'hvac', 'electrical'],
      neighborhoods: ['Downtown Glendale', 'Adams Hill', 'Rossmoyne']
    },
    {
      city: 'Burbank',
      zips: ['91502', '91503', '91504', '91505'],
      description: 'Media Capital with studios and offices requiring frequent MEP maintenance.',
      services: ['plumbing', 'hvac', 'electrical'],
      neighborhoods: ['Media District', 'Magnolia Park', 'Rancho']
    },
    {
      city: 'Pasadena',
      zips: ['91101', '91103', '91104', '91105', '91106', '91107'],
      description: 'Older housing stock and institutions like Caltech and hospitals with ongoing MEP needs.',
      services: ['plumbing', 'hvac', 'electrical'],
      neighborhoods: ['Old Pasadena', 'South Lake', 'Caltech Area']
    }
  ];

  return (
    <>
      <Head>
        <title>Service Areas | Los Angeles Plumbing, HVAC & Electrical | Justbookandgo</title>
        <meta name="description" content="Professional plumbing, HVAC, and electrical services across Los Angeles County. Serving Downtown LA, Beverly Hills, Santa Monica, Glendale, Burbank, and Pasadena." />
        <meta name="keywords" content="Los Angeles plumber, LA HVAC, electrical services LA, service areas, Beverly Hills plumbing, Santa Monica HVAC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://justbookandgo.com/service-areas/" />
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

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Los Angeles Service Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Professional plumbing, HVAC, and electrical services across Los Angeles County. Licensed, insured, and ready to serve your community.
            </p>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Areas We Serve</h2>
              <p className="text-xl text-gray-600">High-quality home services across Los Angeles County's most important markets</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.city}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">ZIP Codes:</h4>
                    <p className="text-sm text-gray-600">{area.zips.join(', ')}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Areas:</h4>
                    <p className="text-sm text-gray-600">{area.neighborhoods.join(', ')}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {service.charAt(0).toUpperCase() + service.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {area.services.map((service, serviceIndex) => {
                      const citySlug = area.city.toLowerCase().replace(/\s+/g, '-');
                      const primaryZip = area.zips[0];
                      return (
                        <Link 
                          key={serviceIndex}
                          href={service === 'hvac' && citySlug === 'downtown-los-angeles' ? `/hvac/downtown-los-angeles-90021/` : `/${service}/${citySlug}-${primaryZip}/`}
                          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition-colors"
                        >
                          {service.charAt(0).toUpperCase() + service.slice(1)} in {area.city}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Complete Los Angeles County Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial</h3>
                <p className="text-gray-600">Office buildings, restaurants, retail spaces, and industrial facilities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Residential</h3>
                <p className="text-gray-600">Single-family homes, condos, apartments, and luxury properties.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency</h3>
                <p className="text-gray-600">24/7 emergency response across all service areas.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance</h3>
                <p className="text-gray-600">Scheduled maintenance and preventive service programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Find your area above or call now to speak with a local service professional.</p>
            <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors">
              📞 Call Now: 833-413-3478
            </a>
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
                <p className="text-gray-300 mb-4">Professional home services across Los Angeles County. Licensed, insured, and ready to serve.</p>
                <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Plumbing</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">HVAC</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Electrical</a></li>
                  <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Services</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Top Areas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</Link></li>
                  <li><Link href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</Link></li>
                  <li><Link href="/plumbing/downtown-los-angeles-90013/" className="hover:text-orange-400 transition-colors">Downtown LA</Link></li>
                  <li><Link href="/plumbing/glendale-91203/" className="hover:text-orange-400 transition-colors">Glendale</Link></li>
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

export default ServiceAreas;