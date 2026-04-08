import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO = ({
  title,
  description,
  canonical,
  type = 'website',
  image = '/og-default.jpg',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps) => {
  const siteName = 'CoopCraft';
  const siteUrl = 'https://buildingachickencoopplans.com';
  
  // Prevent double-branding in title
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Handle both absolute URLs and path-based canonicals
  const canonicalUrl = canonical 
    ? canonical.startsWith('http') 
      ? canonical 
      : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined;

  const absoluteImage = image
    ? image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
    : `${siteUrl}/og-default.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
};

export default SEO;

// JSON-LD Structured Data Components
interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export const ArticleSchema = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleSchemaProps) => {
  const siteUrl = 'https://buildingachickencoopplans.com';
  
  // Ensure URLs are absolute
  const absoluteUrl = url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
  const absoluteImage = image 
    ? image.startsWith('http') 
      ? image 
      : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
    : `${siteUrl}/og-image.jpg`;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'CoopCraft',
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: absoluteImage,
    url: absoluteUrl,
    publisher: {
      '@type': 'Organization',
      name: 'CoopCraft',
      logo: {
        '@type': 'ImageObject',
        url: 'https://buildingachickencoopplans.com/assets/logo-KAJ3iibi.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://buildingachickencoopplans.com${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// FAQPage Schema
interface FAQSchemaProps {
  questions: { question: string; answer: string }[];
}

export const FAQSchema = ({ questions }: FAQSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// WebSite Schema
interface WebSiteSchemaProps {
  name: string;
  url: string;
  searchUrl?: string;
}

export const WebSiteSchema = ({ name, url, searchUrl }: WebSiteSchemaProps) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
  };
  
  if (searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: searchUrl,
      },
      'query-input': 'required name=search_term_string',
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
