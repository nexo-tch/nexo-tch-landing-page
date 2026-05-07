import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/cafe", changeFrequency: "monthly", priority: 0.9 },
  { path: "/proteinas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/snacks", changeFrequency: "monthly", priority: 0.9 },
  { path: "/nosotros", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${company.site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
