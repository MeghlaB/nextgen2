import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      } bg-black`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-white">NextGen</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 text-white space-y-3 text-lg font-medium">
          <NavLinks toggleMenu={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

// Reusable NavLinks component
function NavLinks({ toggleMenu }) {
  const linkClass =
    "hover:underline hover:underline-offset-6 hover:decoration-orange-600 transition-all duration-300 block";

  return (
    <>
      <Link to="/" onClick={toggleMenu} className={linkClass}>
        Home
      </Link>
      <Link to="/portfolio" onClick={toggleMenu} className={linkClass}>
        Portfolio
      </Link>
      <Link to="/services" onClick={toggleMenu} className={linkClass}>
        Services
      </Link>
      <Link to="/platforms" onClick={toggleMenu} className={linkClass}>
        Platforms
      </Link>
      <Link to="/about-us" onClick={toggleMenu} className={linkClass}>
        About Us
      </Link>
      <Link
        to="/contact"
        onClick={toggleMenu}
        className="hover:decoration-orange-600 bg-amber-600 px-3 py-1 transition-all duration-300 text-amber-50 border-none rounded-2xl block w-fit"
      >
        Contact
      </Link>
    </>
  );
}

export default Navbar;
