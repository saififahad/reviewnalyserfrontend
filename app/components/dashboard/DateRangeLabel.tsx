import { Calendar } from "lucide-react";

export default function DateRangeLabel() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Calendar className="h-5 w-5 text-gray-500" />
        <span>Showing data for</span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900">
          Last 7 days
        </span>
      </div>
    </div>
  );
}
