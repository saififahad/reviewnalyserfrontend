import {
  MessageSquare,
  ArrowRight,
  MoreHorizontal,
  Smile,
  Meh,
  Frown,
  Star,
} from "lucide-react";

export default function RecentReviewsTable() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
            <MessageSquare size={25} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">Recent Reviews</h2>
            <p className="text-sm text-gray-500">
              Latest customer reviews from your connected businesses.
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All Reviews
          <ArrowRight size={17} />
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1050px] border-collapse text-left">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-700">
              <th className="rounded-l-lg px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold">Customer</th>
              <th className="px-4 py-3 font-semibold">Rating</th>
              <th className="px-4 py-3 font-semibold">Review</th>
              <th className="px-4 py-3 font-semibold">Sentiment</th>
              <th className="px-4 py-3 font-semibold">Source</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="rounded-r-lg px-4 py-3 text-center font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {/* Row 1 */}
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 font-semibold text-sky-600">
                    A
                  </div>
                  <span className="font-semibold text-gray-800">
                    Aman Verma
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-0.5 text-yellow-400">
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                </div>
              </td>
              <td className="px-4 py-3">
                Great service! The team was very helpful and quick.
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 font-medium text-green-700">
                  <Smile size={17} />
                  Positive
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-500">G</span>
                  <span>Google</span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">Nov 30, 2025</td>
              <td className="px-4 py-3 text-center">
                <MoreHorizontal size={20} className="mx-auto cursor-pointer" />
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3">2</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-600">
                    P
                  </div>
                  <span className="font-semibold text-gray-800">
                    Priya Sharma
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-0.5 text-yellow-400">
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} className="text-gray-300" />
                </div>
              </td>
              <td className="px-4 py-3">
                Good quality product, but delivery was a bit delayed.
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-orange-700">
                  <Meh size={17} />
                  Neutral
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-red-500">✿</span>
                  <span>Yelp</span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">Nov 29, 2025</td>
              <td className="px-4 py-3 text-center">
                <MoreHorizontal size={20} className="mx-auto cursor-pointer" />
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3">3</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-600">
                    R
                  </div>
                  <span className="font-semibold text-gray-800">
                    Rahul Singh
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-0.5 text-yellow-400">
                  <Star size={17} fill="currentColor" />
                  <Star size={17} className="text-gray-300" />
                  <Star size={17} className="text-gray-300" />
                  <Star size={17} className="text-gray-300" />
                  <Star size={17} className="text-gray-300" />
                </div>
              </td>
              <td className="px-4 py-3">
                Very disappointed. The product stopped working in 2 days.
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 font-medium text-purple-700">
                  <Frown size={17} />
                  Negative
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-500">G</span>
                  <span>Google</span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">Nov 28, 2025</td>
              <td className="px-4 py-3 text-center">
                <MoreHorizontal size={20} className="mx-auto cursor-pointer" />
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3">4</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-600">
                    S
                  </div>
                  <span className="font-semibold text-gray-800">
                    Sneha Kapoor
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-0.5 text-yellow-400">
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                </div>
              </td>
              <td className="px-4 py-3">
                Excellent experience! Easy to use and great support.
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 font-medium text-green-700">
                  <Smile size={17} />
                  Positive
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-red-500">✿</span>
                  <span>Yelp</span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">Nov 27, 2025</td>
              <td className="px-4 py-3 text-center">
                <MoreHorizontal size={20} className="mx-auto cursor-pointer" />
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td className="px-4 py-3">5</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                    V
                  </div>
                  <span className="font-semibold text-gray-800">
                    Vikram Mehta
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-0.5 text-yellow-400">
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} fill="currentColor" />
                  <Star size={17} className="text-gray-300" />
                </div>
              </td>
              <td className="px-4 py-3">
                Overall good, but the pricing could be better.
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-orange-700">
                  <Meh size={17} />
                  Neutral
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-500">G</span>
                  <span>Google</span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">Nov 26, 2025</td>
              <td className="px-4 py-3 text-center">
                <MoreHorizontal size={20} className="mx-auto cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
