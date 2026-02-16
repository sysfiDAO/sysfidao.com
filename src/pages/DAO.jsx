import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Vote,
  Shield,
  Coins,
  Users,
  Lock,
  TrendingUp,
  FileText,
  Award,
  Zap,
  GitBranch,
  Target,
  Sparkles,
  ChevronRight,
  Crown,
  Timer,
  Scale,
} from "lucide-react";
import ecosystem from "../assets/comdao.png";
import block from "../assets/block.png";
import foundation from "../assets/foundation.webp"

// Scroll-Reveal Scramble Text Component
const ScrollScrambleText = ({ text, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      let iteration = 0;

      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((char, index) => {
                if (char === " ") return " ";
                if (index < iteration) return text[index];
                return characters[
                  Math.floor(Math.random() * characters.length)
                ];
              })
              .join(""),
          );

          if (iteration >= text.length) {
            clearInterval(interval);
            setHasAnimated(true);
          }
          iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, text, delay, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayText || text}
    </span>
  );
};

// Masonry Card Component with single-edge chamfering
const MasonryCard = ({
  title,
  description,
  icon: Icon,
  image,
  size = "medium",
  delay = 0,
  chamferSide = "top-right", // top-right, top-left, bottom-right, bottom-left
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Chamfer clip-path based on side
  const getClipPath = () => {
    const chamferSize = "20px";
    switch (chamferSide) {
      case "top-right":
        return `polygon(0 0, calc(100% - ${chamferSize}) 0, 100% ${chamferSize}, 100% 100%, 0 100%)`;
      case "top-left":
        return `polygon(${chamferSize} 0, 100% 0, 100% 100%, 0 100%, 0 ${chamferSize})`;
      case "bottom-right":
        return `polygon(0 0, 100% 0, 100% calc(100% - ${chamferSize}), calc(100% - ${chamferSize}) 100%, 0 100%)`;
      case "bottom-left":
        return `polygon(0 0, 100% 0, 100% 100%, ${chamferSize} 100%, 0 calc(100% - ${chamferSize}))`;
      default:
        return `polygon(0 0, calc(100% - ${chamferSize}) 0, 100% ${chamferSize}, 100% 100%, 0 100%)`;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group ${
        size === "large"
          ? "row-span-2"
          : size === "wide"
            ? "col-span-2"
            : size === "tall"
              ? "row-span-2"
              : size === "extra-wide"
                ? "col-span-2 row-span-2"
                : ""
      }`}
      style={{ clipPath: getClipPath() }}
    >
      <div className="h-full backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden hover:border-green-500/50 transition-all duration-500 relative">
        {/* Animated corner accent on chamfer */}
        <div
          className={`absolute ${
            chamferSide === "top-right"
              ? "top-0 right-0"
              : chamferSide === "top-left"
                ? "top-0 left-0"
                : chamferSide === "bottom-right"
                  ? "bottom-0 right-0"
                  : "bottom-0 left-0"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-transparent" />
        </div>

        {/* Image Section (if provided) */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

            {/* Icon overlay on image */}
            {Icon && (
              <div className="absolute bottom-4 left-4">
                <div className="w-14 h-14 rounded-lg backdrop-blur-md  flex items-center justify-center">
                  <Icon className="w-14 h-14 text-white" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`p-6 ${image ? "" : "h-full flex flex-col"}`}>
          {/* Icon (if no image) */}
          {!image && Icon && (
            <div className="mb-4">
              <div
                className={`w-14 h-14 flex items-center justify-center transition-all duration-300 ${isHovered ? "scale-110 rotate-6" : ""}`}
              >
                <Icon className="w-14 h-14 text-white" />
              </div>
            </div>
          )}

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-gray-400 leading-relaxed text-sm md:text-base flex-grow"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            {description}
          </p>

          {/* Hover indicator
          <div className="mt-4 flex items-center gap-2 text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span
              className="text-sm font-medium"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Learn More
            </span>
            <ChevronRight className="w-4 h-4" />
          </div> */}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
        </div>
      </div>
    </motion.div>
  );
};

// Feature Stat Component
const FeatureStat = ({ icon: Icon, label, value, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
      }}
    >
      <Icon className="w-8 h-8 text-green-400 mb-3" />
      <div
        className="text-3xl font-bold text-white mb-1"
        style={{ fontFamily: '"Orbitron", sans-serif' }}
      >
        {value}
      </div>
      <div
        className="text-gray-400 text-sm"
        style={{ fontFamily: '"Space Mono", monospace' }}
      >
        {label}
      </div>
    </motion.div>
  );
};

const DAO = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-10">
          <img
            src={ecosystem}
            alt="DAO Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-green-900/20" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "grid-flow 20s linear infinite",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 mb-8"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Vote className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Decentralized Governance
              </span>
            </div>

            {/* Main Heading with Scramble */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <ScrollScrambleText text="Sysfi DAO" delay={0} />
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                <ScrollScrambleText text="Real Accountability" delay={200} />
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-12"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              The community-governed engine of the Sysfi ecosystem, blending
              token-based governance with NFT-powered voting and dynamic
              frameworks for transparent decision-making.
            </p>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              <FeatureStat
                icon={Users}
                label="DAO Members"
                value="10K+"
                delay={0.2}
              />
              <FeatureStat
                icon={Vote}
                label="Proposals"
                value="500+"
                delay={0.3}
              />
              <FeatureStat
                icon={Coins}
                label="Treasury"
                value="$50M"
                delay={0.4}
              />
              <FeatureStat
                icon={Award}
                label="Active Voters"
                value="85%"
                delay={0.5}
              />
            </div> */}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl" />
      </section>

      {/* What is DAO Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <ScrollScrambleText text="What is a " delay={0} />
              <span className="text-green-400">
                <ScrollScrambleText text="DAO?" delay={100} />
              </span>
            </h2>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-6">
            {/* Card 1 - Wide with Image */}
            <MasonryCard
              title="Decentralized Organization"
              description="A DAO is an organizational model where rules and decision-making are encoded on-chain and enforced by smart contracts. Instead of central management, stakeholders propose, vote on, and execute changes transparently."
              icon={GitBranch}
              image={ecosystem}
              size="wide"
              chamferSide="top-right"
              delay={0.1}
            />

            {/* Card 2 - Regular */}
            <MasonryCard
              title="Proposals & Voting"
              description="Members submit proposals which the community votes to accept or reject through transparent, on-chain mechanisms."
              icon={Vote}
              chamferSide="top-left"
              delay={0.2}
            />

            {/* Card 3 - Tall */}
            <MasonryCard
              title="Treasury Management"
              description="Funds managed by collective governance for grants, bounties, and development. Every allocation is transparent and requires community approval through democratic voting processes."
              icon={Coins}
              //   size="tall"
              chamferSide="bottom-right"
              delay={0.3}
            />

            {/* Card 4 - Regular with Image */}
            <MasonryCard
              title="On-Chain Execution"
              description="Approved proposals are executed automatically or via multisig, reducing human friction and ensuring trustless implementation."
              icon={Zap}
              //   image="/assets/blockchain.jpg"
              chamferSide="top-right"
              delay={0.4}
            />

            {/* Card 5 - Regular */}
            <MasonryCard
              title="Transparency"
              description="All actions and votes are recorded on-chain for public verification, creating an immutable audit trail."
              icon={Shield}
              chamferSide="bottom-left"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* SYN Token Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <span className="text-green-400">
                <ScrollScrambleText text="SYN Token" delay={0} />
              </span>
              <ScrollScrambleText text=" — Utility & Governance" delay={100} />
            </h2>
            <p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              The native governance token designed to capture on-chain alignment
              and deliver core utilities
            </p>
          </motion.div>

          {/* Masonry Grid for SYN Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-6">
            {/* Large Featured Card */}
            <MasonryCard
              title="Voting Power"
              description="SYN holders participate in governance by voting on proposals. Voting is augmented by Alpha NFT mechanics to balance power and participation, ensuring fair representation across the community."
              image={block}
              size="extra-wide"
              chamferSide="top-right"
              delay={0.1}
            />

            {/* Regular Cards */}
            <MasonryCard
              title="Staking & Delegation"
              description="Stake SYN to earn rewards or delegate voting power to trusted delegates for representative governance."
              icon={Lock}
              chamferSide="top-left"
              delay={0.2}
            />

            <MasonryCard
              title="Protocol Incentives"
              description="Used to incentivize contributors, fund grants, and bootstrap community initiatives."
              icon={TrendingUp}
              chamferSide="bottom-right"
              delay={0.3}
            />

            <MasonryCard
              title="Access & Privileges"
              description="Unlock on-chain features, beta access, and proposal submission rights with minimum SYN holdings."
              icon={Crown}
              //   size="tall"
              chamferSide="top-right"
              delay={0.4}
            />

            <MasonryCard
              title="Transparent Economics"
              description="Tokenomics and treasury allocations are codified in governance proposals for responsible evolution."
              icon={FileText}
              chamferSide="bottom-left"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Alpha NFT Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <span className="text-green-400">
                <ScrollScrambleText text="Alpha NFT" delay={0} />
              </span>
              <ScrollScrambleText text=" — The Voting Mechanism" delay={100} />
            </h2>
            <p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              A unique governance amplifier and reputation anchor that enhances
              democratic participation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(220px,auto)] gap-6">
            <MasonryCard
              title="Governance Amplifier"
              description="Alpha NFT holders gain additional privileges including proposal creation rights and vote multipliers while still requiring SYN to cast votes."
            //   icon={Award}
              image={foundation}
              size="wide"
              chamferSide="top-right"
              delay={0.1}
            />

            <MasonryCard
              title="Reputation Layer"
              description="Encode on-chain metadata like tenure and contribution score to reward sustained participation."
              icon={Target}
              chamferSide="top-left"
              delay={0.2}
              size="wide"
            />

            <MasonryCard
              title="Transfer Controls"
              description="Transferable NFTs with optional cooling periods to prevent flash vote attacks and ensure governance integrity."
              icon={Lock}
              chamferSide="bottom-right"
              delay={0.3}
            />

            <MasonryCard
              title="Composable Utility"
              description="Unlock specialized DAO features, governance dashboards, private forums, and grant allocation windows."
              icon={Sparkles}
              chamferSide="top-right"
              delay={0.4}
            />

            <MasonryCard
              title="Membership Layer"
              description="More than collectible art — it's a membership layer that protects against centralized token capture."
              icon={Shield}
              chamferSide="bottom-left"
              delay={0.5}
              size="wide"
            />
          </div>
        </div>
      </section>

      {/* Dynamic Voting Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <ScrollScrambleText text="Dynamic Voting" delay={0} />
            </h2>
            <p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Designed for fairness, resilience, and meaningful participation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(240px,auto)] gap-6">
            <MasonryCard
              title="Time-Weighted Voting"
              description="Votes weighted by how long SYN has been staked, encouraging long-term commitment and discouraging short-term manipulation."
              icon={Timer}
              //   image="/assets/time-lock.jpg"
              chamferSide="top-right"
              delay={0.1}
            />

            <MasonryCard
              title="Quadratic Elements"
              description="Reduces exponential influence of large token holders while reputation points favor consistent contributors."
              icon={Scale}
              chamferSide="top-left"
              delay={0.2}
            />

            <MasonryCard
              title="Liquid Democracy"
              description="Delegate votes to trusted representatives with flexible, revocable delegation enabling both direct and representative voting."
              icon={Users}
              //   size="tall"
              chamferSide="bottom-right"
              delay={0.3}
            />

            <MasonryCard
              title="Dynamic Quorum"
              description="Quorum thresholds adapt to proposal type — critical upgrades require higher quorums than routine funding."
              icon={Target}
              chamferSide="top-right"
              delay={0.4}
            />

            <MasonryCard
              title="Anti-Capture Design"
              description="Multiple mechanisms work together to prevent governance capture and ensure sustainable, community-driven growth."
              icon={Shield}
              chamferSide="bottom-left"
              delay={0.5}
              size="wide"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-2xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-blue-500/10 border border-green-500/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full">
                <pattern
                  id="cta-pattern"
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
                    className="text-green-400"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                Join the <span className="text-green-400">Governance</span>
              </h3>
              <p
                className="text-gray-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Become a part of the decentralized future. Hold SYN, mint Alpha
                NFTs, and shape the Sysfi ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: '"Orbitron", sans-serif' }}
                >
                  Get SYN Token
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 backdrop-blur-xl bg-white/5 border border-green-500/30 text-green-400 font-bold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: '"Orbitron", sans-serif' }}
                >
                  Mint Alpha NFT
                  <Award className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for grid animation */}
      <style jsx>{`
        @keyframes grid-flow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </div>
  );
};

export default DAO;
