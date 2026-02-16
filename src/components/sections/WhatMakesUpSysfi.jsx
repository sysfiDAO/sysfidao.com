import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Building2, Globe2, FlaskConical, ChevronRight } from "lucide-react";
import DaoImage from "../../assets/infrastructure.webp";
import PlanetImage from "../../assets/planet.webp";
import LabImage from "../../assets/sysfilabs.webp";

const ScrambleText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, text, delay]);

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

const WhatMakesUpSysfi = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const components = [
    {
      number: "01",
      title: "DAO Infrastructure",
      icon: Building2,
      image: DaoImage,
      description:
        "SYSFI provides next-generation DAO infrastructure that bridges decentralization with real-world usability.",
      features: [
        "On-chain governance frameworks",
        "Treasury and DeFi integrations",
        "Launchpad and tokenization tools",
        "Community coordination systems",
      ],
      conclusion:
        "These components enable individuals, influencers, and projects to create and manage decentralized organizations effortlessly—without deep technical expertise.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      number: "02",
      title: "SYSFI Planet",
      icon: Globe2,
      image: PlanetImage,
      description:
        "SYSFI Planet represents the living ecosystem of communities, builders, and decentralized organizations operating within the SYSFI network.",
      subtitle: "It is the coordination layer where:",
      features: [
        "Communities align incentives",
        "Contributors participate in governance",
        "Projects launch and scale",
        "Value circulates through DeFi-native systems",
      ],
      conclusion:
        "SYSFI Planet transforms decentralized tools into thriving, interconnected Web3 communities.",
      gradient: "from-emerald-500 to-blue-600",
    },
    {
      number: "03",
      title: "SYSFI Lab",
      icon: FlaskConical,
      image: LabImage,
      description:
        "SYSFI Lab is the research and development arm of the ecosystem.",
      subtitle:
        "Operating as a decentralized innovation hub, SYSFI Lab focuses on:",
      features: [
        "Advancing DAO governance models",
        "Developing DeFi integrations",
        "Improving scalability and protocol security",
        "Experimenting with next-generation Web3 coordination systems",
      ],
      conclusion:
        "Unlike traditional development teams, SYSFI Lab evolves through open collaboration and contributor-driven innovation.",
      gradient: "from-blue-500 to-green-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-zinc-950 via-black to-zinc-950 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[128px]" />
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="circuit"
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
              <circle
                cx="30"
                cy="30"
                r="2"
                fill="currentColor"
                className="text-green-500"
              />
              <circle
                cx="50"
                cy="40"
                r="2"
                fill="currentColor"
                className="text-green-500"
              />
              <circle
                cx="70"
                cy="50"
                r="2"
                fill="currentColor"
                className="text-green-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        {/* Banner with Chamfered Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative bg-gradient-to-r from-zinc-900/90 to-black/90 border-2 border-green-500/30 p-8 md:p-12"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
          }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />

          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-green-500"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%)",
            }}
          />

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold relative z-10"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            <ScrambleText text="What Makes Up" delay={0} />{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              <ScrambleText text="SYSFI" delay={300} />
            </span>
          </h2>
        </motion.div>

        {/* Grid Layout: Intro Text + 3 Cards - 4 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-2 lg:gap-2">
          {/* Intro Text - Takes slightly more space (3.5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="h-full flex flex-col justify-start">
              <p
                className="text-start md:text-md lg:text-lg text-gray-300 leading-relaxed mb-4"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                SYSFI is a modular ecosystem designed to power decentralized
                organizations from launch to scale.
              </p>

              <p
                className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                The protocol is built on three core pillars:
              </p>

              {/* Decorative Elements */}
              <div className="mt-8 flex items-center gap-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 w-24"
                />
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Component Cards - Each takes equal space */}
          {components.map((component, index) => {
            const Icon = component.icon;
            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -8 }}
                className="lg:col-span-2 xl:col-span-2.5 group relative bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 transition-all duration-500"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Banner Image Header - Reduced height */}
                <div className="relative h-20 overflow-hidden">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-30 mix-blend-overlay`}
                  />

                  {/* Number Badge */}
                  <div
                    className="absolute top-4 left-4 w-12 h-12 bg-black/80 backdrop-blur-sm border border-green-500/50 flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    <span
                      className="text-green-400 font-bold text-lg"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {component.number}
                    </span>
                  </div>

                  {/* Top Right Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-500/70"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className={`w-6 h-6 bg-gradient-to-r ${component.gradient} bg-clip-text text-transparent`}
                    />
                    <h3
                      className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${component.gradient} bg-clip-text text-transparent`}
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {component.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {component.description}
                  </p>

                  {/* Subtitle if exists */}
                  {component.subtitle && (
                    <p
                      className="text-gray-500 text-sm italic mb-3"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {component.subtitle}
                    </p>
                  )}

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {component.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.15 + i * 0.05,
                        }}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Conclusion */}
                  <div className="pt-4 border-t border-green-500/20">
                    <p
                      className="text-gray-500 text-xs lg:text-sm leading-relaxed italic"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {component.conclusion}
                    </p>
                  </div>

                  {/* Bottom Right Accent */}
                  <div
                    className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
        />
      </div>
    </section>
  );
};

export default WhatMakesUpSysfi;
