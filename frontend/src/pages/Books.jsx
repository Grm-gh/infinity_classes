const bookCategories = [
  {
    title: "Class IX",
    buttons: ["Maha Board", "CBSE Board", "ICSE Board"],
  },
  {
    title: "Class X",
    buttons: ["Maha Board", "CBSE Board", "ICSE Board"],
  },
  {
    title: "Class XI",
    buttons: ["Maha Board", "CBSE Board", "ICSE Board"],
  },
  {
    title: "Class XII",
    buttons: ["Maha Board", "CBSE Board", "ICSE Board"],
  },
  {
    title: "JEE",
    buttons: ["Books"],
  },
  {
    title: "NEET",
    buttons: ["Books"],
  },
];

export default function Books() {
  return (
    <div className="bg-white min-h-screen">

      {/* PAGE TITLE */}
      <section className="pt-20 text-center">
        <h1 className="text-3xl font-semibold text-[#143c8c] mb-6">
          Our Books
        </h1>

        {/* TOP IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80"
          alt="Books"
          className="mx-auto rounded-xl shadow-md max-w-4xl"
        />

        {/* DESCRIPTION */}
        <p className="max-w-4xl mx-auto text-gray-600 text-sm leading-relaxed mt-6 px-6">
          Infinity Classes takes pride in our meticulously curated educational
          materials, which represent the pinnacle of academic excellence.
          Designed for clarity and precision, our books embody our unwavering
          commitment to providing a superior educational experience.
        </p>
      </section>

      {/* BOOK CARDS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {bookCategories.map((item) => (
            <div
              key={item.title}
              className="bg-white border-2 border-gray-300 rounded-3xl p-10 text-center shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-[#143c8c] mb-8">
                {item.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                {item.buttons.map((btn) => (
                  <button
                    key={btn}
                    className="bg-[#143c8c] text-white px-5 py-2 rounded-full text-sm hover:bg-blue-900 transition"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
