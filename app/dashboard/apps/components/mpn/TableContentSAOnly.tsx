import React from "react";

export default function TableContentSAOnly({ data }: { data: any[] }) {
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="max-h-160 overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>No</th>
            {/* 2. Loop Header secara dinamis */}
            {tableHeaders.map((header) => (
              <th key={header} className="uppercase">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* 3. Loop Data Body */}
          {data.map((data, index) => (
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
  );
}
