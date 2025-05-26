import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    title: 'Astro学習者 | ブログ',
    description: 'Astroを学ぶ旅',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_CpK8eRCY.mjs').then(n => n._),"./posts/post-2.md": () => import('../chunks/post-2_C7TPM3_4.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_VZPkwMrx.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_BUVqD6Ns.mjs').then(n => n._)})),
    customData: `<language>ja-jp</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
