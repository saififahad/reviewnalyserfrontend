"use client";

import {
  BusinessSelector,
  SearchReviews,
  DateRange,
  Filter,
  SentimentFilter,
  SyncButton,
} from "../components/ReviewToolbar";
import { topBarConfig } from "../config/topBar.config";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const config = topBarConfig[pathName] ?? topBarConfig["/dashboard"];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="px-4 py-3 sm:px-5">
        {/* Header Row */}
        <div className="flex items-center justify-between gap-3">
          {/* Current Page */}
          <div className="min-w-fit">
            <h1 className="text-lg font-semibold text-gray-900">
              {config.title}
            </h1>
            <p className="text-xs text-gray-500">Manage {config.title}</p>
          </div>

          {/* Desktop / Tablet Toolbar */}
          <div className="hidden flex-1 flex-wrap items-center justify-end gap-3 md:flex">
            {config.businessSelector && <BusinessSelector />}
            {config.searchBox && <SearchReviews />}
            {config.dateRange && <DateRange />}
            {config.filter && <Filter />}
            {config.sentimentFilter && <SentimentFilter />}
            {config.syncButton && <SyncButton />}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label={isMenuOpen ? "Close toolbar" : "Open toolbar"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Toolbar Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4 md:hidden">
            {config.businessSelector && <BusinessSelector />}
            {config.searchBox && <SearchReviews />}
            {config.dateRange && <DateRange />}
            {config.filter && <Filter />}
            {config.sentimentFilter && <SentimentFilter />}
            {config.syncButton && <SyncButton />}
          </div>
        )}
      </div>
    </header>
  );
}
