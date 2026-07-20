import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24">
        <div className="text-center">
          <h1 className="font-display text-8xl font-bold mb-4 text-slate-950">404</h1>
          <p className="text-xl text-slate-500 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-0.5 hover:bg-teal-700">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
