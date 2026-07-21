import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { OPEN_POSITIONS } from "@/data/careers";
import NotFound from "./NotFound";

export default function Apply() {
  const { id } = useParams();
  const job = OPEN_POSITIONS.find(p => p.id === id);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) return <NotFound />;

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main className="min-h-screen pb-16 bg-[#f8fafc]">
        <section className="relative isolate overflow-hidden bg-slate-950 pt-32 pb-24 lg:pb-32 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,.93)_2%,rgba(7,19,27,.70)_50%,rgba(7,19,27,.30)_100%)]" />
          <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
            <Link to="/careers" className="mb-8 inline-flex items-center text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors">
              <ArrowLeft className="mr-2" size={16} /> Back to Careers
            </Link>

            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-teal-300 mb-3">
                <span>{job.department}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span className="flex items-center gap-1"><Briefcase size={12}/> {job.type}</span>
              </div>
              <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Apply for {job.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="relative -mt-12 lg:-mt-16 mx-auto max-w-3xl px-5 lg:px-8 z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10 text-slate-900">
            {applied ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={64} className="text-teal-500 mb-6" />
                <h1 className="font-display text-3xl font-bold text-slate-900">Application Received</h1>
                <p className="mt-4 text-slate-500 max-w-md mx-auto leading-relaxed">
                  Thank you for applying to the <strong>{job.title}</strong> position. Our recruiting team will review your application and get back to you shortly.
                </p>
                <Link 
                  to="/"
                  className="mt-8 rounded-lg bg-teal-600 px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-teal-700 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form 
                className="space-y-6"
                onSubmit={(e) => { e.preventDefault(); setApplied(true); }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="field">First name<input required placeholder="First name" className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50 outline-none transition" /></label>
                  <label className="field">Last name<input required placeholder="Last name" className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50 outline-none transition" /></label>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="field block">Email address<input required type="email" placeholder="you@example.com" className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50 outline-none transition" /></label>
                  <label className="field block">Phone number<input required type="tel" placeholder="+1 (555) 000-0000" className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50 outline-none transition" /></label>
                </div>
                <label className="field block">Portfolio / LinkedIn URL<input type="url" placeholder="https://..." className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50 outline-none transition" /></label>
                <label className="field block">
                  Resume (Link or text)
                  <textarea required rows={4} placeholder="Paste a link to your resume or paste your resume text here..." className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm resize-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50 outline-none transition" />
                </label>
                <div className="pt-6">
                  <button type="submit" className="flex w-full items-center justify-center rounded-xl bg-teal-600 px-4 py-4 text-sm font-bold text-white transition hover:bg-teal-700 shadow-xl shadow-teal-700/20">
                    Submit Application <ArrowRight className="ml-2" size={18}/>
                  </button>
                  <p className="mt-4 text-center text-xs text-slate-500">
                    By submitting this application, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
