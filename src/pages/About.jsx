import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  MessageCircle,
  Github,
  Send,
  Crown,
  Coins,
  Building2,
  Lightbulb,
  TrendingUp,
  Network,
  Lock,
  Award,
  Sparkles,
  ChevronRight,
  FileText,
  Rocket,
} from "lucide-react";
import GradientText from "../components/ui/GradientText";
import Button from "../components/ui/Button";
import FoundationImage from "../assets/foundation.webp";
import DeFiImage from "../assets/defi.png";
import CommunityImage from "../assets/defi.png";

// Custom X Icon
const XIcon = ({ size = 20 }) => (
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

const ScrambleText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let iteration = 0;
            const timeout = setTimeout(() => {
              const interval = setInterval(() => {
                setDisplayText(
                  text
                    .split("")
                    .map((char, index) => {
                      if (char === " ") return " ";
                      if (index < iteration) return text[index];
                      return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join(""),
                );

                iteration += 1 / 3;

                if (iteration >= text.length) {
                  setDisplayText(text);
                  setIsScrambling(false);
                  clearInterval(interval);
                }
              }, 30);

              return () => clearInterval(interval);
            }, delay);

            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, text, delay]);

  return (
    <span ref={ref} className={isScrambling ? "text-green-400" : ""}>
      {displayText ||
        text
          .split("")
          .map(() => "█")
          .join("")}
    </span>
  );
};

const values = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Every decision we make prioritizes the needs and voices of our community members.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Security Always",
    description:
      "We never compromise on security. All smart contracts are rigorously audited.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description:
      "We continuously push boundaries to bring cutting-edge solutions to Web3.",
    gradient: "from-green-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "True Decentralization",
    description:
      "We believe in removing intermediaries and giving power back to the people.",
    gradient: "from-blue-500 to-green-600",
  },
];

const stats = [
  { value: "2024", label: "Founded", icon: Sparkles },
  { value: "50+", label: "Contributors", icon: Users },
  { value: "20+", label: "Countries", icon: Globe },
  { value: "∞", label: "Possibilities", icon: Zap },
];

const socialLinks = [
  {
    icon: XIcon,
    label: "X (Twitter)",
    href: "https://x.com/sysfidao",
    handle: "@sysfi_dao",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    href: "#",
    handle: "SYSFI Community",
    gradient: "from-indigo-400 to-blue-600",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/sysfiDAO",
    handle: "@sysfi_official",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/sysfiDAO",
    handle: "sysfi-protocol",
    gradient: "from-gray-400 to-gray-600",
  },
];

const foundationRoles = [
  {
    icon: Target,
    title: "Decision Execution",
    description:
      "Alpha NFT holders drive the execution of community-approved proposals with precision and accountability.",
  },
  {
    icon: Building2,
    title: "Startup Oversight",
    description:
      "Guide and support emerging projects through strategic mentorship and resource allocation.",
  },
  {
    icon: Network,
    title: "Partnership Management",
    description:
      "Forge and maintain strategic partnerships that expand ecosystem reach and capabilities.",
  },
  {
    icon: Coins,
    title: "Grant Coordination",
    description:
      "Oversee transparent distribution of grants to deserving projects and initiatives.",
  },
];

const defiFeatures = [
  {
    icon: Lightbulb,
    title: "Startup Incubation",
    description:
      "New projects access zero-barrier tools, mentorship, and resources to develop DeFi applications.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Coins,
    title: "Grant Allocation",
    description:
      "Community-driven funding mechanisms support early-stage projects by providing capital.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Network,
    title: "Decentralized Infrastructure",
    description:
      "Developers gain access to core infrastructure for building lending platforms and liquidity pools.",
    gradient: "from-green-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Partner Network Integration",
    description:
      "Strategic partnerships enable seamless integration across multiple platforms.",
    gradient: "from-blue-500 to-emerald-600",
  },
  {
    icon: Crown,
    title: "Visionary Leadership",
    description:
      "NFT holders oversee, guide, and facilitate development of projects aligned with systematic finance.",
    gradient: "from-emerald-500 to-blue-600",
  },
];

