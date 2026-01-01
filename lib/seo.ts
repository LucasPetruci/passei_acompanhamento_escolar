import { siteConfig } from "@/conifg/site"
import type { Metadata } from "next"

export function generateMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "acompanhamento escolar",
      "reforço escolar",
      "pedagogia",
      "educação",
      "DUA",
      "professora particular",
    ],
    authors: [
      {
        name: siteConfig.author.name,
      },
    ],
    creator: siteConfig.author.name,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      creator: "@passeiacompanhamento",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  founder: {
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
  },
}
