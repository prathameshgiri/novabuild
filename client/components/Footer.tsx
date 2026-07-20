import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Phone, CircleArrowUp } from "lucide-react";
import { Brand } from "./Navbar";

export function Footer() {
  const routerNavigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path: string) => { 
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

  return (
    <>
      <footer className="bg-slate-950 pt-16 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">Engineering brilliance for a more considered built world.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Explore</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              {["About", "Services", "Projects", "Contact"].map(x => (
                <button key={x} onClick={() => navigateTo(x === "About" || x === "Services" ? `/${x.toLowerCase()}` : `/#${x.toLowerCase()}`)} className="block hover:text-teal-300">
                  {x}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Capabilities</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <p>Engineering drafting</p>
              <p>Land surveying</p>
              <p>Project management</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Stay in the loop</h3>
            <p className="mt-4 text-sm text-slate-500">New ideas, project news and thinking.</p>
            <div className="mt-4 flex rounded-full border border-white/10 p-1">
              <input className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-600" placeholder="Email address"/>
              <button className="rounded-full bg-teal-600 p-2 text-white"><ArrowRight size={16}/></button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 px-5 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} NovaBuild. All rights reserved.</span>
          <span>Developed by <a href="https://build.prathameshgiri.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-500 hover:text-teal-400 transition-colors">Prathamesh Giri</a></span>
        </div>
      </footer>
      <a href="tel:+15125550148" aria-label="Call NovaBuild" className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-slate-900 text-white shadow-xl transition hover:-translate-y-1"><Phone size={19}/></a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-white text-teal-700 shadow-xl transition hover:-translate-y-1"><CircleArrowUp size={20}/></button>
    </>
  );
}
