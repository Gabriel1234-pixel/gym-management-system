export default function Testimonials() {
  const reviews = [
    {
      name: "John Kamau",
      review:
        "Iron Peak Gym completely changed my lifestyle. The trainers are amazing!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Mary Wanjiru",
      review:
        "Excellent equipment, clean environment, and friendly staff. Highly recommended.",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "David Otieno",
      review:
        "I lost 15kg in six months thanks to the personalized training program.",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold">
          What Our Members Say
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Success stories from members of Iron Peak Gym.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                {review.name}
              </h3>

              <p className="mt-4 text-gray-600">
                "{review.review}"
              </p>

              <p className="mt-6 text-xl">
                {review.stars}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}