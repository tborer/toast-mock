export const mockInsights = {
  restaurantName: "The Golden Fork",
  period: "Week of Apr 14–18, 2026",
  healthScore: 88,
  metrics: [
    {
      id: "labor_01",
      type: "Risk",
      metric: "Labor Costs",
      insight:
        "Tuesday morning labor costs are averaging 45% of sales, exceeding your target threshold of 30%.",
      recommendation:
        "Deploy ML scheduling logic to automatically adjust shift durations based on historical 30-day foot traffic.",
      actionText: "Review AI Schedule Draft",
      saasTieIn: "Toast Team Management",
      delta: "+15% vs. target",
      deltaDirection: "up",
    },
    {
      id: "turn_01",
      type: "Opportunity",
      metric: "Table Turn Times",
      insight:
        "Friday peak dinner table turns are averaging 65 minutes, which is 15 minutes slower than the regional benchmark for similar venues.",
      recommendation:
        "Waitstaff are spending 22% of their time walking back to the POS. Implementing order-at-table hardware cuts turn times by ~12 minutes.",
      actionText: "Calculate Handheld ROI",
      saasTieIn: "Toast Go 2 Handhelds",
      delta: "+12 min vs. benchmark",
      deltaDirection: "up",
    },
    {
      id: "rev_01",
      type: "Opportunity",
      metric: "Upsell Revenue",
      insight:
        "Appetizer attachment rate is 18%, while top-quartile comparable restaurants average 34%.",
      recommendation:
        "AI-driven menu prompts at order time can surface high-margin pairings and close the 16-point gap automatically.",
      actionText: "Enable Smart Upsells",
      saasTieIn: "Toast AI Menu Engine",
      delta: "16pt gap vs. top quartile",
      deltaDirection: "down",
    },
    {
      id: "waste_01",
      type: "Risk",
      metric: "Food Waste",
      insight:
        "Thursday prep waste is running at 8.3% of COGS — nearly double the 4.5% industry standard.",
      recommendation:
        "Integrate inventory AI to correlate historical sales velocity with prep volumes and auto-generate daily par levels.",
      actionText: "View Waste Breakdown",
      saasTieIn: "Toast Inventory Management",
      delta: "+3.8% vs. industry avg.",
      deltaDirection: "up",
    },
  ],
};

export const activationSteps = [
  { id: 1, label: "Connect Bank Account", done: true },
  { id: 2, label: "Import Menu & Pricing", done: true },
  { id: 3, label: "Review Smart Insights", done: false, active: true },
];

export const kpiSummary = [
  { label: "Weekly Revenue", value: "$42,810", change: "+6.2%", up: true },
  { label: "Avg Check Size", value: "$38.40", change: "+1.4%", up: true },
  { label: "Covers Served", value: "1,114", change: "-2.1%", up: false },
  { label: "Labor % of Sales", value: "38.7%", change: "+4.2%", up: false },
];
