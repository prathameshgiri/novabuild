import { FormEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, ArrowRight, Building, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submit = (e: FormEvent) => { 
    e.preventDefault(); 
    setSent(true); 
  };

  const offices = [
    {
      city: "Austin",
      address: "1420 Congress Ave, Suite 300\nAustin, TX 78701",
      phone: "+1 512 555 0148",
      email: "austin@novabuild.studio"
    },
    {
      city: "Sydney",
      address: "Level 4, 11 York Street\nSydney NSW 2000",
      phone: "+61 2 9000 1234",
      email: "sydney@novabuild.studio"
    },
    {
      city: "Singapore",
      address: "12 Marina View, #20-01\nAsia Square Tower 2, 018961",
      phone: "+65 6500 8000",
      email: "singapore@novabuild.studio"
    }
  ];

  return (
    <div className="overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-teal-200">
      <Navbar />
      <main>
        <section className="relative isolate min-h-[40vh] overflow-hidden bg-slate-950 pt-32 pb-16 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,27,.93)_2%,rgba(7,19,27,.70)_50%,rgba(7,19,27,.30)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center sm:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow text-teal-300">CONTACT US</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">Let's build together.</h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:mx-0 mx-auto">
                Whether you have a fully drafted plan or just an ambitious idea, our specialists are ready to help you move forward.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 border border-slate-100">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 size={48} className="text-teal-500 mb-4" />
                    <h3 className="font-display text-2xl font-semibold">Message Sent</h3>
                    <p className="mt-2 text-slate-500">Thank you for reaching out. A specialist from our team will contact you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={submit}>
                    <h3 className="font-display text-2xl font-semibold mb-6">Send an Inquiry</h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="field">First name<input required placeholder="First name"/></label>
                      <label className="field">Last name<input required placeholder="Last name"/></label>
                    </div>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <label className="field">Work email<input required type="email" placeholder="you@company.com"/></label>
                      <label className="field">Phone<input placeholder="+1 (555) 000-0000"/></label>
                    </div>
                    <label className="field mt-5 block">Company<input placeholder="Company name"/></label>
                    <label className="field mt-5 block">Tell us about your project<textarea required rows={5} placeholder="Project scope, location, timeline, and specific engineering needs..." /></label>
                    <button className="mt-8 flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-teal-700 shadow-lg shadow-teal-700/20">
                      Submit Inquiry <ArrowRight className="ml-2" size={16}/>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-display text-3xl font-semibold">Global Offices</h2>
              <p className="mt-4 text-slate-500 mb-10">We operate globally with dedicated engineering and support teams in three key timezones.</p>
              
              <div className="space-y-8">
                {offices.map(office => (
                  <div key={office.city} className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                      <Building size={24}/>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{office.city}</h3>
                      <p className="mt-2 whitespace-pre-line text-sm text-slate-500 flex items-start gap-2">
                        <MapPin size={16} className="shrink-0 mt-0.5" />
                        {office.address}
                      </p>
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-900 transition-colors">
                          <Phone size={14}/> {office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} className="flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-900 transition-colors">
                          <Mail size={14}/> {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
