import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';
import { getAllPosts, getAllTags } from '../utils/blog';

export default function Blog() {
  const allPosts = useMemo(() => getAllPosts(), []);
  const allTags = useMemo(() => ['All', ...getAllTags()], []);

  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredPost = allPosts[0];

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTag && matchesSearch;
    });
  }, [allPosts, selectedTag, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Ambient background patterns */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial-sand opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-spice-gold" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-sand-medium">
              Duneborn Insights & Research
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-sand-offwhite leading-tight">
            Cognitive Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-light via-sand-medium to-spice-gold">
              & Architecture Notes.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-sand-medium/85 font-light leading-relaxed">
            Technical papers, system architecture breakdowns, and guides on building autonomous LLM agents and enterprise serverless pipelines.
          </p>
        </div>

        {/* Featured Post Hero Banner */}
        {featuredPost && searchQuery === '' && selectedTag === 'All' && (
          <div className="mb-16 glass-panel rounded-sm border border-spice-gold/25 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="bg-spice-gold/15 text-spice-gold border border-spice-gold/30 px-2.5 py-0.5 rounded-sm font-mono font-bold uppercase tracking-wider">
                    FEATURED ARTICLE
                  </span>
                  <span className="text-sand-medium/60 font-mono flex items-center gap-1">
                    <Calendar size={12} />
                    {featuredPost.date}
                  </span>
                  <span className="text-sand-medium/60 font-mono flex items-center gap-1">
                    <Clock size={12} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-sand-offwhite group-hover:text-spice-gold transition-colors leading-tight">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>

                <p className="text-sm text-sand-medium/80 font-light leading-relaxed">
                  {featuredPost.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-sand-medium/10">
                  <div className="flex items-center gap-2 text-xs text-sand-medium font-medium">
                    <User size={14} className="text-spice-gold" />
                    <span>{featuredPost.author}</span>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm"
                  >
                    Read Full Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
                <img
                  src={featuredPost.cover}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 lg:hidden" />
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-12 border-b border-sand-medium/10 pb-6">
          {/* Tag Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-spice-gold text-brand-black border border-spice-gold shadow-[0_0_15px_rgba(216,155,74,0.3)]'
                    : 'bg-white/40 text-sand-medium border border-sand-medium/15 hover:border-sand-medium/30 hover:text-sand-offwhite'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-medium/60" size={14} />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/60 border border-sand-medium/20 rounded-sm pl-9 pr-4 py-2 text-xs text-sand-offwhite placeholder:text-sand-medium/50 focus:outline-none focus:border-spice-gold transition-colors font-mono"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-panel rounded-sm border border-sand-medium/15 overflow-hidden flex flex-col justify-between hover:border-spice-gold/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden bg-brand-black">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute top-3 right-3 bg-brand-black/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-sand-medium/20 text-[9px] font-mono text-sand-offwhite flex items-center gap-1">
                      <Clock size={10} className="text-spice-gold" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-[10px] text-sand-medium font-mono">
                      <Calendar size={12} className="text-spice-gold" />
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.author}</span>
                    </div>

                    <h3 className="text-lg font-bold text-sand-offwhite group-hover:text-spice-gold transition-colors line-clamp-2 uppercase tracking-wide leading-snug">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-sand-medium/80 font-light leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tags & Read Button */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] bg-sand-light/40 border border-sand-medium/10 text-sand-medium px-2 py-0.5 rounded-sm font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-sand-medium/10 text-xs font-semibold uppercase tracking-wider text-spice-gold hover:text-sand-offwhite transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 text-center rounded-sm max-w-xl mx-auto border border-sand-medium/15">
            <BookOpen size={32} className="text-sand-medium mx-auto mb-4" />
            <h3 className="text-lg font-bold text-sand-offwhite uppercase tracking-wider mb-2">No Articles Found</h3>
            <p className="text-xs text-sand-medium/70 mb-6">
              No posts matched your filter "{searchQuery || selectedTag}". Try clearing filters or searching for another term.
            </p>
            <button
              onClick={() => {
                setSelectedTag('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-spice-gold text-brand-black font-semibold text-xs uppercase tracking-widest rounded-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
