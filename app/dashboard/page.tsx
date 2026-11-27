import ReviewTrendChart from "../components/charts/ReviewTrendChart";
import DateRangeLabel from "../components/dashboard/DateRangeLabel";
import KpiCards from "../components/dashboard/KpiCards";

export default function page() {
  return (
    <div className="space-y-5">
      <DateRangeLabel />
      <KpiCards />
      <ReviewTrendChart />
    </div>
  );
}
