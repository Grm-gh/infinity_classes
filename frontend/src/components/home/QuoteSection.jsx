export default function QuoteSection() {
  return (
    <section className="bg-[#143c8c] text-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <h2 className="text-3xl font-semibold leading-snug">
          We are what we repeatedly do, <br />
          Excellence then is not an act but a habit.
        </h2>

        <img
          src="/assets/institute.jpg"
          alt="Institute"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
