import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { OPEN_POSITIONS, BENEFITS } from "@/data/careers";
import { Link } from "react-router-dom";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main>
        <section className="relative isolate min-h-[40vh] overflow-hidden bg-slate-950 pt-32 pb-16 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,.93)_2%,rgba(7,19,27,.70)_50%,rgba(7,19,27,.30)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center sm:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow text-teal-300">JOIN NOVABUILD</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">Build your career<br/>with purpose.</h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:mx-0 mx-auto">
                We are always looking for driven engineers, surveyors, and leaders who want to shape the future of the built environment.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-3xl font-semibold">Why work with us?</h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                At NovaBuild, we believe in giving our team the autonomy to innovate. You'll work on challenging international projects, utilizing the latest in BIM, CAD, and surveying technology.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <CheckCircle2 size={18} className="text-teal-600 shrink-0"/> {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-[400px] w-full">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Team collaborating" className="h-full w-full rounded-[2rem] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
                <p className="font-display text-3xl font-bold text-teal-600">4.9/5</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Glassdoor Rating</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-100 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl font-semibold">Open Positions</h2>
                <p className="mt-2 text-slate-500">Find your next role at one of our global offices.</p>
              </div>
            </div>

            <div className="grid gap-6">
              {OPEN_POSITIONS.map((job, i) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-shadow hover:shadow-lg">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-teal-700">
                      <span>{job.department}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1"><Briefcase size={12}/> {job.type}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{job.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 max-w-2xl">{job.description}</p>
                  </div>
                  <Link 
                    to={`/careers/${job.id}/apply`}
                    className="shrink-0 rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-600/20"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center text-sm text-slate-500">
              Don't see a perfect fit? Send your resume to <a href="mailto:careers@novabuild.studio" className="font-bold text-teal-700 hover:underline">careers@novabuild.studio</a>.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
