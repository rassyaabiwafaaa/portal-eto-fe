import React from 'react';

interface TableData {
  [key: string]: any;
}

export default function TableTestConnection({ data }: { data: TableData[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 bg-base-100 rounded-lg border-2 border-dashed border-base-300 opacity-50">
        <p>No connection data available for this region.</p>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  // Fungsi Helper untuk styling khusus per kolom
  const renderCell = (header: string, value: any) => {
    // 1. Kolom Status / Response Desc
    if (header.toUpperCase() === 'RESPONSE DESC' || header.toUpperCase() === 'STATUS') {
      const isSuccess = value?.toString().toUpperCase() === 'SUCCESS' || value?.toString().toUpperCase() === 'UP';
      return (
        <div className={`badge badge-sm font-bold ${isSuccess ? 'badge-success' : 'badge-error'} gap-1 py-3 px-3`}>
          <span className={`w-1.5 h-1.5 rounded-full bg-white ${isSuccess ? 'animate-pulse' : ''}`}></span>
          {value}
        </div>
      );
    }

    // 2. Kolom IP Address
    if (header.toUpperCase().includes('IP') || header.toUpperCase().includes('ADDRESS')) {
      return <span className="font-mono text-[11px] bg-base-200 px-2 py-0.5 rounded text-gray-600">{value}</span>;
    }

    // 3. Kolom Response Time / Latency
    if (header.toUpperCase().includes('TIME') || header.toUpperCase().includes('LATENCY')) {
      const time = parseInt(value);
      const colorClass = time > 500 ? 'text-error' : time > 200 ? 'text-warning' : 'text-success';
      return <span className={`font-bold ${colorClass}`}>{value} {typeof value === 'number' ? 'ms' : ''}</span>;
    }

    return value;
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 overflow-hidden">
      <div className="max-h-100 overflow-auto scrollbar-thin scrollbar-thumb-base-300">
        <table className="table table-xs table-pin-rows w-full">
          <thead className="bg-base-200">
            <tr className="text-gray-500 border-b border-base-300">
              <th className="bg-base-200 w-10 text-center">NO</th>
              {headers.map((header) => (
                <th key={header} className="bg-base-200 uppercase font-extrabold tracking-wider text-[10px]">
                  {header.replace(/_/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-base-200/50 transition-colors border-b border-base-100">
                <th className="text-center opacity-50 font-normal">{index + 1}</th>
                {headers.map((header) => (
                  <td key={header} className="py-3">
                    {renderCell(header, item[header])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Footer info jumlah data */}
      <div className="px-4 py-2 bg-base-50 border-t border-base-200 flex justify-end">
        <p className="text-[10px] text-gray-400 font-medium">Total: {data.length} Nodes</p>
      </div>
    </div>
  );
}