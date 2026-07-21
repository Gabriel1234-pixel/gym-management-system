export default function TrainersPage() {
  const trainers = [
    {
      id: 1,
      name: "James Mwangi",
      specialization: "Weight Training",
      phone: "0711111111",
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      specialization: "Yoga Instructor",
      phone: "0722222222",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Trainers
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold">
              {trainer.name}
            </h2>

            <p className="mt-2">
              Specialization: {trainer.specialization}
            </p>

            <p>Phone: {trainer.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
