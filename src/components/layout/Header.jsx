import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Nexus", path: "/sysfi/nexus" },
  { name: "Ecosystem", path: "/ecosystem" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 px-[2%]">
      <header
        className={`w-[80%] max-w-2xl mx-auto transition-all duration-300 rounded-3xl lg:rounded-full ${
          scrolled
            ? "bg-[#050508]/20 backdrop-blur-xl border border-white/80 shadow-lg shadow-black/20"
            : "bg-[#050508]/60 backdrop-blur-md border border-white/40"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} className="w-10 h-10  " />

              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SYSFI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    location.pathname === link.path
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.sysfiprotocol.nexussysfi&pcampaignid=web_share"
                target="_blank"
                className="relative px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10">Download App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-base font-medium transition-colors rounded-lg ${
                      location.pathname === link.path
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://play.google.com/store/apps/details?id=com.sysfiprotocol.nexussysfi&pcampaignid=web_share"
                  target="_blank"
                  className="block w-full mt-4 px-5 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-semibold text-center"
                >
                  Download App
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
