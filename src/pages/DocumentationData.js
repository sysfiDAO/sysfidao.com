import {
  Rocket,
  Vote,
  Settings,
  FileText,
  CheckCircle,
  Upload,
  Coins,
  Clock,
  Users,
  Shield,
  Gift,
  Calendar,
  TrendingUp,
  Flame,
  ExternalLink,
} from "lucide-react";

// Documentation structure - Easy to add new sections and topics
export const documentationData = {
  sections: [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Rocket,
      topics: [
        {
          id: "launch-dao",
          title: "How to Launch Your DAO",
          icon: Rocket,
          content: {
            introduction:
              "Learn how to create and deploy your own Decentralized Autonomous Organization (DAO) or Decentralized Autonomous Community on the Sysfi Nexus platform.",
            sections: [
              {
                title: "Step 1: Basic Information",
                icon: FileText,
                steps: [
                  {
                    label: "Enter DAO Name",
                    description:
                      "Choose a unique and memorable name for your Decentralized Autonomous Organization or Community. This name will represent your organization across the Sysfi ecosystem.",
                  },
                  {
                    label: "Select Blockchain Network",
                    description:
                      "Choose from our list of supported blockchain networks where you want your DAO to be deployed. Different chains offer different benefits in terms of speed, cost, and ecosystem compatibility.",
                  },
                  {
                    label: "Upload Banner Image",
                    description:
                      "Upload a high-quality banner image that represents your DAO's identity and mission. Recommended dimensions: 1200x400 pixels. Supported formats: JPG, PNG, WebP.",
                  },
                ],
                action:
                  'Once all fields are filled, click "Next" to proceed to governance configuration.',
              },
              {
                title: "Step 2: Governance Configuration",
                icon: Settings,
                steps: [
                  {
                    label: "Quorum",
                    description:
                      "Quorum is the minimum percentage of total voting power that must participate in a vote for it to be valid. For example, if quorum is set to 20%, at least 20% of all governance token holders must vote for the proposal to pass or fail. This prevents decisions being made by a very small minority.",
                    tip: "Recommended: 10-30% for most DAOs",
                  },
                  {
                    label: "Voting Delay",
                    description:
                      "Voting Delay is the waiting period between when a proposal is created and when voting can begin. This gives community members time to review the proposal, discuss it, and prepare their decision before casting votes.",
                    tip: "Recommended: 1-3 days",
                  },
                  {
                    label: "Voting Period",
                    description:
                      "Voting Period is the duration during which community members can cast their votes on a proposal. After this period ends, no more votes can be submitted and the results are tallied. Longer periods allow more participation but slow down decision-making.",
                    tip: "Recommended: 3-7 days",
                  },
                  {
                    label: "Governance Token",
                    description:
                      "The Governance Token is the cryptocurrency that grants voting power in your DAO. Token holders can vote on proposals, and their voting power is usually proportional to the amount of tokens they hold. You can either create a new token or use an existing one.",
                    tip: "Ensure fair initial distribution to avoid centralization",
                  },
                ],
                action: "Review all settings carefully before proceeding.",
              },
              {
                title: "Step 3: Deployment",
                icon: CheckCircle,
                steps: [
                  {
                    label: "Pay DAO Creation Fee",
                    description:
                      "A small fee is required to deploy your DAO smart contracts to the blockchain. This fee covers the gas costs and platform services. The exact amount depends on the network you selected and current network conditions.",
                  },
                  {
                    label: "Deploy Your DAO",
                    description:
                      'Click "Deploy" to launch your DAO on the selected blockchain network. The smart contracts will be deployed, and your DAO will become fully operational. This process typically takes 1-3 minutes depending on network congestion.',
                  },
                ],
                action:
                  "Once deployed, you'll receive your DAO's unique address and dashboard access.",
              },
            ],
            summary:
              "Congratulations! Your DAO is now live on the blockchain. You can start creating proposals, inviting members, and building your decentralized community.",
          },
        },
        {
          id: "how-to-vote",
          title: "How to Vote in a DAO",
          icon: Vote,
          content: {
            introduction:
              "Participating in DAO governance is simple and transparent. Follow these steps to cast your vote on proposals.",
            sections: [
              {
                title: "Voting Process",
                icon: Vote,
                steps: [
                  {
                    label: "Select Your DAO",
                    description:
                      "Click on the DAO you wish to participate in from your dashboard. You'll be taken to the DAO's main page where you can see all active and past proposals.",
                  },
                  {
                    label: "Verify Token Holdings",
                    description:
                      "Make sure you hold the governance token associated with this DAO. Your voting power is determined by the amount of governance tokens you hold at the time the proposal was created (snapshot block). You can check your token balance in your wallet or on the DAO dashboard.",
                  },
                  {
                    label: "Navigate to Active Proposals",
                    description:
                      'Go to the "Active Proposals" section to see all proposals currently open for voting. Each proposal will show its description, voting deadline, current vote tally, and quorum status.',
                  },
                  {
                    label: "Cast Your Vote",
                    description:
                      "Choose your voting preference for each proposal:",
                    options: [
                      {
                        value: "Vote For",
                        description:
                          "Support the proposal - you believe it should be implemented",
                      },
                      {
                        value: "Vote Against",
                        description:
                          "Oppose the proposal - you believe it should not be implemented",
                      },
                      {
                        value: "Abstain",
                        description:
                          "Participate in quorum without supporting or opposing - useful when you want to help reach quorum but are neutral on the outcome",
                      },
                    ],
                  },
                  {
                    label: "Confirm Transaction",
                    description:
                      "Confirm the voting transaction in your wallet. Your vote will be recorded on-chain and cannot be changed once submitted. A small gas fee may apply depending on the network.",
                  },
                ],
                action:
                  "Your vote has been recorded! You can view the updated vote tally on the proposal page.",
              },
            ],
            summary:
              "You've successfully participated in DAO governance. Your voice has been heard, and you're contributing to decentralized decision-making!",
          },
        },
      ],
    },
    // Airdrop Section
    {
      id: "airdrop",
      title: "Airdrop Program",
      icon: Gift,
      topics: [
        {
          id: "airdrop-overview",
          title: "Airdrop Overview & Timeline",
          icon: Gift,
          content: {
            introduction:
              "The Sysfi Airdrop Program is designed to reward early supporters, contributors, and community members. Learn about the extended timeline and what comes next.",
            sections: [
              {
                title: "Program Timeline",
                icon: Calendar,
                steps: [
                  {
                    label: "Original Plan: 12 Months",
                    description:
                      "The airdrop was initially planned to run for 12 months (one year) to distribute tokens to early participants and community members who contribute to the Sysfi ecosystem.",
                  },
                  {
                    label: "Extended to 18 Months",
                    description:
                      "Due to current market conditions and the lack of liquidity providers and venture capital (VC) support, we have extended the airdrop period to 18 months. This extension allows more time for community growth and ensures fair distribution during challenging market conditions.",
                    tip: "The extension gives you more time to participate and accumulate rewards!",
                  },
                  {
                    label: "Why the Extension?",
                    description:
                      "The crypto market has faced significant headwinds, and securing partnerships with VCs and liquidity providers has taken longer than anticipated. Rather than rushing to market, we chose to extend the airdrop to build a stronger foundation and ensure long-term sustainability for all participants.",
                  },
                ],
                action:
                  "The 18-month airdrop period provides ample opportunity to earn tokens and prepare for the upcoming Token Generation Event (TGE).",
              },
              {
                title: "After the Airdrop Period",
                icon: TrendingUp,
                steps: [
                  {
                    label: "Airdrop Conclusion",
                    description:
                      "After 18 months, the airdrop distribution period will officially end. No new claims will be processed after this date, so make sure to claim your tokens before the deadline.",
                  },
                  {
                    label: "Unclaimed Token Burn",
                    description:
                      "Any unclaimed or unallocated tokens remaining after the 18-month period will be permanently burned. This deflationary mechanism reduces total supply and increases scarcity, potentially benefiting all token holders.",
                    tip: "Claim your tokens early to avoid missing out!",
                  },
                  {
                    label: "Token Generation Event (TGE)",
                    description:
                      "Following the airdrop conclusion, we will proceed with the Token Generation Event (TGE). This is when the Sysfi token officially launches and becomes tradeable on exchanges. All claimed airdrop tokens will be distributed according to the vesting schedule.",
                  },
                  {
                    label: "Exchange Listings",
                    description:
                      "Post-TGE, the Sysfi token will be listed on decentralized exchanges (DEX) and potentially centralized exchanges (CEX). This provides liquidity and enables easy trading for all token holders.",
                  },
                  {
                    label: "Strategic Partnerships",
                    description:
                      "We are actively working on partnerships with venture capital firms (VCs), liquidity providers, and DEX aggregators. These partnerships will ensure deep liquidity, smooth trading experiences, and easy token swaps across multiple platforms.",
                    tip: "Partnerships will make buying, selling, and swapping Sysfi tokens seamless",
                  },
                ],
                action:
                  "Stay engaged with the community for announcements about TGE dates, listing schedules, and partnership reveals.",
              },
            ],
            summary:
              "The extended 18-month airdrop period gives our community more time to participate while we build strategic partnerships. After completion, unclaimed tokens will be burned, and we'll move forward with TGE, listings, and ecosystem expansion.",
          },
        },
        {
          id: "how-to-claim-airdrop",
          title: "How to Claim Your Airdrop",
          icon: Coins,
          content: {
            introduction:
              "Claiming your Sysfi airdrop tokens is simple and straightforward. Follow these steps to check your eligibility and receive your rewards.",
            sections: [
              {
                title: "Check Eligibility",
                icon: CheckCircle,
                steps: [
                  {
                    label: "Connect Your Wallet",
                    description:
                      "Visit the Sysfi Airdrop Portal and connect the wallet you used to participate in Sysfi activities. Make sure you're using the same wallet address that accumulated airdrop points.",
                    tip: "If you used multiple wallets, check each one separately",
                  },
                  {
                    label: "View Your Allocation",
                    description:
                      "Once connected, the portal will display your total airdrop allocation based on your participation, contributions, and community engagement. You'll see a breakdown of how points were earned (governance participation, DAO creation, liquidity provision, etc.).",
                  },
                  {
                    label: "Verify Details",
                    description:
                      "Review your allocation details carefully. If you believe there's an error, contact support through our official channels with proof of your contributions.",
                  },
                ],
                action:
                  "If you're eligible, proceed to the claiming process. If not, you still have time during the 18-month period to participate and earn tokens!",
              },
              {
                title: "Claim Your Tokens",
                icon: Gift,
                steps: [
                  {
                    label: "Navigate to Claim Section",
                    description:
                      'On the Airdrop Portal, locate the "Claim Tokens" button. This will show your available tokens ready to be claimed.',
                  },
                  {
                    label: "Review Vesting Schedule",
                    description:
                      "Some airdrop allocations may have vesting schedules, meaning tokens are released gradually over time. Review your vesting terms to understand when all tokens will be fully unlocked.",
                    tip: "Vesting prevents sudden sell pressure and promotes long-term holding",
                  },
                  {
                    label: "Initiate Claim",
                    description:
                      'Click "Claim Tokens" to start the claiming process. A wallet transaction will be triggered to transfer the tokens to your address.',
                  },
                  {
                    label: "Confirm Transaction",
                    description:
                      "Confirm the transaction in your wallet. You'll need to pay a small gas fee (network transaction fee) to process the claim. The amount varies based on network congestion.",
                    tip: "Claim during off-peak hours to save on gas fees",
                  },
                  {
                    label: "Receive Tokens",
                    description:
                      "Once the transaction is confirmed, your Sysfi tokens will appear in your wallet. You can view them by adding the Sysfi token contract address to your wallet.",
                  },
                ],
                action:
                  "Congratulations! Your tokens are now in your wallet. You can hold them, use them for governance, or prepare for trading post-TGE.",
              },
              {
                title: "Important Dates & Deadlines",
                icon: Clock,
                steps: [
                  {
                    label: "18-Month Claim Window",
                    description:
                      "You have 18 months from the airdrop launch date to claim your tokens. Mark your calendar and set reminders to avoid missing the deadline.",
                  },
                  {
                    label: "Final Claim Deadline",
                    description:
                      "After the 18-month period ends, claiming will be permanently disabled. Any unclaimed tokens will be burned and cannot be recovered.",
                    tip: "Claim early to avoid last-minute network congestion or technical issues",
                  },
                  {
                    label: "TGE Announcement",
                    description:
                      "The Token Generation Event date will be announced at least 60 days before launch. Follow our official channels (Discord, Twitter, Telegram) for updates.",
                  },
                ],
                action:
                  "Don't wait until the last minute! Claim your tokens as soon as you're eligible to ensure you don't miss out.",
              },
            ],
            summary:
              "Claiming is easy: connect your wallet, check eligibility, and claim your tokens. Remember the 18-month deadline—unclaimed tokens will be burned forever!",
          },
        },
        {
          id: "airdrop-eligibility",
          title: "How to Earn Airdrop Points",
          icon: TrendingUp,
          content: {
            introduction:
              "Airdrop allocations are determined by your contributions to the Sysfi ecosystem. The more you participate, the more tokens you can earn.",
            sections: [
              {
                title: "Ways to Earn Points",
                icon: Coins,
                steps: [
                  {
                    label: "Create a DAO",
                    description:
                      "Launch your own Decentralized Autonomous Organization or Community on Sysfi Nexus. Each DAO creation earns you airdrop points based on the DAO's activity and success.",
                    tip: "Active DAOs with more members earn bonus multipliers",
                  },
                  {
                    label: "Participate in Governance",
                    description:
                      "Vote on proposals in DAOs you're a member of. Consistent voting shows commitment and earns you regular airdrop rewards. The more DAOs you participate in, the more points you accumulate.",
                  },
                  {
                    label: "Contribute to ContriFi Meta",
                    description:
                      "Build utilities, create content, or provide services to the Sysfi ecosystem through ContriFi Meta. Validated contributions earn substantial airdrop allocations.",
                  },
                  {
                    label: "Provide Liquidity (Future)",
                    description:
                      "Once liquidity pools are available, providing liquidity for Sysfi token pairs will earn you additional airdrop points and trading fees.",
                    tip: "Early liquidity providers often receive bonus allocations",
                  },
                  {
                    label: "Community Engagement",
                    description:
                      "Active participation in Discord, Twitter, and community events can earn you bonus points. Help grow the community by referring friends and creating valuable content.",
                  },
                ],
                action:
                  "The more ways you contribute, the higher your airdrop allocation. Diversify your participation across multiple activities!",
              },
              {
                title: "Point System Transparency",
                icon: Shield,
                steps: [
                  {
                    label: "On-Chain Tracking",
                    description:
                      "All airdrop points are tracked on-chain through smart contracts. You can verify your points at any time through the Airdrop Portal or blockchain explorers.",
                  },
                  {
                    label: "Leaderboard",
                    description:
                      "Check the public leaderboard to see top contributors and compare your ranking. This gamification element encourages healthy competition and community growth.",
                    tip: "Leaderboard updates daily with real-time point calculations",
                  },
                  {
                    label: "Fair Distribution",
                    description:
                      "Anti-Sybil mechanisms prevent gaming the system with multiple wallets. Each contribution is validated to ensure genuine participation and prevent abuse.",
                  },
                ],
                action:
                  "Stay active, contribute meaningfully, and watch your airdrop allocation grow throughout the 18-month period!",
              },
            ],
            summary:
              "Earning airdrop points is about genuine participation—create DAOs, vote on proposals, contribute through ContriFi Meta, and engage with the community. Your impact determines your rewards!",
          },
        },
      ],
    },
    // Template for future sections - easy to add more
    {
      id: "advanced",
      title: "Advanced Features",
      icon: Settings,
      topics: [
        // Add more topics here as features are released
        // Example:
        // {
        //   id: 'create-proposal',
        //   title: 'How to Create a Proposal',
        //   icon: FileText,
        //   content: { ... }
        // }
      ],
    },
    {
      id: "reference",
      title: "Reference",
      icon: FileText,
      topics: [
        // Add reference documentation here
        // Example:
        // {
        //   id: 'glossary',
        //   title: 'Glossary',
        //   icon: FileText,
        //   content: { ... }
        // }
      ],
    },
  ],
};

// Helper function to get all topics across all sections
export const getAllTopics = () => {
  return documentationData.sections.reduce((acc, section) => {
    return [
      ...acc,
      ...section.topics.map((topic) => ({
        ...topic,
        sectionId: section.id,
        sectionTitle: section.title,
      })),
    ];
  }, []);
};

// Helper function to get a specific topic by ID
export const getTopicById = (topicId) => {
  const allTopics = getAllTopics();
  return allTopics.find((topic) => topic.id === topicId);
};

// Helper function to get topics by section
export const getTopicsBySection = (sectionId) => {
  const section = documentationData.sections.find((s) => s.id === sectionId);
  return section ? section.topics : [];
};
