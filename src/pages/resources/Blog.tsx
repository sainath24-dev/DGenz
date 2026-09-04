import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search } from 'lucide-react';
import LightPillar from '@/components/ui/LightPillar';
import ContactForm from '@/components/ContactForm';
import blogHero from '@/assets/blog-hero.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      title: 'The Enterprise Guide to Buyer Intent Data in 2024',
      excerpt: 'How top-performing B2B revenue teams identify in-market buying committees before their competitors using deterministic search signals.',
      author: 'David Chen',
      date: 'Dec 12, 2023',
      category: 'Strategy',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Why Account-Based Marketing is Replacing Traditional Lead Gen',
      excerpt: 'Volume-based lead generation creates friction between sales and marketing. Here is why ABM delivers higher contract values and faster cycles.',
      author: 'Sarah Mitchell',
      date: 'Dec 05, 2023',
      category: 'Analytics',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'How to Build Intent-Driven Outbound Sequences That Convert',
      excerpt: 'Stop sending generic cold emails. Learn the exact 4-stage messaging framework that achieves 28%+ positive executive reply rates.',
      author: 'Marcus Vance',
      date: 'Nov 28, 2023',
      category: 'Technology',
      readTime: '7 min read',
      featured: false
    },
    {
      title: 'Building a Full-Funnel Multi-Channel ABM Architecture',
      excerpt: 'A blueprint for harmonizing cold outbound cadences, sponsored social content, and behavior-triggered nurture tracks.',
      author: 'Lisa Thompson',
      date: 'Nov 25, 2023',
      category: 'Strategy',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'LinkedIn Ads Optimization for Account-Based Marketing',
      excerpt: 'Best practices for deploying Matched Audiences, Conversation Ads, and native Lead Gen Forms to drive qualified executive demos.',
      author: 'Robert Kim',
      date: 'Nov 20, 2023',
      category: 'Social Media',
      readTime: '5 min read',
      featured: false
    },
    {
      title: 'Programmatic Display & Connected TV for Enterprise B2B',
      excerpt: 'How to combine account-level IP matching with high-impact streaming and display media to accelerate enterprise deal cycles.',
      author: 'David Park',
      date: 'Nov 30, 2023',
      category: 'Advertising',
      readTime: '8 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Strategy', 'Technology', 'Analytics', 'Advertising', 'Social Media'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with LightPillar WebGL Simulation */}
        <section className="relative min-h-0 sm:min-h-[80vh] flex items-center bg-gradient-to-b from-[#f0f4f8] via-[#e5ecf6] to-[#dbe8f5] pt-28 sm:pt-32 pb-16 lg:py-28 overflow-hidden text-[#161616] border-b border-[#cbdff0]">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic LightPillar WebGL Simulation - Desktop Only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0 opacity-80 overflow-hidden">
            <LightPillar
              topColor="#059669"
              bottomColor="#0284c7"
              intensity={1.2}
              rotationSpeed={0.4}
              interactive={true}
              mixBlendMode="normal"
              className="w-full h-full"
            />
          </div>

          {/* Soft Bottom Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  DGenz Media Blog
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#161616] tracking-tight leading-tight">
                  Strategic Insights for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    B2B Growth Leaders
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed">
                  Explore deep-dive analyses, pipeline frameworks, and intent targeting methodologies published weekly by our senior B2B growth strategists.
                </p>

                {/* Search Bar */}
                <div className="pt-2 max-w-lg">
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search articles by topic, keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Weekly Practitioner Perspectives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Data-Driven Growth Playbooks</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={blogHero} 
                      alt="DGenz Media B2B marketing insights" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Category Filter Bar */}
        <section className="py-6 bg-white/95 border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex-shrink-0">
                Filter Topic:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Featured Article (Clean White Card) */}
        {selectedCategory === 'All' && searchQuery === '' && (
          <section className="py-16 bg-gradient-to-b from-[#dbe8f5] via-[#ede3d4] to-[#e2f1e8] border-b border-[#c2ded0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Featured Publication
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Editor's Choice
                </span>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                      <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                        {featuredPost.category}
                      </span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">By {featuredPost.author}</span>
                      <button className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800">
                        <span>Read Full Publication</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 rounded-2xl bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center p-6 text-center">
                    <div className="space-y-2">
                      <div className="text-4xl font-black text-emerald-700">2024</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-600">ABM Outlook Report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Articles Grid (Clean White Cards) */}
        <section className="py-24 bg-gradient-to-b from-[#e2f1e8] via-[#ece5f8] to-[#dfd5f5] border-b border-[#cdbfe8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Articles`}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Showing {filteredPosts.length} strategic articles
                </p>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>{post.author}</span>
                    <span className="text-emerald-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-gradient-to-b from-[#dfd5f5] via-[#d6eff0] to-[#bfe3e5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-slate-900 shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Subscribe to Executive B2B Insights
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                Join 15,000+ enterprise marketing and revenue leaders receiving our weekly intent telemetry and ABM strategy digest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Subscribe to Weekly Digest</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <ContactForm 
                  type="demo"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200">
                      <span>Request Custom Strategy Call</span>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;