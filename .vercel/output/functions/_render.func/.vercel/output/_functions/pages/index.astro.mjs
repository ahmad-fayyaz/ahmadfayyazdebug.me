/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, b as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_FHoWPl6U.mjs';
import 'kleur/colors';
import { p as presentation, f as formatDate, M as MAP_COLOR_VARIANT_TO_TEXT, t as theme, g as getCollection, $ as $$Layout } from '../chunks/formatDate_ByvU0h7Z.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DnQOBNCH.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://ahmadfayyazdebug.me/");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const { label, isUnderline, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(props.href, "href")}${addAttribute({
    ["hover:text-neutral-100 cursor-pointer"]: true,
    ["underline decoration-dashed underline-offset-8"]: isUnderline
  }, "class:list")}${spreadAttributes(props)} rel="noreferrer" target="_blank"> ${label} <span class="sr-only">${label} link</span> </a>`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/components/shared/Link.astro", void 0);

const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul role="list" class="flex flex-row gap-2"> ${presentation.socials.map((social, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> ${renderComponent($$result2, "Link", $$Link, { "href": social.link, "label": social.label })} </li> ${presentation.socials.length - 1 !== index && renderTemplate`<li>/</li>`}` })}`)} </ul>`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/components/SocialLinks.astro", void 0);

const $$Astro$1 = createAstro("https://ahmadfayyazdebug.me/");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, publishedAt, description, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400"${addAttribute(`/posts/${slug}`, "href")}> <div class="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center"> <p class="text-neutral-100">${title}</p> <div class="flex flex-row items-center gap-4"> <p>${formatDate(publishedAt)}</p> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1"> <path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> </div> <p class="truncate"> ${description} </p> </a>`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/components/PostCard.astro", void 0);

const $$Astro = createAstro("https://ahmadfayyazdebug.me/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, techs, link, isComingSoon } = Astro2.props;
  const formatTechs = (values) => values.toString().replaceAll(",", " \u2022 ");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${isComingSoon && renderTemplate`${maybeRenderHead()}<div class="t group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center"><div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-4"><p class="text-neutral-100">${title}</p><p>${formatTechs(techs)}</p></div><p class="w-fit rounded-md bg-neutral-900 px-4 py-1">Soon</p></div>`}${!isComingSoon && renderTemplate`<a class="group flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 md:flex-row md:items-center"${addAttribute(link, "href")} target="_blank"><div class="flex flex-col gap-4 md:flex-row md:items-center"><p class="text-neutral-100">${title}</p><p>${formatTechs(techs)}</p></div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1"><path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>`}` })}`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/components/ProjectCard.astro", void 0);

function convertAsteriskToStrongTag(str) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]}">$1</strong>`
  );
}

const projects = [
  {
    title: "GoFundMe Subsciption",
    techs: ["Django", "React", "Stripe"],
    link: "https://puppetfactory.app/"
  }
];

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort(function(first, second) {
    return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-20"> <article class="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12"> ${presentation.profile && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": presentation.profile, "class": "w-1/4 self-center rounded-full", "alt": "Your Profile", "width": "200", "height": "200" })}`} <div class="flex flex-col gap-8"> <h1 class="text-3xl text-neutral-100"> ${presentation.title} </h1> <h2 class="w-auto max-w-[60ch] leading-6">${unescapeHTML(convertAsteriskToStrongTag(presentation.description))}</h2> ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})} </div> </article> <article class="flex flex-col gap-8"> <header class="flex w-full flex-row justify-between gap-2"> <h3 class="text-lg text-neutral-100">Latest posts</h3> ${renderComponent($$result2, "Link", $$Link, { "href": "/posts", "label": "See all posts", "isUnderline": true, "target": "_self" })} </header> ${posts.length === 0 && renderTemplate`<p>Soon, stay connected 👀...</p>`} <section class="flex flex-col gap-4 md:flex-row md:flex-wrap"> ${posts.length !== 0 && posts.slice(0, 2).map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "publishedAt": post.data.publishedAt, "title": post.data.title, "description": post.data.description, "slug": post.slug })}`)} </section> </article> <article class="flex flex-col gap-8"> <header class="flex w-full flex-row justify-between gap-2"> <h3 class="text-lg text-neutral-100">
Selected projects (${projects.length})
</h3> </header> ${projects.length === 0 && renderTemplate`<p>Oops, I must work^^^^^</p>`} <section class="flex flex-col gap-4"> ${projects.length !== 0 && projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </section> </article> <article class="flex flex-col gap-8"> <header class="flex w-full flex-row justify-between gap-2"> <h3 class="text-lg text-neutral-100">Get in touch</h3> </header> <p>
Email me at ${renderComponent($$result2, "Link", $$Link, { "href": `mailto:${presentation.mail}`, "label": presentation.mail })} or follow me via my social links.
</p> ${renderComponent($$result2, "SocialLinks", $$SocialLinks, {})} </article> </main> ` })}`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/pages/index.astro", void 0);

const $$file = "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
