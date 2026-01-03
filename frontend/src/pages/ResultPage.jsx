import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import results from "../data/result.json";
import bg from "../assets/background_infinity_class.png";

export default function ResultPage() {
  const { hash } = useLocation();
  const rawYears = Object.values(results);
  
  const comingSoonSection = {
    id: "year-2026",
    title: "2026 - Upcoming",
    summary: "The next generation of toppers is currently in the making.",
    isUpcoming: true,
    students: []
  };

  const years = [comingSoonSection, ...rawYears.reverse()];

  // Handle Hash Scrolling (When coming from Home page)
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const offset = 100;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen pt-20 relative font-sans">
      
      {/* SCROLLABLE BACKGROUND */}
      <div 
        className="absolute inset-0 -z-10" // 'absolute' instead of 'fixed'
        style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y' // Ensures it keeps going if the list is long
        }}
      ></div>

      {years.map((year) => (
        <section key={year.id} id={year.id} className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100 last:border-none">
          
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#002147]">
              {year.isUpcoming ? "FUTURE LEGENDS" : "OUR SHINING STARS"}
            </h2>
            
            <div className="flex justify-center">
                <span className="bg-[#002147] text-white px-10 py-2 rounded-full text-xl font-bold uppercase tracking-widest shadow-xl">
                    {year.title}
                </span>
            </div>

            {/* REDESIGNED STATS CARD */}
            {!year.isUpcoming && (
              <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">
                <div className="text-left">
                  <p className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-1">Batch Performance</p>
                  <h3 className="text-3xl font-black text-[#002147]">90% Club</h3>
                  <p className="text-slate-500 text-sm italic font-medium">"20 out of 61 Students Scored above 90%"</p>
                </div>
                
                <div className="flex items-center gap-8 bg-[#002147] p-6 rounded-4xl text-white shadow-xl">
                  <div className="text-center">
                    <span className="block text-4xl font-black">20</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">Toppers</span>
                  </div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div className="text-center">
                    <span className="block text-2xl font-black opacity-40">61</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest opacity-40">Total</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* GRID & CARDS */}
          {year.isUpcoming ? (
            <div className="max-w-2xl mx-auto border-4 border-dashed border-blue-100 rounded-[3rem] p-20 text-center">
              <p className="text-3xl font-black text-[#002147] uppercase opacity-20">Coming Soon</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {year.students.map((s) => (
                <div key={s.id} className="group bg-white/90 rounded-[2.5rem] p-5 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 text-center border border-white">
                  <img src={s.image} alt={s.name} className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-[11px] font-black text-[#002147] uppercase mb-3 h-8 flex items-center justify-center leading-none">{s.name}</h3>
                  <div className="bg-[#002147] text-white rounded-2xl py-2 font-black italic text-xl">
                    {s.percentage}%
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}