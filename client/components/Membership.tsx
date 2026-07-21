import Link from "next/link";

export default function Membership() {
  const plans = [
    {
      name: "Basic",
      slug: "basic",
      price: "KSh 2,500",
      features: [
        "Unlimited Gym Access",
        "Locker Access",
        "Free Fitness Assessment",
      ],
    },
    {
      name: "Premium",
      slug: "premium",
      price: "KSh 5,000",
      features: [
        "Everything in Basic",
        "Unlimited Group Classes",
        "2 Personal Training Sessions",
        "Nutrition Guidance",
      ],
    },
    {
      name: "Elite",
      slug: "elite",
      price: "KSh 8,000",
      features: [
        "Everything in Premium",
        "Unlimited Personal Training",
        "Custom Meal Plan",
        "VIP Locker",
      ],
    },
  ];

  return (
    <section id="membership-plans" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Membership Plans
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Choose the membership that suits your fitness journey.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-center text-3xl font-bold text-yellow-500">
                {plan.name}
              </h3>

              <p className="my-6 text-center text-4xl font-extrabold">
                {plan.price}
                <span className="text-lg font-normal text-gray-500">
                  {" "}
                  / month
                </span>
              </p>

              <ul className="space-y-3 text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature}>✅ {feature}</li>
                ))}
              </ul>

              <Link
                href={`/register?plan=${plan.slug}`}
                className="mt-8 block w-full rounded-lg bg-black py-3 text-center font-bold text-white transition hover:bg-yellow-500 hover:text-black"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}