import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified: string;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: "2026-08-30" },
  { path: "/vending-corporativo-medellin", changeFrequency: "monthly", priority: 0.95, lastModified: "2026-08-30" },
  { path: "/comodato-maquinas-vending", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-30" },
  { path: "/cafe", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-30" },
  { path: "/proteinas", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-30" },
  { path: "/snacks", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-30" },
  { path: "/nosotros", changeFrequency: "monthly", priority: 0.6, lastModified: "2026-08-30" },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-04-01" },
  { path: "/privacidad", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-04-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${company.site.url}${path}`,
    lastModified: new Date(`${lastModified}T12:00:00-05:00`),
    changeFrequency,
    priority,
  }));
}
