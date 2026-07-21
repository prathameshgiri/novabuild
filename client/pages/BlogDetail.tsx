import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import NotFound from "./NotFound";

export default function BlogDetail() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <NotFound />;

  const renderContent = (content?: string) => {
    if (!content) return <p className="mt-8 text-lg font-medium leading-[1.8] text-slate-600">Detailed content coming soon...</p>;
    
    return content.split("\n").map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("### ")) {
        return <h2 key={i} className="mt-14 mb-6 font-display text-3xl font-semibold tracking-tight text-slate-900">{trimmed.replace("### ", "")}</h2>;
      }
      return <p key={i} className="mt-6 text-lg sm:text-[1.125rem] font-medium leading-[1.8] text-slate-600">{trimmed}</p>;
    });
  };

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative h-[65vh] min-h-[500px] w-full bg-slate-950 flex items-end pb-24">
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-5xl px-5 lg:px-8">
            <Link to="/blog" className="mb-8 inline-flex items-center text-sm font-bold text-teal-300 hover:text-teal-200 transition-colors">
              <ArrowLeft className="mr-2" size={18} /> Back to Blog
            </Link>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-teal-300 mb-6">
                <span>{post.category}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span className="flex items-center gap-1.5 text-slate-300"><Calendar size={14}/> {post.date}</span>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl max-w-4xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="relative mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16 items-start">
            
            <motion.article 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="max-w-none"
            >
              <p className="text-xl font-medium leading-[1.7] text-slate-700 mb-10 pb-10 border-b border-slate-200">
                {post.excerpt}
              </p>
              <div className="text-slate-800">
                {renderContent(post.content)}
              </div>
            </motion.article>

            {/* SIDEBAR */}
            <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="sticky top-32 space-y-10 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Written by</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center font-display font-bold text-slate-500 text-2xl border border-slate-200">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{post.author}</h3>
                    <p className="text-sm font-medium text-slate-500 mt-0.5">NovaBuild Team</p>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2"><Share2 size={16} /> Share article</p>
                <div className="flex items-center gap-4">
                  <button className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 hover:scale-110 transition-all">
                    <Twitter size={20} />
                  </button>
                  <button className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 hover:scale-110 transition-all">
                    <Linkedin size={20} />
                  </button>
                  <button className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 hover:scale-110 transition-all">
                    <Facebook size={20} />
                  </button>
                </div>
              </div>
            </motion.aside>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
