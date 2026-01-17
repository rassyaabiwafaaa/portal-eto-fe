export default function SaOnly() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">
        MPN – Patching SA Only
      </h1>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <p className="text-sm text-gray-500">
            Apply SA-only patching for MPN transactions
          </p>

          <button className="btn btn-warning mt-4">
            Execute Patch
          </button>
        </div>
      </div>
    </div>
  );
}
