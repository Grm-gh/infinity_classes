import Card from "../ui/Card";

export default function Faculty() {
  const faculty = [
    {
      image: "/assets/faculty1.png",
      title: "Prof. Nikhil Arora",
    },
    {
      image: "/assets/faculty2.png",
      title: "Prof. Ejbad Shaikh",
    },
    {
      image: "/assets/faculty3.png",
      title: "Prof. Yash Vaidya",
    },
  ];

  return (
    <section className="py-20 bg-[#143c8c] text-center">
      <h2 className="text-2xl font-semibold text-white mb-12">
        Our Faculty
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {faculty.map((f) => (
          <Card
            key={f.title}
            image={f.image}
            title={f.title}
          />
        ))}
      </div>
    </section>
  );
}
