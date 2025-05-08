import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      } bg-black`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-white">NextGen</div>

        <div className="flex items-center space-x-6 text-white font-medium">
          <Link
            to="/"
            className="hover:underline hover:underline-offset-6 hover:decoration-orange-600 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="hover:underline hover:underline-offset-6 hover:decoration-orange-600 transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className="hover:underline hover:underline-offset-6 hover:decoration-orange-600 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            to="/platforms"
            className="hover:underline hover:underline-offset-6 hover:decoration-orange-600 transition-all duration-300"
          >
            Platforms
          </Link>
          <Link
            to="/about-us"
            className="hover:underline hover:underline-offset-6 hover:decoration-orange-600 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:decoration-orange-600 border bg-amber-600 px-3 py-1 transition-all duration-300 text-amber-50 border-none rounded-2xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
