import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo_infinity_class.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
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
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  const DropdownItem = ({ to, title, desc, onClick }) => {
    const Item = (
      <div className="p-3 rounded-xl hover:bg-blue-50 cursor-pointer">
        <p className="text-sm font-semibold text-[#002147] hover:text-blue-600">
          {title}
        </p>
        {desc && <p className="text-xs text-slate-500">{desc}</p>}
      </div>
    );
    return to ? <Link to={to}>{Item}</Link> : <div onClick={onClick}>{Item}</div>;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Infinity Logo" className="h-10 sm:h-12" />
          <div className="hidden sm:block">
            <h1 className="brand-font text-xl text-[#002147] leading-none">
              Infinity <span className="text-blue-600 font-bold">Classes</span>
            </h1>
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.35em] uppercase">
              Academic Excellence
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">

          <Link to="/" className="navLink">Home</Link>
          <Link to="/about" className="navLink">About Us</Link>

          {/* STUDY */}
          <div className="relative group">
            <button className="navLink">Study Material ▾</button>
            <div className="absolute left-0 top-full h-4 w-full"></div>
            <div className="absolute mt-4 w-64 bg-white rounded-2xl shadow-xl border p-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              <h3 className="dropdownTitle">Study Resources</h3>
              <DropdownItem to="/books" title="📚 Books" desc="PDFs & notes" />
              <DropdownItem to="/videos" title="🎥 Video Lectures" desc="Recorded classes" />
            </div>
          </div>

          {/* GALLERY */}
          <div className="relative group">
            <button className="navLink">Gallery ▾</button>
            <div className="absolute left-0 top-full h-4 w-full"></div>
            <div className="absolute mt-4 w-105 bg-white rounded-2xl shadow-xl border p-6 grid grid-cols-2 gap-6 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              <div>
                <h3 className="dropdownTitle">2025 Batch</h3>
                <DropdownItem to="/gallery/2025/felicitation" title="🎖 Felicitation" desc="Toppers & awards" />
                <DropdownItem to="/gallery/2025/picnic" title="🏞 Picnic" desc="Trips & fun" />
              </div>
              <div>
                <h3 className="dropdownTitle">2024 Batch</h3>
                <DropdownItem to="/gallery/2024/felicitation" title="🎖 Felicitation" desc="Merit awards" />
                <DropdownItem to="/gallery/2024/picnic" title="🏞 Picnic" desc="Campus life" />
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div className="relative group">
            <button className="navLink">Result ▾</button>
            <div className="absolute right-0 top-full h-4 w-full"></div>
            <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border p-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              <h3 className="dropdownTitle">Select Batch</h3>
              {years.map((y) => (
                <DropdownItem
                  key={y.id}
                  title={y.title}
                  onClick={() => handleScrollToBatch(y.id)}
                />
              ))}
            </div>
          </div>

          <Link to="/contact" className="navLink">Contact Us</Link>
        </div>

        {/* MOBILE */}
        <button
          className="md:hidden text-[#002147] text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>

          {/* Study */}
          <div>
            <button onClick={() => setStudyOpen(!studyOpen)} className="w-full flex justify-between">
              Study Material <span>▼</span>
            </button>
            {studyOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/books" onClick={() => setMenuOpen(false)}>Books</Link>
                <Link to="/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
              </div>
            )}
          </div>

          {/* Gallery */}
          <div>
            <button onClick={() => setGalleryOpen(!galleryOpen)} className="w-full flex justify-between">
              Gallery <span>▼</span>
            </button>
            {galleryOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/gallery/2025/felicitation">2025 Felicitation</Link>
                <Link to="/gallery/2025/picnic">2025 Picnic</Link>
                <Link to="/gallery/2024/felicitation">2024 Felicitation</Link>
                <Link to="/gallery/2024/picnic">2024 Picnic</Link>
              </div>
            )}
          </div>

          {/* Results */}
          <div>
            <button onClick={() => setResultOpen(!resultOpen)} className="w-full flex justify-between">
              Result <span>▼</span>
            </button>
            {resultOpen && (
              <div className="pl-4 space-y-2">
                {years.map((y) => (
                  <div key={y.id} onClick={() => handleScrollToBatch(y.id)}>
                    {y.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
