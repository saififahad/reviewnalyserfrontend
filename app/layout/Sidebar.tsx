"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Star,
  Sparkles,
  BarChart3,
  Settings,
  ChevronsLeft,
  ChevronsRight,
  ChevronRight,
  LogOut,
  type LucideIcon,
} from "lucide-react";

type MenuData = {
  label: string;
  href: string;
  icon: LucideIcon;
};

// Navlinks Data
const mainMenu: MenuData[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Reviews", href: "/dashboard/reviews", icon: Star },
  { label: "AI analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "AI insights", href: "/dashboard/insights", icon: Sparkles },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

const Logo = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    className="shrink-0"
  >
    <path d="M16 3 4 28h8l4-9 4 9h8L16 3Z" fill="#2563eb" />
    <path d="M16 3 10 16l6 3 6-3L16 3Z" fill="#1d4ed8" />
  </svg>
);

export default function Sidebar() {
  const pathName = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`shrink-0 transition-[width] duration-300 h-screen ${
        collapsed ? "w-18" : "w-60"
      }`}
    >
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-xl transition-[width] duration-300 ${
          collapsed ? "w-18" : "w-60"
        }`}
      >
        {/* Header: logo + collapse button */}
        <div className={`mb-6 flex w-full items-center justify-between`}>
          <div className="flex min-w-0 items-center gap-2 overflow-hidden">
            <Logo />
            {!collapsed && (
              <span
                className={`whitespace-nowrap transition-opacity duration-200 ${
                  collapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Review IQ
              </span>
            )}
          </div>
          <button
            className="shrink-0 text-slate-500 hover:text-slate-800"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronsRight size={18} />
            ) : (
              <ChevronsLeft size={18} />
            )}
          </button>
        </div>
        <nav className="flex w-full flex-col gap-1">
          {mainMenu.map(({ label, icon: Icon, href }) => {
            const isActive =
              href === "/dashboard"
                ? pathName === href
                : pathName.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                title={label}
                className={`flex items-center gap-3 overflow-hidden rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                <span
                  className={`flex-1 whitespace-nowrap transition-opacity duration-200 ${
                    collapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
