import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B0IS1ZkY.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
export { renderers } from '../renderers.mjs';

function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "！ 訪問いただきありがとうございます！"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "新しい挨拶"
    })]
  });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>サブタイトル</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hej", "Hello", "Hola", "Habari"], "client:component-hydration": "load", "client:component-path": "/home/ina/github.com/tutorial-astro/src/components/Greeting", "client:component-export": "default" })} ` })}`;
}, "/home/ina/github.com/tutorial-astro/src/pages/index.astro", void 0);

const $$file = "/home/ina/github.com/tutorial-astro/src/pages/index.astro";
const $$url = "/tutorial-astro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
