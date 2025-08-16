import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const IndexSectionCustomComponents2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);

  // Slugify helper function (kept for future dynamic use)
  const slugify = (s) =>
    String(s)
      .toLowerCase()
      .replace(/<[^>]*>/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be prevented; that's ok
      });
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="relative bg-gray-900 overflow-hidden min-h-screen">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://res.cloudinary.com/dcmt0xia1/video/upload/v1755222018/header_ax2vqw.mp4" type="video/mp4" />
        </video>

        <nav className="relative z-10 flex items-center justify-between p-4 md:px-8">
          <div className="text-2xl font-bold text-white tracking-tight">
            Just
            <span style={{ color: '#FF6B00' }}>book</span>
            <span style={{ color: '#0A84FF' }}>andgo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-white hover:text-orange-400 transition-colors">Services</a>

            <Link href="/service-areas/" className="text-white hover:text-orange-400 transition-colors">
              Areas
            </Link>

            <Link href="/about/" className="text-white hover:text-orange-400 transition-colors">
              About
            </Link>

            {/* Customer Portal Button → make it a plain link to avoid window usage */}
            <a
              href="https://client.housecallpro.com/customer_portal/request-link?token=bb0cf531c471455bb1cdb50364bd033f"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors"
              data-token="bb0cf531c471455bb1cdb50364bd033f"
              data-orgname="Just-Book-and-Go"
            >
              LOG IN TO PORTAL
            </a>

            <a
              href="tel:833-413-3478"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              📞 833-413-3478
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="tel:833-413-3478"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              📞 Call
            </a>
            <button
              className="navbar-burger flex items-center text-white p-3"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
            <div
              className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
              onClick={() => setIsMenuOpen(false)}
            />
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto" aria-label="Mobile">
              <div className="flex items-center mb-8">
                <div className="text-2xl font-bold text-gray-800 tracking-tight">
                  Just
                  <span style={{ color: '#FF6B00' }}>book</span>
                  <span style={{ color: '#0A84FF' }}>andgo</span>
                </div>
                <button
                  className="navbar-close absolute top-6 right-6 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                    <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/service-areas/">
                      Service Areas
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="/about/">
                      About
                    </Link>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://client.housecallpro.com/customer_portal/request-link?token=bb0cf531c471455bb1cdb50364bd033f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      data-token="bb0cf531c471455bb1cdb50364bd033f"
                      data-orgname="Just-Book-and-Go"
                    >
                      Customer Portal
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-600 hover:bg-orange-700 rounded-xl" href="tel:833-413-3478">
                  📞 833-413-3478
                </a>
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
            <a href="tel:833-413-3478" style={{ backgroundColor: '#0A84FF' }} className="block hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors text-center">
              📞 Call 833-413-3478
            </a>
            <a href="#services" style={{ backgroundColor: '#FF6B00' }} className="block hover:bg-orange-700 text-white font-bold py-4 px-8 rounded transition-colors text-center">
              🚀 Request Service Online
            </a>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              Our Expert Home Services in Los Angeles
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plumbing */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">🚰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Plumbing Services</h3>
              <p className="text-gray-600 mb-6">
                Emergency repairs, drain cleaning, leak detection, and water heater installation. Our Los Angeles plumbers are available 24/7 to keep your water flowing.
              </p>
              <Link
                href="/plumbing/beverly-hills-90210/"
                className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded transition-colors"
                style={{ backgroundColor: '#FF6B00' }}
              >
                View Plumbing Services
              </Link>
            </div>

            {/* HVAC */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">❄️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">HVAC Services</h3>
              <p className="text-gray-600 mb-6">
                From AC installation to furnace repair, our HVAC technicians make sure your home stays comfortable year-round. Fast response across all of Los Angeles.
              </p>
              <Link
                href="/hvac/downtown-los-angeles-90021/"
                className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded transition-colors"
                style={{ backgroundColor: '#0A84FF' }}
              >
                View HVAC Services
              </Link>
            </div>

            {/* Electrical */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Electrical Services</h3>
              <p className="text-gray-600 mb-6">
                Licensed electricians for panel upgrades, lighting installs, EV chargers, and complete rewiring. Serving both residential and commercial properties.
              </p>
              <Link
                href="/electrical/glendale-91203/"
                className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded transition-colors"
                style={{ backgroundColor: '#FF6B00' }}
              >
                View Electrical Services
              </Link>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              Why Los Angeles Homeowners & Businesses Trust Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: '⚡', text: 'Fast Response Across LA & Surrounding Cities', color: '#0A84FF' },
              { icon: '✓', text: 'Licensed, Certified, & Insured Professionals', color: '#FF6B00' },
              { icon: '$', text: 'Upfront, Transparent Pricing — No Hidden Fees', color: '#0A84FF' },
              { icon: '🕐', text: '24/7 Emergency Availability', color: '#FF6B00' },
              { icon: '★', text: 'Hundreds of Happy Local Customers', color: '#0A84FF' },
            ].map(({ icon, text, color }) => (
              <div className="text-center" key={text}>
                <div style={{ backgroundColor: color }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">{text}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div style={{ backgroundColor: '#FF6B00' }} className="inline-block py-4 px-8 rounded-lg">
              <p className="text-white text-xl font-bold">📞 Call 833-413-3478 now — available day & night in Los Angeles!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              Proudly Serving Los Angeles & Surrounding Communities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: 'Beverly Hills', slug: 'beverly-hills-90210' },
              { city: 'Santa Monica', slug: 'santa-monica-90401' },
              { city: 'Pasadena', slug: 'pasadena-91101' },
              { city: 'Glendale', slug: 'glendale-91203' },
              { city: 'Burbank', slug: 'burbank-91505' },
              { city: 'Long Beach', slug: 'long-beach-90802' },
              { city: 'Torrance', slug: 'torrance-90503' },
              { city: 'Downtown LA', slug: 'downtown-los-angeles-90013' },
            ].map(({ city, slug }) => (
              <div key={slug} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{city}</h3>
                <div className="space-y-2">
                  <Link href={`/plumbing/${slug}/`} className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Plumbing Services
                  </Link>
                  <Link href={`/hvac/${slug}/`} className="block text-blue-600 hover:text-blue-800 transition-colors">
                    HVAC Services
                  </Link>
                  <Link href={`/electrical/${slug}/`} className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Electrical Services
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/service-areas/" className="text-xl text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              👉 See all service areas →
            </Link>
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
            {[
              {
                quote:
                  '"Justbookandgo saved us when our water heater burst at midnight in Beverly Hills. They had a plumber at our house in under an hour!"',
                name: '– Maria G., Beverly Hills',
              },
              {
                quote:
                  '"Our AC went out during a heatwave in Downtown LA. Their HVAC tech was professional and got us cooled down same-day."',
                name: '– David L., Los Angeles',
              },
              {
                quote:
                  '"We hired Justbookandgo electricians for a panel upgrade in Pasadena. Smooth, fast, and fairly priced."',
                name: '– Kim R., Pasadena',
              },
            ].map(({ quote, name }) => (
              <div className="bg-gray-50 rounded-lg p-6 shadow-md" key={name}>
                <div className="text-yellow-400 text-2xl mb-4">⭐ ⭐ ⭐ ⭐ ⭐</div>
                <p className="text-gray-600 mb-4">{quote}</p>
                <p className="font-semibold text-gray-800">{name}</p>
              </div>
            ))}
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
            {[
              ['Do you offer 24/7 plumbing service in Los Angeles?', 'Yes! Our licensed plumbers are available day and night for emergency repairs.'],
              ['How fast can you send an HVAC technician?', 'In most Los Angeles areas, we can arrive same-day — often within 2 hours.'],
              ['Do you service both homes and businesses?', 'Absolutely. We provide residential and commercial HVAC, plumbing, and electrical services across Los Angeles County.'],
              ['Are your electricians licensed in California?', 'Yes, all of our technicians are licensed, bonded, and insured.'],
            ].map(([q, a]) => (
              <div className="bg-white rounded-lg p-6 shadow-md" key={q}>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section style={{ backgroundColor: '#0A84FF' }} className="py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Fix It Fast? Call Now!</h2>
          <p className="text-xl mb-8">📞 Call 833-413-3478 or Book Online at Justbookandgo.com</p>
          <p className="text-lg">Serving Greater Los Angeles with Plumbing, HVAC & Electrical Experts.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="tel:833-413-3478"
              style={{ backgroundColor: '#FF6B00' }}
              className="inline-block py-4 px-8 text-white font-bold text-lg rounded hover:bg-orange-700 transition-colors"
            >
              📞 Call Now: 833-413-3478
            </a>
            <Link href="/service-areas/" className="inline-block py-4 px-8 bg-white text-blue-600 font-bold text-lg rounded hover:bg-gray-100 transition-colors">
              🚀 Request Service Online
            </Link>
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
                <span style={{ color: '#FF6B00' }}>book</span>
                <span style={{ color: '#0A84FF' }}>andgo</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted partner for all home service needs in Los Angeles. Fast, reliable, and professional.
              </p>
              <div className="text-gray-300 mb-4">
                <p>123 Main Street</p>
                <p>Los Angeles, CA 90013</p>
              </div>
              <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 tracking-tight">Los Angeles Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Plumbing Services</Link></li>
                <li><Link href="/hvac/downtown-los-angeles-90021/" className="hover:text-orange-400 transition-colors">HVAC Services</Link></li>
                <li><Link href="/electrical/glendale-91203/" className="hover:text-orange-400 transition-colors">Electrical Services</Link></li>
                <li><Link href="/emergency-services/" className="hover:text-orange-400 transition-colors">Emergency Services</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 tracking-tight">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/plumbing/beverly-hills-90210/" className="hover:text-orange-400 transition-colors">Beverly Hills</Link></li>
                <li><Link href="/plumbing/santa-monica-90401/" className="hover:text-orange-400 transition-colors">Santa Monica</Link></li>
                <li><Link href="/electrical/pasadena-91101/" className="hover:text-orange-400 transition-colors">Pasadena</Link></li>
                <li><Link href="/service-areas/" className="hover:text-orange-400 transition-colors">All Areas</Link></li>
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
