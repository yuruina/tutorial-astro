import { _ as _page$1 } from '../chunks/post-1_CpK8eRCY.mjs';
import { _ as _page$2 } from '../chunks/post-2_C7TPM3_4.mjs';
import { _ as _page$3 } from '../chunks/post-3_VZPkwMrx.mjs';
import { _ as _page$4 } from '../chunks/post-4_BUVqD6Ns.mjs';
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B0IS1ZkY.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_3gj9qCo9.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values([_page$1,_page$2,_page$3,_page$4]);
  const pageTitle = "Learning Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/home/ina/github.com/tutorial-astro/src/pages/blog.astro", void 0);

const $$file = "/home/ina/github.com/tutorial-astro/src/pages/blog.astro";
const $$url = "/tutorial-astro/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
