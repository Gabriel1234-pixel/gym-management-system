export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Gym Reports
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Members</h2>
          <p className="text-4xl font-bold mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Trainers</h2>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Membership Plans</h2>
          <p className="text-4xl font-bold mt-2">4</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Payments Received</h2>
          <p className="text-2xl font-bold mt-2">
            KES 9,000
          </p>
        </div>
      </div>

      <div className="bg-white mt-10 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          System Summary
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-3">Category</th>
              <th className="p-3">Count</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Members</td>
              <td className="p-3 border">3</td>
            </tr>

            <tr>
              <td className="p-3 border">Trainers</td>
              <td className="p-3 border">2</td>
            </tr>

            <tr>
              <td className="p-3 border">Plans</td>
              <td className="p-3 border">4</td>
            </tr>

            <tr>
              <td className="p-3 border">Subscriptions</td>
              <td className="p-3 border">2</td>
            </tr>

            <tr>
              <td className="p-3 border">Payments</td>
              <td className="p-3 border">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}