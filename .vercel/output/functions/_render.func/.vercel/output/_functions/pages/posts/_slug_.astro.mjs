/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_FHoWPl6U.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getCollection, f as formatDate } from '../../chunks/formatDate_ByvU0h7Z.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ahmadfayyazdebug.me/");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="post mx-auto flex w-full max-w-prose flex-col gap-4"> <header role="presentation"> <h1 class="text-md"> ${post.data.title} - ${formatDate(post.data.publishedAt)} </h1> <p class="italic">${post.data.description}</p> </header> ${renderComponent($$result2, "Content", Content, {})} </main> ` })}`;
}, "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/pages/posts/[slug].astro", void 0);

const $$file = "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
