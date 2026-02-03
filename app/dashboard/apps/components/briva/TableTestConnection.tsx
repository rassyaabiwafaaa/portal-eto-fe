import React from 'react';

// 1. Definisikan interface yang lebih jelas daripada 'any'
interface TableData {
  [key: string]: any;
}

export default function TableTestConnection({ data }: { data: TableData[] }) {
  // Cek jika data kosong atau bukan array untuk mencegah crash
  if (!data || data.length === 0) {
    return <div className="text-center p-4">Tidak ada data koneksi.</div>;
  }

  // 2. Ambil header secara otomatis dari key object data pertama
  const headers = Object.keys(data[0]);

  return (
    <div className="max-h-160 overflow-x-auto rounded-lg">
      <table className="table table-xs table-pin-rows">
        <thead>
          <tr>
            <th>No</th>
            {headers.map((header) => (
              <th key={header} className="uppercase font-bold">
                {header.replace(/_/g, ' ')} {/* Ubah 'ip_address' jadi 'ip address' */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover">
              <th>{index + 1}</th>
              {headers.map((header) => (
                <td key={header}>
                  {/* Logika warna jika field adalah 'status' */}
                  {header === 'RESPONSE DESC' ? (
                    <span className={`badge ${item[header] === 'RESPONSE DESC' ? 'badge-success' : 'badge-error'}`}>
                      {item[header]}
                    </span>
                  ) : (
                    item[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}