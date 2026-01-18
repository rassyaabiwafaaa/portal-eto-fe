import React from 'react'

export default function Navbar({user} : {user:string}) {
  return (
    <header className="h-14 bg-base-300 flex shrink-0 items-center justify-between px-6 z-10 shadow-sm">
      <span className="text-sm text-gray-500">
        Ecosystem Platform Operations Dashboard
      </span>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-sm btn-ghost text-md font-normal text-[14px]">
          {'Hello, ' + user}
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
          <li><a>Profile</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </header>
  )
}
