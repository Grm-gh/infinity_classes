import { Link } from "react-router-dom";
import aboutImg from "../assets/iclassesimage.webp";

// ✅ Import components with CAPITAL names
import ProminentFeatures from "../components/acomponents/pfeatures.jsx";

export default function AboutPreview() {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>
            <img
              src={aboutImg}
              alt="Infinity Classes"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-[#1a4380] text-sm font-semibold uppercase tracking-wider mb-3">
              About Infinity Classes
            </h2>

            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Building Strong Academic Foundations
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Infinity Classes is committed to delivering quality education
              through expert faculty, structured learning, and personal
              mentoring. We focus on concept clarity, discipline, and consistent
              evaluation to help students achieve academic excellence.
            </p>

            <Link
              to="/about-details"
              className="inline-block text-[#1a4380] font-semibold border-b-2 border-[#1a4380] hover:text-blue-700 transition"
            >
              Read More →
            </Link>
          </div>

        </div>
      </section>

      {/* ================= PROMINENT FEATURES ================= */}
      <ProminentFeatures />
    </>
  );
}
