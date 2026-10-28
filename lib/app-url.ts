export function appUrl(path: string) {
  const base = (process.env.NEXT_PUBLIC_APP_URL ?? "https://orderlypos-ui.vercel.app").replace(/\/$/, "");
  return `${base}${path}`;
}
