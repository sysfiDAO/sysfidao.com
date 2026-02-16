import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Coins,
  Vote,
  TrendingUp,
  Zap,
  Lock,
  Users,
  Rocket,
  Shield,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ChevronRight,
  Crown,
  Target,
  Award,
} from "lucide-react";
import GradientText from "../components/ui/GradientText";
import Button from "../components/ui/Button";
import TokenImage from "../assets/token-hero.png";

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

const tokenAllocation = [
  {
    name: "Airdrop & Community",
    percentage: 20,
    color: "#22c55e",
    description: "Community rewards and early adopter incentives",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "Community Treasury",
    percentage: 18,
    color: "#10b981",
    description: "DAO-managed ecosystem development",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    name: "Foundation Treasury",
    percentage: 17,
    color: "#3b82f6",
    description: "External collaborations and marketing",
    gradient: "from-green-500 to-blue-600",
  },
  {
    name: "Launchpool & Staking",
    percentage: 12,
    color: "#06b6d4",
    description: "Staker and liquidity provider rewards",
    gradient: "from-blue-500 to-green-600",
  },
  {
    name: "SYSFI Lab",
    percentage: 10,
    color: "#14b8a6",
    description: "Core contributor incentives",
    gradient: "from-emerald-500 to-blue-600",
  },
  {
    name: "ICO/Presale",
    percentage: 10,
    color: "#10b981",
    description: "Early investor allocation",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Liquidity Pool",
    percentage: 8,
    color: "#22d3ee",
    description: "DEX trading liquidity",
    gradient: "from-blue-500 to-emerald-600",
  },
  {
    name: "Partnerships",
    percentage: 5,
    color: "#0ea5e9",
    description: "Strategic partnerships and integrations",
    gradient: "from-emerald-500 to-green-500",
  },
];

const tokenUtility = [
  {
    icon: Vote,
    title: "Governance",
    description:
      "Create and vote on proposals, shaping the future of SYSFI ecosystem.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Staking & Yield",
    description:
      "Stake SYN to earn passive rewards and contribute to network security.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Transaction Fees",
    description:
      "Use SYN as utility token to cover fees across the SYSFI ecosystem.",
    gradient: "from-green-500 to-blue-600",
  },
  {
    icon: Rocket,
    title: "Launchpad Access",
    description:
      "Access new project token sales and exclusive investment opportunities.",
    gradient: "from-blue-500 to-green-600",
  },
];

const vestingSchedule = [
  {
    allocation: "Team (10%)",
    schedule: "1 year lock, then 20% released annually over 5 years",
    icon: Users,
  },
  {
    allocation: "Treasury (35%)",
    schedule: "Gradual release based on governance decisions",
    icon: Crown,
  },
  {
    allocation: "Airdrop (20%)",
    schedule: "Released periodically through engagement campaigns",
    icon: Award,
  },
  {
    allocation: "ICO (10%)",
    schedule: "TGE unlock with vesting based on raise tier",
    icon: Target,
  },
];

const TokenomicsChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const total = 420000000;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {tokenAllocation.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-5 transition-all duration-500 relative cursor-pointer ${
              hoveredIndex === index ? "border-green-500/70" : ""
            }`}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Percentage Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${item.gradient} mb-3 relative z-10`}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
              }}
            >
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                {item.percentage}%
              </span>
            </div>

            <h3
              className="text-sm font-bold text-white mb-1 relative z-10"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              {item.name}
            </h3>

            <p
              className="text-gray-400 text-xs mb-2 relative z-10"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              {item.description}
            </p>

            <p
              className={`text-xs font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent relative z-10`}
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              {((total * item.percentage) / 100).toLocaleString()} SYN
            </p>

            {/* Corner Accent */}
            <div
              className="absolute top-0 right-0 w-5 h-5 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/30 p-8 lg:p-10 relative"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />

        {/* Total Supply */}
        <div className="text-center mb-8 relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 mb-4"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}
          >
            <Coins className="w-4 h-4 text-green-400" />
            <span
              className="text-sm text-green-400 uppercase tracking-wider"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Total Supply
            </span>
          </div>

          <h3
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            420M
          </h3>
          <p
            className="text-gray-400"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            SYN Tokens
          </p>
        </div>

        {/* Distribution Bars */}
        <div className="space-y-4 relative z-10">
          <h4
            className="text-white font-semibold mb-4 uppercase tracking-wider"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            Distribution Overview
          </h4>

          {tokenAllocation.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-sm text-gray-300"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {item.name}
                </span>
                <span
                  className="text-sm font-bold text-green-400"
                  style={{ fontFamily: '"Orbitron", sans-serif' }}
                >
                  {item.percentage}%
                </span>
              </div>
              <div
                className="h-2 bg-zinc-800 relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage * 5}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${item.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 w-32 relative z-10"
        />
      </motion.div>
    </div>
  );
};

