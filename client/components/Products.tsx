export default function Products() {
  const products = [
    {
      name: "Treadmill",
      price: "KSh 85,000",
      description: "Professional running machine",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    },
    {
      name: "Dumbbell Set",
      price: "KSh 15,000",
      description: "Complete weight training set",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop",
    },
    {
      name: "Exercise Bike",
      price: "KSh 45,000",
      description: "Cardio fitness equipment",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Gym Equipment
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-40 w-full rounded object-cover"
            />

            <h3 className="text-xl font-bold">
              {product.name}
            </h3>

            <p className="text-gray-600">
              {product.description}
            </p>

            <p className="font-semibold mt-3">
              {product.price}
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}