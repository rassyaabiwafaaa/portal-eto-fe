import saOnlyDummyData from "@/app/constant/dummyData";

export default function SaOnly() {
  // 1. Ambil key dari object pertama untuk Header (hanya sekali)
  // Kita cek dulu apakah datanya ada agar tidak error
  const tableHeaders = saOnlyDummyData.length > 0 ? Object.keys(saOnlyDummyData[0]) : [];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">MPN – Patching SA Only</h1>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <p className="text-sm text-gray-500">
            Apply SA-only patching for MPN transactions
          </p>

          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>No</th>
                  {/* 2. Loop Header secara dinamis */}
                  {tableHeaders.map((header) => (
                    <th key={header} className="uppercase">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 3. Loop Data Body */}
                {saOnlyDummyData.map((data, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    {/* 4. Loop Value berdasarkan key header agar urutannya konsisten */}
                    {tableHeaders.map((header) => (
                      <td key={header}>{data[header as keyof typeof data]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn btn-warning mt-4">Execute Patch</button>
        </div>
      </div>
    </div>
  );
}