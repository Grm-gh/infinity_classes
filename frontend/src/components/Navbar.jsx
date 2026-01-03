import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo_infinity_class.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);

  const years = [
    { id: "year-2026", title: "2026 Upcoming" },
    { id: "year-2025", title: "2025 Batch" },
    { id: "year-2024", title: "2024 Batch" },
    { id: "year-2023", title: "2023 Batch" },
  ];

  const handleScrollToBatch = (yearId) => {
    setMenuOpen(false);
    setResultOpen(false);

    if (location.pathname !== "/results") {
      navigate(`/results#${yearId}`);
    } else {
      const el = document.getElementById(yearId);
      if (el) {
        const offset = 90;
        const elementPosition =
          el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Infinity Logo" className="h-10 sm:h-12" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-black text-[#002147] uppercase leading-none">
              Infinity <span className="text-blue-600">Classes</span>
            </h1>
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.3em] uppercase">
              Academic Excellence
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[11px] font-black uppercase tracking-widest text-[#002147] hover:text-blue-600"
          >
            Home
          </Link>

          {/* RESULT DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setResultOpen(!resultOpen)}
              className="bg-[#002147] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-900"
            >
              Result <span className="text-[8px]">▼</span>
            </button>

            {resultOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border shadow-xl rounded-xl py-2">
                {years.map((y) => (
                  <button
                    key={y.id}
                    onClick={() => handleScrollToBatch(y.id)}
                    className="w-full text-left px-4 py-2 text-[11px] font-bold text-[#002147] hover:bg-blue-50"
                  >
                    {y.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-[11px] font-black uppercase tracking-widest text-[#002147] hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#002147]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-[#002147]"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setResultOpen(!resultOpen)}
              className="w-full flex justify-between items-center font-bold text-[#002147]"
            >
              Results <span>▼</span>
            </button>

            {resultOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {years.map((y) => (
                  <button
                    key={y.id}
                    onClick={() => handleScrollToBatch(y.id)}
                    className="block text-sm text-[#002147] hover:text-blue-600"
                  >
                    {y.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block font-bold text-[#002147]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
