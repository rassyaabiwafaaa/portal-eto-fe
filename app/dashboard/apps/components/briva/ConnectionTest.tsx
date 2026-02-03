import React, { useMemo } from "react";
import HeaderBrivaOnOff from "./HeaderBrivaOnOff";
import TableTestConnection from "./TableTestConnection";
import { handlerWSBrivaMapping } from "@/app/utils/handlerWSBrivaMapping";
import { dummyTesConnectionBriva } from "@/app/constant/dummyData";

const CONNECTION_CONFIG = [
  { label: "Data Center", ipPrefix: "172.18" },
  { label: "Data Recovery Center", ipPrefix: "172.19" },
  { label: "Onshore", ipPrefix: "172.28" },
];

export default function ConnectionTest({ data }: { data: any }) {
  // 1. kondisi kalo data dari props kosong, pakai dummy data
  const sourceData = data?.data || dummyTesConnectionBriva?.data;

  // 2. memoise hasil mapping biar tidak hit terus menerus setiap render
  const mappedConnections = useMemo(() => {
    // Jika sourceData kosong, kembalikan array kosong agar map tidak error
    if (!sourceData) return [];

    return CONNECTION_CONFIG.map((config) => ({
      id: config.ipPrefix,
      title: config.label,
      data: handlerWSBrivaMapping(sourceData, config.ipPrefix),
    }));
  }, [sourceData]);

  return (
    <div className="space-y-6">
      <HeaderBrivaOnOff />

      {mappedConnections.map((item) => (
        <div key={item.id}>
          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          <TableTestConnection data={item.data} />
        </div>
      ))}
    </div>
  );
}