/**
 * Sitemap Generator Script
 *
 * This script can be used to dynamically generate a sitemap.xml file
 * based on your routes and content. You can run this script as part
 * of your build process to keep your sitemap up-to-date.
 *
 * Usage:
 * 1. Add to package.json scripts: "generate-sitemap": "node src/utils/generateSitemap.js"
 * 2. Run before build: npm run generate-sitemap
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Site configuration
const siteConfig = {
  siteUrl: "https://shreejanbhattarai.com.np",
  outputPath: path.resolve(__dirname, "../../public/sitemap.xml"),
  routes: [
    {
      path: "/",
      priority: 1.0,
      changefreq: "monthly",
    },
    {
      path: "/about",
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      path: "/projects",
      priority: 0.8,
      changefreq: "monthly",
    },
    {
      path: "/contact",
      priority: 0.7,
      changefreq: "yearly",
    },
    // Add more routes as needed
  ],
};

/**
 * Generate the sitemap XML content
 */
function generateSitemapXml() {
  const today = new Date().toISOString().split("T")[0];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  siteConfig.routes.forEach((route) => {
    sitemap += "  <url>\n";
    sitemap += `    <loc>${siteConfig.siteUrl}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += "  </url>\n";
  });

  sitemap += "</urlset>";

  return sitemap;
}

/**
 * Write sitemap to file
 */
function writeSitemapToFile() {
  const sitemap = generateSitemapXml();

  try {
    fs.writeFileSync(siteConfig.outputPath, sitemap);
    console.log(`✅ Sitemap generated at: ${siteConfig.outputPath}`);
  } catch (error) {
    console.error("Error writing sitemap:", error);
  }
}

// Run the generator
writeSitemapToFile();
