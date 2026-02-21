"use client";

import React from 'react';

export default function CardServer({ server, onDetailClick }: { server: any, onDetailClick: (s: any) => void }) {
  
  // Fungsi penentu warna (Threshold baru: 90% untuk CPU/RAM, 95% untuk Disk)
  const getProgressColor = (val: number, type: 'resource' | 'disk' = 'resource') => {
    const limit = type === 'disk' ? 95 : 90;
    if (val > limit) return "progress-error";
    if (val > 70) return "progress-warning";
    return "progress-success";
  };

  // Cari disk dengan penggunaan tertinggi untuk ditampilkan sebagai info utama
  const maxDisk = server.disk.reduce((prev: any, current: any) => 
    (prev.percentage > current.percentage) ? prev : current
  );

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all border border-base-200">
      <div className="card-body p-5">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-2">
          <div className="max-w-[70%] text-gray-700">
            <h3 className="font-bold text-sm leading-tight truncate" title={server.displayName}>
              {server.displayName}
            </h3>
            <p className="text-[10px] font-mono opacity-50 italic">{server.ipAddress}</p>
          </div>
          <span className="badge badge-success badge-xs py-2 text-[9px] font-bold">{server.uptime.text}</span>
        </div>

        <div className="space-y-4 mt-2">
          {/* CPU Usage */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="font-medium text-gray-400 uppercase">CPU Usage</span>
              <span className={`font-bold ${server.cpu.percentage > 90 ? 'text-error' : 'text-gray-700'}`}>
                {server.cpu.percentage}%
              </span>
            </div>
            <progress className={`progress w-full ${getProgressColor(server.cpu.percentage)}`} value={server.cpu.percentage} max="100"></progress>
          </div>

          {/* RAM Usage */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="font-medium text-gray-400 uppercase">RAM Usage</span>
              <span className={`font-bold ${server.memory.percentage > 90 ? 'text-error' : 'text-gray-700'}`}>
                {server.memory.percentage}%
              </span>
            </div>
            <progress className={`progress w-full ${getProgressColor(server.memory.percentage)}`} value={server.memory.percentage} max="100"></progress>
          </div>

          {/* --- BAGIAN BARU: DISK USAGE SNAPSHOT --- */}
          <div className="pt-2 border-t border-dashed border-base-300">
            <div className="flex justify-between items-center text-[10px] mb-1.5">
              <span className="font-medium text-gray-400 uppercase">Disk ({server.disk.length} Partitions)</span>
              <span className={`font-bold ${maxDisk.percentage > 95 ? 'text-error' : 'text-gray-700'}`}>
                Max: {maxDisk.percentage}%
              </span>
            </div>
            
            {/* Menampilkan mini-bars untuk semua disk agar user langsung tahu mana yang penuh */}
            <div className="flex gap-1 items-end h-4">
              {server.disk.map((d: any) => (
                <div 
                  key={d.diskName} 
                  className="tooltip tooltip-top flex-1 h-full" 
                  data-tip={`${d.diskName}: ${d.percentage}%`}
                >
                  <div className="w-full h-full bg-base-200 rounded-sm overflow-hidden flex flex-col justify-end">
                    <div 
                      className={`w-full ${d.percentage > 95 ? 'bg-error' : d.percentage > 70 ? 'bg-warning' : 'bg-success'}`} 
                      style={{ height: `${d.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card-actions justify-end mt-4">
          <button 
            onClick={() => onDetailClick(server)}
            className="btn btn-xs btn-link p-0 no-underline text-[#3771B8] hover:text-blue-800 font-bold"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}