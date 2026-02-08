import { Link } from "react-router-dom";
import { useState } from "react";
import logoVideo from "../assets/iclv.mp4";

const BLUE = "#1a4380"; // your blue color

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem =
    "relative text-white font-medium tracking-wide hover:text-slate-200 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-white after:transition-all hover:after:w-full";

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md">

      {/* ================= TOP WHITE BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-2 grid grid-cols-3 items-center">

          {/* Left blank */}
          <div />

          {/* Center video logo */}
          <div className="flex justify-center">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-20 md:h-24 object-contain"
            />
          </div>

          {/* Right blank */}
          <div />

        </div>
      </div>

      {/* ================= BLUE NAV BAR ================= */}
      <div style={{ backgroundColor: BLUE }}>
        <div className="max-w-7xl mx-auto px-12 py-3 flex justify-center items-center">

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">

            <Link className={navItem} to="/">Home</Link>
            <Link className={navItem} to="/about">About</Link>
            <Link className={navItem} to="/results">Results</Link>
            <Link className={navItem} to="/courses">Courses</Link>
            <Link className={navItem} to="/faculty">Our Faculty</Link>
            <Link className={navItem} to="/contact">Contact Us</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-[#1a4380] font-medium">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/results" onClick={() => setMenuOpen(false)}>Results</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/faculty" onClick={() => setMenuOpen(false)}>Our Faculty</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

        </div>
      )}

    </nav>
  );
}
