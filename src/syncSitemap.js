const prettier = require('prettier');
const fs = require('fs');
const { default: axios } = require('axios');

const SitemapGeneratedDate = new Date().toISOString();

const FRONT_DOMAIN = 'https://dreamgreen.co.kr';

const routes = ['/', '/about', '/blog', '/money', '/question', '/works'];

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
    const pages = routes.map((page) => `${FRONT_DOMAIN}${page}`);
    const pageSitemap = pages.map((page) => makeSitemapItem(page)).join('');

    let postsSitemap = '';
    let counta = 0;

    const posts = await axios.get(`${FRONT_DOMAIN}/api/blog/all`);

    if (!posts) {
      console.log('Post가 존재하지 않습니다.');
      return;
    }

    postsSitemap = posts.data
      .map((post) => {
        counta += 1;
        return makeSitemapItem(`${FRONT_DOMAIN}/blog/read/${post.id}`);
      })
      .join('');

    console.log(`${counta} 개의 포스트 사이트 맵 생성`);

    const generateIndexSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
          ${pageSitemap}
          ${postsSitemap}
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
