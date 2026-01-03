import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo_infinity_class.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const years = [
    { id: "year-2026", title: "2026 Upcoming" },
    { id: "year-2025", title: "2025 Batch" },
    { id: "year-2024", title: "2024 Batch" },
    { id: "year-2023", title: "2023 Batch" },
  ];

  const handleScrollToBatch = (yearId) => {
    // If not on results page, navigate there first
    if (location.pathname !== "/results") {
      navigate(`/results#${yearId}`);
    } else {
      // If already on results page, scroll smoothly
      const el = document.getElementById(yearId);
      if (el) {
        const offset = 100; 
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-100 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LEFT: LOGO & BRANDING */}
        <Link to="/" className="flex items-center gap-4 group">
          <img src={logo} alt="Infinity Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
          <div className="hidden sm:flex flex-col">
            <h1 className="text-xl font-black text-[#002147] tracking-tighter uppercase leading-none">
              Infinity <span className="text-blue-600">Classes</span>
            </h1>
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.3em] uppercase">Academic Excellence</p>
          </div>
        </Link>

        {/* RIGHT: NAVIGATION & SELECTION */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-[11px] font-black uppercase tracking-widest text-[#002147] hover:text-blue-600 transition-colors">Home</Link>
          
          {/* YEAR SELECTION DROPDOWN */}
          <div className="relative group">
            <button className="bg-[#002147] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-900 transition-all">
              Result <span className="text-[8px]">▼</span>
            </button>
            
            {/* DROPDOWN MENU */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-100 shadow-2xl rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {years.map((y) => (
                <button
                  key={y.id}
                  onClick={() => handleScrollToBatch(y.id)}
                  className="w-full text-left px-5 py-3 text-[11px] font-bold text-[#002147] hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-slate-50 last:border-none"
                >
                  {y.title}
                </button>
              ))}
            </div>
          </div>

          <Link to="/contact" className="hidden md:block text-[11px] font-black uppercase tracking-widest text-[#002147] hover:text-blue-600">Contact</Link>
        </div>

      </div>
    </nav>
  );
}