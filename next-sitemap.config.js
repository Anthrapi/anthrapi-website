/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://anthrapi.com',
  generateRobotsTxt: true, // Enable dynamic generation
  generateIndexSitemap: true,
  outDir: 'public',
  exclude: ['/404', '/500'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/*'],
        crawlDelay: 1, // Allow faster crawling for Google
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/*'],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://anthrapi.com/sitemap.xml',
      'https://anthrapi.com/sitemap-0.xml',
    ],
    host: 'https://anthrapi.com',
  },

  // Custom sitemap entries for all routes
  additionalPaths: async (config) => {
    const result = [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/men-at-work',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      // Add PDF routes dynamically
      {
        loc: '/men-at-work/AI services.pdf',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/men-at-work/Creative Services.pdf',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/men-at-work/Software solutions.pdf',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
    ];

    return result;
  },

  transform: async (config, path) => {
    // Custom transformation for each URL
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
