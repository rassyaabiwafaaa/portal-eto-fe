import api from "./api";

/**
 * 1. Fetch Utility Data (Dinamis berdasarkan Role)
 * Dipakai oleh ServerUtils atau komponen lain yang butuh data spesifik role.
 */
export const fetchUtilData = async (role: string) => {
  // Kita pastikan role lowercase agar tidak ada typo (Admin vs admin)
  const rolePath = role.toLowerCase();
  
  // Sesuai permintaanmu: /auth/v2/admin/getutildata, dll.
  const endpoint = `/api/dashboard/v2/${rolePath}/utilization/all`
  
  const { data } = await api.get(endpoint);
  return data;
};