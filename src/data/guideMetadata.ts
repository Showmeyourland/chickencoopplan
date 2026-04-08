export interface GuideMeta {
  slug: string;
  datePublished: string;
  dateModified: string;
}

export const guideMetadata: GuideMeta[] = [
  { slug: 'how-to-build-chicken-coop', datePublished: '2025-06-15', dateModified: '2026-04-07' },
  { slug: 'small-chicken-coop-plans', datePublished: '2025-07-02', dateModified: '2026-03-20' },
  { slug: '4x4-chicken-coop-plans', datePublished: '2025-07-10', dateModified: '2026-03-20' },
  { slug: 'chicken-coop-size-calculator', datePublished: '2025-08-01', dateModified: '2026-04-01' },
  { slug: 'coop-materials-guide', datePublished: '2025-08-10', dateModified: '2026-04-01' },
  { slug: 'coop-permit-guide', datePublished: '2025-08-15', dateModified: '2026-03-15' },
  { slug: 'predator-proof-coop-guide', datePublished: '2025-08-20', dateModified: '2026-04-01' },
  { slug: 'coop-ventilation-guide', datePublished: '2025-09-01', dateModified: '2026-03-20' },
  { slug: 'cost-breakdown-2025', datePublished: '2025-09-15', dateModified: '2026-04-07' },
  { slug: 'expensive-coop-mistakes', datePublished: '2025-10-01', dateModified: '2026-03-15' },
  { slug: 'arizona-chicken-coop-guide', datePublished: '2025-10-10', dateModified: '2026-04-07' },
  { slug: 'urban-chicken-coop-plans', datePublished: '2025-10-15', dateModified: '2026-03-20' },
  { slug: 'free-vs-premium-plans', datePublished: '2025-10-20', dateModified: '2026-03-15' },
  { slug: 'winter-chicken-coop-guide', datePublished: '2025-11-01', dateModified: '2026-04-07' },
  { slug: 'mobile-chicken-coop-plans', datePublished: '2025-11-10', dateModified: '2026-03-20' },
  { slug: 'chicken-coop-flooring-guide', datePublished: '2025-11-15', dateModified: '2026-04-01' },
  { slug: 'large-chicken-coop-plans', datePublished: '2025-11-20', dateModified: '2026-03-20' },
  { slug: 'chicken-coop-insulation-guide', datePublished: '2025-12-01', dateModified: '2026-04-01' },
  { slug: 'free-chicken-coop-plans', datePublished: '2025-12-10', dateModified: '2026-03-15' },
  { slug: 'chicken-coop-lighting-guide', datePublished: '2025-12-15', dateModified: '2026-04-07' },
  { slug: 'chicken-run-design-guide', datePublished: '2026-01-05', dateModified: '2026-04-01' },
  { slug: 'chicken-coop-cleaning-guide', datePublished: '2026-01-10', dateModified: '2026-03-20' },
  { slug: 'free-coop-plans-quality-checklist', datePublished: '2026-01-15', dateModified: '2026-03-15' },
  { slug: 'small-backyard-coop-plans', datePublished: '2026-01-20', dateModified: '2026-03-20' },
  { slug: 'beginner-chicken-coop-plans', datePublished: '2026-02-01', dateModified: '2026-04-07' },
  { slug: 'climate-chicken-coop-guide', datePublished: '2026-02-10', dateModified: '2026-04-01' },
  { slug: 'nesting-box-guide', datePublished: '2026-02-15', dateModified: '2026-04-07' },
  { slug: 'chicken-coop-roofing-guide', datePublished: '2026-02-20', dateModified: '2026-04-01' },
  { slug: 'best-chicken-breeds-beginners', datePublished: '2026-03-01', dateModified: '2026-04-07' },
  { slug: 'chicken-coop-plans', datePublished: '2026-03-15', dateModified: '2026-04-08' },
  { slug: 'chicken-coop-plans-4-chickens', datePublished: '2026-03-20', dateModified: '2026-04-08' },
  { slug: 'a-frame-chicken-coop-plans', datePublished: '2026-03-22', dateModified: '2026-04-08' },
  { slug: 'walk-in-chicken-coop-plans', datePublished: '2026-03-25', dateModified: '2026-04-08' },
  { slug: 'chicken-coop-plans-materials-list', datePublished: '2026-03-28', dateModified: '2026-04-08' },
];

export function getGuideMeta(slug: string): GuideMeta | undefined {
  return guideMetadata.find(g => g.slug === slug);
}
