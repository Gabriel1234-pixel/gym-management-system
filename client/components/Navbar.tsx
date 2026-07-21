"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-black text-white px-8 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">
          Iron Peak Gym
        </h1>

        <div className="flex gap-6">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("membership-plans")}>Membership Plans</button>
          <button onClick={() => scrollToSection("trainers")}>Trainers</button>
          <button onClick={() => scrollToSection("gallery")}>Gallery</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>

          <a
            href="/login"
            className="bg-yellow-400 text-black px-4 py-2 rounded inline-flex items-center"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}