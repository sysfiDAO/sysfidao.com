import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Vote,
  Coins,
  Rocket,
  Factory,
  ArrowRight,
  Users,
  Shield,
  Lightbulb,
  GitBranch,
  ExternalLink,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Network,
  Globe,
  ChevronRight,
} from "lucide-react";
import GradientText from "../components/ui/GradientText";
import Button from "../components/ui/Button";
import ecosystem from "../assets/ecosystem.png";
import AlphaDAO from "../assets/alpha.png";
import CommDAO from "../assets/comdao.png";

// Lazy loading hook for images
const useLazyLoad = (src) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    let observer;
    if (imageRef && src) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { rootMargin: "100px" },
      );
      observer.observe(imageRef);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageRef]);

  return [setImageRef, imageSrc];
};

// ScrambleText component
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

const ecosystemPillars = [
  {
    icon: Vote,
    title: "DAO Infrastructure",
    description:
      "Create and manage autonomous governance systems without centralized oversight. Custom parameters, multi-chain deployment, and community-driven decision making.",
    features: [
      "Custom DAO Creation",
      "Network of DAOs",
      "Community Governance",
      "Treasury Management",
    ],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Coins,
    title: "DeFi Protocols",
    description:
      "Integrated suite of DeFi solutions for financial inclusion, yield generation, and decentralized asset management.",
    features: [
      "Staking & Yield Farming",
      "Liquidity Pools",
      "Lending & Borrowing",
      "Cross-Chain Interoperability",
    ],
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Rocket,
    title: "Launchpad",
    description:
      "Incubation hub for Web3 projects enabling secure, decentralized fundraising with fair community participation.",
    features: [
      "Decentralized Fundraising",
      "Token Sales (IDO & IEO)",
      "Fair & Transparent Access",
      "Incubation & Mentorship",
    ],
    gradient: "from-green-500 to-blue-600",
  },
  {
    icon: Factory,
    title: "Token Factory",
    description:
      "Simplified token creation and deployment through automated factories. Launch governance-enabled tokens without coding.",
    features: [
      "No-Code Token Creation",
      "Governance-Enabled Tokens",
      "Multi-Chain Deployment",
      "Customizable Tokenomics",
    ],
    gradient: "from-blue-500 to-green-600",
  },
];

const daoStructure = [
  {
    title: "Alpha DAO",
    subtitle: "SYSFI Foundation",
    description:
      "The central governance body driving growth and expansion of the SYSFI network. Governed by 5,000 Alpha NFT holders.",
    responsibilities: [
      "External affairs & ecosystem expansion",
      "Strategic partnerships",
      "Oversees SYSFI Lab",
      "Long-term sustainability",
    ],
    icon: Shield,
    gradient: "from-green-500 to-emerald-600",
    image: AlphaDAO, // Replace with actual image path
  },
  {
    title: "Community DAO",
    subtitle: "SYN Token Holders",
    description:
      "A fully decentralized, community-driven governance system that shapes the evolution of the SYN ecosystem.",
    responsibilities: [
      "Propose & vote on upgrades",
      "Treasury allocation decisions",
      "Protocol improvements",
      "Community initiatives",
    ],
    icon: Users,
    gradient: "from-blue-500 to-green-600",
    image: CommDAO, // Replace with actual image path
  },
];

const sysfiLab = {
  title: "SYSFI Lab",
  description:
    "The R&D engine of the ecosystem. A decentralized innovation hub where contributors collaborate to evolve governance models, expand DeFi tooling, and strengthen DAO infrastructure.",
  responsibilities: [
    {
      icon: GitBranch,
      title: "DAO & DeFi Development",
      description:
        "Continuous improvement of governance tools and DeFi integrations.",
    },
    {
      icon: Shield,
      title: "Security & Audits",
      description:
        "Ensuring smart contract integrity with regular security reviews.",
    },
    {
      icon: Users,
      title: "Ecosystem Partnerships",
      description: "Collaboration with blockchain projects and DeFi protocols.",
    },
    {
      icon: Lightbulb,
      title: "Project Incubation",
      description:
        "Supporting ecosystem builders with grants and technical guidance.",
    },
  ],
};

