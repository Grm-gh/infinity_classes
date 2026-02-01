const features = [
  {
    title: "Parent-Teacher Meet",
    desc: "Regular interaction and timely progress updates to parents.",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Limited Students",
    desc: "Batch size limited to ensure personal attention.",
    icon: "👥",
  },
  {
    title: "Counselling",
    desc: "Career guidance and motivation sessions for students.",
    icon: "🧠",
  },
  {
    title: "Faculty",
    desc: "Dedicated and experienced teachers.",
    icon: "🎓",
  },
  {
    title: "CCTV Classrooms",
    desc: "Monitored classrooms for safety and discipline.",
    icon: "📹",
  },
  {
    title: "Test Series",
    desc: "Chapter-wise and mega tests conducted regularly.",
    icon: "📝",
  },
  {
    title: "Notes",
    desc: "Well-structured notes and study material.",
    icon: "📚",
  },
  {
    title: "Individual Attention",
    desc: "Personal mentoring for every student.",
    icon: "👤",
  },
];

export default function ProminentFeatures() {
  return (
    <section className="py-24 bg-[#1a4380]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Our Prominent Features
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>

              <h4 className="font-semibold text-lg text-[#1a4380] mb-2">
                {f.title}
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
