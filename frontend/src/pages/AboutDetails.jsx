export default function AboutDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-[#1a4380] mb-16">
          Our Purpose
        </h1>

        {/* ================= TOP 3 CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Mission */}
          <div className="bg-[#1a4380] p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mission
            </h3>
            <p className="text-slate-200 leading-relaxed">
              At Infinity Classes, our mission is to ignite the infinite
              potential within every student in grades 8th through 12th.
              We nurture intellectual curiosity, foster academic excellence,
              and promote personal growth through innovative teaching and
              ethical guidance.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#1a4380] p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vision
            </h3>
            <p className="text-slate-200 leading-relaxed">
              Our vision is to be the cornerstone of exceptional education
              where students realize their limitless potential and become
              ethical, compassionate global citizens prepared for the future.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#1a4380] p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Values
            </h3>
            <ul className="text-slate-200 space-y-2">
              <li>• Integrity in education</li>
              <li>• Student-centric approach</li>
              <li>• Consistency & discipline</li>
              <li>• Continuous improvement</li>
            </ul>
          </div>

        </div>

        {/* ================= NEW DIV BELOW ================= */}
        <div className="mt-20 bg-[#1a4380] text-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Core Values in Action
          </h2>

          <div className="space-y-6 text-blue-100 leading-relaxed">

            <p>
              <span className="font-semibold text-white">
                Student-Centric Excellence:
              </span>{" "}
              We prioritize our students' growth, well-being, and success,
              tailoring our approach to meet their unique needs and aspirations.
              We are committed to delivering the highest quality education and
              ensuring that each student reaches their full potential.
            </p>

            <p>
              <span className="font-semibold text-white">
                Integrity and Ethics:
              </span>{" "}
              We uphold unwavering ethical standards, fostering honesty,
              transparency, and fairness in all our interactions.
            </p>

            <p>
              <span className="font-semibold text-white">
                Innovation and Adaptability:
              </span>{" "}
              We actively integrate modern technologies and innovative
              teaching methodologies to keep our educational offerings
              relevant and engaging.
            </p>

            <p>
              <span className="font-semibold text-white">
                Continuous Improvement:
              </span>{" "}
              We are dedicated to continuous self-improvement and growth,
              encouraging a culture of learning for both students and educators.
            </p>

            <p>
              <span className="font-semibold text-white">
                Positive Impact:
              </span>{" "}
              We aspire to make a lasting positive impact on society by
              nurturing responsible, capable, and compassionate individuals.
            </p>

            <p className="text-blue-200 font-medium pt-4 border-t border-blue-400/30">
              These values are the heartbeat of Infinity Classes, guiding our
              commitment to nurturing young minds, fostering excellence, and
              empowering students to create a brighter future.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
