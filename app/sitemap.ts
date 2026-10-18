import type { MetadataRoute } from "next";

import { services } from "@/lib/data/services";
import { site } from "@/lib/config/site";

const BASE_URL = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  // Search engines should only receive a sitemap from the public deployment.
  if (process.env.VERCEL_ENV !== "production") return [];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
