import nikhil from "../../assets/facultyimage/nikhil - Copy.jpg";

export default function Principal() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#143c8c] mb-16 brand-font">
          From the Principal's Desk
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image Section */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-blue-300/30 rounded-full blur-3xl"></div>
            <img
              src={nikhil}
              alt="Principal Nikhil Sir"
              className="relative w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white"
            />

            {/* Name Card */}
            <div className="absolute -bottom-6 bg-white shadow-lg px-6 py-3 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-[#143c8c]">
                Mr. Nikhil Sharma
              </h3>
              <p className="text-sm text-slate-500">Principal, Infinity Classes</p>
            </div>
          </div>

          {/* Text Section */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              At <span className="font-semibold text-[#143c8c]">Infinity Classes</span>, 
              Mahima Infinity Classes: from Principle desk 
              At Infinity Classes, we unlock the infinite potential within each student. With a focus on academic excellence, personalized guidance, and ethical values, we empower students to excel academically and personally. Join us in shaping future leaders who make a positive impact on the world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}