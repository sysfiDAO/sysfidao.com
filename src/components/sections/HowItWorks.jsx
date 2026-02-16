import { motion } from "framer-motion";
import { Download, Wallet, Users, Rocket, ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GradientText from "../ui/GradientText";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description:
      "Get SYSFI from the App Store or Google Play. Available on iOS and Android.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Wallet,
    step: "02",
    title: "Create Your Wallet",
    description:
      "Set up your non-custodial wallet in seconds. Your keys, your control.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Users,
    step: "03",
    title: "Join or Create a DAO",
    description:
      "Browse existing communities or launch your own DAO with custom governance.",
    gradient: "from-green-500 to-blue-600",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Building",
    description:
      "Vote on proposals, manage treasury, swap tokens, and grow your community.",
    gradient: "from-blue-500 to-green-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 relative bg-gradient-to-br from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[128px]" />
      </div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="diagonalLines"
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
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
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
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            Get Started in{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            From download to decentralized governance in minutes. No technical
            knowledge required.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px">
            <div className="relative w-full h-full">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                  className="absolute h-px bg-gradient-to-r from-green-500 to-emerald-500"
                  style={{
                    left: `${i * 25 + 12.5}%`,
                    width: "25%",
                    originX: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 lg:p-8 h-full transition-all duration-500"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                  }}
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Step Number Badge */}
                  <div
                    className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-zinc-900/95 to-black/95 border-2 border-green-500/50 flex items-center justify-center backdrop-blur-sm z-10"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                    }}
                  >
                    <span
                      className={`text-xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.gradient} bg-opacity-20 flex items-center justify-center relative overflow-hidden`}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10`}
                      />
                      <Icon className="w-8 h-8 text-green-400 relative z-10" />
                    </div>

                    {/* Arrow indicator for connection */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.2,
                          }}
                        >
                          <ArrowRight className="w-6 h-6 text-green-500/50" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3
                      className={`text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-gray-400 text-sm lg:text-base leading-relaxed"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className={`mt-6 h-1 bg-gradient-to-r ${step.gradient} w-16`}
                  />

                  {/* Top Right Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                  />

                  {/* Bottom Left Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className={`absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-20 rounded-full blur-2xl`}
                  />
                </motion.div>

                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="rotate-90"
                    >
                      <ArrowRight className="w-6 h-6 text-green-500/50" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p
            className="text-gray-400 text-lg mb-6"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            Ready to get started?
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold text-lg uppercase relative overflow-hidden group"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
              fontFamily: '"Space Mono", monospace',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Now
            </span>
          </motion.button>
        </motion.div> */}

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
