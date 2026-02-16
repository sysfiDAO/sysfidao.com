import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";
import PhoneMockup from "../ui/PhoneMockup";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative  flex items-center pt-10 overflow-hidden bg-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          style={{ x: -mousePosition.x, y: -mousePosition.y }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[128px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="hexagons"
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
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start justify-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ y: y1 }}
          >
            {/* Beta Badge with Chamfered Edge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 mb-6 relative overflow-hidden group"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <span
                className="text-sm text-gray-300 font-medium relative z-10"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Now in Beta — Join the Revolution
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse relative z-10" />
            </motion.div>

            {/* Main Heading */}
            <h1
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              The Super App for{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Decentralized
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              <br />
              <span className="text-white">Communities</span>
            </h1>

            <p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Create DAOs, manage communities, swap tokens, and explore Web3—all
              from one powerful mobile app -{" "}
              <span className="text-green-400 font-semibold">Sysfi Nexus</span>.
              No complexity, just community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  href="https://play.google.com/store/apps/details?id=com.sysfiprotocol.nexussysfi&pcampaignid=web_share"
                  target="_blank"
                  className="relative overflow-hidden bg-green-500 hover:bg-green-600 text-black font-bold group"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Download className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Download App</span>
                </Button>
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(34, 197, 94, 1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-green-500/50 text-green-400 font-bold text-lg hover:bg-green-500/10 transition-all relative"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                  fontFamily: '"Space Mono", monospace',
                }}
              >
                <Link to={`/sysfi/nexus`}>
                  <Zap className="w-5 h-5 mr-2 inline" />
                  Learn More
                </Link>
              </motion.button>
            </div>

            {/* Enhanced Stats with Chamfered Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  value: "10K+",
                  label: "Early Users",
                  icon: Users,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  value: "500+",
                  label: "DAOs Created",
                  icon: Sparkles,
                  color: "from-emerald-500 to-blue-500",
                },
                {
                  value: "60s",
                  label: "To Launch",
                  icon: Zap,
                  color: "from-blue-500 to-green-500",
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative bg-gradient-to-br from-zinc-900/80 to-black/80 border border-green-500/20 p-4 backdrop-blur-sm group"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon
                      className={`w-5 h-5 mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    />
                    <div
                      className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs text-gray-500 mt-1"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {stat.label}
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 h-px bg-gradient-to-r from-green-500 via-emerald-500 to-transparent"
            />
          </motion.div>

          {/* Right Content - Enhanced Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: y2 }}
            className="relative flex justify-center pt-[120px] lg:pt-0 lg:justify-end"
          >
            <PhoneMockup>
              {/* App Screen Content */}
              <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-10">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 px-2">
                  <span style={{ fontFamily: '"Space Mono", monospace' }}>
                    9:41
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-gray-500 rounded-sm">
                      <div className="w-2/3 h-full bg-green-400 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      Welcome back
                    </p>
                    <p
                      className="text-white font-semibold"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      Alex.eth
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full"
                  />
                </div>

                {/* Balance Card with Chamfered Edge */}
                <div
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-4 mb-4 relative overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
                  <p
                    className="text-gray-400 text-sm mb-1 relative z-10"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Total Balance
                  </p>
                  <p
                    className="text-2xl font-bold text-white mb-3 relative z-10"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    $12,847.50
                  </p>
                  <div className="flex items-center gap-2 relative z-10">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-green-400 text-sm font-semibold"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      +5.24%
                    </motion.span>
                    <span
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      this week
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { name: "Send", gradient: "from-green-400 to-emerald-500" },
                    {
                      name: "Receive",
                      gradient: "from-emerald-400 to-green-600",
                    },
                    { name: "Swap", gradient: "from-green-500 to-blue-500" },
                    { name: "Stake", gradient: "from-blue-500 to-green-500" },
                  ].map((action) => (
                    <motion.div
                      key={action.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 bg-white/5 flex items-center justify-center relative overflow-hidden"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                        }}
                      >
                        <div
                          className={`w-6 h-6 bg-gradient-to-br ${action.gradient} rounded-md`}
                        />
                      </div>
                      <span
                        className="text-xs text-gray-400"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {action.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* My DAOs */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      My DAOs
                    </p>
                    <p
                      className="text-green-400 text-sm"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      See all
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        name: "DeFi Builders",
                        members: "2.4K",
                        color: "from-green-500 to-emerald-600",
                      },
                      {
                        name: "NFT Collective",
                        members: "891",
                        color: "from-emerald-500 to-blue-600",
                      },
                    ].map((dao, index) => (
                      <motion.div
                        key={dao.name}
                        whileHover={{
                          x: 4,
                          backgroundColor: "rgba(34, 197, 94, 0.05)",
                        }}
                        className="flex items-center gap-3 bg-white/5 p-3 cursor-pointer transition-all"
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                        }}
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${dao.color}`}
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                          }}
                        />
                        <div className="flex-1">
                          <p
                            className="text-white text-sm font-medium"
                            style={{ fontFamily: '"Orbitron", sans-serif' }}
                          >
                            {dao.name}
                          </p>
                          <p
                            className="text-gray-500 text-xs"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            {dao.members} members
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </PhoneMockup>

            {/* Enhanced Floating Notifications */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-lg border border-green-500/30 p-4 hidden lg:block"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-green-500/20 flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    DAO Created
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Just now
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-4 bottom-1/3 bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-lg border border-emerald-500/30 p-4 hidden lg:block"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-emerald-500/20 flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                  }}
                >
                  <span className="text-emerald-400">🗳️</span>
                </div>
                <div>
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    New Proposal
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    Vote ends in 2d
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Glowing Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="relative">
          <div
            className="w-6 h-10 border-2 border-green-500/40 flex justify-center pt-2"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-green-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
