import type { NextConfig } from "next";

const app = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");

const marketingPages = [
  "/features",
  "/agent",
  "/how-to-use",
  "/pricing",
  "/docs",
  "/blog",
  "/about",
  "/terms",
  "/privacy",
];

const appPaths = [
  "/login",
  "/signup",
  "/dashboard",
  "/dashboard/:path*",
  "/pos",
  "/pos/:path*",
  "/kds",
  "/kds/:path*",
  "/kiosk/:path*",
  "/orders",
  "/orders/:path*",
  "/settings",
  "/settings/:path*",
  "/inventory",
  "/inventory/:path*",
  "/menu",
  "/menu/:path*",
  "/tables",
  "/tables/:path*",
  "/reservations",
  "/reservations/:path*",
  "/customers",
  "/customers/:path*",
  "/reports",
  "/reports/:path*",
  "/accounting",
  "/accounting/:path*",
  "/team",
  "/attendance",
  "/approvals",
  "/approvals/:path*",
  "/operations",
  "/delivery",
  "/franchise",
  "/marketing",
  "/marketing/:path*",
  "/agent",
  "/agent/:path*",
  "/customer-display",
  "/guest/:path*",
  "/order/:path*",
];

const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  async redirects() {
    return [
      { source: "/", destination: "/orderlyPOS", permanent: false },
      { source: "/site", destination: "/orderlyPOS", permanent: false },
      ...marketingPages.map((page) => ({
        source: `/site${page}`,
        destination: `/orderlyPOS${page}`,
        permanent: false,
      })),
      { source: "/site/install", destination: "/orderlyPOS/docs", permanent: false },
      { source: "/orderlyPOS/install", destination: "/orderlyPOS/docs", permanent: false },
      ...(app ? appPaths.map((source) => ({ source, destination: `${app}${source}`, permanent: false })) : []),
    ];
  },
};

export default nextConfig;
