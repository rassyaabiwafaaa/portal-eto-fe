export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <p className="text-sm text-gray-500">Total Servers</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <p className="text-sm text-gray-500">Active Servers</p>
            <h2 className="text-2xl font-bold text-success">10</h2>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <p className="text-sm text-gray-500">Pending Patches</p>
            <h2 className="text-2xl font-bold text-warning">3</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
