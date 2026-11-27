import ReviewTrendChart from "../charts/ReviewTrendChart";
import SentimentDistributionChart from "../charts/SentimentDistributionChart";

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 w-full min-w-0">
      <div className="min-w-0 xl:col-span-2">
        <ReviewTrendChart />
      </div>
      <SentimentDistributionChart />
    </div>
  );
}
