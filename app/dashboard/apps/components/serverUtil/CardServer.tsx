"use client";

import React from 'react';

export default function CardServer({ server, onDetailClick }: { server: any, onDetailClick: (s: any) => void }) {
  const getProgressColor = (val: number) => {
    if (val > 80) return "progress-error";
    if (val > 60) return "progress-warning";
    return "progress-success";
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all border border-base-200">
      <div className="card-body p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="max-w-[70%]">
            <h3 className="font-bold text-sm leading-tight truncate" title={server.displayName}>
              {server.displayName}
            </h3>
            <p className="text-[10px] font-mono opacity-50">{server.ipAddress}</p>
          </div>
          <span className="badge badge-success badge-xs py-2 text-[9px] font-bold">{server.uptime.text}</span>
        </div>

        <div className="space-y-4 mt-2">
          {/* CPU Stats */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="font-medium text-gray-500">CPU</span>
              <span className="font-bold">{server.cpu.percentage}%</span>
            </div>
            <progress className={`progress w-full ${getProgressColor(server.cpu.percentage)}`} value={server.cpu.percentage} max="100"></progress>
          </div>

          {/* Memory Stats */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="font-medium text-gray-500">RAM</span>
              <span className="font-bold">{server.memory.percentage}%</span>
            </div>
            <progress className={`progress w-full ${getProgressColor(server.memory.percentage)}`} value={server.memory.percentage} max="100"></progress>
          </div>
        </div>
        
        <div className="card-actions justify-end mt-4">
          {/* Klik tombol ini memicu fungsi onDetailClick yang dikirim Parent */}
          <button 
            onClick={() => onDetailClick(server)}
            className="btn btn-xs btn-link p-0 no-underline text-[#3771B8] hover:text-blue-800"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}