const Token = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x0000...0000"; // Placeholder

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        </div>

        {/* Circuit Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="tokenCircuit"
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
            <rect width="100%" height="100%" fill="url(#tokenCircuit)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                  SYN Token
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                <ScrambleText text="The Heart of" delay={0} />{" "}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  <ScrambleText text="SYSFI" delay={300} />
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                SYN powers the entire SYSFI ecosystem—governance, staking, fees,
                and access to exclusive opportunities.
              </p>

              {/* Token Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Total Supply", value: "420M SYN", icon: Coins },
                  { label: "Network", value: "Multi-Chain", icon: Shield },
                  { label: "Type", value: "Governance", icon: Vote },
                  { label: "Status", value: "Coming Soon", icon: Rocket },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-4 transition-all duration-500 relative"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <Icon className="w-6 h-6 text-green-400 mb-2 relative z-10" />
                      <p
                        className="text-gray-500 text-xs mb-1 relative z-10"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {stat.label}
                      </p>
                      <p
                        className="text-white font-bold relative z-10"
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {stat.value}
                      </p>

                      <div
                        className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Contract Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/30 p-4 relative group"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left flex-1">
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      Contract Address
                    </p>
                    <p className="text-white font-mono text-sm md:text-base break-all">
                      {contractAddress}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-3 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors ml-4"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group order-first lg:order-last"
            >
              <div
                className="relative overflow-hidden border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-500"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
                }}
              >
                <img
                  src={TokenImage}
                  alt="SYN Token"
                  loading="eager"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 mix-blend-overlay" />

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -top-4 -left-4 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-lg border border-green-500/50 p-4"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                  }}
                >
                  <Coins className="w-6 h-6 text-green-400 mb-1" />
                  <p
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    SYN TOKEN
                  </p>
                </motion.div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-green-500/70"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />
              </div>

              {/* Decorative Glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 opacity-20 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Zap className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Utility
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              What Can You Do with{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                <ScrambleText text="SYN" delay={0} />
              </span>
              ?
            </h2>

            <p
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              SYN is more than just a token—it's your key to participating in
              the decentralized future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenUtility.map((utility, index) => {
              const Icon = utility.icon;
              return (
                <motion.div
                  key={utility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 text-center relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h3
                    className="text-lg font-bold text-white mb-2 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {utility.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {utility.description}
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

      {/* Tokenomics */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Tokenomics
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                <ScrambleText text="Token Distribution" delay={0} />
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Carefully structured allocation ensuring long-term sustainability,
              decentralization, and community incentivization.
            </p>
          </div>

          <TokenomicsChart />
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Lock className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Vesting
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Vesting &{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Distribution
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Fair and sustainable token distribution with vesting schedules to
              ensure long-term commitment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {vestingSchedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.allocation}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-1">
                      <h3
                        className="text-white font-bold mb-2"
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {item.allocation}
                      </h3>
                      <p
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {item.schedule}
                      </p>
                    </div>
                  </div>

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

      {/* How to Get SYN */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Rocket className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Acquire SYN
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              How to Get{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                <ScrambleText text="SYN Tokens" delay={0} />
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Multiple ways to acquire SYN and become part of the SYSFI
              ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Community Airdrop",
                description:
                  "Participate in community activities and early adoption programs to earn free SYN tokens.",
                cta: "Join Waitlist",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: Rocket,
                title: "Token Sale",
                description:
                  "Participate in the upcoming ICO to acquire SYN tokens at early-stage pricing.",
                cta: "Coming Soon",
                gradient: "from-emerald-500 to-green-600",
              },
              {
                icon: TrendingUp,
                title: "DEX Trading",
                description:
                  "Trade SYN on decentralized exchanges after the token generation event.",
                cta: "Coming Soon",
                gradient: "from-green-500 to-blue-600",
              },
            ].map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-8 transition-all duration-500 relative"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h3
                    className="text-2xl font-bold text-white mb-3 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {method.title}
                  </h3>

                  <p
                    className="text-gray-400 mb-6 relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {method.description}
                  </p>

                  <button
                    className="text-green-400 font-medium flex items-center gap-2 hover:gap-3 transition-all relative z-10 group/btn"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {method.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div
                    className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
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

export default Token;
