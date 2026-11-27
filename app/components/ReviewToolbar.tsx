import {
  Search,
  Store,
  CalendarDays,
  Star,
  Smile,
  ChevronDown,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";

export function BusinessSelector() {
  return (
    <div className="relative min-w-41.25">
      <Store
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <select className="h-10 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-9 pr-9 text-sm font-medium text-gray-700 outline-none transition hover:border-gray-300 focus:border-blue-500">
        <option>All Businesses</option>
        <option>ABC Restaurant</option>
        <option>XYZ Store</option>
        <option>My Business</option>
      </select>
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
export function SearchReviews() {
  return (
    <div className="relative min-w-45 flex-1">
      <Search
        size={17}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        placeholder="Search reviews..."
        className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white"
      />
    </div>
  );
}
export function DateRange() {
  return (
    <div className="relative min-w-36.25">
      <CalendarDays
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <select className="h-10 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-9 pr-8 text-sm text-gray-700 outline-none focus:border-blue-500">
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 90 days</option>
        <option>This year</option>
        <option>All time</option>
      </select>

      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
export function Filter() {
  return (
    <div className="relative min-w-31.25">
      <Star
        size={15}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500"
      />

      <select className="h-10 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-9 pr-8 text-sm text-gray-700 outline-none focus:border-blue-500">
        <option>All Ratings</option>
        <option>5 Stars</option>
        <option>4 Stars</option>
        <option>3 Stars</option>
        <option>2 Stars</option>
        <option>1 Star</option>
      </select>

      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
export function SentimentFilter() {
  return (
    <div className="relative min-w-36.25">
      <Smile
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <select className="h-10 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-9 pr-8 text-sm text-gray-700 outline-none focus:border-blue-500">
        <option>All Sentiments</option>
        <option>Positive</option>
        <option>Neutral</option>
        <option>Negative</option>
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}

{
  /* Refresh / Sync */
}
export function SyncButton() {
  return (
    <div>
      <button
        type="button"
        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-70"
      >
        <RefreshCw size={16} />
      </button>
    </div>
  );
}
