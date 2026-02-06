"use client";
import React, { useEffect } from "react";
import { spanInqVaDummyData } from "@/app/constant/dummyData";
import TableContentInqVa from "./TableContentInqVa";

export default function SPANInqVa() {
  const [selectedRow, setSelectedRow] = React.useState<string[]>([]);

  // Select 1 row
  const handlerSelectedRow = (DocumentNumber: string) => {
    if (selectedRow.includes(DocumentNumber)) {
      setSelectedRow(selectedRow.filter((i) => i !== DocumentNumber));
    } else {
      setSelectedRow([...selectedRow, DocumentNumber]);
      alert("row selected: " + DocumentNumber);
      console.log(selectedRow);
    }
  };

  // Select All Row
const handlerSelectAllRow = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.checked) {
    // 'item' harus di posisi pertama agar bisa mengakses properti DocumentNumber
    const allSelected = spanInqVaDummyData.map((item) => item.DocumentNumber);
    setSelectedRow(allSelected);
  } else {
    setSelectedRow([]);
  }
};

  useEffect(() => {
    console.log("State terbaru selectedRow:", selectedRow);
  }, [selectedRow]); // Akan jalan setiap kali selectedRow berubah
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">
        SPAN - Patching Inquiry Virtual Account
      </h1>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <p className="text-sm text-gray-500">
            Patching Inquiry Virtual Account for SPAN transactions
          </p>
          <TableContentInqVa
            data={spanInqVaDummyData}
            selectedRow={selectedRow}
            handlerSelectedRow={handlerSelectedRow}
            handlerSelectAllRow={handlerSelectAllRow}
          />

          <button className="btn btn-warning mt-4">Execute Patch</button>
        </div>
      </div>
    </div>
  );
}
