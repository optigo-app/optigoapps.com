import { WEBSITE_URL } from "@/env";

export function generatePageMetadata(pageData) {
  if (!pageData) return {};

  // Base metadata
  const baseMetadata = {
    title: `${pageData.title} | Optigo Apps`,
    description: pageData.description || "",
    keywords: pageData.keywords || "",
    authors: [{ name: "Optigo Apps" }],
    alternates: { canonical: pageData.url || WEBSITE_URL },
    metadataBase: new URL(WEBSITE_URL),
    icons: { icon: "/favicon.ico" },
    publisher: "Optigoapps",
    // ✅ Robots meta tags
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${pageData.title} | Optigo Apps`,
      description: pageData.description || "",
      url: pageData.url || WEBSITE_URL,
      siteName: "Optigo Apps",
      type: "website",
      locale: "en_IN",
      images: pageData.image
        ? [
          {
            url: pageData.image,
            width: 1200,
            height: 630,
            alt: `${pageData.title} - Optigo Apps`,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageData.title} | Optigo Apps`,
      description: pageData.description || "",
      images: pageData.image ? [pageData.image] : [],
      creator: "@OptigoApps",
    },
    additionalScripts: [], // Placeholder for structured data
  };

  return baseMetadata;
}
