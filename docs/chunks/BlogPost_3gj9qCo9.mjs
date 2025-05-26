import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/home/ina/github.com/tutorial-astro/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
