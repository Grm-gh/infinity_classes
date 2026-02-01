export default function Courses() {
  const courses = [
    {
      title: "8th",
      subtitle: "8TH GRADE PROGRAM",
      desc: "Our experienced faculty is dedicated to nurturing young minds...",
    },
    {
      title: "9th",
      subtitle: "9TH GRADE PROGRAM",
      desc: "Designed to inspire a love for learning while providing a solid academic foundation...",
    },
    {
      title: "10th",
      subtitle: "10TH GRADE PROGRAM",
      desc: "Marking the culmination of a student's secondary education...",
    },
    {
      title: "ICSE",
      subtitle: "ICSE PROGRAM",
      desc: "Meticulously crafted to meet the unique requirements...",
    },
    {
      title: "CBSE",
      subtitle: "CBSE PROGRAM",
      desc: "Designed to cater to the specific needs of the CBSE curriculum...",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-12">
        Courses We Offer
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {courses.map((c) => (
          <div
            key={c.title}
            className="bg-[#1a4380] text-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Big Title */}
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">
              {c.title}
            </h3>

            {/* Subtitle */}
            <p className="text-xs font-semibold tracking-wide mb-4">
              {c.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-slate-200 mb-6">
              {c.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
