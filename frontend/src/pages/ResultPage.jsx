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
    students: [],
  };

  const years = [comingSoonSection, ...rawYears.reverse()];

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition =
            el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 relative font-sans overflow-x-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "contain", // 🔑 better for mobile
          backgroundPosition: "top center",
        }}
      />

      {years.map((year) => (
        <section
          key={year.id}
          id={year.id}
          className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-slate-100 last:border-none"
        >
          {/* HEADER */}
          <div className="text-center mb-10 sm:mb-16 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#002147]">
              {year.isUpcoming ? "FUTURE LEGENDS" : "OUR SHINING STARS"}
            </h2>

            <div className="flex justify-center">
              <span className="bg-[#002147] text-white px-6 sm:px-10 py-2 rounded-full text-sm sm:text-lg font-bold uppercase tracking-widest shadow-lg">
                {year.title}
              </span>
            </div>

            {/* STATS */}
            {!year.isUpcoming && (
              <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg border border-white rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col md:flex-row gap-6 sm:gap-10 items-center justify-between">
                <div className="text-center md:text-left">
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-1">
                    Batch Performance
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002147]">
                    90% Club
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm italic font-medium">
                    "20 out of 61 Students Scored above 90%"
                  </p>
                </div>

                <div className="flex items-center gap-6 bg-[#002147] p-5 rounded-2xl text-white shadow-lg">
                  <div className="text-center">
                    <span className="block text-3xl font-black">20</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">
                      Toppers
                    </span>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div className="text-center">
                    <span className="block text-xl font-black opacity-60">
                      61
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                      Total
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CONTENT */}
          {year.isUpcoming ? (
            <div className="max-w-xl mx-auto border-4 border-dashed border-blue-100 rounded-3xl p-10 sm:p-20 text-center">
              <p className="text-xl sm:text-3xl font-black text-[#002147] uppercase opacity-30">
                Coming Soon
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
              {year.students.map((s) => (
                <div
                  key={s.id}
                  className="bg-white/90 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-white"
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-white shadow mb-3 transition-transform duration-300 hover:scale-105"
                  />
                  <h3 className="text-[10px] sm:text-[11px] font-black text-[#002147] uppercase mb-2 h-8 flex items-center justify-center">
                    {s.name}
                  </h3>
                  <div className="bg-[#002147] text-white rounded-xl py-1.5 font-black italic text-lg sm:text-xl">
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
