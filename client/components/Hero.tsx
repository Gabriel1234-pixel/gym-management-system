import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-gradient-to-r from-black via-gray-900 to-yellow-600">
      <div className="flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl font-extrabold">
          Welcome to
          <span className="block text-yellow-400">
            Iron Peak Gym
          </span>
        </h1>

        <p className="mt-6 text-xl">
          Build Strength. Build Confidence. Reach Your Peak.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-flex items-center rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
}