"use client";

import React, { useState } from 'react';
import CardServer from './CardServer';

export default function ServerUtils({ role, serverData }: { role: string, serverData: any[] }) {
  const [selectedServer, setSelectedServer] = useState<any>(null);

  return (
    <div className="space-y-6">
      {/* ... (Header & Summary Card sama seperti sebelumnya) ... */}

      {/* Server Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {serverData.map((server: any) => (
          <CardServer 
            key={server.hostid} 
            server={server} 
            onDetailClick={(s) => setSelectedServer(s)} 
          />
        ))}
      </div>

      {/* --- MODAL DETAIL --- */}
      {selectedServer && (
        <dialog className="modal modal-open modal-bottom sm:modal-middle">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg border-b pb-2 text-[#3771B8]">
              Server Detail: {selectedServer.displayName}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              {/* Info Utama */}
              <div className="space-y-2">
                <p className="text-sm"><strong>IP Address:</strong> {selectedServer.ipAddress}</p>
                <p className="text-sm"><strong>Host ID:</strong> {selectedServer.hostid}</p>
                <p className="text-sm"><strong>Hostname:</strong> {selectedServer.hostname}</p>
                <p className="text-sm"><strong>Uptime:</strong> {selectedServer.uptime.text}</p>
                <p className="text-[10px] text-gray-400">Last Update: {new Date(selectedServer.timestamp).toLocaleString()}</p>
              </div>

              {/* Utilisation Summary */}
              <div className="bg-base-200 p-4 rounded-xl">
                 <h4 className="text-xs font-bold uppercase mb-3 opacity-60 text-center">Resources</h4>
                 <div className="flex justify-around text-center">
                    <div>
                      <div className="radial-progress text-primary text-[10px]" style={{"--value": selectedServer.cpu.percentage, "--size": "3.5rem", "--thickness": "4px"} as any} role="progressbar">
                        {selectedServer.cpu.percentage}%
                      </div>
                      <p className="text-[10px] mt-1 font-bold">CPU</p>
                    </div>
                    <div>
                      <div className="radial-progress text-secondary text-[10px]" style={{"--value": selectedServer.memory.percentage, "--size": "3.5rem", "--thickness": "4px"} as any} role="progressbar">
                        {selectedServer.memory.percentage}%
                      </div>
                      <p className="text-[10px] mt-1 font-bold">RAM</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Disk Section */}
            <div className="mt-4">
              <h4 className="font-bold text-sm mb-3">Disk Partition Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedServer.disk.map((d: any) => (
                  <div key={d.diskName} className="p-3 bg-base-200 rounded-lg border border-base-300">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-xs">Drive {d.diskName}</span>
                      <span className={`text-[10px] font-bold ${d.percentage > 80 ? 'text-error' : 'text-success'}`}>
                        {d.percentage}%
                      </span>
                    </div>
                    <progress 
                      className={`progress progress-xs ${d.percentage > 80 ? 'progress-error' : 'progress-info'}`} 
                      value={d.percentage} 
                      max="100"
                    ></progress>
                    <p className="text-[8px] opacity-40 mt-1">Updated: {new Date(d.lastUpdate).toLocaleTimeString()}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-action">
              <button className="btn btn-sm btn-ghost" onClick={() => setSelectedServer(null)}>Close</button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedServer(null)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}