import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Brand() { 
  return (
    <div className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
      <img src="/novabuild-logo.png" alt="NovaBuild Logo" className="h-10 w-10 object-contain drop-shadow-md rounded-xl" />
      <span>NovaBuild<span className="text-teal-600">.</span></span>
    </div>
  ); 
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerNavigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = (path: string) => { 
    setMenuOpen(false); 
    if (path.startsWith("/#")) {
      const hash = path.substring(1);
      if (location.pathname === "/") {
         document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
         routerNavigate(path);
         setTimeout(() => {
           document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
         }, 100);
      }
    } else {
       routerNavigate(path);
       window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-amber-400" style={{ scaleX: progress }} />
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/20 bg-white/60 py-3 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/50 text-slate-900" : "py-5 text-white"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" onClick={() => setMenuOpen(false)}><Brand /></Link>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {navItems.map((item) => (
               <button key={item.name} onClick={() => navigateTo(item.path)} className="transition hover:text-teal-500">
                 {item.name}
               </button>
            ))}
          </nav>
          <button onClick={() => navigateTo("/contact")} className="hidden rounded-md bg-teal-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-0.5 hover:bg-teal-700 lg:inline-flex">Get Free Consultation <ArrowUpRight className="ml-2" size={16}/></button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/50 bg-white/95 p-3 text-slate-900 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => navigateTo(item.path)} 
                  className="border-b border-slate-100/80 px-3 py-3.5 text-left text-sm font-semibold transition-colors hover:text-teal-600"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 pb-2 pt-4">
                <button 
                  onClick={() => navigateTo("/contact")} 
                  className="inline-flex rounded-lg bg-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-teal-700"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
