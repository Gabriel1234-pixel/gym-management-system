export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Gym Management Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Members
          </h2>
          <p className="text-3xl mt-2">2</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Trainers
          </h2>
          <p className="text-3xl mt-2">2</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Plans
          </h2>
          <p className="text-3xl mt-2">4</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Payments
          </h2>
          <p className="text-3xl mt-2">2</p>
        </div>

      </div>
    </div>
  );
}
