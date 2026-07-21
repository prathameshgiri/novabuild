import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ALL_PROJECTS } from "@/data/projects";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";
import NotFound from "./NotFound";

const fadeUp = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

export default function ProjectDetail() {
  const { id } = useParams();
  const project = ALL_PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <NotFound />;

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px] w-full bg-slate-950 pt-24 text-white">
          <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-16 lg:px-8">
            <Link to="/projects" className="mb-6 inline-flex items-center text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors">
              <ArrowLeft className="mr-2" size={16} /> Back to Projects
            </Link>
            <motion.div {...fadeUp}>
              <p className="eyebrow text-teal-300">{project.category}</p>
              <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                {project.title}
              </h1>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} className="text-teal-400"/> {project.location}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-a:text-teal-600 hover:prose-a:text-teal-500">
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
              
              <h2>Our Approach</h2>
              <p>{project.approach}</p>

              <h2>The Result</h2>
              <p>{project.result}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">Project Details</h3>
                <dl className="mt-5 space-y-4 text-sm text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-900">Client</dt>
                    <dd className="mt-1">{project.client || "Confidential"}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Timeline</dt>
                    <dd className="mt-1">{project.timeline || "N/A"}</dd>
                  </div>
                  {project.services && (
                    <div>
                      <dt className="font-semibold text-slate-900">Services Provided</dt>
                      <dd className="mt-2 space-y-2">
                        {project.services.map(service => (
                          <div key={service} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="mt-0.5 text-teal-600 shrink-0"/> <span>{service}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="rounded-2xl bg-teal-900 p-6 text-white shadow-lg">
                <h3 className="font-display text-xl font-semibold">Start your next project with us.</h3>
                <p className="mt-2 text-sm text-teal-100/80">From planning to execution, we bring clarity to complexity.</p>
                <Link to="/contact" className="mt-6 block w-full rounded-md bg-white px-4 py-2.5 text-center text-xs font-bold text-teal-900 transition hover:bg-slate-50">
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
