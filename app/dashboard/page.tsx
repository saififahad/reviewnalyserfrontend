import ReviewTrendChart from "../components/charts/ReviewTrendChart";
import AnalyticsCharts from "../components/dashboard/AnalyticsCharts";
import DateRangeLabel from "../components/dashboard/DateRangeLabel";
import KeywordInsights from "../components/dashboard/KeywordInsights";
import KpiCards from "../components/dashboard/KpiCards";
import RecentReviewsTable from "../components/dashboard/RecentReviewsTable";
import RecentReviews from "../components/dashboard/RecentReviewsTable";

export default function page() {
  return (
    <div className="space-y-5">
      <DateRangeLabel />
      <KpiCards />
      <AnalyticsCharts />
      <KeywordInsights />
      <RecentReviewsTable />
    </div>
  );
}
