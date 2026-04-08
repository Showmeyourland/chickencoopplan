export function articleSchema(params: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  imageUrl?: string;
}) {
  const url = `https://buildingachickencoopplans.com/guides/${params.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": params.title,
    "description": params.description,
    "url": url,
    "datePublished": params.datePublished,
    "dateModified": params.dateModified,
    "image": params.imageUrl || "https://buildingachickencoopplans.com/og-default.jpg",
    "author": {
      "@type": "Organization",
      "name": "CoopCraft",
      "url": "https://buildingachickencoopplans.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CoopCraft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://buildingachickencoopplans.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function guideBreadcrumbSchema(params: { title: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buildingachickencoopplans.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://buildingachickencoopplans.com/guides" },
      { "@type": "ListItem", "position": 3, "name": params.title, "item": `https://buildingachickencoopplans.com/guides/${params.slug}` }
    ]
  };
}
