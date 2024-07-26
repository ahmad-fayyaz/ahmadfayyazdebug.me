/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_FHoWPl6U.mjs';
import 'kleur/colors';
import { g as getCollection, f as formatDate, $ as $$Layout } from '../chunks/formatDate_ByvU0h7Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort(function(first, second) {
    return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Template - All Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-20"> <h1 class="text-2xl text-neutral-100">Posts</h1> <article class="flex flex-col gap-4"> ${posts.map((post) => renderTemplate`<a class="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all hover:text-neutral-100"${addAttribute(`/posts/${post.slug}`, "href")}> <div class="flex w-full items-center justify-between"> <h2 class="text-lg">${post.data.title}</h2> <div class="flex flex-row items-center gap-4"> <p>${formatDate(post.data.publishedAt)}</p> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-300 group-hover:translate-x-1"> <path d="M5.25 12.75L12.75 5.25" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.25 5.25H12.75V12.75" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> </div> <p>${post.data.description}</p> </a>`)} </article> </main> ` })}`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/pages/posts/index.astro", void 0);

const $$file = "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
