"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { APP_MENUS } from "../constant/menu";
import Navbar from "./apps/components/navbar/Navbar";
import path from "path";
import { log } from "console";

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
  <aside className="px-2 w-64 bg-base-300 shrink-0 overflow-y-auto border-r border-base-100">
    <div className="p-4 font-semibold text-xl text-bold sticky top-0 bg-base-300 z-10">
      ETO - Dashboard
    </div>

    <ul className="menu px-2 w-full">
    {APP_MENUS.map((menu) => {
      if (menu.type === "single"){
        return(
          <li key={menu.label}>
            <Link href={menu.href}>{menu.label}</Link>
          </li>
        );
      }

      const isOpen = pathname.startsWith(`/dashboard/${menu.key}`);
      return (
      <li key={menu.key}>
        <details open={isOpen}>
          <summary>{menu.label}</summary>
          <ul>
            {menu.features.map((feature) => {
              const href = `/dashboard/apps/${menu.key}/${feature.key}`;
              const active = pathname === href;

              return (
                <li key={feature.key}>
                  <Link
                    href={href}
                    className={active ? "bg-[#3771B8]" : ""}
                  >
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
