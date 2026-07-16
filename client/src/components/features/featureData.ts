import {
  Users,
  ListChecks,
  CreditCard,
  Settings,
  Truck,
  BarChart3,
  MessageSquare,
  Shield,
  Globe2,
  Wallet,
  Percent,
  Tags,
  Layers,
  Zap,
  Store,
  Users2,
  PackageSearch,
  Receipt,
  CalendarDays,
  PieChart,
  LayoutDashboard,
  Smartphone,
  TrendingUp,
  BellRing,
  Lock,
  Mail,
  Share2,
  Search,
  type LucideIcon,
} from "lucide-react";

export const FEATURE_GRADIENTS = [
  "bg-gradient-to-br from-[rgba(238,62,40,0.08)] to-transparent",
  "bg-gradient-to-br from-[rgba(249,173,66,0.08)] to-transparent",
  "bg-gradient-to-br from-[rgba(40,222,180,0.08)] to-transparent",
  "bg-gradient-to-br from-[rgba(40,166,222,0.08)] to-transparent",
] as const;

export const MAIN_FEATURES = [
  {
    icon: Users,
    title: "Store & Seller Control",
    description:
      "Manage your store or onboard sellers with built-in approvals, subscriptions, and performance tracking.",
  },
  {
    icon: ListChecks,
    title: "Product Listing Flow",
    description:
      "Streamlined product listing system with variants, SKUs, and bulk uploads — ready for any category.",
  },
  {
    icon: CreditCard,
    title: "Auto Payouts",
    description:
      "Built-in payout engine with customizable cycles and full TAP integration.",
  },
  {
    icon: Settings,
    title: "Smart Workflows",
    description:
      "Automate orders, returns, and tracking with real-time updates and smart notifications.",
  },
];

export const MINI_SURROUND: { icon: LucideIcon; label: string }[] = [
  { icon: Store, label: "Catalog" },
  { icon: Tags, label: "Variants" },
  { icon: Truck, label: "Shipping" },
  { icon: BarChart3, label: "Analytics" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Globe2, label: "Regions" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Shield, label: "Compliance" },
  { icon: Wallet, label: "Wallet" },
  { icon: Percent, label: "Promotions" },
  { icon: Layers, label: "Bundles" },
  { icon: Zap, label: "Automation" },
  { icon: Users2, label: "Teams" },
  { icon: PackageSearch, label: "Fulfillment" },
  { icon: Receipt, label: "Invoices" },
  { icon: CalendarDays, label: "Scheduling" },
  { icon: PieChart, label: "Insights" },
  { icon: TrendingUp, label: "Growth" },
  { icon: BellRing, label: "Alerts" },
  { icon: Lock, label: "Security" },
  { icon: Mail, label: "Emails" },
  { icon: Share2, label: "Social" },
  { icon: Search, label: "SEO" },
];
