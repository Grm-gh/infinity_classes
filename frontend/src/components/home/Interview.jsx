export default function Interview() {
  return (
    <section className="bg-[#143c8c] text-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Interview</h2>
          <p className="text-sm leading-relaxed">
            Step behind the scenes of Infinity Classes as we sit down with
            the esteemed Thane Vaibhav...
          </p>
        </div>

        <img
          src="/assets/interview.jpg"
          className="rounded-xl"
          alt="Interview"
        />
      </div>
    </section>
  );
}
