import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Circle,
  Clock,
  Code,
  Users,
  Rocket,
  Coins,
  Globe,
  Zap,
  Download,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Info,
} from "lucide-react";
import GradientText from "../components/ui/GradientText";
import Button from "../components/ui/Button";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Smart Contract Development & Security",
    status: "completed",
    icon: Code,
    gradient: "from-green-500 to-emerald-600",
    explanation:
      "Building a secure foundation is critical for Web3 infrastructure. We invested heavily in professional audits and extensive testing to ensure user funds and governance mechanisms are protected from day one. Security isn't just a feature—it's the cornerstone of trust in decentralized systems.",
    whyNecessary:
      "Without rigorous security measures, smart contracts are vulnerable to exploits that can drain treasuries and compromise governance. Industry standards require multiple audits and comprehensive testing before mainnet deployment.",
    items: [
      {
        text: "Core DAO smart contract development",
        completed: true,
        detail:
          "Built modular, upgradeable contracts supporting multiple governance models",
      },
      {
        text: "Testing and internal audits",
        completed: true,
        detail: "Over 1,000+ test cases covering edge cases and attack vectors",
      },
      {
        text: "Professional security audit",
        completed: true,
        detail: "Third-party audit by leading blockchain security firms",
      },
      {
        text: "Governance mechanism design",
        completed: true,
        detail:
          "Flexible voting systems with quadratic, token-weighted, and snapshot options",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Community Growth & Awareness",
    status: "completed",
    icon: Users,
    gradient: "from-emerald-500 to-green-600",
    explanation:
      "A strong community is the backbone of any decentralized ecosystem. Early engagement and education ensure our users understand the tools and can actively participate in governance. We focused on building trust, transparency, and a shared vision before launching core features.",
    whyNecessary:
      "Decentralization without an engaged community is meaningless. DAOs require active participation—educated users make better governance decisions and create network effects that drive adoption and innovation.",
    items: [
      {
        text: "Community building and engagement",
        completed: true,
        detail:
          "Grew from 0 to 10,000+ members across Discord, Twitter, and Telegram",
      },
      {
        text: "Educational content and AMAs",
        completed: true,
        detail:
          "Weekly AMAs, tutorials, and documentation helping users understand Web3 governance",
      },
      {
        text: "Partnership discussions",
        completed: true,
        detail:
          "Strategic alignments with DeFi protocols, wallet providers, and infrastructure partners",
      },
      {
        text: "Early adopter program launch",
        completed: true,
        detail:
          "Incentivized testing program with rewards for active community contributors",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Beta Phase: DAO Creation & Testing",
    status: "active",
    icon: Rocket,
    gradient: "from-green-500 to-blue-600",
    explanation:
      "Real-world testing validates our platform before mainnet deployment. The beta phase allows us to gather critical user feedback, identify bugs, and refine the user experience. Using native tokens for fees during beta keeps costs low while we stress-test the infrastructure.",
    whyNecessary:
      "Launching directly to mainnet without beta testing risks catastrophic failures under real-world conditions. Beta testing reveals UX pain points, scalability issues, and edge cases that can't be caught in controlled environments.",
    items: [
      {
        text: "Launch beta mobile app",
        completed: true,
        detail: "iOS and Android apps with 500+ DAOs created in first month",
      },
      {
        text: "Enable DAO creation (native token fees)",
        completed: true,
        detail:
          "Low-cost testing using BASE native tokens before SYN token integration",
      },
      {
        text: "Test governance and voting mechanisms",
        completed: true,
        detail:
          "Over 1,200 proposals voted on across multiple governance models",
      },
      {
        text: "Community feedback collection",
        completed: false,
        detail:
          "Ongoing surveys, bug reports, and feature requests shaping final product",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Fundraising & Full DAO Deployment",
    status: "upcoming",
    icon: Coins,
    gradient: "from-blue-500 to-green-600",
    explanation:
      "Strategic fundraising enables ecosystem growth, liquidity provision, and long-term sustainability. Transitioning to SYN token fees establishes true decentralization, aligns platform incentives with community success, and creates a self-sustaining economic model.",
    whyNecessary:
      "Sustainable development requires capital for infrastructure, security, marketing, and team expansion. The SYN token transition shifts from subsidized beta to a mature tokenomic model where the platform's value accrues to token holders and DAO participants.",
    items: [
      {
        text: "Community presale execution",
        completed: false,
        detail:
          "Fair launch prioritizing early supporters and active community members",
      },
      {
        text: "Strategic partnerships finalization",
        completed: false,
        detail: "Integrations with leading DEXs, wallets, and DeFi protocols",
      },
      {
        text: "Alpha DAO & Community DAO mainnet deployment",
        completed: false,
        detail: "Launch flagship DAOs demonstrating governance best practices",
      },
      {
        text: "Transition to SYN token fees",
        completed: false,
        detail:
          "Platform fees in SYN tokens, with revenue distributed to stakeholders and treasury",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Ecosystem Expansion & Adoption",
    status: "upcoming",
    icon: Globe,
    gradient: "from-emerald-500 to-blue-600",
    explanation:
      "Expanding beyond basic DAO tools creates a comprehensive Web3 ecosystem where communities can build, fund, and scale autonomously. DeFi integrations enable treasuries to generate yield, token factories democratize asset creation, and launchpads provide funding infrastructure.",
    whyNecessary:
      "Standalone DAO tools aren't enough—communities need end-to-end infrastructure. By integrating DeFi, token creation, and fundraising, we eliminate the need for multiple platforms and reduce friction in the Web3 builder journey.",
    items: [
      {
        text: "Launch DeFi protocols (staking, liquidity)",
        completed: false,
        detail:
          "DAO treasuries can stake assets, provide liquidity, and earn yield automatically",
      },
      {
        text: "Token Factory release",
        completed: false,
        detail:
          "No-code tool for communities to launch governance or utility tokens in seconds",
      },
      {
        text: "Launchpad platform launch",
        completed: false,
        detail:
          "Decentralized fundraising platform for projects vetted by DAO governance",
      },
      {
        text: "Cross-chain expansion",
        completed: false,
        detail:
          "Support for Ethereum, Polygon, Arbitrum, Optimism, and other EVM chains",
      },
    ],
  },
  {
    phase: "Phase 6",
    title: "Global Scale & Innovation",
    status: "upcoming",
    icon: Zap,
    gradient: "from-blue-500 to-green-500",
    explanation:
      "Long-term success requires continuous innovation and global reach. SYSFI Lab drives research into advanced governance models, zero-knowledge proofs, and AI-assisted decision-making. Enterprise solutions bring Web3 tools to organizations worldwide, accelerating mass adoption.",
    whyNecessary:
      "Web3 must evolve beyond crypto-native communities to achieve mainstream adoption. Enterprise features, advanced governance, and global infrastructure position SYSFI as the standard for decentralized coordination across all sectors.",
    items: [
      {
        text: "Enterprise DAO solutions",
        completed: false,
        detail:
          "White-label DAO infrastructure for corporations, NGOs, and governments",
      },
      {
        text: "Advanced governance features",
        completed: false,
        detail:
          "Conviction voting, quadratic funding, reputation systems, and AI governance advisors",
      },
      {
        text: "Global community hubs",
        completed: false,
        detail:
          "Regional support, localization, and partnerships in emerging markets",
      },
      {
        text: "Continuous innovation via SYSFI Lab",
        completed: false,
        detail:
          "Open research on DAO scalability, privacy, and next-generation coordination mechanisms",
      },
    ],
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    icon: CheckCircle2,
    badgeBg: "from-green-500 to-emerald-600",
  },
  active: {
    label: "In Progress",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    icon: Clock,
    badgeBg: "from-blue-500 to-green-600",
  },
  upcoming: {
    label: "Upcoming",
    bg: "bg-zinc-900/50",
    border: "border-zinc-700/30",
    text: "text-gray-400",
    icon: Circle,
    badgeBg: "from-zinc-600 to-zinc-700",
  },
};

const Roadmap = () => {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="pt-20 bg-black">
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
                id="circuitRoadmap"
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuitRoadmap)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                Roadmap
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Our Journey to{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Decentralization
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              A community-driven roadmap that evolves based on user needs,
              funding availability, and technological advancements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 border-y border-green-500/20 bg-gradient-to-r from-transparent via-green-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {Object.entries(statusConfig).map(([key, config], index) => {
              const count = roadmapPhases.filter(
                (p) => p.status === key,
              ).length;
              const StatusIcon = config.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className={`w-10 h-10 ${config.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
                    }}
                  >
                    <StatusIcon className={`w-5 h-5 ${config.text}`} />
                  </div>
                  <span
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {count}
                  </span>
                  <span
                    className="text-gray-400"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {config.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-blue-500 opacity-30" />

            {roadmapPhases.map((phase, index) => {
              const config = statusConfig[phase.status];
              const isLeft = index % 2 === 0;
              const PhaseIcon = phase.icon;
              const StatusIcon = config.icon;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${phase.gradient} border-2 border-green-500/50 flex items-center justify-center backdrop-blur-sm relative`}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      }}
                    >
                      <PhaseIcon className="w-7 h-7 text-white" />

                      {/* Pulsing Ring */}
                      {phase.status === "active" && (
                        <motion.div
                          className="absolute inset-0 border-2 border-blue-400"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                          }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 0, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${isLeft ? "md:pr-8" : "md:pl-8"} group`}
                  >
                    <div
                      className={`bg-gradient-to-br from-zinc-900/90 to-black/90 border ${config.border} hover:border-green-500/50 p-6 lg:p-8 transition-all duration-500 relative overflow-hidden`}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                      }}
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Header */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                          <div
                            className={`px-4 py-1.5 bg-gradient-to-r ${config.badgeBg} text-white font-bold`}
                            style={{
                              clipPath:
                                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                              fontFamily: '"Orbitron", sans-serif',
                            }}
                          >
                            {phase.phase}
                          </div>
                          <div className="flex items-center gap-2">
                            <StatusIcon className={`w-4 h-4 ${config.text}`} />
                            <span
                              className={`text-sm ${config.text} uppercase tracking-wider`}
                              style={{ fontFamily: '"Space Mono", monospace' }}
                            >
                              {config.label}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3
                        className={`text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent relative z-10`}
                        style={{ fontFamily: '"Orbitron", sans-serif' }}
                      >
                        {phase.title}
                      </h3>

                      {/* Explanation */}
                      <div className="mb-6 relative z-10">
                        <p
                          className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4"
                          style={{ fontFamily: '"Space Mono", monospace' }}
                        >
                          {phase.explanation}
                        </p>

                        {/* Why Necessary */}
                        <div
                          className={`${config.bg} border ${config.border} p-4 mt-4`}
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                          }}
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <Info
                              className={`w-4 h-4 ${config.text} flex-shrink-0 mt-0.5`}
                            />
                            <span
                              className={`text-xs ${config.text} font-semibold uppercase tracking-wider`}
                              style={{ fontFamily: '"Space Mono", monospace' }}
                            >
                              Why This Matters
                            </span>
                          </div>
                          <p
                            className="text-gray-400 text-xs lg:text-sm leading-relaxed"
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            {phase.whyNecessary}
                          </p>
                        </div>
                      </div>

                      {/* Checklist */}
                      <ul className="space-y-3 relative z-10">
                        {phase.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="group/item"
                          >
                            <div className="flex items-start gap-3">
                              {item.completed ? (
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                              )}
                              <div className="flex-1">
                                <span
                                  className={
                                    item.completed
                                      ? "text-gray-300"
                                      : "text-gray-500"
                                  }
                                  style={{
                                    fontFamily: '"Space Mono", monospace',
                                  }}
                                >
                                  {item.text}
                                </span>
                                {item.detail && (
                                  <p
                                    className="text-gray-500 text-xs mt-1 italic"
                                    style={{
                                      fontFamily: '"Space Mono", monospace',
                                    }}
                                  >
                                    {item.detail}
                                  </p>
                                )}
                              </div>
                            </div>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Decorative Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`mt-6 h-1 bg-gradient-to-r ${phase.gradient} w-24 relative z-10`}
                      />

                      {/* Corner Accent */}
                      <div
                        className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                      />
                    </div>
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Driven Note */}
      <section className="py-20 bg-gradient-to-br from-zinc-950/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
              }}
            >
              <Users className="w-10 h-10 text-white" />
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              A Roadmap Built by the{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Community
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              SYSFI's roadmap is designed to evolve based on community
              involvement, funding availability, and technological advancements.
              The Beta Phase ensures early adopters can test and build within
              the ecosystem while we prepare for full SYN-based governance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href="https://t.me/sysfiDAO"
                  className="bg-green-500 hover:bg-green-600 text-black font-bold"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Join the Community
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  href="#"
                  className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  Suggest a Feature
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
