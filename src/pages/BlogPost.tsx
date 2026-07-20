import { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, List } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../utils/blog';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);
  const relatedPosts = useMemo(
    () => (post ? getRelatedPosts(post.slug, post.tags, 3) : []),
    [post]
  );

  // Extract Table of Contents from Markdown headings
  const toc = useMemo(() => {
    if (!post?.content) return [];
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;
    while ((match = headingRegex.exec(post.content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      items.push({ id, text, level });
    }
    return items;
  }, [post]);

  if (!post) {
    return (
      <div className="pt-36 pb-24 bg-brand-black min-h-screen text-center px-6">
        <div className="max-w-md mx-auto glass-panel p-8 rounded-sm border border-sand-medium/20">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-sand-offwhite mb-4">Post Not Found</h2>
          <p className="text-xs text-sand-medium mb-6">The requested article could not be located.</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest rounded-sm"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
        <div className="absolute top-[10%] right-10 w-[600px] h-[400px] bg-radial-sand opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sand-medium hover:text-sand-offwhite transition-colors mb-8 cursor-pointer font-semibold"
        >
          <ArrowLeft size={14} />
          Back to Insights
        </Link>

        {/* Hero Section of Article */}
        <div className="max-w-4xl mb-12 animate-fade-up space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-spice-gold/15 text-spice-gold border border-spice-gold/30 px-3 py-1 rounded-sm font-mono font-bold uppercase tracking-wider">
              {post.tags[0] || 'RESEARCH'}
            </span>
            <span className="text-sand-medium/70 font-mono flex items-center gap-1">
              <Calendar size={12} className="text-spice-gold" />
              {post.date}
            </span>
            <span className="text-sand-medium/70 font-mono flex items-center gap-1">
              <Clock size={12} className="text-spice-gold" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-sand-offwhite leading-tight">
            {post.title}
          </h1>

          <p className="text-base md:text-lg text-sand-medium/90 font-light leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-sand-medium/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-spice-gold/20 border border-spice-gold/40 flex items-center justify-center text-spice-gold font-bold font-mono text-xs">
                DB
              </div>
              <div>
                <span className="block text-xs font-bold text-sand-offwhite">{post.author}</span>
                <span className="block text-[10px] text-sand-medium/60 font-mono">Cognitive Software Lab</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-sand-medium/20 text-sand-medium hover:text-sand-offwhite text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              <Share2 size={12} />
              Share Article
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="max-w-4xl mb-16 rounded-sm overflow-hidden border border-sand-medium/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <img src={post.cover} alt={post.title} className="w-full h-[350px] md:h-[480px] object-cover" />
        </div>

        {/* Main Content Layout: TOC Sidebar + Markdown Render */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl">
          {/* TOC Sidebar */}
          {toc.length > 0 && (
            <aside className="lg:col-span-4 sticky top-28 order-2 lg:order-1">
              <div className="glass-panel p-6 rounded-sm border border-sand-medium/15 space-y-4">
                <div className="flex items-center gap-2 border-b border-sand-medium/10 pb-3 text-spice-gold font-bold text-xs uppercase tracking-widest font-mono">
                  <List size={14} />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-xs transition-colors hover:text-spice-gold ${
                        item.level === 1
                          ? 'font-semibold text-sand-offwhite'
                          : item.level === 2
                          ? 'pl-3 text-sand-medium font-normal'
                          : 'pl-6 text-sand-medium/70 font-light'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Article Markdown Body */}
          <article className={`${toc.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} order-1 lg:order-2 prose-sand max-w-none`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h1 id={id} className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-sand-offwhite mt-10 mb-4 border-b border-sand-medium/15 pb-3">
                      {children}
                    </h1>
                  );
                },
                h2: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h2 id={id} className="text-xl md:text-2xl font-bold uppercase tracking-tight text-spice-gold mt-8 mb-3">
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h3 id={id} className="text-base md:text-lg font-bold text-sand-offwhite mt-6 mb-2 uppercase tracking-wide">
                      {children}
                    </h3>
                  );
                },
                p: ({ children }) => (
                  <p className="text-sm md:text-base text-sand-medium/90 font-light leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => <ul className="list-disc list-inside space-y-2 text-sm text-sand-medium/90 mb-6 font-light pl-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-sm text-sand-medium/90 mb-6 font-light pl-2">{children}</ol>,
                li: ({ children }) => <li className="text-sand-medium/90">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-spice-gold pl-4 py-2 my-6 italic text-sand-light bg-white/5 rounded-r-sm">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-8 border-sand-medium/15" />,
                code: ({ className, children, ...props }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-brand-black/80 border border-sand-medium/20 text-spice-gold px-1.5 py-0.5 rounded-sm font-mono text-xs" {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <div className="my-6 rounded-sm overflow-hidden border border-sand-medium/20 bg-brand-black/90 font-mono text-xs text-sand-offwhite shadow-lg">
                      <div className="bg-sand-light/10 px-4 py-2 border-b border-sand-medium/10 flex justify-between items-center text-[10px] text-sand-medium font-bold">
                        <span>ENGINE DISPATCH CODE</span>
                        <span>UTF-8</span>
                      </div>
                      <pre className="p-4 overflow-x-auto leading-relaxed">
                        <code>{children}</code>
                      </pre>
                    </div>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>

            {/* Article Tags */}
            <div className="mt-12 pt-6 border-t border-sand-medium/15 flex flex-wrap items-center gap-2">
              <span className="text-xs text-sand-medium font-mono">TAGS:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-sand-light/30 border border-sand-medium/15 text-sand-offwhite px-3 py-1 rounded-sm font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-sand-medium/15">
            <div className="max-w-3xl mb-8">
              <span className="text-[10px] uppercase tracking-widest text-spice-gold font-mono font-bold block mb-1">
                CONTINUE READING
              </span>
              <h2 className="text-2xl font-bold uppercase text-sand-offwhite">
                Related Technical Notes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="glass-panel p-6 rounded-sm border border-sand-medium/15 flex flex-col justify-between hover:border-spice-gold/40 transition-all group"
                >
                  <div className="space-y-3">
                    <span className="text-[9px] uppercase tracking-widest text-spice-gold font-mono block font-bold">
                      {rel.tags[0] || 'NOTE'}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-sand-offwhite group-hover:text-spice-gold transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-sand-medium/70 font-light line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sand-medium/10 flex items-center justify-between text-[10px] text-sand-medium font-mono">
                    <span>{rel.readTime}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-spice-gold" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
