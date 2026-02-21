import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoVideo from "../assets/iclv.mp4";

const BLUE = "#1a4380";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem =
    "relative text-white font-medium tracking-wide hover:text-slate-200 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-white after:transition-all hover:after:w-full";

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md transition-all duration-300">

      {/* ================= TOP WHITE BAR ================= */}
      <div className="bg-white border-b relative transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto px-4 flex items-center justify-center relative transition-all duration-300 ${
            scrolled ? "h-20 md:h-24" : "h-28 md:h-32"
          }`}
        >

          {/* Centered Logo Video */}
          <video
            src={logoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-contain transition-all duration-300"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 text-2xl text-[#1a4380]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>
      </div>

      {/* ================= BLUE NAV BAR (Desktop Only) ================= */}
      <div
        style={{ backgroundColor: BLUE }}
        className="hidden md:block transition-all duration-300"
      >
        <div
          className={`max-w-7xl mx-auto px-12 flex justify-center items-center gap-12 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <Link className={navItem} to="/">Home</Link>
          <Link className={navItem} to="/about">About</Link>
          <Link className={navItem} to="/results">Results</Link>
          <Link className={navItem} to="/courses">Courses</Link>
          <Link className={navItem} to="/faculty">Our Faculty</Link>
          <Link className={navItem} to="/contact">Contact Us</Link>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col text-[#1a4380] font-semibold text-lg p-6 space-y-5">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/results" onClick={() => setMenuOpen(false)}>Results</Link>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link to="/faculty" onClick={() => setMenuOpen(false)}>Our Faculty</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}

    </nav>
  );
}