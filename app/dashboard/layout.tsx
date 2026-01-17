"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { APP_MENUS } from "../constant/menu";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 border-r">
        <div className="p-4 font-semibold text-lg">
          Ops Dashboard
        </div>

        <ul className="menu px-2">
        {Object.entries(APP_MENUS).map(([appKey, app]) => {
  const isOpen = pathname.startsWith(`/dashboard/apps/${appKey}`);

  return (
    <li key={appKey}>
      <details open={isOpen}>
        <summary>{app.label}</summary>
        <ul>
          {app.features.map((feature) => {
            const href = `/dashboard/apps/${appKey}/${feature.key}`;
            const active = pathname === href;

            return (
              <li key={feature.key}>
                <Link href={href} className={active ? "active" : ""}>
                  {feature.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </details>
    </li>
  );
})}
</ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-14 bg-base-100 border-b flex items-center justify-between px-6">
          <span className="text-sm text-gray-500">
            Infrastructure Operations
          </span>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm btn-ghost">
              admin@ops.com
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li><a>Profile</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
