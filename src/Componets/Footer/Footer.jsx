import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-12 text-center sm:text-left">
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {/* Company Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-amber-600">NEXTGEN</h1>
          <p className="mt-2 text-base leading-relaxed">
            Based in Singapore, we’re a one-stop website agency providing
            services such as design, development, enhancement, and maintenance
            for websites. Our aim is to support clients by improving their
            website’s communication, performance, and security.
          </p>
        </div>

        {/* Addresses */}
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold mb-2">Addresses</h6>
          <p className="text-base mb-2">
            SG: 7 Temasek Boulevard #12-07 Suntec Tower One Singapore 038987
          </p>
          <p className="text-base">
            MY: 1-23-5 Menara Bangkok Bank, Berjaya Central Park, Jalan Ampang
            50450 Kuala Lumpur.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold mb-2">Services</h6>
          {[
            "Web Design",
            "Web Development",
            "Landing Page & Conversion",
            "Web Optimisation",
            "Web Maintenance",
            "Web Audit",
          ].map((service) => (
            <a
              key={service}
              className="text-base hover:text-amber-500 cursor-pointer mb-1"
            >
              {service}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold mb-2">Links</h6>
          {["About Us", "Portfolio", "Services", "Blog"].map((link) => (
            <a
              key={link}
              className="text-base hover:text-amber-500 cursor-pointer mb-1"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold mb-2">Get in Touch</h6>
          {["Contact Us", "Careers"].map((item) => (
            <a
              key={item}
              className="text-base hover:text-amber-500 cursor-pointer mb-1"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-600" />

      {/* Bottom Section */}
      <div className="sm:flex justify-between items-center text-sm">
        <aside className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <h1 className="text-2xl font-bold text-amber-600">NEXTGEN</h1>
          <p>© {new Date().getFullYear()} - All rights reserved</p>
        </aside>

        {/* Social Icons */}
        <nav className="flex justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
          {/* Twitter */}
          <a className="hover:text-amber-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ...z"></path>
            </svg>
          </a>

          {/* YouTube */}
          <a className="hover:text-amber-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245 ...z"></path>
            </svg>
          </a>

          {/* Facebook */}
          <a className="hover:text-amber-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l ...z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
