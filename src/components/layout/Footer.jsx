import { Link } from "react-router-dom";
import {
  Github,
  MessageCircle,
  Send,
  FileText,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import whitepaper from "../../assets/whitepaper.pdf";

// Custom X (Twitter) Icon
const XIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  product: [
    { name: "Nexus", path: "/sysfi/nexus" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "Token Stats", path: "/token" },
    { name: "Roadmap", path: "/roadmap" },
  ],
  resources: [
    { name: "Whitepaper", path: whitepaper, external: true, download: true },
    { name: "Documentation", path: "/sysfi/documentation" },
    { name: "Policy", path: "/policy" },
    { name: "Terms of use", path: "/terms" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Sysfi Lab", path: "/sysfilab" },
    { name: "Governance", path: "/governance" },
    // { name: "Press Kit", path: "#" },
  ],
};

const socialLinks = [
  {
    icon: XIcon,
    href: "https://x.com/sysfidao",
    label: "X (Twitter)",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    icon: MessageCircle,
    href: "#",
    label: "Discord",
    gradient: "from-indigo-400 to-blue-600",
  },
  {
    icon: Send,
    href: "https://t.me/sysfiDAO",
    label: "Telegram",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Github,
    href: "https://github.com/sysfiDAO",
    label: "Github",
    gradient: "from-gray-400 to-gray-600",
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-green-500/20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[128px]" />
      </div>

      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      {/* Diagonal Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="footerDiagonal"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0M-10 10L10 -10M30 50L50 30"
                stroke="currentColor"
                strokeWidth="1"
                className="text-green-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerDiagonal)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-2"
          >
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <img src={logo} className="w-10 h-10" alt="SYSFI Logo" />
                <div className="absolute inset-0 bg-green-500/20 blur-xl group-hover:bg-green-500/40 transition-all" />
              </div>
              <span
                className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                SYSFI
              </span>
            </Link>

            <p
              className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Building the infrastructure for community-led Web3. Create,
              govern, and grow your decentralized community.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-zinc-900/80 border border-green-500/20 hover:border-green-500/50 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-300 group relative overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <Icon size={18} className="relative z-10" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-sm font-semibold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1 group"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-sm font-semibold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  {link.external ? (
                    <a
                      href={link.path}
                      download={link.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                      {link.download && <FileText className="w-3 h-3" />}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1 group"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4
              className="text-sm font-semibold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1 group"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-green-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              © 2026 Systematic Finance. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/policy"
                className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
