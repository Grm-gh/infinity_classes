import Card from "../ui/Card";

export default function Courses() {
  const courses = [
    {
      title: "School Section",
      description: "Coaching for Class IX | Class X",
    },
    {
      title: "Science Section",
      description: "Class XI | XII | JEE | NEET",
    },
    {
      title: "Commerce Section",
      description: "Class XI | Class XII",
    },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-12">Our Courses</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {courses.map((course) => (
          <Card
            key={course.title}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
}
