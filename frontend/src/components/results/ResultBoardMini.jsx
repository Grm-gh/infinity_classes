export default function ResultHorizontalCards() {
  const cards = [
    {
      id: 1,
      img: "https://picsum.photos/500/300?random=1",
      join: 65,
      current: 94,
    },
    {
      id: 2,
      img: "https://picsum.photos/500/300?random=2",
      join: 70,
      current: 96,
    },
    {
      id: 3,
      img: "https://picsum.photos/500/300?random=3",
      join: 72,
      current: 98,
    },
  ];

  return (
    <div className="p-4">
      
      {/* HORIZONTAL CARD ROW */}
      <div className="flex gap-4 overflow-x-auto">

        {cards.map((c) => (
          <div
            key={c.id}
            className="min-w-[260px] border border-black"
          >
            {/* LANDSCAPE IMAGE */}
            <img
              src={c.img}
              alt="result"
              className="w-full h-[160px] object-cover"
            />

            {/* TEXT BELOW */}
            <div className="p-3 text-sm">
              <p>At Joining: {c.join}%</p>
              <p>Current Score: {c.current}%</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
