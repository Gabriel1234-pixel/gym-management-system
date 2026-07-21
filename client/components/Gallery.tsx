export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
    "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=800",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
  ];

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-yellow-500">
          Gym Gallery
        </h2>

        <p className="mb-12 text-center text-gray-300">
          Explore our facilities, equipment, and training environment.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image}
                alt={`Gym Image ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}