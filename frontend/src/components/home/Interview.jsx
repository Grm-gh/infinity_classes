import { useState } from "react";
import article1 from "../../assets/iclasses_article1.webp";
import article2 from "../../assets/iclasses_article2.webp";

export default function Interview() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(null);

  return (
    <section className="bg-[#1a4380] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* ================= INTERVIEW ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6 brand-font">
              Interview
            </h2>

            <p className="text-blue-100 text-xl leading-relaxed">
              Step behind the scenes of Infinity Classes as we sit down with the
              esteemed{" "}
              <span className="text-white font-semibold">
                Thane Vaibhav
              </span>. This interview highlights our passion for education,
              innovation, and our commitment to nurturing young minds.
            </p>
          </div>

          {/* VIDEO CARD */}
          <div
            onClick={() => setVideoOpen(true)}
            className="relative cursor-pointer bg-white rounded-2xl shadow-2xl overflow-hidden group"
          >
            <img
              src="https://img.youtube.com/vi/wKSGLKe2nss/hqdefault.jpg"
              alt="Interview"
              className="w-full h-80 object-cover"
            />

            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                <svg
                  className="w-8 h-8 text-[#1a4380]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ARTICLES ================= */}
        <div>
          <h3 className="text-4xl font-bold text-white mb-20 text-center">
            Articles Featuring Us
          </h3>

          <div className="grid md:grid-cols-2 gap-24">

            {[
              {
                img: article1,
                title: "Thane Vaibhav Newspaper",
                date: "27th March 2023",
              },
              {
                img: article2,
                title: "Know Your Town Magazine",
                date: "24th April 2023",
              },
            ].map((a, i) => (
              <div key={i} className="text-center text-white">

                {/* Article Title */}
                <h4 className="text-2xl font-semibold mb-3">
                  {a.title}
                </h4>

                {/* Date */}
                <p className="text-lg mb-10 opacity-90">
                  Date: {a.date}
                </p>

                {/* IMAGE PREVIEW */}
                <div
                  onClick={() => setImageOpen(a.img)}
                  className="bg-white rounded-3xl shadow-2xl cursor-pointer max-w-lg mx-auto overflow-hidden"
                >
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-[340px] object-cover hover:scale-105 transition duration-300"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= IMAGE FULLSCREEN MODAL ================= */}
      {imageOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setImageOpen(null)}
        >
          <img
            src={imageOpen}
            alt="Article Full View"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}

      {/* ================= VIDEO MODAL ================= */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setVideoOpen(false)}
            >
              ✕
            </button>

            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/wKSGLKe2nss?autoplay=1"
                className="absolute inset-0 w-full h-full rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Interview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
