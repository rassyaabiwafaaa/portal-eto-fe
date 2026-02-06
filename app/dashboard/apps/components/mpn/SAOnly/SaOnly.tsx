import {saOnlyDummyData} from "../../../../../constant/dummyData";
import TableContentSAOnly from "./TableContentSAOnly";

export default function SaOnly() {
  // 1. Ambil key dari object pertama untuk Header (hanya sekali)
  // Kita cek dulu apakah datanya ada agar tidak error

  console.log(saOnlyDummyData)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">MPN – Patching SA Only</h1>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <p className="text-sm text-gray-500">
            Apply SA-only patching for MPN transactions
          </p>
          <TableContentSAOnly data={saOnlyDummyData} />
          <button className="btn btn-warning mt-4">Execute Patch</button>
        </div>
      </div>
    </div>
  );
}