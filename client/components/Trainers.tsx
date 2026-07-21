import Link from "next/link";

export default function Trainers() {
  const trainers = [
    
    {
      name: "James Mwangi",
      role: "Strength Coach",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
    {
      name: "Grace Wanjiku",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      name: "Brian Kiptoo",
      role: "Bodybuilding Coach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
  ];

  return (
    <section id="trainers" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-5xl font-bold">
          Meet Our Trainers
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:scale-105"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-yellow-500">
                  {trainer.role}
                </p>

                <Link
                  href={`/trainers/${trainer.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-yellow-500 hover:text-black"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}