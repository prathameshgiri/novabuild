import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main>
        <section className="relative isolate min-h-[40vh] overflow-hidden bg-slate-950 pt-32 pb-16 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,.93)_2%,rgba(7,19,27,.70)_50%,rgba(7,19,27,.30)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center sm:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow text-teal-300">INSIGHTS & NEWS</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">Ideas that build<br/>the future.</h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:mx-0 mx-auto">
                Industry trends, company updates, and engineering insights from the NovaBuild team.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          
          {/* Featured Post */}
          <motion.div {...fadeUp} className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 mb-16">
            <Link to={`/blog/${featuredPost.id}`} className="grid lg:grid-cols-2">
            <div className="overflow-hidden">
              <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover min-h-[300px] transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-teal-700">
                <span>{featuredPost.category}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1 text-slate-500"><Calendar size={12}/> {featuredPost.date}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 uppercase">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{featuredPost.author}</div>
                </div>
                <button className="text-teal-600 hover:text-teal-800 transition-colors bg-teal-50 hover:bg-teal-100 h-10 w-10 rounded-full flex items-center justify-center">
                  <ArrowRight size={18} />
                </button>
              </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid Posts */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post, i) => (
              <motion.article key={post.id} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${post.id}`} className="group flex h-full flex-col rounded-3xl bg-white shadow-md shadow-slate-200/40 border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-700">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-slate-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-slate-900">By {post.author}</span>
                  </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">
               Load more articles
             </button>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
