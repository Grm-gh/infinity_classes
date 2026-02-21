export default function QuoteSection() {
  return (
    <section className="bg-[#1a4380] text-white py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Top Small Heading */}
        <p className="text-sm tracking-[0.4em] uppercase text-blue-200 mb-10">
          Our Philosophy
        </p>

        {/* Main Quote */}
        <h2 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-10">
          We are what we repeatedly do,
          <br />
          Excellence then is not an act but a habit.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
          At Infinity Classes, we believe that discipline, focus, and smart
          learning create extraordinary academic results. Our structured
          approach ensures every student develops strong concepts,
          confidence, and clarity.
        </p>

      </div>
    </section>
  );
}