import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Vote,
  Users,
  Wallet,
  ArrowLeftRight,
  Image,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Settings,
  Bell,
  Lock,
  Check,
  ChevronRight,
  Download,
  Sparkles,
} from "lucide-react";
import GradientText from "../components/ui/GradientText";
import PhoneMockup from "../components/ui/PhoneMockup";
import Button from "../components/ui/Button";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";

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

const mainFeatures = [
  {
    id: "dao",
    icon: Vote,
    title: "DAO Governance",
    subtitle: "Decentralized Decision Making",
    description:
      "Create and manage DAOs with powerful on-chain governance. Set custom voting parameters, manage treasuries, and execute proposals automatically.",
    gradient: "from-green-500 to-emerald-600",
    features: [
      "Multiple voting mechanisms (Quadratic, Token-weighted, Snapshot)",
      "Customizable quorum and threshold settings",
      "Automated proposal execution via smart contracts",
      "Built-in treasury management",
      "Delegate voting power to trusted members",
      "Cooling periods to prevent rushed decisions",
    ],
    screen: "dao",
  },
  {
    id: "guilds",
    icon: Users,
    title: "Guilds & Groups",
    subtitle: "Community Communication",
    description:
      "Build thriving communities with Telegram-like chat functionality. Create public or private guilds, channels, and coordinate with your members.",
    gradient: "from-emerald-500 to-blue-600",
    features: [
      "Public and private guild creation",
      "Channel-based organization",
      "Role-based permissions",
      "File and media sharing",
      "Threaded conversations",
      "Push notifications",
    ],
    screen: "guilds",
  },
  {
    id: "wallet",
    icon: Wallet,
    title: "Non-Custodial Wallet",
    subtitle: "Your Keys, Your Crypto",
    description:
      "A secure, self-custody wallet built right into the app. Manage multiple chains, track your portfolio, and transact with confidence.",
    gradient: "from-blue-500 to-green-600",
    features: [
      "Full self-custody — you control your keys",
      "Multi-chain support (ETH, Polygon, BSC, Arbitrum, etc.)",
      "Real-time portfolio tracking",
      "Transaction history and analytics",
      "Biometric authentication",
      "Backup and recovery options",
    ],
    screen: "wallet",
  },
  {
    id: "swap",
    icon: ArrowLeftRight,
    title: "Token Swap",
    subtitle: "Best Rates, Instant Trades",
    description:
      "Swap tokens instantly with aggregated liquidity from top DEXs. Get the best rates with minimal slippage.",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "DEX aggregation for best rates",
      "Cross-chain swaps",
      "Minimal slippage protection",
      "Gas estimation and optimization",
      "Price alerts and notifications",
      "Swap history and analytics",
    ],
    screen: "swap",
  },
  {
    id: "nft",
    icon: Image,
    title: "NFT Gallery",
    subtitle: "Collect and Showcase",
    description:
      "View, manage, and trade your NFT collection. Showcase your digital art and collectibles in a beautiful gallery.",
    gradient: "from-emerald-500 to-green-500",
    features: [
      "Multi-chain NFT support",
      "Gallery view and organization",
      "NFT metadata and attributes",
      "Direct marketplace integration",
      "Collection analytics",
      "Share and showcase features",
    ],
    screen: "nft",
  },
  {
    id: "messaging",
    icon: MessageSquare,
    title: "Web3 Messaging",
    subtitle: "Secure Communication",
    description:
      "End-to-end encrypted messaging for secure community communication. Connect wallet-to-wallet without intermediaries.",
    gradient: "from-blue-500 to-green-500",
    features: [
      "End-to-end encryption",
      "Wallet-to-wallet messaging",
      "No phone number required",
      "Message requests and spam protection",
      "Group messaging",
      "File and media sharing",
    ],
    screen: "messaging",
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Audited Smart Contracts",
    description: "All contracts audited by leading security firms.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed across all features.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Globe,
    title: "Multi-Chain",
    description: "Support for all major EVM chains.",
    gradient: "from-green-500 to-blue-500",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Tailor every aspect to your needs.",
    gradient: "from-blue-500 to-green-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay updated on what matters.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays yours.",
    gradient: "from-emerald-500 to-blue-600",
  },
];

