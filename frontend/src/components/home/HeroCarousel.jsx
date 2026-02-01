import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
    title: "Infinity Classes",
    subtitle: "Where Excellence Begins",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    title: "Our Shining Stars",
    subtitle: "Results that Speak for Themselves",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80",
    title: "Expert Faculty",
    subtitle: "Guiding Students Towards Success",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current ? "bg-white scale-110" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


