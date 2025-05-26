import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B0IS1ZkY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../chunks/post-1_CpK8eRCY.mjs').then(n => n._),"../posts/post-2.md": () => import('../chunks/post-2_C7TPM3_4.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_VZPkwMrx.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_BUVqD6Ns.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "\u30BF\u30B0\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy><a${addAttribute(`/tutorial-astro/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p>`)} </div> ` })} `;
}, "/home/ina/github.com/tutorial-astro/src/pages/tags/index.astro", void 0);

const $$file = "/home/ina/github.com/tutorial-astro/src/pages/tags/index.astro";
const $$url = "/tutorial-astro/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
