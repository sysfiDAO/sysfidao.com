import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Shield,
  Lock,
  Coins,
  Network,
  FileCheck,
  AlertCircle,
  Zap,
  ChevronRight,
} from "lucide-react";
import Contrifi from "../assets/ecosystem.png";
import Finance from "../assets/block.png";
import Defi from "../assets/defi.png";

const ScrambleText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    const timeout = setTimeout(() => {
      // Start after delay
    }, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <span>{displayText || text}</span>;
};

const FeatureBox = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  side = "left",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
      }}
    >
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-6 h-full hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/20">
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-green-500 to-transparent" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-green-500 to-transparent" />
        </div>

        {/* Icon */}
        <div className="mb-4 relative">
          <div
            className={`w-14 h-14 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center transition-all duration-300 ${isHovered ? "scale-110 rotate-6" : ""}`}
          >
            <Icon className="w-7 h-7 text-green-400" />
          </div>
          {isHovered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
            />
          )}
        </div>

        {/* Content */}
        <h3
          className="text-xl font-bold mb-3 text-white"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="text-gray-400 leading-relaxed text-sm"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          {description}
        </p>

        {/* Hover effect line */}
        <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const InfoSection = ({
  title,
  description,
  infoImg,
  reverse = false,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center bg-green-950/60 h-[50vh]`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
      }}
    >
      {/* Icon Side */}
      <div className="lg:w-1/3 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-full flex items-center justify-center "
        >
          <img
            src={infoImg}
            alt="ContriFi Meta"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="lg:w-2/3  p-8 transition-all duration-300">
        <h3
          className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="text-gray-300 leading-relaxed"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const SysfiLabs = () => {
  const leftFeatures = [
    {
      icon: Zap,
      title: "Builder Incentivization",
      description:
        "Developers, designers, and creators earn directly from their impact — no middlemen, no waiting.",
    },
    {
      icon: Users,
      title: "DAO-Driven Validation",
      description:
        "Contributions are reviewed and approved by the community DAO, ensuring transparency and collective decision-making.",
    },
    {
      icon: Shield,
      title: "Anti-Rug Mechanism",
      description:
        "Eliminates team unlocks and sudden exits by rewarding active contribution, not promises.",
    },
  ];

  const rightFeatures = [
    {
      icon: Coins,
      title: "Earn by Contributing",
      description:
        "Turn participation into rewards. Every approved effort leads to tangible earnings through ContriFi's reward pool.",
    },
    {
      icon: Network,
      title: "Community-Led Economy",
      description:
        "Empowers a self-sustaining network where the community governs value creation and capital flow.",
    },
    {
      icon: FileCheck,
      title: "On-Chain Transparency",
      description:
        "Every contribution, vote, and payout is recorded on the Sysfi Blockchain — ensuring complete accountability.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Center Box and Side Features */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={Contrifi}
            alt="ContriFi Meta Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="hexLabs"
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
            <rect width="100%" height="100%" fill="url(#hexLabs)" />
          </svg>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 w-full pt-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Features - 3 boxes */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              {leftFeatures.map((feature, index) => (
                <FeatureBox
                  key={feature.title}
                  {...feature}
                  delay={index * 0.1}
                  side="left"
                />
              ))}
            </div>

            {/* Center Content Box */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
              }}
              className="lg:col-span-6 backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={Contrifi}
                  alt="ContriFi Meta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

                {/* Badge on Image */}
                <div className="absolute top-6 left-6">
                  <div
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/20 backdrop-blur-md border border-green-500/40"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-green-400" />
                    <span
                      className="text-sm text-green-400 font-medium uppercase tracking-wider"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      ContriFi Meta
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 md:p-10 lg:p-12">
                {/* Main Heading */}
                <h1
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-6"
                  style={{ fontFamily: '"Orbitron", sans-serif' }}
                >
                  <ScrambleText text="Powering the Future of " delay={0} />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent block mt-2">
                    <ScrambleText text="Decentralized Growth" delay={300} />
                  </span>
                </h1>

                {/* Intro Text */}
                <p
                  className="text-base md:text-lg text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  The ContriFi Meta is the beating heart of the Sysfi ecosystem
                  — a reward and governance layer that incentivizes builders,
                  creators, and communities to grow Web3 sustainably.
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent mb-6" />

                {/* About Text */}
                <p
                  className="text-sm md:text-base text-gray-400 leading-relaxed"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Sysfi is powered by the ContriFi Meta — a dynamic contribution
                  economy that transforms participation into measurable value.
                  In this model, developers, creators, and innovators build
                  utilities and products that serve the Sysfi ecosystem, while
                  the community DAO collectively decides if a contribution
                  deserves rewards.
                </p>

                <p
                  className="text-sm md:text-base text-gray-400 leading-relaxed mt-4"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Every contribution — from development to design, governance
                  proposals, or marketing initiatives — is submitted for
                  validation. The community, through decentralized consensus,
                  evaluates its impact and determines its reward. This approach
                  eliminates bias, prevents rug pulls, and ensures that only
                  genuine, value-adding contributions are funded.
                </p>

                <p
                  className="text-sm md:text-base text-gray-400 leading-relaxed mt-4"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  By replacing traditional "team unlocks" and centralized
                  funding with proof-of-contribution, Sysfi creates a fair,
                  transparent, and sustainable ecosystem — the true realization
                  of community-powered finance.
                </p>
              </div>
            </motion.div>

            {/* Right Features - 3 boxes */}
            <div className="lg:col-span-3 space-y-6 order-3">
              {rightFeatures.map((feature, index) => (
                <FeatureBox
                  key={feature.title}
                  {...feature}
                  delay={index * 0.1 + 0.05}
                  side="right"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Sections - Side by Side */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1 */}
          <InfoSection
            infoImg={Finance}
            title="Solving the Core Problem of Web3 Projects"
            description="Many Web3 projects fail due to poor incentives — teams unlock tokens prematurely or abandon projects after funding rounds. ContriFi Meta fixes this by rewarding proven effort and successful delivery. The DAO becomes the guardian of fair contribution, ensuring sustainability and collective growth."
            delay={0}
          />

          {/* Section 2 */}
          <InfoSection
            infoImg={Defi}
            title="A New Era of Decentralized Finance"
            description="ContriFi Meta isn't just a reward system — it's the backbone of the next-generation decentralized economy. It transforms Sysfi into a living, evolving organism where everyone who contributes, validates, and builds shares in its success. By empowering community validation and proof-of-contribution, Sysfi sets the stage for a transparent, decentralized, and trustless Web3 finance revolution."
            reverse={true}
            delay={0.2}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-12 text-center"
          >
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Ready to <span className="text-green-400">Contribute?</span>
            </h3>
            <p
              className="text-gray-300 mb-8 text-lg"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Join the ContriFi Meta and start earning for your contributions
              today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Get Started
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SysfiLabs;
