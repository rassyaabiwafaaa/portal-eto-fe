import React from "react";

interface TableContentSPANBPDRiauProps {
        data: any[];
        selectedRow: string[];
        handlerSelectedRow: (DocumentNumber: string) => void;
        handlerSelectAllRow: (e: React.ChangeEvent<HTMLInputElement>) => void;
      }

export default function TableContentSPANBPDRiau({ data, selectedRow, handlerSelectedRow, handlerSelectAllRow }: TableContentSPANBPDRiauProps) {


  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            {/* Header untuk kolom checkbox dan nomor */}
            <th>
              <input type="checkbox" className="checkbox" onChange={handlerSelectAllRow} checked={selectedRow.length === data.length && data.length > 0} />
            </th>
            <th>No</th>
            {tableHeaders.map((header) => (
              <th key={header} className="uppercase">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => ( // Ubah nama variabel agar tidak bentrok dengan prop 'data'
            <tr key={index}>
              {/* CHECKBOX: Sekarang aman di dalam <td> atau <th> */}
              <td>
                <input type="checkbox" className="checkbox" onChange={() => handlerSelectedRow(item.DocumentNumber)} checked={selectedRow.includes(item.DocumentNumber)} />
              </td>
              <th>{index + 1}</th>
              {tableHeaders.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}