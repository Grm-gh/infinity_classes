import { useState } from "react";

export default function Interview() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#143c8c] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 brand-font">Interview</h2>

          <p className="text-blue-100 leading-relaxed text-lg">
            Step behind the scenes of Infinity Classes as we sit down with the
            esteemed <span className="text-white font-semibold">Thane Vaibhav</span> for an enlightening
            conversation about our educational journey. In this captivating
            interview, Thane Vaibhav delves into the heart of our institute,
            uncovering our passion for education and our commitment to nurturing
            young minds.
          </p>
        </div>

        {/* VIDEO CARD */}
        <div
          onClick={() => setOpen(true)}
          className="relative cursor-pointer bg-white rounded-2xl shadow-2xl overflow-hidden group"
        >
          <img
            src="https://img.youtube.com/vi/wKSGLKe2nss/hqdefault.jpg"
            alt="Interview"
            className="w-full h-[320px] object-cover"
          />

          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 text-[#143c8c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* More videos button */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/60 text-white text-xs px-4 py-2 rounded-md">
              MORE VIDEOS
            </span>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/wKSGLKe2nss?autoplay=1"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
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
