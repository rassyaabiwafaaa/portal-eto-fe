"use client";

import { useState } from "react";
import CardPatchBRIVA from "./CardPatchBRIVA";

export default function BrivaOnOff() {
  const [brivaData, setBrivaData] = useState<any>(null);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loadingAction, setLoadingAction] = useState(false);
  
  // State untuk Alert Notifikasi
  const [alert, setAlert] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingSearch(true);
    setAlert(null); // Reset alert saat search baru
    
    setTimeout(() => {
      const dummyResponse = {
        "code": 200,
        "data": { "Brivano": "88810", "CorpName": "DANA", "IsActive": "Y" }
      };
      setBrivaData(dummyResponse.data);
      setLoadingSearch(false);
    }, 600);
  };

  const handleToggleAction = () => {
    setLoadingAction(true);
    setAlert(null);

    // Simulasi API Update
    setTimeout(() => {
      const isSuccess = true; // Bisa diganti logic response API nanti

      if (isSuccess) {
        setBrivaData((prev: any) => ({
          ...prev,
          IsActive: prev.IsActive === "Y" ? "N" : "Y"
        }));
        setAlert({ type: "success", msg: "Service status updated successfully!" });
      } else {
        setAlert({ type: "error", msg: "Failed to update service status. Please try again." });
      }
      setLoadingAction(false);
      
      // Hilangkan alert otomatis setelah 3 detik
      setTimeout(() => setAlert(null), 3000);
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-2xl relative">
      {/* --- FLOATING ALERT --- */}
      {alert && (
        <div className="fixed top-5 right-5 z-[100] transition-all animate-bounce">
          <div className={`alert shadow-lg ${alert.type === "success" ? "alert-success text-white" : "alert-error text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={alert.type === "success" ? "vertical" : "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"} /></svg>
            <span>{alert.msg}</span>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold text-gray-700">BRIVA – Service Control</h1>
        <p className="text-sm text-gray-500">Manage payment service availability for partners.</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Input BRIVA Number..."
          className="input input-bordered w-full focus:border-[#3771B8] outline-none"
          required
        />
        <button type="submit" className={`btn bg-[#3771B8] text-white hover:bg-[#2c5a94] border-none ${loadingSearch ? 'loading' : ''}`}>
          {loadingSearch ? "" : "Search"}
        </button>
      </form>

      <div className="divider"></div>

      {brivaData ? (
        <CardPatchBRIVA 
          data={brivaData} 
          onConfirmToggle={handleToggleAction} 
          loading={loadingAction} 
        />
      ) : (
        <div className="text-center py-10 opacity-40 italic">Search a BRIVA number to start.</div>
      )}
    </div>
  );
}