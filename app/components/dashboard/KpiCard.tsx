import { LucideIcon } from "lucide-react";

type KpiCardProps = {
  title: string;
  subtitle: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
};

export default function KpiCard({
  title,
  subtitle,
  value,
  icon: Icon,
  iconColor,
  iconBg,
}: KpiCardProps) {
  return (
    <div className="rounded-2xl shadow-sm bg-white px-5 py-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <div className={`rounded-xl p-3 ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </div>

      <h2 className="mt-2 text-3xl font-medium">{value}</h2>

      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
