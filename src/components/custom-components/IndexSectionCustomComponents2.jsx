import React from 'react';

const IndexSectionCustomComponents2 = () => {
    return (
        <div>
  {/* Header */}
  <header className="relative bg-gray-900 overflow-hidden">
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
    <div className="relative z-10 px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
        Fast &amp; Reliable
        <br />
        <span style={{color: '#FF6B00'}}>Home Services</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">Get instant quotes for plumbing, HVAC, and electrical services. Book trusted professionals in minutes.</p>
      {/* Call to Action */}
      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">Call now to speak with a service professional and get your free quote over the phone.</p>
        <a href="tel:833-413-3478" style={{backgroundColor: '#0A84FF'}} className="block w-full hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition-colors text-center">📞 Call Now: 833-413-3478</a>
      </div>
    </div>
  </header>
  {/* Services Section */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Our Expert Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional home services you can trust. Available 24/7 for emergency calls.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Plumbing */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <img className="w-20 h-20 mx-auto mb-6 rounded-full" src="https://placehold.co/80x80/FF6B00/FFFFFF" alt="Plumbing Services" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Plumbing</h3>
          <p className="text-gray-600 mb-6">From leaky faucets to major pipe repairs, our licensed plumbers handle it all.</p>
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
          <img className="w-20 h-20 mx-auto mb-6 rounded-full" src="https://placehold.co/80x80/0A84FF/FFFFFF" alt="HVAC Services" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">HVAC</h3>
          <p className="text-gray-600 mb-6">Keep your home comfortable year-round with our heating and cooling experts.</p>
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
          <img className="w-20 h-20 mx-auto mb-6 rounded-full" src="https://placehold.co/80x80/FF6B00/FFFFFF" alt="Electrical Services" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">Electrical</h3>
          <p className="text-gray-600 mb-6">Safe, reliable electrical work from certified electricians you can trust.</p>
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
        <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Why Choose Justbookandgo?</h2>
        <p className="text-xl text-gray-600">We make getting home services simple, fast, and reliable.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div style={{backgroundColor: '#0A84FF'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Fast Response</h3>
          <p className="text-gray-600">Same-day service available. Emergency calls answered 24/7.</p>
        </div>
        <div className="text-center">
          <div style={{backgroundColor: '#FF6B00'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">✓</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Licensed Pros</h3>
          <p className="text-gray-600">All technicians are licensed, insured, and background-checked.</p>
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
  {/* CTA Section */}
  <section style={{backgroundColor: '#0A84FF'}} className="py-16 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 tracking-tight">Need Service Today?</h2>
      <p className="text-xl mb-8">Don't wait for small problems to become big ones. Call now for immediate assistance.</p>
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
          <p className="text-gray-300 mb-4">Your trusted partner for all home service needs. Fast, reliable, and professional.</p>
          <a href="tel:833-413-3478" className="text-orange-400 font-bold">📞 833-413-3478</a>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-tight">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Plumbing</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">HVAC</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Electrical</a></li>
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
        <p>© 2024 Justbookandgo. All rights reserved. | Licensed, Bonded &amp; Insured</p>
      </div>
    </div>
  </footer>
</div>


    );
};

export default IndexSectionCustomComponents2;