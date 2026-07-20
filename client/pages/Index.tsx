import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ArrowRight, ArrowUpRight, Building2, Check, ChevronRight, CircleArrowUp,
  ClipboardCheck, Compass, DraftingCompass, Menu, MessageCircle, Phone, ShieldCheck,
  Sparkles, X, MapPin, Mail, Clock3, Linkedin, Instagram, Layers3, Ruler, HardHat,
  PenTool, Landmark as LandmarkIcon, Boxes, Quote
} from "lucide-react";

const services = [
  { icon: DraftingCompass, title: "Civil Engineering Drafting", text: "Precise construction documents that move complex projects forward.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
  { icon: MapPin, title: "Survey Mapping", text: "Accurate mapping intelligence built for informed site decisions.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" },
  { icon: Compass, title: "Land Surveying", text: "Field-to-finish survey support with uncompromising clarity.", image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80" },
  { icon: Layers3, title: "Interior Design", text: "Spatial experiences that balance commercial function and beauty.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
  { icon: Building2, title: "Build & Contracting", text: "Integrated delivery teams for ambitious, high-performing builds.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" },
  { icon: ClipboardCheck, title: "Project Management", text: "Reliable oversight, transparent progress and on-time delivery.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" },
];

const faqs = [
  { question: "How long does a typical commercial project take?", answer: "Project timelines vary significantly based on scale and complexity. A standard commercial build might take anywhere from 6 to 18 months from ground-breaking to handover, while planning and permits can add several months upfront." },
  { question: "Do you handle all the necessary government permits?", answer: "Yes. Our project management team handles the entire permitting process, ensuring full compliance with local building codes and zoning laws before any construction begins." },
  { question: "How do you ensure project costs don't exceed the initial estimate?", answer: "We use detailed Requirement Analysis and rigorous CAD development to lock in costs early. Our contracts are transparent, and any changes requested are quoted and approved before work continues." },
  { question: "Are your surveying and drafting services available as standalone options?", answer: "Absolutely. While we offer end-to-end design and build services, many of our clients hire us specifically for our precise civil engineering drafting or land surveying expertise." },
];

const projects = [
  { category: "Commercial", title: "Atrium Business Park", location: "Austin, TX", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85", large: true },
  { category: "Infrastructure", title: "Harbor Link", location: "Melbourne, AU", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85", large: false },
  { category: "Residential", title: "Cedar Residence", location: "Vancouver, CA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85", large: false },
  { category: "Survey", title: "Eastland Grid", location: "Phoenix, AZ", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85", large: false },
];

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.65 } };

export default function Index() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
    <Navbar />
    <main>
      <section className="relative isolate min-h-[700px] overflow-hidden bg-slate-950 pt-32 text-white lg:min-h-[550px]">
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,.93)_2%,rgba(7,19,27,.70)_50%,rgba(7,19,27,.30)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(20,184,166,.26),transparent_26%)]" />
        <div className="relative mx-auto grid min-h-[550px] max-w-7xl items-center gap-12 px-5 pb-16 pt-16 lg:min-h-[400px] lg:grid-cols-[1.2fr_.8fr] lg:px-8">
          <motion.div {...fadeUp}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md"><Sparkles size={14} className="text-amber-300" /> TRUSTED ENGINEERING & CAD PARTNER</div>
            <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">Precision engineering for the <span className="text-teal-400">built environment.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">NovaBuild brings premium engineering drafting, surveying and construction intelligence to ambitious teams across the USA, Asia and Australia.</p>
            <div className="mt-10 flex flex-row flex-wrap items-center gap-4"><button onClick={() => scrollTo("#contact")} className="group w-fit rounded-md bg-teal-500 px-5 py-2.5 text-sm font-bold shadow-xl shadow-teal-900/30 transition hover:-translate-y-1 hover:bg-teal-400">Get Started <ArrowRight className="ml-2 inline transition-transform group-hover:translate-x-1" size={17}/></button><button onClick={() => scrollTo("#projects")} className="w-fit rounded-md border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold backdrop-blur transition hover:bg-white/15">Explore Projects</button></div>
          </motion.div>
          <div className="relative hidden h-[380px] lg:block">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute right-1 top-0 w-48 rounded-2xl border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur-lg"><span className="text-3xl font-bold text-amber-300">1000+</span><p className="mt-1 text-xs text-slate-200">Projects delivered</p></motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.2, repeat: Infinity }} className="absolute left-5 top-32 w-44 rounded-2xl border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur-lg"><span className="text-3xl font-bold text-teal-200">15+</span><p className="mt-1 text-xs text-slate-200">Years experience</p></motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.8, repeat: Infinity }} className="absolute bottom-0 right-12 w-48 rounded-2xl border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur-lg"><span className="text-3xl font-bold">24/7</span><p className="mt-1 text-xs text-slate-200">Global support</p></motion.div>
          </div>
        </div>

      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div {...fadeUp}><p className="eyebrow">ABOUT NOVABUILD</p><h2 className="section-title mt-4">Built on precision.<br/>Driven by possibility.</h2><p className="body-copy mt-6">NovaBuild excels in providing top-tier engineering and survey drafting solutions, meticulously tailored to the unique demands of every project.</p><p className="body-copy mt-4">We combine deep industry expertise with innovative technology to transform complex CAD challenges into business success.</p><button onClick={() => scrollTo("#process")} className="mt-8 inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-900">Discover our approach <ArrowRight className="ml-2" size={16}/></button></motion.div>
        <motion.div {...fadeUp} transition={{ duration: .8 }} className="relative"><img className="h-[440px] w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-300/60" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="Modern NovaBuild project studio"/><div className="absolute -bottom-6 -left-3 rounded-2xl bg-white p-5 shadow-xl sm:-left-7"><div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700"><HardHat size={23}/></span><div><strong className="text-2xl">15+ years</strong><p className="text-xs text-slate-500">of trusted delivery</p></div></div></div></motion.div>
      </div></section>

      <section id="services" className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><motion.div {...fadeUp} className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">OUR EXPERTISE</p><h2 className="section-title mt-4">Every dimension,<br/>perfectly considered.</h2></div><p className="body-copy max-w-sm">Integrated technical services for projects that demand more than the ordinary.</p></motion.div><div className="mt-14">
        <Tabs defaultValue={services[0].title} className="w-full">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            <TabsList className="flex h-auto w-full flex-col gap-3 bg-transparent p-0 items-start">
              {services.map((service) => (
                <TabsTrigger
                  key={service.title}
                  value={service.title}
                  className="w-full shrink-0 justify-start whitespace-normal rounded-xl border border-slate-100 bg-white p-4 text-left transition-all data-[state=active]:border-teal-200 data-[state=active]:bg-teal-50/50 data-[state=active]:shadow-md lg:p-5"
                >
                  <div className="flex w-full items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                      <service.icon size={22} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900">{service.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{service.text}</p>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="relative h-[350px] overflow-hidden rounded-[2rem] bg-slate-100 lg:h-full lg:min-h-[500px]">
              {services.map((service) => (
                <TabsContent
                  key={service.title}
                  value={service.title}
                  className="absolute inset-0 m-0 h-full w-full outline-none data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:zoom-in-95 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=inactive]:zoom-out-95"
                >
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
                    <h3 className="text-xl font-bold lg:text-2xl">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200 lg:mt-3 lg:text-base">{service.text}</p>
                    <Link to="/services" className="mt-6 inline-flex items-center text-sm font-bold text-teal-300 hover:text-teal-200">
                      Explore service <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div></div></section>

      <section id="faq" className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
        <motion.div {...fadeUp} className="text-center">
          <p className="eyebrow">COMMON QUESTIONS</p>
          <h2 className="section-title mt-4">Everything you need to know.</h2>
        </motion.div>
        <motion.div {...fadeUp} className="mt-14">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-left font-bold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="leading-7 text-slate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      <section id="process" className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-32"><div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(20,184,166,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,.12)_1px,transparent_1px)] [background-size:60px_60px]"/><div className="absolute -right-32 top-12 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"/><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><motion.div {...fadeUp} className="max-w-2xl"><p className="eyebrow text-teal-300">OUR APPROACH</p><h2 className="section-title mt-4 text-white">A clear path from complexity to confidence.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">We bring the right specialists into the room at the right moment, turning ambitious plans into measured progress.</p></motion.div><div className="relative mt-14 grid gap-3 sm:gap-4 md:grid-cols-3 lg:mt-20 lg:grid-cols-6">{["Requirement Analysis", "Planning", "CAD Development", "Quality Assurance", "Client Review", "Delivery"].map((step, i) => <motion.div key={step} {...fadeUp} transition={{ delay: i * .08 }} className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-4 transition hover:-translate-y-1 hover:border-teal-400/50 hover:bg-teal-400/10 sm:block sm:p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-400/10 text-sm font-bold text-teal-300 transition group-hover:bg-teal-400 group-hover:text-slate-950">0{i + 1}</span><div className="mt-0 sm:mt-7"><div className="mb-2 hidden h-px w-8 bg-teal-300/60 sm:block"/><h3 className="text-sm font-semibold leading-5 sm:min-h-10">{step}</h3></div>{i < 5 && <ChevronRight className="ml-auto text-teal-400 sm:absolute sm:-right-3 sm:top-1/2 sm:z-10 sm:-translate-y-1/2" size={18}/>}</motion.div>)}</div></div></section>

      <section className="bg-teal-700 py-5 text-white sm:py-8"><div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/20 px-3 text-center sm:gap-y-7 sm:px-5 lg:px-8">{[["1000+", "Projects"], ["500+", "Happy clients"], ["24/7", "Support"], ["15+", "Years experience"]].map(([number, label]) => <div key={label} className="px-2 sm:px-4"><div className="text-lg font-bold sm:text-3xl lg:text-4xl">{number}</div><div className="mt-1 text-[9px] font-medium uppercase leading-3 tracking-[.08em] text-teal-100 sm:text-xs sm:tracking-widest">{label}</div></div>)}</div></section>

      <section id="team" className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><motion.div {...fadeUp} className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">THE PEOPLE BEHIND THE WORK</p><h2 className="section-title mt-4">A team that thinks<br/>beyond the brief.</h2></div><p className="body-copy max-w-sm">Different disciplines. One shared standard for thoughtful, precise delivery.</p></motion.div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Maya Richardson", "Chief Executive Officer", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"], ["Daniel Kim", "Engineering Manager", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"], ["Priya Nair", "Project Head", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85"], ["Ethan Brooks", "Survey & CAD Director", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85"]].map(([name, role, image], i) => <motion.article {...fadeUp} transition={{ delay: i * .08 }} key={name}><div className="group overflow-hidden rounded-[1.6rem] bg-slate-100"><img src={image} alt={name} className="aspect-[.95] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"/></div><h3 className="mt-4 font-bold">{name}</h3><p className="mt-1 text-xs font-bold uppercase tracking-wider text-teal-700">{role}</p></motion.article>)}</div><Link to="/about" className="mt-10 inline-flex items-center text-sm font-bold text-teal-700">Meet the full team <ArrowRight className="ml-2" size={16}/></Link></div></section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><motion.div {...fadeUp} className="flex items-end justify-between"><div><p className="eyebrow">SELECTED WORK</p><h2 className="section-title mt-4">Spaces with a<br/>sense of purpose.</h2></div><button className="mb-1 hidden items-center text-sm font-bold text-teal-700 sm:flex">View all work <ArrowRight className="ml-2" size={16}/></button></motion.div><div className="mt-14 grid gap-5 md:grid-cols-2">{projects.map((project, i) => <motion.article key={project.title} {...fadeUp} transition={{ delay: i*.08 }} className={`group relative overflow-hidden rounded-3xl ${project.large ? "md:row-span-2 md:min-h-[570px]" : "min-h-[275px]"}`}><img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/5 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-white"><p className="text-xs font-bold uppercase tracking-widest text-teal-200">{project.category}</p><div className="mt-2 flex items-end justify-between"><div><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-1 text-sm text-slate-300">{project.location}</p></div><span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur group-hover:bg-teal-500"><ArrowUpRight size={18}/></span></div></div></motion.article>)}</div></section>

      <section className="bg-white py-24 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8"><motion.div {...fadeUp} className="relative"><img className="h-[430px] w-full rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85" alt="Engineering planning"/><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/85 p-5 backdrop-blur"><Quote className="text-amber-500" size={25}/><p className="mt-2 text-sm font-medium leading-6">“NovaBuild feels like an extension of our own team—fast, meticulous and clear.”</p><p className="mt-3 text-xs font-bold text-teal-700">MARIA JENSEN · NORTHPOINT DEVELOPMENTS</p></div></motion.div><motion.div {...fadeUp}><p className="eyebrow">WHY NOVABUILD</p><h2 className="section-title mt-4">The team behind your next milestone.</h2><p className="body-copy mt-6">A global mindset, a rigorous QA process, and specialists who stay invested from first mark-up to final delivery.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Civil engineering expertise", "Global experience", "Fast turnaround", "Dedicated team", "Flexible pricing", "Modern technology"].map(item => <div key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full bg-teal-100 text-teal-700"><Check size={14}/></span>{item}</div>)}</div></motion.div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-0 py-24 sm:px-5 lg:px-8 lg:py-32"><div className="overflow-hidden rounded-none bg-slate-900 p-6 text-white shadow-2xl sm:rounded-[2rem] lg:grid lg:grid-cols-[.85fr_1.15fr] lg:p-12"><div className="p-3 lg:p-6"><p className="eyebrow text-teal-300">LET'S BUILD</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Start a conversation that moves things forward.</h2><p className="mt-6 max-w-md leading-7 text-slate-300">Tell us a little about what you’re planning. Our specialists will be in touch within one business day.</p><div className="mt-10 space-y-5 text-sm">{[[Phone, "+1 512 555 0148"], [Mail, "hello@novabuild.studio"], [MapPin, "Austin · Sydney · Singapore"]].map(([Icon, label]) => { const Comp = Icon as typeof Phone; return <div key={label as string} className="flex items-center gap-3 text-slate-200"><Comp size={18} className="text-teal-300"/>{label as string}</div>})}</div></div><form onSubmit={submit} className="mt-8 rounded-3xl bg-white p-6 text-slate-900 lg:mt-0 lg:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="field">Your name<input required placeholder="Your name"/></label><label className="field">Work email<input required type="email" placeholder="Your email"/></label><label className="field">Phone<input placeholder="Your ph.no"/></label></div><label className="field mt-4 relative z-10">Tell us about your project<textarea rows={4} placeholder="Project scope, location, timeline..." /></label><button className="mt-6 w-full rounded-md bg-teal-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-teal-700">{sent ? "Thank you — we'll be in touch" : "Send inquiry"} {!sent && <ArrowRight className="ml-2 inline" size={16}/>}</button></form></div></section>
    </main>
    <Footer />
  </div>;
}
