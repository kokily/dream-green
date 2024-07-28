const prettier = require('prettier');
const fs = require('fs');

const SitemapGeneratedDate = new Date().toISOString();

const FRONT_DOMAIN = 'https://dreamgreen.co.kr';

const routes = [
  '/',
  '/about',
  '/area',
  '/blog',
  '/dreamgreen',
  '/faq',
  '/history',
  '/location',
  '/money',
  '/process',
  '/question',
  '/waste',
  '/works',
];

const formatting = (target) =>
  prettier.format(target, {
    parser: 'html',
  });

function makeSitemapItem(url) {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${SitemapGeneratedDate}</lastmod>
    </url>
  `;
}

async function makeSitemap() {
  try {
    const pages = routes.map((page) => `${FRONT_DOMAIN}/${page}`);
    const pageSitemap = pages.map((page) => makeSitemapItem(page)).join('');

    const generateIndexSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
          ${pageSitemap}
        </urlset>
    `;

    const formattedIndexSitemap = await formatting(generateIndexSitemap);

    fs.writeFileSync(
      `${process.cwd()}/public/sitemap.xml`,
      formattedIndexSitemap,
      'utf-8',
    );
  } catch (err) {
    console.log(err);
  }
}

makeSitemap();
