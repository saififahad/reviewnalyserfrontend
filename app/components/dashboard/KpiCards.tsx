import KpiCard from "./KpiCard";
import { MessageSquare, Star, Smile, Frown } from "lucide-react";

const KpiCardData = [
  {
    id: 1,
    title: "Total Reviews",
    subtitle: "4 Analyzed",
    value: 4,
    icon: MessageSquare,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
  },
  {
    id: 2,
    title: "Average Rating",
    subtitle: "Out of 5 stars",
    value: 4.8,
    icon: Star,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
  },
  {
    id: 3,
    title: "% Positive",
    subtitle: "Of analyzed reviews",
    value: 100 + "%",
    icon: Smile,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    id: 4,
    title: "% Negative",
    subtitle: "Of analyzed reviews",
    value: 0 + "%",
    icon: Frown,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {KpiCardData.map((data) => {
        return (
          <KpiCard
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            value={data.value}
            icon={data.icon}
            iconColor={data.iconColor}
            iconBg={data.iconBg}
          />
        );
      })}
    </div>
  );
}
