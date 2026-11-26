type TopBarConfigType = {
  title: string;
  businessSelector: boolean;
  searchBox: boolean;
  dateRange: boolean;
  filter: boolean;
  sentimentFilter: boolean;
  syncButton: boolean;
};

export const topBarConfig: Record<string, TopBarConfigType> = {
  "/dashboard": {
    title: "Dashboard",
    businessSelector: true,
    searchBox: true,
    dateRange: true,
    filter: false,
    sentimentFilter: false,
    syncButton: true,
  },
  "/dashboard/reviews": {
    title: "Reviews",
    businessSelector: true,
    searchBox: true,
    dateRange: true,
    filter: true,
    sentimentFilter: true,
    syncButton: true,
  },
  "/dashboard/analytics": {
    title: "Analytics",
    businessSelector: true,
    searchBox: false,
    dateRange: true,
    filter: false,
    sentimentFilter: false,
    syncButton: true,
  },
  "/dashboard/insights": {
    title: "Insights",
    businessSelector: true,
    searchBox: false,
    dateRange: true,
    filter: false,
    sentimentFilter: false,
    syncButton: true,
  },
  "/dashboard/settings": {
    title: "Settings",
    businessSelector: false,
    searchBox: false,
    dateRange: false,
    filter: false,
    sentimentFilter: false,
    syncButton: true,
  },
};
