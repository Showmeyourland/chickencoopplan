// Vite plugin that generates per-route static HTML files at build time
// Each HTML file has unique <title>, <meta description>, <link canonical>, and OG tags
// This solves the SPA problem where all routes serve the same index.html

import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
}

export default function staticSeoPlugin(routes: Record<string, RouteSEO>): Plugin {
  return {
    name: 'vite-plugin-static-seo',
    enforce: 'post',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        console.warn('[static-seo] dist/index.html not found, skipping.');
        return;
      }

      const template = fs.readFileSync(indexPath, 'utf-8');

      for (const [routePath, seo] of Object.entries(routes)) {
        // Skip the homepage — it's already index.html
        if (routePath === '/') {
          // Still update the root index.html with correct meta
          const updatedRoot = injectMeta(template, seo);
          fs.writeFileSync(indexPath, updatedRoot, 'utf-8');
          console.log(`[static-seo] Updated /index.html`);
          continue;
        }

        // Create directory structure: /guides/coop-permit-guide/index.html
        const targetDir = path.join(distDir, routePath);
        const targetFile = path.join(targetDir, 'index.html');

        fs.mkdirSync(targetDir, { recursive: true });

        const html = injectMeta(template, seo);
        fs.writeFileSync(targetFile, html, 'utf-8');
        console.log(`[static-seo] Generated ${routePath}/index.html`);
      }
    },
  };
}

function injectMeta(html: string, seo: RouteSEO): string {
  let result = html;

  // Replace <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`
  );

  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}">`
  );

  // Replace canonical
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(seo.canonical)}">`
  );

  // Replace og:title
  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}">`
  );

  // Replace og:description
  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}">`
  );

  // Replace og:url
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(seo.canonical)}">`
  );

  // Replace og:type
  const ogType = seo.ogType || 'article';
  result = result.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${ogType}">`
  );

  // Replace twitter:title
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}">`
  );

  // Replace twitter:description
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}">`
  );

  return result;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
