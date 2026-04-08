export const guideToFeaturedProduct: Record<string, { slug: string; name: string; price: string }> = {
  '4x4-chicken-coop-plans': { slug: '4x4-starter-coop-plans', name: '4×4 Starter Plans', price: '$19' },
  'small-chicken-coop-plans': { slug: '4x4-starter-coop-plans', name: '4×4 Starter Plans', price: '$19' },
  'beginner-chicken-coop-plans': { slug: '4x4-starter-coop-plans', name: '4×4 Starter Plans', price: '$19' },
  'chicken-coop-plans-4-chickens': { slug: '4x4-starter-coop-plans', name: '4×4 Starter Plans', price: '$19' },
  'small-backyard-coop-plans': { slug: '4x4-starter-coop-plans', name: '4×4 Starter Plans', price: '$19' },
  'large-chicken-coop-plans': { slug: '10x12-large-coop-plans', name: '10×12 Large Plans', price: '$34' },
  'a-frame-chicken-coop-plans': { slug: 'a-frame-coop-plans', name: 'A-Frame Plans', price: '$15' },
  'mobile-chicken-coop-plans': { slug: 'a-frame-coop-plans', name: 'A-Frame Plans', price: '$15' },
  'walk-in-chicken-coop-plans': { slug: '8x8-walk-in-coop-plans', name: '8×8 Walk-In Plans', price: '$29' },
  'chicken-coop-size-calculator': { slug: 'all-plans-bundle', name: 'All 5 Plans Bundle', price: '$79' },
  'chicken-coop-plans': { slug: 'all-plans-bundle', name: 'All 5 Plans Bundle', price: '$79' },
  'chicken-coop-plans-materials-list': { slug: '4x8-medium-coop-plans', name: '4×8 Medium Plans', price: '$24' },
};

export const defaultFeaturedProduct = {
  slug: '4x8-medium-coop-plans',
  name: '4×8 Chicken Coop Plans',
  price: '$24',
};

export function getFeaturedProduct(guideSlug: string) {
  return guideToFeaturedProduct[guideSlug] || defaultFeaturedProduct;
}
