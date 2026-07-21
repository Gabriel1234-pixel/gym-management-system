export default function PlansPage() {
  const plans = [
    { name: "Basic", duration: "1 Month", price: "KES 1,500" },
    { name: "Standard", duration: "3 Months", price: "KES 4,000" },
    { name: "Premium", duration: "6 Months", price: "KES 7,500" },
    { name: "Annual", duration: "12 Months", price: "KES 14,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Membership Plans
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold mb-2">
              {plan.name}
            </h2>

            <p>{plan.duration}</p>

            <p className="text-3xl font-bold mt-4">
              {plan.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}