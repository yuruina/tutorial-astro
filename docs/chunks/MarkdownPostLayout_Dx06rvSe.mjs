import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, f as renderSlot, d as addAttribute } from './astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_B0IS1ZkY.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-5grsw2hi>Published on: ${frontmatter.pubDate.toString().slice(0, 10)}</p> <p data-astro-cid-5grsw2hi>Written by ${frontmatter.author}</p> <div class="tags" data-astro-cid-5grsw2hi> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a></p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/home/ina/github.com/tutorial-astro/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
