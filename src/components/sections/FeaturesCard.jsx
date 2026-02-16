import React from "react";
import { motion } from "framer-motion";
import CommunityImage from "../../assets/comm.webp";
import DaoImage from "../../assets/barrier.webp";
import Web3Image from "../../assets/integration.webp";

const FeaturesCardSection = () => {
  const features = [
    {
      title: "Empowering Community-Driven Development",
      description:
        "SYSFI ensures projects evolve based on community needs, shifting decision-making power away from centralized teams.",
      // Replace with your actual image imports
      image: CommunityImage,
      alt: "Community driven development",
    },
    {
      title: "Lowering DAO Barriers",
      description:
        "With SYSFI, anyone can create and manage a DAO without technical complexity or high costs.",
      image: DaoImage,
      alt: "Lower DAO barriers",
    },
    {
      title: "Seamless Web3 Integration",
      description:
        "SYSFI connects DAOs with DeFi, launchpads, and funding tools, creating a unified ecosystem.",
      image: Web3Image,
      alt: "Web3 integration",
      fullWidth: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative bg-black py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Empowering the Future
            </span>
            <br />
            <span className="text-white">of Community-Led Web3</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-green-500/50 transition-all duration-500 ${
                feature.fullWidth ? "md:col-span-2" : ""
              }`}
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
              </div>

              {/* Content Wrapper */}
              <div
                className={`relative flex flex-col ${feature.fullWidth ? "md:flex-row" : ""}`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden bg-zinc-950 ${
                    feature.fullWidth ? "md:w-1/2 h-64 md:h-auto" : "h-64"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 mix-blend-overlay z-10" />
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Image Overlay Pattern */}
                  <div className="absolute inset-0 z-20 opacity-10">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern
                          id={`pattern-${index}`}
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
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#pattern-${index})`}
                      />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`p-8 lg:p-10 ${feature.fullWidth ? "md:w-1/2 flex flex-col justify-center" : ""}`}
                >
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-gray-400 text-base lg:text-lg leading-relaxed mb-6"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="h-px bg-gradient-to-r from-green-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: 60 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    />
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + index * 0.2 + i * 0.1,
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chamfered Corner Accent */}
              <div
                className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
        />
      </div>
    </section>
  );
};

export default FeaturesCardSection;
