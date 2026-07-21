export default function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <h2 className="text-2xl font-bold text-yellow-500">
          Iron Peak Gym
        </h2>

        <p className="text-gray-400">
          © {new Date().getFullYear()} Iron Peak Gym. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-400">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-400">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}