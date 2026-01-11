export default function QuoteSection() {
  return (
    <section className="relative bg-linear-to-br from-[#143c8c] to-[#1e40af] text-white py-24 overflow-hidden">

      {/* Decorative glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* Quote */}
        <div>
          <p className="uppercase text-blue-200 tracking-[0.25em] text-xs mb-4">
            Our Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight brand-font">
            We are what we repeatedly do,
            <span className="block text-blue-200 mt-2">
              Excellence then is not an act but a habit.
            </span>
          </h2>

          <p className="mt-6 text-blue-100 max-w-lg">
            At Infinity Classes, we believe consistency, discipline and smart
            learning create extraordinary results.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Students studying"
            className="relative rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
