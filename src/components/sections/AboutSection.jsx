import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Globe, Users, Layers, Code, Zap } from "lucide-react";
import { useRef } from "react";
import AboutImage from "../../assets/block.png";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  const features = [
    {
      icon: Lock,
      title: "Permissionless",
      description: "Open to everyone, no gatekeepers",
    },
    {
      icon: Globe,
      title: "Decentralized",
      description: "No single owner or authority",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Transparent and community-driven",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-10 md:py-22 px-3 md:px-12 lg:px-10 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[128px]" />
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="diagonals"
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
          <rect width="100%" height="100%" fill="url(#diagonals)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content - Text (Wider) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <Layers className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                About Sysfi
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <span className="text-white">What is </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Sysfi?
              </span>
            </motion.h2>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 space-y-4"
            >
              <p
                className="text-gray-300 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Sysfi{" "}
                <span className="text-green-400 font-semibold">
                  (Systematic Finance)
                </span>{" "}
                is a decentralized, open-source DeFi and Social Layer platform
                designed to power Web3 communities. It provides a unified
                ecosystem of diverse Web3 tools and platforms that abstract the
                technical complexities involved in building blockchain
                solutions, making decentralized innovation more{" "}
                <span className="relative inline-block">
                  <span className="text-green-400 font-semibold">
                    accessible
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>{" "}
                and{" "}
                <span className="relative inline-block">
                  <span className="text-blue-400 font-semibold">scalable</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </span>
                .
              </p>

              <p
                className="text-gray-400 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                The Sysfi network is{" "}
                <span className="text-green-400 font-semibold">
                  open to everyone
                </span>
                : no permission is required. It has no single owner, and is
                built to support developers, creators, organizations, and
                communities around the world—empowering decentralized
                communities to collaborate, build, and thrive in Web3.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 p-4 group cursor-pointer"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <Icon className="w-6 h-6 text-green-400 mb-2" />
                      <h4
                        className="text-white font-semibold text-sm mb-1"
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className="text-gray-500 text-xs"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-4 h-4 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 bg-green-500/20 flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                  }}
                >
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    Global
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Community
                  </p>
                </div>
              </div>

              <div className="h-12 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 bg-blue-500/20 flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                  }}
                >
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    Instant
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Deployment
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 h-px bg-gradient-to-r from-green-500 via-emerald-500 to-transparent"
            />
          </motion.div>

          {/* Right Content - Image (Narrower) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            {/* Main Image Container */}
            <motion.div
              style={{
                y: imageY,
                rotateY: imageRotate,
              }}
              className="relative group"
            >
              {/* Chamfered Image Container */}
              <div
                className="relative overflow-hidden border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-500"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
                }}
              >
                {/* Image */}
                <img
                  src={AboutImage}
                  alt="Sysfi Platform"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 mix-blend-overlay" />

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent"
                  animate={{
                    y: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Corner Accent */}
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>

              {/* Floating Data Points */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-lg border border-green-500/40 p-4"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-green-500/20 flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Code className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-semibold"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      Open Source
                    </p>
                    <p
                      className="text-green-400 text-xs"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      100% Transparent
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-lg border border-blue-500/40 p-4"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-blue-500/20 flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-semibold"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      Decentralized
                    </p>
                    <p
                      className="text-blue-400 text-xs"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      No Single Owner
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Glowing Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/30 rounded-full blur-3xl"
              />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <pattern
                    id="aboutGrid"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="1"
                      fill="currentColor"
                      className="text-green-400"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#aboutGrid)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto mt-20 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
      />
    </section>
  );
};

export default AboutSection;
