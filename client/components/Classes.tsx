import Link from "next/link";

export default function Classes() {
  const classes = [
    
    {
      name: "Strength Training",
      time: "Mon - Fri | 6:00 AM",
      trainer: "James Mwangi",
      icon: "💪",
    },
    {
      name: "Yoga",
      time: "Daily | 7:00 AM",
      trainer: "Grace Wanjiku",
      icon: "🧘",
    },
    {
      name: "Cardio Blast",
      time: "Mon - Sat | 5:00 PM",
      trainer: "Brian Kiptoo",
      icon: "🏃",
    },
    {
      name: "Boxing",
      time: "Tue & Thu | 6:30 PM",
      trainer: "Coach Alex",
      icon: "🥊",
    },
  ];

  return (
    <section id="classes" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-yellow-500">
          Our Classes
        </h2>

        <p className="mb-12 text-center text-gray-300">
          Choose a class that matches your fitness goals.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((gymClass) => (
            <div
              key={gymClass.name}
              className="rounded-xl bg-black p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-yellow-500/30"
            >
              <div className="mb-4 text-5xl">{gymClass.icon}</div>

              <h3 className="text-2xl font-bold">
                {gymClass.name}
              </h3>

              <p className="mt-3 text-yellow-400">
                {gymClass.time}
              </p>

              <p className="mt-2 text-gray-300">
                Trainer: {gymClass.trainer}
              </p>

              <Link
                href={`/register?class=${encodeURIComponent(gymClass.name)}`}
                className="mt-6 block w-full rounded-lg bg-yellow-500 py-3 text-center font-bold text-black hover:bg-yellow-400"
              >
                Book Class
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}