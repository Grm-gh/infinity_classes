export default function Principal() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#143c8c] mb-12 brand-font">
          From the Principal&apos;s Desk
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200/40 rounded-full blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074"
              alt="Principal"
              className="relative w-56 h-56 object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <p className="text-slate-600 leading-relaxed mb-6">
              At Infinity Classes, we believe every student carries unlimited
              potential. Our responsibility is not just to teach, but to guide,
              inspire and nurture young minds to achieve excellence in academics
              and in life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
