export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  cover: string;
  tags: string[];
  author: string;
  readTime: string;
  content: string;
}

export type InsightPost = BlogPost;

// Browser-safe zero-dependency frontmatter parser (avoids Node Buffer crashes)
function parseFrontmatter(fileContent: string): { data: Record<string, any>; content: string } {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: fileContent };
  }
  const rawYaml = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  const lines = rawYaml.split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
      data[key] = val;
    } else if (val.startsWith('[') && val.endsWith(']')) {
      try {
        data[key] = JSON.parse(val.replace(/'/g, '"'));
      } catch {
        data[key] = val.slice(1, -1).split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
      }
    } else {
      data[key] = val;
    }
  }

  return { data, content };
}

// Vite's import.meta.glob to load all markdown files in src/content/insights/ and src/content/blog/
const rawMarkdownFiles = import.meta.glob(
  ['/src/content/insights/*.md', '/src/content/blog/*.md'],
  {
    query: '?raw',
    eager: true,
  }
) as Record<string, { default: string } | string>;

let cachedPosts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;

  const posts: BlogPost[] = [];

  for (const path in rawMarkdownFiles) {
    const rawModule = rawMarkdownFiles[path];
    const fileContent = typeof rawModule === 'string' ? rawModule : rawModule.default || '';

    // Extract slug from filename (e.g. /src/content/blog/first-post.md -> first-post)
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';

    try {
      const { data, content } = parseFrontmatter(fileContent);

      posts.push({
        slug,
        title: data.title || 'Untitled Post',
        date: data.date || 'Recent',
        description: data.description || '',
        cover: data.cover || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        tags: Array.isArray(data.tags) ? data.tags : [],
        author: data.author || 'Duneborn Team',
        readTime: data.readTime || calculateReadTime(content),
        content,
      });
    } catch (err) {
      console.error(`Error parsing markdown file ${path}:`, err);
    }
  }

  // Sort posts by date descending
  cachedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return cachedPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, tags: string[] = [], limit = 3): BlogPost[] {
  const posts = getAllPosts().filter((p) => p.slug !== currentSlug);

  if (tags.length === 0) return posts.slice(0, limit);

  // Score posts by tag matches
  const scored = posts.map((post) => {
    const score = post.tags.filter((tag) => tags.includes(tag)).length;
    return { post, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.map((item) => item.post).slice(0, limit);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet);
}

function calculateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  return `${minutes} min read`;
}

// Aliases for Insights terminology
export const getAllInsights = getAllPosts;
export const getInsightBySlug = getPostBySlug;
export const getRelatedInsights = getRelatedPosts;

