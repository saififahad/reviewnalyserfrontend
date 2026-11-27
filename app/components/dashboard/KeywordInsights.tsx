import {
  Star,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function KeywordInsights() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Top Keywords */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 fill-amber-500 text-amber-500" />

            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Top Keywords
              </h3>
              <p className="text-sm text-gray-500">
                Most mentioned topics in reviews
              </p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm font-medium text-blue-600">
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Service
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Quality
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Delivery
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Product
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Price
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Support
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Experience
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            App
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Food
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-gray-700">
            Rating
          </span>
        </div>
      </div>

      {/* Key Insights */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <Lightbulb className="h-6 w-6 fill-blue-500 text-blue-500" />

          <h3 className="text-base font-semibold text-gray-900">
            Key Insights
          </h3>

          <span className="flex items-center gap-1 rounded-md bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
            <Sparkles size={13} />
            AI Powered
          </span>
        </div>

        <div className="space-y-3">
          {/* Positive Insight */}
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-green-50 p-1.5">
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>

            <p className="text-sm leading-6 text-gray-700">
              Positive reviews increased by 8% compared to the previous period.
            </p>
          </div>

          {/* Warning Insight */}
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-orange-50 p-1.5">
              <AlertCircle className="h-5 w-5 text-orange-500" />
            </div>

            <p className="text-sm leading-6 text-gray-700">
              Delivery is the most mentioned keyword (22% of reviews).
            </p>
          </div>

          {/* Suggestion Insight */}
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-purple-50 p-1.5">
              <Lightbulb className="h-5 w-5 text-purple-500" />
            </div>

            <p className="text-sm leading-6 text-gray-700">
              Consider improving support to reduce negative feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
