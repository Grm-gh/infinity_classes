export default function Principal() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-10">
        From the Principal&apos;s Desk
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <img
          src="/assets/principal.png"
          className="w-56"
          alt="Principal"
        />

        <div className="text-left">
          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            At Infinity Classes, we unlock the infinite potential within
            each student...
          </p>

          <button className="bg-[#143c8c] text-white px-6 py-2 rounded-full text-sm">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