const About = () => {
  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        </div>

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="hexAbout"
                x="0"
                y="0"
                width="100"
                height="86.6"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M50 0L93.3 25v50L50 100L6.7 75V25z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-green-500"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexAbout)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-8"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                <span
                  className="text-sm text-green-400 font-medium uppercase tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  About SYSFI
                </span>
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                <ScrambleText text="Building the Future of" delay={0} />{" "}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  <ScrambleText text="Decentralized Communities" delay={400} />
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                SYSFI is more than a platform—it's a movement toward a truly
                decentralized world where communities govern themselves,
                ensuring that power remains with the people, not corporations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-green-500/20 bg-gradient-to-r from-transparent via-green-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <div
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {stat.value}
                    </div>
                  </div>
                  <div
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-8 transition-all duration-500 relative"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 relative z-10"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl font-bold text-white mb-4 relative z-10"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                Our Mission
              </h2>

              <p
                className="text-gray-400 leading-relaxed relative z-10"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                To democratize governance by providing accessible, secure, and
                powerful tools that enable anyone to create, manage, and
                participate in decentralized organizations—regardless of
                technical expertise.
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 h-1 bg-gradient-to-r from-green-500 to-emerald-600 w-24 relative z-10"
              />

              <div
                className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-blue-500/20 hover:border-blue-500/50 p-8 transition-all duration-500 relative"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center mb-6 relative z-10"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                <Eye className="w-8 h-8 text-white" />
              </div>

              <h2
                className="text-3xl font-bold text-white mb-4 relative z-10"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                Our Vision
              </h2>

              <p
                className="text-gray-400 leading-relaxed relative z-10"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                A world where every community—from small creator collectives to
                global movements—can operate transparently, make decisions
                collectively, and grow sustainably through decentralized
                governance.
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-green-600 w-24 relative z-10"
              />

              <div
                className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="problemGrid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="1"
                  fill="currentColor"
                  className="text-green-500"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#problemGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-900/10 to-black/90 border border-red-500/20 p-8 lg:p-10"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 mb-6"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                }}
              >
                <Shield className="w-4 h-4 text-red-400" />
                <span
                  className="text-sm text-red-400 font-medium uppercase tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  The Problem
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                Centralization is Holding{" "}
                <span className="text-red-400">Web3 Back</span>
              </h2>

              <div
                className="space-y-4 text-gray-400"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Despite the promise of decentralization, many Web3 projects
                    still operate with centralized control. Founders and small
                    teams make critical decisions without community input.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Creating a DAO requires significant technical knowledge,
                    making governance inaccessible to most communities. The
                    tools that do exist are fragmented, complex, and expensive.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Communities are forced to rely on centralized platforms like
                    Telegram and Discord, where they don't own their data or
                    control their destiny.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-900/10 to-black/90 border border-green-500/20 p-8 lg:p-10"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 mb-6"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                }}
              >
                <Zap className="w-4 h-4 text-green-400" />
                <span
                  className="text-sm text-green-400 font-medium uppercase tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Our Solution
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                SYSFI{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Changes Everything
                </span>
              </h2>

              <div
                className="space-y-4 text-gray-400"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p>
                    SYSFI makes DAO creation as simple as setting up a group
                    chat. No coding required. Launch your governance structure
                    in 60 seconds.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Our all-in-one mobile app combines governance,
                    communication, wallet, and DeFi tools—everything a community
                    needs to thrive.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p>
                    Communities own their governance, their treasury, and their
                    future. Every decision is transparent, democratic, and
                    recorded on-chain.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Award className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Our Values
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              What We{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              These core principles guide everything we build and every decision
              we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 text-center transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* <div
                    className={`w-14 h-14 bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4 relative z-10`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div> */}

                  <h3
                    className="text-lg font-semibold text-white mb-2 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {value.description}
                  </p>

                  <div
                    className="absolute top-0 right-0 w-6 h-6 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NFT Foundation Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[128px]" />
        </div>

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="foundationCircuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20 20h10v10M30 30h10M40 30v10h10M60 40h10v10M70 50h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-green-500"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="currentColor"
                  className="text-green-500"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#foundationCircuit)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Crown className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                NFT Foundation
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Global Foundation of{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                NFT Holders
              </span>
            </h2>

            <p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              The Frontiers of Systematic Finance
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div
                className="relative overflow-hidden border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-500"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
                }}
              >
                <img
                  src={FoundationImage}
                  alt="NFT Foundation"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 mix-blend-overlay" />

                {/* Scan Line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-gray-300 text-lg mb-6 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                The foundation is a dynamic, global collective of{" "}
                <span className="text-green-400 font-semibold">
                  Alpha NFT holders
                </span>{" "}
                at the forefront of decision execution and proposal
                implementation within the ecosystem. These members are more than
                just stakeholders—they are the driving force behind systematic
                finance, ensuring that community-led visions become reality.
              </p>

              <p
                className="text-gray-400 mb-6 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Serving as key facilitators, they oversee startups,
                partnerships, grants, and strategic initiatives that expand our
                ecosystem's reach across the blockchain space. The foundation
                ensures that innovative projects have the resources and guidance
                needed to succeed, fostering sustainable growth.
              </p>

              <p
                className="text-gray-400 mb-6 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                By actively coordinating and managing the execution of community
                proposals, the foundation bridges the gap between vision and
                implementation. Their efforts maintain transparency, ensuring
                that every decision made by the community leads to meaningful
                outcomes.
              </p>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                }}
              >
                <Lock className="w-4 h-4 text-green-400" />
                <span
                  className="text-sm text-green-400 font-medium"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Guardians of Systematic Finance
                </span>
              </div>
            </motion.div>
          </div>

          {/* Foundation Roles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* <Icon className="w-8 h-8 text-green-400 mb-4 relative z-10 group-hover:scale-110 transition-transform" /> */}

                  <h3
                    className="text-lg font-bold text-white mb-2 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {role.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {role.description}
                  </p>

                  <div
                    className="absolute top-0 right-0 w-6 h-6 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DeFi Framework Section */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span
                className="text-sm text-blue-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                DeFi Framework
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Future Integration
              </span>{" "}
              & Infrastructure
            </h2>

            <p
              className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              The Sysfi Network is laying the groundwork for a comprehensive,
              zero-line toolset that startups and innovators can leverage to
              implement DeFi solutions and other Web3 services with ease.
            </p>
          </div>

          {/* Image and Description Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <p
                className="text-gray-300 text-lg mb-6 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                This future-proof framework, driven by{" "}
                <span className="text-blue-400 font-semibold">NFT holders</span>{" "}
                within the global foundation, will empower projects to unlock
                decentralized financial opportunities seamlessly.
              </p>

              <p
                className="text-gray-400 mb-6 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                This forward-thinking framework ensures that the Sysfi Network
                becomes a thriving hub where startups and decentralized projects
                flourish, backed by infrastructure, resources, and visionary
                leadership.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Zero Barriers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Full Support
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Open Infrastructure
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span
                    className="text-sm text-gray-400"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Community Led
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group lg:order-1"
            >
              <div
                className="relative overflow-hidden border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-500"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
                }}
              >
                <img
                  src={DeFiImage}
                  alt="DeFi Framework"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20 mix-blend-overlay" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-lg border border-blue-500/50 p-4"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  }}
                >
                  <Rocket className="w-6 h-6 text-blue-400 mb-1" />
                  <p
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    COMING SOON
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* 
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 relative z-10`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div> */}

                  <h3
                    className="text-lg font-bold text-white mb-2 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {feature.description}
                  </p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} w-16 relative z-10`}
                  />

                  <div
                    className="absolute top-0 right-0 w-6 h-6 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Users className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Who We Serve
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Built for{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              SYSFI empowers diverse communities across the Web3 ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Individuals",
                description:
                  "Participate in governance, earn rewards, and join communities that align with your values.",
                icon: Users,
              },
              {
                title: "Creators",
                description:
                  "Launch your own DAO, monetize directly from fans, and let your community guide your work.",
                icon: Sparkles,
              },
              {
                title: "Influencers",
                description:
                  "Build a decentralized brand, create exclusive token-gated experiences, and own your audience.",
                icon: TrendingUp,
              },
              {
                title: "Crypto Projects",
                description:
                  "Implement true decentralized governance, manage treasuries transparently, and engage your community.",
                icon: Coins,
              },
              {
                title: "Enterprises",
                description:
                  "Explore decentralized decision-making, incentive structures, and community engagement.",
                icon: Building2,
              },
              {
                title: "Developers",
                description:
                  "Build on SYSFI infrastructure, contribute to open-source, and earn through bounties.",
                icon: Github,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <Icon className="w-8 h-8 text-green-400 mb-3 relative z-10 group-hover:scale-110 transition-transform" />

                  <h3
                    className="text-lg font-semibold text-white mb-2 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="absolute top-0 right-0 w-5 h-5 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