const FeatureScreen = ({ type, gradient }) => {
  const screens = {
    dao: (
      <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-12">
        <div className="text-center mb-4">
          <h3
            className="text-white font-semibold"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            Active Proposals
          </h3>
        </div>
        <div className="space-y-3">
          {[
            {
              title: "Treasury Allocation Q1",
              votes: "234",
              status: "Active",
              time: "2d left",
            },
            {
              title: "New Feature: Staking V2",
              votes: "189",
              status: "Active",
              time: "5d left",
            },
            {
              title: "Partnership: Protocol X",
              votes: "412",
              status: "Passed",
              time: "Executed",
            },
          ].map((proposal, i) => (
            <div
              key={i}
              className="bg-white/5 p-4"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <p
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {proposal.title}
                </p>
                <span
                  className={`text-xs px-2 py-1 ${proposal.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
                  }}
                >
                  {proposal.status}
                </span>
              </div>
              <div
                className="flex items-center justify-between text-xs text-gray-500"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                <span>{proposal.votes} votes</span>
                <span>{proposal.time}</span>
              </div>
              <div
                className="mt-2 h-1.5 bg-white/10 overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
                }}
              >
                <div
                  className={`h-full bg-gradient-to-r ${gradient}`}
                  style={{ width: `${60 + i * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    guilds: (
      <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-12">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 bg-gradient-to-br ${gradient}`}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
            }}
          />
          <div>
            <p
              className="text-white font-semibold"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              DeFi Builders Guild
            </p>
            <p
              className="text-gray-500 text-xs"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              2,431 members • 12 online
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            {
              user: "Alex",
              message: "Just deployed the new staking contract! 🚀",
              time: "2m",
            },
            {
              user: "Sarah",
              message: "Amazing work! Whats the APY looking like?",
              time: "1m",
            },
            {
              user: "Marcus",
              message: "Testing now, results in 10 mins",
              time: "now",
            },
          ].map((msg, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex-shrink-0" />
              <div
                className="bg-white/5 p-3 flex-1"
                style={{
                  clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {msg.user}
                  </span>
                  <span
                    className="text-gray-600 text-xs"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {msg.time}
                  </span>
                </div>
                <p
                  className="text-gray-300 text-sm"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    wallet: (
      <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-12">
        <div className="text-center mb-6">
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            Total Balance
          </p>
          <p
            className="text-3xl font-bold text-white mt-1"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            $24,892.50
          </p>
          <p
            className="text-green-400 text-sm mt-1"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            +$1,234 (5.2%)
          </p>
        </div>
        <div className="space-y-2">
          {[
            {
              name: "ETH",
              balance: "4.2",
              value: "$15,234",
              gradient: "from-blue-400 to-blue-600",
            },
            {
              name: "SYN",
              balance: "12,500",
              value: "$8,750",
              gradient: "from-green-400 to-emerald-600",
            },
            {
              name: "USDC",
              balance: "908",
              value: "$908",
              gradient: "from-emerald-400 to-green-600",
            },
          ].map((token, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/5 p-3"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className={`w-10 h-10 bg-gradient-to-br ${token.gradient}`}
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
                  {token.name}
                </p>
                <p
                  className="text-gray-500 text-xs"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {token.balance}
                </p>
              </div>
              <p
                className="text-white text-sm"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                {token.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
    swap: (
      <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-12">
        <h3
          className="text-white font-semibold text-center mb-6"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          Swap Tokens
        </h3>
        <div
          className="bg-white/5 p-4 mb-2"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
          }}
        >
          <p
            className="text-gray-500 text-xs mb-2"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            From
          </p>
          <div className="flex items-center justify-between">
            <input
              className="bg-transparent text-2xl text-white w-24 outline-none"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
              value="1.5"
              readOnly
            />
            <div
              className="flex items-center gap-2 bg-white/10 px-3 py-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
              }}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full" />
              <span
                className="text-white"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                ETH
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <div
            className="w-10 h-10 bg-white/10 flex items-center justify-center"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}
          >
            <ArrowLeftRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div
          className="bg-white/5 p-4 mb-4"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
          }}
        >
          <p
            className="text-gray-500 text-xs mb-2"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            To
          </p>
          <div className="flex items-center justify-between">
            <input
              className="bg-transparent text-2xl text-white w-24 outline-none"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
              value="4,521"
              readOnly
            />
            <div
              className="flex items-center gap-2 bg-white/10 px-3 py-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
              }}
            >
              <div className="w-6 h-6 bg-green-500 rounded-full" />
              <span
                className="text-white"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                SYN
              </span>
            </div>
          </div>
        </div>
        <div
          className="bg-green-500/10 border border-green-500/20 p-3 text-center"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
          }}
        >
          <p
            className="text-green-400 text-sm"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            Best rate via Uniswap V3
          </p>
        </div>
      </div>
    ),
    nft: (
      <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-12">
        <h3
          className="text-white font-semibold mb-4"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          My Collection
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-2"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${gradient}`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                }}
              />
            </div>
          ))}
        </div>
        <div
          className="mt-4 flex items-center justify-between text-sm"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          <span className="text-gray-400">12 NFTs</span>
          <span className="text-white">Floor: 0.5 ETH</span>
        </div>
      </div>
    ),
    messaging: (
      <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-12">
        <h3
          className="text-white font-semibold mb-4"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          Messages
        </h3>
        <div className="space-y-3">
          {[
            {
              name: "vitalik.eth",
              message: "Thanks for the proposal!",
              time: "2m",
              unread: true,
            },
            {
              name: "0x7a3...f92",
              message: "Sent you 100 SYN",
              time: "1h",
              unread: false,
            },
            {
              name: "sarah.eth",
              message: "Meeting tomorrow?",
              time: "3h",
              unread: false,
            },
          ].map((chat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/5 p-3"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-full`}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {chat.name}
                  </p>
                  <span
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {chat.time}
                  </span>
                </div>
                <p
                  className="text-gray-400 text-sm truncate"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {chat.message}
                </p>
              </div>
              {chat.unread && (
                <div className="w-2 h-2 bg-green-400 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return screens[type] || screens.dao;
};

const Features = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={sectionRef} className="pt-50 bg-black">
      <Hero />
      <HowItWorks />

      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        </div>

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="hexFeatures"
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
            <rect width="100%" height="100%" fill="url(#hexFeatures)" />
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
              <Sparkles className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Features
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              <ScrambleText text="Everything You Need for" delay={0} />{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                <ScrambleText text="Web3" delay={400} />
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              SYSFI combines powerful DAO tools, a secure wallet, and social
              features into one seamless mobile experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      {mainFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-20 md:py-32 relative ${index % 2 === 1 ? "bg-gradient-to-br from-zinc-950/50 to-black" : "bg-black"}`}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div
                className={`absolute ${index % 2 === 0 ? "top-1/4 left-1/4" : "bottom-1/4 right-1/4"} w-96 h-96 bg-green-500/20 rounded-full blur-[128px]`}
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 mb-6"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Icon className="w-4 h-4 text-green-400" />
                    <span
                      className="text-sm font-medium text-green-400 uppercase tracking-wider"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {feature.subtitle}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h2
                    className="text-3xl md:text-5xl font-bold mb-4"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    <span
                      className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </span>
                  </h2>

                  {/* Description */}
                  <p
                    className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed"
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {feature.features.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className="w-6 h-6 bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/30 transition-colors"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)",
                          }}
                        >
                          <ChevronRight className="w-4 h-4 text-green-400" />
                        </div>
                        <span
                          className="text-gray-300 text-sm md:text-base"
                          style={{ fontFamily: '"Space Mono", monospace' }}
                        >
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`h-1 bg-gradient-to-r ${feature.gradient} w-32`}
                  />
                </motion.div>

                {/* Phone Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex justify-center relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="relative">
                    <PhoneMockup>
                      <FeatureScreen
                        type={feature.screen}
                        gradient={feature.gradient}
                      />
                    </PhoneMockup>

                    {/* Glowing Orb */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={`absolute -z-10 ${index % 2 === 0 ? "-top-20 -right-20" : "-bottom-20 -left-20"} w-64 h-64 bg-green-500/20 rounded-full blur-3xl`}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Features Grid */}
      <section className="py-20 md:py-32 relative bg-gradient-to-br from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[128px]" />
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
              <Shield className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                And More
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Built for{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Security & Speed
              </span>
            </h2>

            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Every feature is designed with security, performance, and user
              experience in mind.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-zinc-900/90 to-black/90 border border-green-500/20 hover:border-green-500/50 p-6 transition-all duration-500"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} bg-opacity-20 flex items-center justify-center mb-4`}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                      }}
                    >
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>

                    <h3
                      className="text-lg font-semibold text-white mb-2"
                      style={{ fontFamily: '"Orbitron", sans-serif' }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="text-gray-400 text-sm"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
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

      {/* CTA */}
      <section className="py-20 md:py-32 relative bg-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                SYSFI
              </span>
              ?
            </h2>

            <p
              className="text-gray-400 text-lg md:text-xl mb-8"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Download the app and start building your Web3 community today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  href="https://play.google.com/store/apps/details?id=com.sysfiprotocol.nexussysfi&pcampaignid=web_share"
                  className="bg-green-500 hover:bg-green-600 text-black font-bold"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-2 border-green-500/50 text-green-400 hover:bg-green-500/10"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  Explore Ecosystem
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
