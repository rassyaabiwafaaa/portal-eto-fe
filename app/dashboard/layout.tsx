"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { APP_MENUS } from "../constant/menu";
import Navbar from "./apps/components/navbar/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const user = 'user';

  return (
    <div className="flex h-screen bg-base-200 overflow-hidden">
  {/* Sidebar */}
  <aside className="w-64 bg-base-300 shrink-0 overflow-y-auto border-r border-base-100">
    <div className="p-4 font-semibold text-xl text-bold sticky top-0 bg-base-300 z-10">
      ETO - Dashboard
    </div>

    <ul className="menu px-2 w-full">
      {Object.entries(APP_MENUS).map(([appKey, app]) => {
        const isOpen = pathname.startsWith(`/dashboard/apps/${appKey}`);
        return (
          <li key={appKey}>
            <details open={isOpen}>
              <summary className="hover:bg-[#3771B8]">{app.label}</summary>
              <ul>
                {app.features.map((feature) => {
                  const href = `/dashboard/apps/${appKey}/${feature.key}`;
                  const active = pathname === href;
                  return (
                    <li key={feature.key} className="hover:bg-[#3771B8] rounded-sm">
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

  {/* Main Content Area */}
  <div className="flex-1 flex flex-col min-w-0 h-screen">
    {/* Topbar */}
    <Navbar user={user}/>

    {/* Scrollable Main Content */}
    <main className="flex-1 overflow-y-auto p-6">
      {children}
    </main>
  </div>
</div>
  );
}