const Ecosystem = () => {
  return (
    <div className=" bg-black">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={ecosystem}
            alt="Ecosystem Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 -z-20 bg-black/60" />

        {/* HEX PATTERN */}
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="hexEcosystem"
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
            <rect width="100%" height="100%" fill="url(#hexEcosystem)" />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* BADGE */}
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
                    Ecosystem Overview
                  </span>
                </div>

                {/* HEADER */}
                <h1
                  className="text-xl md:text-3xl lg:text-3xl font-bold mb-6 text-white"
                  style={{ fontFamily: '"Orbitron", sans-serif' }}
                >
                  <ScrambleText text="The" delay={0} />{" "}
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                    <ScrambleText text="SYSFI Ecosystem" delay={200} />
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="text-md md:text-lg text-gray-300 leading-relaxed mb-8"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  A dynamic, ever-expanding ecosystem built around
                  decentralization, ensuring maximum community participation and
                  reward distribution.
                </p>

                {/* CTA */}
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button href="#ecosystem-pillars">Explore Ecosystem</Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button variant="secondary" href="#governance">
                      View Governance
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars with SYSFI Intersecting Border */}
      <section
        id="ecosystem-pillars"
        className="py-20 md:py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="pillarsGrid"
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
            <rect width="100%" height="100%" fill="url(#pillarsGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Network className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Core Pillars
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Four Pillars of{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Interconnected systems powering the decentralized future
            </p>
          </div>

          {/* Interactive Container with SYSFI Intersecting Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* SYSFI Text Intersecting Border */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div
                  className="px-8 py-3 bg-gradient-to-br from-zinc-900 to-black border-2 border-green-500/50"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  }}
                >
                  <span
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    SYSFI
                  </span>
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-blue-500/20 blur-xl -z-10" />
              </div>
            </div>

            {/* Main Container with Partial Border */}
            <div className="relative bg-gradient-to-br from-zinc-900/50 to-black/50 border-2 border-green-500/30 p-8 md:p-12 mt-8">
              {/* Border segments (excluding top center for SYSFI) */}
              <div className="absolute top-0 left-0 w-[calc(50%-120px)] h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
              <div className="absolute top-0 right-0 w-[calc(50%-120px)] h-0.5 bg-gradient-to-l from-green-500/50 to-transparent" />

              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/70"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 8px, 8px 8px, 8px 100%, 0 100%)",
                }}
              />
              <div
                className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/70"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, calc(100% - 8px) 100%, calc(100% - 8px) 8px, 0 8px)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/70"
                style={{
                  clipPath:
                    "polygon(0 0, 8px 0, 8px calc(100% - 8px), 100% calc(100% - 8px), 100% 100%, 0 100%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/70"
                style={{
                  clipPath:
                    "polygon(0 calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 0, 100% 0, 100% 100%, 0 100%)",
                }}
              />

              {/* Ecosystem Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ecosystemPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 relative"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* <div
                        className={`w-14 h-14 bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 relative z-10`}
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div> */}

                      <h3
                        className="text-xl font-bold text-white mb-2 relative z-10"
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        className="text-gray-400 text-sm mb-4 relative z-10"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {pillar.description}
                      </p>

                      <ul className="space-y-2 relative z-10">
                        {pillar.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div
                        className="absolute top-0 right-0 w-6 h-6 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Animated circuit lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                style={{ mixBlendMode: "screen" }}
              >
                <motion.line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dual DAO Structure with Header Images */}
      <section
        id="governance"
        className="py-20 md:py-32 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Target className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Governance
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Dual-DAO{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Governance Structure
              </span>
            </h2>

            <p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              SYSFI operates through a dual-DAO governance system ensuring
              balanced power distribution between strategic leadership and
              community participation.
            </p>
          </div>

          {/* DAO Cards with Header Images */}
          <div className="grid md:grid-cols-2 gap-8">
            {daoStructure.map((dao, index) => {
              const Icon = dao.icon;
              const [imageRef, imageSrc] = useLazyLoad(dao.image);

              return (
                <motion.div
                  key={dao.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 overflow-hidden transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header Image */}
                  <div ref={imageRef} className="relative h-52 overflow-hidden">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={dao.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse" />
                    )}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${dao.gradient} opacity-30 mix-blend-overlay`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                    {/* Icon Overlay */}
                    {/* <div
                      className={`absolute bottom-4 left-6 w-16 h-16 bg-gradient-to-br ${dao.gradient} flex items-center justify-center`}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-10">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {dao.title}
                    </h3>

                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${dao.gradient} bg-clip-text text-transparent mb-4`}
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {dao.subtitle}
                    </p>

                    <p
                      className="text-gray-400 mb-6 leading-relaxed"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {dao.description}
                    </p>

                    <h4
                      className="text-sm font-semibold text-white mb-4 flex items-center gap-2"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      <div className="w-8 h-0.5 bg-green-500" />
                      Key Responsibilities
                    </h4>

                    <ul className="space-y-3">
                      {dao.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          style={{ fontFamily: '"Space Mono", monospace' }}
                        >
                          <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-10 h-10 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYSFI Lab with Overlayed Image Background */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src="/assets/sysfi-lab-bg.webp"
            alt="SYSFI Lab"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 mix-blend-overlay z-10" />
        </div>

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 z-10">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="labCircuit"
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
            <rect width="100%" height="100%" fill="url(#labCircuit)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-6"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                <Lightbulb className="w-4 h-4 text-green-400" />
                <span
                  className="text-sm text-green-400 font-medium uppercase tracking-wider"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Innovation Hub
                </span>
              </div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  {sysfiLab.title}
                </span>
              </h2>

              <p
                className="text-gray-300 text-lg mb-8 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                {sysfiLab.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#">
                  Become a Contributor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="secondary" href="#">
                  View Open Bounties
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Right Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {sysfiLab.responsibilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 relative backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* <div
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 relative z-10"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div> */}

                    <h4
                      className="text-white font-bold mb-2 relative z-10"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {item.title}
                    </h4>

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Value Flows */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                Value Flow
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              How the Ecosystem{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Creates Value
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Every component of SYSFI is designed to create, capture, and
              distribute value back to the community.
            </p>
          </div>

          {/* Flow Cards */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Users Create & Participate",
                  description:
                    "Communities launch DAOs, users join guilds, and participants engage in governance.",
                  items: [
                    "DAO Creation Fees",
                    "Transaction Fees",
                    "Launchpad Fees",
                  ],
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Value Flows to Treasury",
                  description:
                    "Fees and revenue flow into the Community and Foundation treasuries.",
                  items: [
                    "Community Treasury (18%)",
                    "Foundation Treasury (17%)",
                    "Staking Rewards (12%)",
                  ],
                  icon: Coins,
                },
                {
                  step: "03",
                  title: "Community Decides",
                  description:
                    "Token holders vote on how to allocate treasury funds for ecosystem growth.",
                  items: [
                    "Development Grants",
                    "Marketing & Growth",
                    "Partnerships",
                  ],
                  icon: Vote,
                },
              ].map((flow, index) => {
                const Icon = flow.icon;
                return (
                  <motion.div
                    key={flow.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="relative group"
                  >
                    {/* Connector Arrow */}
                    {index < 2 && (
                      <div className="hidden md:block absolute top-16 -right-4 z-20">
                        <ArrowRight className="w-8 h-8 text-green-400" />
                      </div>
                    )}

                    <div
                      className="bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-8 h-full transition-all duration-500 relative"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div
                          className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                          }}
                        >
                          <span
                            className="text-white font-bold text-xl"
                            style={{ fontFamily: '"Orbitron", sans-serif' }}
                          >
                            {flow.step}
                          </span>
                        </div>

                        <div
                          className="w-12 h-12 bg-green-500/10 flex items-center justify-center"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                          }}
                        >
                          <Icon className="w-6 h-6 text-green-400" />
                        </div>
                      </div>

                      <h3
                        className="text-xl md:text-2xl font-semibold text-white mb-3 relative z-10"
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {flow.title}
                      </h3>

                      <p
                        className="text-gray-400 mb-6 relative z-10"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {flow.description}
                      </p>

                      <ul className="space-y-2 relative z-10">
                        {flow.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm text-gray-300"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div
                        className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
