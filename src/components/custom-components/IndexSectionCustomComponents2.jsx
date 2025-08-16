import React from 'react';

const IndexSectionCustomComponents2 = () => {
    return (
        <div>
  {/* Header */}
  <header className="relative bg-gray-900 overflow-hidden min-h-screen">
    <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-40">
      <source src="https://res.cloudinary.com/dcmt0xia1/video/upload/v1755222018/header_ax2vqw.mp4" type="video/mp4" />
    </video>
    <nav className="relative z-10 flex items-center justify-between p-4 md:px-8">
      <div className="text-2xl font-bold text-white tracking-tight">
        Just
        <span style={{color: '#FF6B00'}}>book</span>
        <span style={{color: '#0A84FF'}}>andgo</span>
      </div>
      <a href="tel:833-413-3478" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">📞 833-413-3478</a>
    </nav>
    {/* Hero Section */}
    <div className="relative z-10 px-4 py-16 md:py-32 text-center flex flex-col justify-center min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
        24/7 Licensed Plumbers in Downtown Los Angeles
        <br />
        <span style={{color: '#FF6B00'}}>Fast, Affordable Service</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
        Need a plumber in Downtown L.A. today? Justbookandgo connects you instantly with licensed professionals ready to tackle leaks, clogs, and repairs in 90013, 90014, and 90021.
      </p>
      {/* Call to Action */}
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Get a Free Quote in Minutes</h2>
        <p className="text-gray-600 mb-6">Call now to speak with a Downtown L.A. service professional and get your free quote over the phone.</p>
        <a href="tel:833-413-3478" style={{backgroundColor: '#0A84FF'}} className="block w-full hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors text-center mb-3">📞 Call Now: 833-413-3478</a>
        <p className="text-sm text-gray-500">Book online and get 10% off your first service</p>
      </div>
    </div>
  </header>
  {/* Services Section */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Expert Services in Downtown Los Angeles</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional home services you can trust. Available 24/7 for emergency calls in Downtown L.A.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Plumbing */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <img className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" alt="Plumbing Services Downtown LA" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Plumbing Services in Downtown L.A.</h3>
          <p className="text-gray-600 mb-6">From leaky faucets to major pipe repairs, our licensed Downtown L.A. plumbers handle it all.</p>
          <ul className="text-sm text-gray-600 text-left mb-6">
            <li className="mb-2">• Emergency leak repairs</li>
            <li className="mb-2">• Drain cleaning &amp; unclogging</li>
            <li className="mb-2">• Fixture installation</li>
            <li className="mb-2">• Water heater services</li>
          </ul>
          <a href="tel:833-413-3478" style={{backgroundColor: '#FF6B00'}} className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded hover:bg-orange-700 transition-colors">Call Now: 833-413-3478</a>
        </div>
        {/* HVAC */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <img className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" alt="HVAC Services Downtown LA" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">HVAC Installation Downtown L.A.</h3>
          <p className="text-gray-600 mb-6">Keep your Downtown L.A. home comfortable year-round with our heating and cooling experts.</p>
          <ul className="text-sm text-gray-600 text-left mb-6">
            <li className="mb-2">• AC installation &amp; repair</li>
            <li className="mb-2">• Heating system service</li>
            <li className="mb-2">• Duct cleaning &amp; sealing</li>
            <li className="mb-2">• Energy efficiency upgrades</li>
          </ul>
          <a href="tel:833-413-3478" style={{backgroundColor: '#0A84FF'}} className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded hover:bg-blue-700 transition-colors">Call Now: 833-413-3478</a>
        </div>
        {/* Electrical */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <img className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" alt="Electrical Services Arts District" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Electrical Repairs Arts District</h3>
          <p className="text-gray-600 mb-6">Safe, reliable electrical work from certified electricians serving the Arts District and Downtown L.A.</p>
          <ul className="text-sm text-gray-600 text-left mb-6">
            <li className="mb-2">• Outlet &amp; switch installation</li>
            <li className="mb-2">• Panel upgrades</li>
            <li className="mb-2">• Lighting installation</li>
            <li className="mb-2">• Electrical troubleshooting</li>
          </ul>
          <a href="tel:833-413-3478" style={{backgroundColor: '#FF6B00'}} className="inline-block w-full py-3 px-6 text-white text-center font-semibold rounded hover:bg-orange-700 transition-colors">Call Now: 833-413-3478</a>
        </div>
      </div>
    </div>
  </section>
  {/* Why Choose Us */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Why Choose Justbookandgo in Downtown L.A.?</h2>
        <p className="text-xl text-gray-600">We make getting home services in Downtown Los Angeles simple, fast, and reliable.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div style={{backgroundColor: '#0A84FF'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Local L.A. Technicians</h3>
          <p className="text-gray-600">We're nearby and ready. Fast arrival times in Downtown Los Angeles and surrounding ZIPs.</p>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#FF6B00'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">✓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Licensed & Vetted</h3>
          <p className="text-gray-600">Licensed, insured, and vetted professionals serving Downtown L.A.</p>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#0A84FF'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">$</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Fair Pricing</h3>
          <p className="text-gray-600">Upfront pricing with no hidden fees. Get quotes before we start.</p>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#FF6B00'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">★</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Guaranteed</h3>
          <p className="text-gray-600">100% satisfaction guarantee on all work. We stand behind our service.</p>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ Section */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">Common questions about our Downtown Los Angeles services</p>
      </div>
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Do you provide emergency plumbing services in Downtown Los Angeles?</h3>
          <p className="text-gray-600">Yes, we offer 24/7 emergency plumbing services throughout Downtown Los Angeles, including zip codes 90013, 90014, and 90021. Our licensed plumbers can respond quickly to urgent repairs.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">What areas of Downtown Los Angeles do you serve?</h3>
          <p className="text-gray-600">We serve all of Downtown Los Angeles including the Arts District, Little Tokyo, Chinatown, and surrounding neighborhoods. We also extend our services to Glendale and Culver City.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">How quickly can you arrive for service calls in Downtown L.A.?</h3>
          <p className="text-gray-600">Our local Downtown Los Angeles technicians typically arrive within 30-60 minutes for emergency calls and can schedule same-day service for non-emergency repairs.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Are your technicians licensed to work in Downtown Los Angeles?</h3>
          <p className="text-gray-600">Absolutely! All our plumbers, HVAC technicians, and electricians are fully licensed, insured, and bonded to work throughout Los Angeles County, including Downtown L.A.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Service Areas */}
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Service Areas</h2>
        <p className="text-xl text-gray-600">Proudly serving Downtown Los Angeles and surrounding communities</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Downtown Los Angeles</h3>
          <ul className="text-gray-600 space-y-1">
            <li>90013 - Arts District</li>
            <li>90014 - Historic Core</li>
            <li>90021 - Fashion District</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Nearby Neighborhoods</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Little Tokyo</li>
            <li>Chinatown</li>
            <li>Bunker Hill</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Extended Areas</h3>
          <ul className="text-gray-600 space-y-1">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Glendale</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Culver City</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Hollywood</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section style={{backgroundColor: '#0A84FF'}} className="py-16 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 tracking-tight">Need Service in Downtown L.A. Today?</h2>
      <p className="text-xl mb-8">Don't wait for small problems to become big ones. Call now for immediate assistance in Downtown Los Angeles.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href="tel:833-413-3478" style={{backgroundColor: '#FF6B00'}} className="inline-block py-4 px-8 text-white font-bold text-lg rounded hover:bg-orange-700 transition-colors">📞 Call Now: 833-413-3478</a>
        <span className="text-white">Available 24/7 for Emergency Service</span>
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
          <p className="text-gray-300 mb-4">Your trusted partner for all home service needs in Downtown Los Angeles. Fast, reliable, and professional.</p>
          <div className="text-gray-300 mb-4">
            <p>123 Main Street</p>
            <p>Downtown Los Angeles, CA 90013</p>
          </div>
          <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tight">Downtown L.A. Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Downtown L.A. Plumbing</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">HVAC Installation</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Arts District Electrical</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tight">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Service Areas</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Reviews</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tight">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Available 24/7</li>
            <li>Licensed &amp; Insured</li>
            <li>Same-Day Service</li>
            <li>Free Estimates</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>© 2024 Justbookandgo. All rights reserved. | Licensed, Bonded &amp; Insured in Los Angeles County</p>
      </div>
    </div>
  </footer>
</div>


    );
};

export default IndexSectionCustomComponents2;