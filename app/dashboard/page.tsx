import CardServer from "./apps/components/serverUtil/CardServer";

export default function DashboardPage() {
  return (
    <div>
      {/* Dashboard Overview, Generate Resume, Generate Schedule */}
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Title and Button for Generate Resume and Schedule */}
        <h1 className="text-2xl md:text-lg font-semibold mb-3 md:mb-0">Dashboard Overview</h1>

        <div className="flex gap-2 text-white">
          {/* Generate Schedule */}
          <div className="card bg-base-100 shadow cursor-pointer hover:bg-[#3771B8] hover:text-white transition-colors">
            <div className="card-body px-8 py-2">
              <p className="text-sm">Generate Schedule</p>
            </div>
          </div>
          {/* Generate Resume */}
          <div className="card bg-base-100 shadow cursor-pointer hover:bg-[#3771B8] hover:text-white transition-colors">
            <div className="card-body px-8 py-2">
              <p className="text-sm">Generate Resume</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Server */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-7">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <p className="text-sm text-gray-500">Total Servers</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <p className="text-sm text-gray-500">Total Server Over Threshold</p>
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

      {/* Content Server */}
      {/* Card */}
      <div className="w-full flex flex-wrap gap-6.5 justify-start">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardServer key={index} />
        ))}
      </div>
    </div>
  );
}
