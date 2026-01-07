import Card from "../ui/Card";

export default function Blogs() {
  const blogs = [
    {
      image: "/assets/blog1.jpg",
      title: "Choosing the Right Coaching",
      description: "A guide for CBSE, Maharashtra & ICSE Boards",
    },
    {
      image: "/assets/blog2.jpg",
      title: "Achieve Excellence",
      description: "Top-notch coaching for IX & X students",
    },
  ];

  return (
    <section className="py-20 text-center bg-gray-50">
      <h2 className="text-2xl font-semibold mb-12">Our Blogs</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {blogs.map((blog) => (
          <Card
            key={blog.title}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            footer="Read More →"
          />
        ))}
      </div>
    </section>
  );
}
