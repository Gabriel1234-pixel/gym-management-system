import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
              alt="Gym"
              className="rounded-xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 text-5xl font-bold text-gray-900">
              About Iron Peak Gym
            </h2>

            <p className="mb-4 text-lg text-gray-700">
              Iron Peak Gym is dedicated to helping people achieve their fitness
              goals through expert coaching, modern equipment, and a motivating
              environment.
            </p>

            <p className="mb-8 text-lg text-gray-700">
              Whether you're a beginner or a professional athlete, we provide
              personalized training programs, nutrition guidance, and group
              classes to help you become the best version of yourself.
            </p>

            <Link
              href="/about"
              className="inline-block rounded-lg bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}