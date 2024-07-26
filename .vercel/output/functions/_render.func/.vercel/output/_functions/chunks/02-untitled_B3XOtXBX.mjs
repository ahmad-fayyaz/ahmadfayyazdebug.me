import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_FHoWPl6U.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"hello-world\">Hello World</h2>";

				const frontmatter = {"title":"Untitled","publishedAt":"2023-05-24T00:00:00.000Z","description":"Lorem ipsum dolor sit amet consectetur et ultrices blandit neque ege","slug":"untitled","isPublish":true};
				const file = "/Users/ahmadfayyaz/Documents/Personal/Portfolio/Code/src/content/posts/02-untitled.md";
				const url = undefined;
				function rawContent() {
					return "\n## Hello World\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hello-world","text":"Hello World"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
