const posts = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

export type BlogPost = {
  title: string;
  date: string;
  content: string;
  slug?: string;
};

const parseMarkdown = (markdown: string): BlogPost => {
  const match = markdown.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!match) return { title: "Untitled", date: "Unknown", content: markdown };

  const frontmatter = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const [key, ...value] = line.split(":");
      return [key.trim(), value.join(":").trim().replace(/['"]/g, "")];
    })
  );

  return {
    title: frontmatter.title || "Untitled",
    date: frontmatter.date || "Unknown",
    content: match[2].trim(),
  };
};

export const BlogUtils = {
  getAll: (): BlogPost[] => {
    return Object.entries(posts).map(([path, raw]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      const post = parseMarkdown(raw as string);
      return { ...post, slug };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  get: (slug: string): BlogPost | null => {
    const path = `/src/posts/${slug}.md`;
    if (!posts[path]) return null;
    return parseMarkdown(posts[path] as string);
  }
};
