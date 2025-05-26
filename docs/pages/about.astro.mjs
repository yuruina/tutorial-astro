import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_U9i4itxO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B0IS1ZkY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Here are a few facts about me:</p> <ul> <li>My name is ${identity.firstName}.</li> <li>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p>My skills are:</p> <ul> ${skills.map((skill) => renderTemplate`<li class="skill">${skill}</li>`)} </ul> ${renderTemplate`<p>I am happy to be learning Astro!</p>`}${renderTemplate`<p>I finished this tutorial!</p>`}${renderTemplate`<p>My goal is to finish in 3 days.</p>` }` })}`;
}, "/home/ina/github.com/tutorial-astro/src/pages/about.astro", void 0);

const $$file = "/home/ina/github.com/tutorial-astro/src/pages/about.astro";
const $$url = "/tutorial-astro/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
