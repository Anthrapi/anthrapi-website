/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://anthrapi.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'public',
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://anthrapi.com/sitemap.xml'],
  },
  // Optional: Add custom sitemap entries for dynamic routes
  additionalPaths: async (config) => {
    const result = [];

    // Add any additional paths that might not be automatically detected
    // For example, if you have dynamic routes or API routes you want to include

    return result;
  },
};
