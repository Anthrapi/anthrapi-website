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
        disallow: [
          '/api/*',
          '/_next/static/chunks/*.map', // Only block source maps
          '/_next/static/chunks/webpack-*.js', // Block heavy webpack chunks
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/_next/image*', // Allow image optimization routes
          '/_next/static/chunks/*.js', // Allow JavaScript chunks
          '/_next/static/css/*.css', // Allow CSS files
        ],
        disallow: [
          '/api/*',
          '/_next/static/chunks/*.map', // Only block source maps
          '/_next/static/chunks/webpack-*.js', // Block heavy webpack chunks
        ],
        crawlDelay: 1, // Allow faster crawling for Google
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/_next/image*', // Allow image optimization routes
          '/_next/static/chunks/*.js', // Allow JavaScript chunks
          '/_next/static/css/*.css', // Allow CSS files
        ],
        disallow: [
          '/api/*',
          '/_next/static/chunks/*.map', // Only block source maps
          '/_next/static/chunks/webpack-*.js', // Block heavy webpack chunks
        ],
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
