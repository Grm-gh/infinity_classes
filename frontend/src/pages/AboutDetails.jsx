export default function AboutDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-[#1a4380] mb-16">
          Our Purpose
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Mission */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a4380] mb-4">
              Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To provide structured, result-oriented education that focuses
              on conceptual understanding, discipline, and personal growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a4380] mb-4">
              Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To become a trusted academic institution that shapes confident,
              capable, and responsible learners.
            </p>
          </div>

          {/* Values */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a4380] mb-4">
              Values
            </h3>
            <ul className="text-slate-600 space-y-2">
              <li>• Integrity in education</li>
              <li>• Student-centric approach</li>
              <li>• Consistency & discipline</li>
              <li>• Continuous improvement</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
