"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUtilData } from "../utils/apiUtils"; 
import ServerUtils from "./apps/components/serverUtil/ServerUtils";

export default function DashboardPage() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["server-util-data", role],
    queryFn: () => fetchUtilData(role!),
    enabled: !!role,
    refetchInterval: 30000 
  });

  if (!role || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return <div className="alert alert-error m-5">Gagal memuat data dari server.</div>;
  }

  // LOGIKA SORTING PRIORITAS
  const rawServers = data?.data?.servers || [];
  const sortedServers = [...rawServers].sort((a, b) => {
    // Cek Threshold A
    const aCritical = a.cpu.percentage > 90 || 
                      a.memory.percentage > 90 || 
                      a.disk.some((d: any) => d.percentage > 95);
    
    // Cek Threshold B
    const bCritical = b.cpu.percentage > 90 || 
                      b.memory.percentage > 90 || 
                      b.disk.some((d: any) => d.percentage > 95);

    if (aCritical && !bCritical) return -1; // A naik
    if (!aCritical && bCritical) return 1;  // B naik
    return 0;
  });

  return (
    <main className="p-4 md:p-8 bg-base-200 min-h-screen">
      <ServerUtils role={role} serverData={sortedServers} />
    </main>
  );
}