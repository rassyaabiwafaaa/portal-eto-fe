'use client'
import React, { useState } from 'react'

export default function CardServer() {
  const [isActive, setIsActive] = useState(false);

  const handlerClick = () => {
    setIsActive(!isActive);
  }

  return (
    /* h-fit memastikan card tidak memaksa tinggi penuh */
    <div className="card bg-base-100 w-96 shadow-sm h-fit"> 
      <div className="card-body">
        <h2 className="card-title -mb-2">WS BRIVA</h2>
        <p className="text-[12px] mb-2">172.18.141.21</p>
        
        <div className="flex items-center justify-between">
          <h2 
            className="text-[12px] cursor-pointer text-blue-500 hover:underline" 
            onClick={handlerClick}
          >
            {isActive ? "Hide details" : "See more details"}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-red-500 text-white border-none">CPU</div>
            <div className="badge badge-outline bg-red-500 text-white border-none">Memory</div>
          </div>
        </div>

        {/* Detail info server dengan transisi sederhana jika perlu */}
        {isActive && (
          <div className="mt-4 pt-4 border-t border-base-200 text-sm space-y-1">
            <div className="flex justify-between"><span>CPU</span> <span>50%</span></div>
            <div className="flex justify-between"><span>Memory</span> <span>50%</span></div>
            <div className="flex justify-between"><span>Disk</span> <span>50%</span></div>
          </div>
        )}
      </div>
    </div>
  )
}