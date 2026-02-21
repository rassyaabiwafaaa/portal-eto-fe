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

  // Semua query ditarik ke atas (Parent)
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

  // Kirim data ke ServerUtils sebagai props
  return (
    <main className="p-4 md:p-8 bg-base-200 min-h-screen">
      <ServerUtils role={role} serverData={data?.data?.servers || []} />
    </main>
  );
}