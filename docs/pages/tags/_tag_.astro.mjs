import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B0IS1ZkY.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_3gj9qCo9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../../chunks/post-1_CpK8eRCY.mjs').then(n => n._),"../posts/post-2.md": () => import('../../chunks/post-2_C7TPM3_4.mjs').then(n => n._),"../posts/post-3.md": () => import('../../chunks/post-3_VZPkwMrx.mjs').then(n => n._),"../posts/post-4.md": () => import('../../chunks/post-4_BUVqD6Ns.mjs').then(n => n._)}), () => "../posts/*.md");
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${tag}のタグが付いた記事</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/home/ina/github.com/tutorial-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/ina/github.com/tutorial-astro/src/pages/tags/[tag].astro";
const $$url = "/tutorial-astro/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
