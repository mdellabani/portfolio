/* eslint-env node */
module.exports = {
  siteUrl: 'https://mdellabani.github.io/portfolio',
  exclude: ['/404*', '/500*'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
    // Uncomment when blog is added:
    // additionalSitemaps: [
    //   'https://mdellabani.github.io/portfolio/blog-sitemap.xml',
    // ],
  },
};
