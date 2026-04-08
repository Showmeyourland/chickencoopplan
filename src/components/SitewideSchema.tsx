import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://buildingachickencoopplans.com';
const LOGO_URL = `${SITE_URL}/assets/logo-KAJ3iibi.png`;

const SitewideSchema = () => {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CoopCraft',
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CoopCraft',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
};

export default SitewideSchema;
