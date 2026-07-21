import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ALL_PROJECTS } from "@/data/projects";

const fadeUp = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, scale: 0.95 }, transition: { duration: 0.4 } };

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Commercial", "Residential", "Infrastructure", "Survey"];
  
  const filteredProjects = ALL_PROJECTS.filter(project => filter === "All" || project.category === filter);

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main>
        <section className="relative isolate min-h-[400px] overflow-hidden bg-slate-950 pt-32 pb-20 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,.93)_2%,rgba(7,19,27,.70)_50%,rgba(7,19,27,.30)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(20,184,166,.26),transparent_26%)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center sm:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow text-teal-300">OUR PORTFOLIO</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">Selected work.</h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:mx-0 mx-auto">
                A showcase of precision engineering, thoughtful design, and rigorous execution across different sectors and geographies.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-12 flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-colors ${filter === cat ? "bg-teal-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div layout key={project.id} {...fadeUp} transition={{ delay: i * 0.05 }} className={`group relative overflow-hidden rounded-3xl ${project.large ? "md:row-span-2 md:min-h-[570px]" : "min-h-[300px]"}`}>
                  <Link to={`/projects/${project.id}`} className="absolute inset-0 z-20">
                    <span className="sr-only">View project {project.title}</span>
                  </Link>
                  <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/5 to-transparent"/>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-200">{project.category}</p>
                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-teal-300 transition-colors">{project.title}</h3>
                        <p className="mt-1 text-sm text-slate-300">{project.location}</p>
                      </div>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur group-hover:bg-teal-500 transition-colors">
                        <ArrowUpRight size={18}/>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProjects.length === 0 && (
             <div className="py-20 text-center text-slate-500">No projects found in this category.</div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
