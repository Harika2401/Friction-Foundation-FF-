export default function Footer() {
  return (
    <footer className="bg-[#062F3C] text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 pt-12 pb-6">

      {/* Top Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="https://via.placeholder.com/150x50"
          alt="logo"
          className="h-12"
        />
      </div>

      {/* Divider */}
      <div className="border-b-2 border-white mb-10"></div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-8 lg:items-start lg:justify-between">

        {/* Reach Us */}
        <div className="text-left">
          <h2 className="text-white font-semibold mb-4">Reach us</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p>+91-9032707013</p>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="break-all">frictionfoundationff@gmail.com</p>
            </div>
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Masab Tank, Hyderabad,<br />Telangana 500070.</p>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left lg:text-center">
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Design For Change</a></li>
            <li><a href="#" className="hover:text-white">What we do</a></li>
            <li><a href="#" className="hover:text-white">Get Involved</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Donate For Change</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center sm:text-left lg:text-center">
          <h2 className="text-white font-semibold mb-4">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Services</a></li>
            <li><a href="#" className="hover:text-white">Term of Use</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left lg:text-center">
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#0A3A49]/80 backdrop-blur-sm p-6 rounded-2xl sm:col-span-2 lg:col-span-1 lg:flex-shrink-0 lg:w-72">
          <h2 className="text-white font-semibold text-lg mb-4">
            Join Our Newsletter
          </h2>
          <div className="flex w-full items-center bg-[#062F3C]/80 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 px-3 py-2.5 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
            />
            <button className="whitespace-nowrap px-4 py-2.5 bg-[#041F28] text-white text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            * Will send you weekly updates for your better tool management.
          </p>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © 2026 All Rights Reserved - FrictionFoundation(FF)
      </div>

    </footer>
  );
}