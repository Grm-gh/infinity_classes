import { Link } from "react-router-dom";
import aboutImg from "../assets/iclassesimage.webp";
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
              className="rounded-2xl shadow-xl w-full h-[490px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-[#1a4380] text-sm font-semibold uppercase tracking-wider mb-3">
              About Infinity Classes
            </h2>

            <h3 className="text-4xl font-bold text-[#1a4380] mb-6">
              Building Strong Academic Foundations
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Welcome to Infinity Classes, where education is a journey of 
              boundless possibilities. We believe that every student 
              possesses limitless potential waiting to be unlocked and nurtured.
              Our commitment to excellence, integrity, and personalized 
              education forms the cornerstone of our approach.
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
