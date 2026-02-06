import React from 'react'

export default function HeaderBrivaOnOff() {
  return (
    <div className='space-y-6'>
        <h1 className="text-2xl font-semibold">BRIVA – Service Control</h1>

        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search fo BRIVA Corporate Number"
            className="input"
          />

          <input
            type="text"
            placeholder="Search fo BRIVA Customer Number"
            className="input"
          />

          <button className="btn btn-warning">Search</button>
        </div>
      </div>
  )
}
