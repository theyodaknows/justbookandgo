import React, { useState, useRef, useEffect } from 'react';

const IndexSectionCustomComponents2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const videoRef = useRef(null);

    // Slugify helper function
    const slugify = s => String(s).toLowerCase().replace(/<[^>]*>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented, which is fine
            });
        }
    }, []);

    return (
        <div>
  {/* Header */}
  <header className="relative bg-gray-900 overflow-hidden min-h-screen">
    <video ref={videoRef} muted loop className="absolute inset-0 w-full h-full object-cover opacity-40">
      <source src="https://res.cloudinary.com/dcmt0xia1/video/upload/v1755222018/header_ax2vqw.mp4" type="video/mp4" />
    </video>
    <nav className="relative z-10 flex items-center justify-between p-4 md:px-8">
      <div className="text-2xl font-bold text-white tracking-tight">
        Just
        <span style={{color: '#FF6B00'}}>book</span>
        <span style={{color: '#0A84FF'}}>andgo</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#services" className="text-white hover:text-orange-400 transition-colors">Services</a>
        <a href="/service-areas/" className="text-white hover:text-orange-400 transition-colors">Areas</a>
        <a href="#" className="text-white hover:text-orange-400 transition-colors">About</a>
        
        {/* Customer Portal Button */}
        <button 
          data-token='bb0cf531c471455bb1cdb50364bd033f' 
          data-orgname='Just-Book-and-Go' 
          onClick={() => window.open('https://client.housecallpro.com/customer_portal/request-link?token=bb0cf531c471455bb1cdb50364bd033f', '_blank')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors"
        >
          LOG IN TO PORTAL
        </button>
        
        <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">📞 833-413-3478</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">📞 Call</a>
        <button 
          className="navbar-burger flex items-center text-white p-3"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div 
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <div className="text-2xl font-bold text-gray-800 tracking-tight">
              Just
              <span style={{color: '#FF6B00'}}>book</span>
              <span style={{color: '#0A84FF'}}>andgo</span>
            </div>
            <button 
              className="navbar-close absolute top-6 right-6 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#services">Services</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/service-areas/">Service Areas</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About</a>
              </li>
              <li className="mb-1">
                <button 
                  data-token='bb0cf531c471455bb1cdb50364bd033f' 
                  data-orgname='Just-Book-and-Go' 
                  onClick={() => window.open('https://client.housecallpro.com/customer_portal/request-link?token=bb0cf531c471455bb1cdb50364bd033f', '_blank')}
                  className="block w-full text-left p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  Customer Portal
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-600 hover:bg-orange-700 rounded-xl" href="tel:833-413-3478">📞 833-413-3478</a>
            </div>
          </div>
        </nav>
      </div>
    </nav>
    {/* Hero Section */}
    <div className="relative z-10 px-4 py-16 md:py-32 text-center flex flex-col justify-center min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
        👉 Plumbing, HVAC & Electrical Services in Los Angeles — Book in Seconds!
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
        Trusted, licensed professionals serving homes and businesses across Los Angeles. Same-day service, upfront pricing, and guaranteed work.
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
        <a href="tel:833-413-3478" style={{backgroundColor: '#0A84FF'}} className="block hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors text-center">📞 Call 833-413-3478</a>
        <a href="#services" style={{backgroundColor: '#FF6B00'}} className="block hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors text-center">🚀 Request Service Online</a>
      </div>
      {/* Trust Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-white text-lg">
        <span>Licensed & Insured</span>
        <span className="hidden md:inline">•</span>
        <span>24/7 Emergency Repairs</span>
        <span className="hidden md:inline">•</span>
        <span>5-Star Rated</span>
      </div>
    </div>
  </header>

  {/* Service Overview Section */}
  <section id="services" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Our Expert Home Services in Los Angeles</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Plumbing */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">🚰</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Plumbing Services</h3>
          <p className="text-gray-600 mb-6">Emergency repairs, drain cleaning, leak detection, and water heater installation. Our Los Angeles plumbers are available 24/7 to keep your water flowing.</p>
          <a href="/plumbing/beverly-hills-90210/" style={{backgroundColor: '#FF6B00'}} className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded hover:bg-orange-700 transition-colors">View Plumbing Services</a>
        </div>
        {/* HVAC */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">❄️</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">HVAC Services</h3>
          <p className="text-gray-600 mb-6">From AC installation to furnace repair, our HVAC technicians make sure your home stays comfortable year-round. Fast response across all of Los Angeles.</p>
          <a href="/hvac/downtown-los-angeles-90021/" style={{backgroundColor: '#0A84FF'}} className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded hover:bg-blue-700 transition-colors">View HVAC Services</a>
        </div>
        {/* Electrical */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">⚡</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Electrical Services</h3>
          <p className="text-gray-600 mb-6">Licensed electricians for panel upgrades, lighting installs, EV chargers, and complete rewiring. Serving both residential and commercial properties.</p>
          <a href="/electrical/glendale-91203/" style={{backgroundColor: '#FF6B00'}} className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded hover:bg-orange-700 transition-colors">View Electrical Services</a>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-xl text-gray-600 mb-6">👉 Explore our services and book today — Justbookandgo makes it simple.</p>
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Why Los Angeles Homeowners & Businesses Trust Us</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="text-center">
          <div style={{backgroundColor: '#0A84FF'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Fast Response Across LA & Surrounding Cities</h3>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#FF6B00'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">✓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Licensed, Certified, & Insured Professionals</h3>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#0A84FF'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">$</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Upfront, Transparent Pricing — No Hidden Fees</h3>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#FF6B00'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">🕐</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">24/7 Emergency Availability</h3>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#0A84FF'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">★</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Hundreds of Happy Local Customers</h3>
        </div>
      </div>
      <div className="text-center mt-12">
        <div style={{backgroundColor: '#FF6B00'}} className="inline-block py-4 px-8 rounded-lg">
          <p className="text-white text-xl font-bold">📞 Call 833-413-3478 now — available day & night in Los Angeles!</p>
        </div>
      </div>
    </div>
  </section>

  {/* Featured Service Areas */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Proudly Serving Los Angeles & Surrounding Communities</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Beverly Hills</h3>
          <div className="space-y-2">
            <a href="/plumbing/beverly-hills-90210/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/beverly-hills-90210/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/beverly-hills-90210/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Santa Monica</h3>
          <div className="space-y-2">
            <a href="/plumbing/santa-monica-90401/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/santa-monica-90401/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/santa-monica-90401/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Pasadena</h3>
          <div className="space-y-2">
            <a href="/plumbing/pasadena-91101/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/pasadena-91101/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/pasadena-91101/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Glendale</h3>
          <div className="space-y-2">
            <a href="/plumbing/glendale-91203/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/glendale-91203/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/glendale-91203/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Burbank</h3>
          <div className="space-y-2">
            <a href="/plumbing/burbank-91505/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/burbank-91505/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/burbank-91505/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Long Beach</h3>
          <div className="space-y-2">
            <a href="/plumbing/long-beach-90802/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/long-beach-90813/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/long-beach-90806/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Torrance</h3>
          <div className="space-y-2">
            <a href="/plumbing/torrance-90503/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/torrance-90501/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/torrance-90505/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Downtown LA</h3>
          <div className="space-y-2">
            <a href="/plumbing/downtown-los-angeles-90013/" className="block text-blue-600 hover:text-blue-800 transition-colors">Plumbing Services</a>
            <a href="/hvac/downtown-los-angeles-90021/" className="block text-blue-600 hover:text-blue-800 transition-colors">HVAC Services</a>
            <a href="/electrical/downtown-los-angeles-90013/" className="block text-blue-600 hover:text-blue-800 transition-colors">Electrical Services</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a href="/service-areas/" className="text-xl text-blue-600 hover:text-blue-800 font-semibold transition-colors">👉 See all service areas →</a>
      </div>
    </div>
  </section>

  {/* Customer Testimonials */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">What Our Customers Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="text-yellow-400 text-2xl mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <p className="text-gray-600 mb-4">"Justbookandgo saved us when our water heater burst at midnight in Beverly Hills. They had a plumber at our house in under an hour!"</p>
          <p className="font-semibold text-gray-800">– Maria G., Beverly Hills</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="text-yellow-400 text-2xl mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <p className="text-gray-600 mb-4">"Our AC went out during a heatwave in Downtown LA. Their HVAC tech was professional and got us cooled down same-day."</p>
          <p className="font-semibold text-gray-800">– David L., Los Angeles</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <div className="text-yellow-400 text-2xl mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <p className="text-gray-600 mb-4">"We hired Justbookandgo electricians for a panel upgrade in Pasadena. Smooth, fast, and fairly priced."</p>
          <p className="font-semibold text-gray-800">– Kim R., Pasadena</p>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Do you offer 24/7 plumbing service in Los Angeles?</h3>
          <p className="text-gray-600">Yes! Our licensed plumbers are available day and night for emergency repairs.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">How fast can you send an HVAC technician?</h3>
          <p className="text-gray-600">In most Los Angeles areas, we can arrive same-day — often within 2 hours.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Do you service both homes and businesses?</h3>
          <p className="text-gray-600">Absolutely. We provide residential and commercial HVAC, plumbing, and electrical services across Los Angeles County.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Are your electricians licensed in California?</h3>
          <p className="text-gray-600">Yes, all of our technicians are licensed, bonded, and insured.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Closing CTA Section */}
  <section style={{backgroundColor: '#0A84FF'}} className="py-16 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Fix It Fast? Call Now!</h2>
      <p className="text-xl mb-8">📞 Call 833-413-3478 or Book Online at Justbookandgo.com</p>
      <p className="text-lg">Serving Greater Los Angeles with Plumbing, HVAC & Electrical Experts.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
        <a href="tel:833-413-3478" style={{backgroundColor: '#FF6B00'}} className="inline-block py-4 px-8 text-white font-bold text-lg rounded hover:bg-orange-700 transition-colors">📞 Call Now: 833-413-3478</a>
        <a href="/service-areas/" className="inline-block py-4 px-8 bg-white text-blue-600 font-bold text-lg rounded hover:bg-gray-100 transition-colors">🚀 Request Service Online</a>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="text-2xl font-bold mb-4 tracking-tight">
            Just
            <span style={{color: '#FF6B00'}}>book</span>
            <span style={{color: '#0A84FF'}}>andgo</span>
          </div>
          <p className="text-gray-300 mb-4">Your trusted partner for all home service needs in Los Angeles. Fast, reliable, and professional.</p>
          <div className="text-gray-300 mb-4">
            <p>123 Main Street</p>
            <p>Los Angeles, CA 90013</p>
          </div>
          <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tight">Los Angeles Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Plumbing Services</a></li>
            <li><a href="/hvac/downtown-los-angeles-90021/" className="hover:text-orange-400 transition-colors">HVAC Services</a></li>
            <li><a href="/electrical/glendale-91203/" className="hover:text-orange-400 transition-colors">Electrical Services</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tight">Service Areas</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</a></li>
            <li><a href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</a></li>
            <li><a href="/electrical/pasadena-91101/" className="hover:text-orange-400 transition-colors">Pasadena</a></li>
            <li><a href="/service-areas/" className="hover:text-orange-400 transition-colors">All Areas</a></li>
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
          <div className="bg-white rounded px-3 py-2 mb-2">
            <span className="text-blue-600 font-bold text-sm">VISA</span>
          </div>
          <div className="bg-white rounded px-3 py-2 mb-2">
            <span className="text-red-600 font-bold text-sm">MasterCard</span>
          </div>
          <div className="bg-white rounded px-3 py-2 mb-2">
            <span className="text-blue-800 font-bold text-sm">AMEX</span>
          </div>
          <div className="bg-white rounded px-3 py-2 mb-2">
            <span className="text-orange-600 font-bold text-sm">Discover</span>
          </div>
          <div className="bg-white rounded px-3 py-2 mb-2">
            <span className="text-gray-800 font-bold text-sm">Cash</span>
          </div>
          <div className="bg-white rounded px-3 py-2 mb-2">
            <span className="text-gray-800 font-bold text-sm">Check</span>
          </div>
        </div>
      </div>
      
      {/* Legal Links */}
      <div className="border-t border-gray-700 pt-8 mb-8 text-center">
        <div className="flex justify-center space-x-6 text-sm">
          <a href="/privacy-policy/" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
          <a href="/terms-and-conditions/" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</a>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>© 2024 Justbookandgo. All rights reserved. | Licensed, Bonded & Insured in Los Angeles County</p>
      </div>
    </div>
  </footer>
</div>


    );
};

export default IndexSectionCustomComponents2;