import matter from 'gray-matter';

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

// Vite's import.meta.glob to load all markdown files in src/content/blog/
const rawMarkdownFiles = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  eager: true,
}) as Record<string, { default: string } | string>;

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
      const { data, content } = matter(fileContent);

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
