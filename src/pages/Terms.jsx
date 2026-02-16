import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  Code,
  Wallet,
  AlertTriangle,
  FileText,
  CheckCircle,
} from "lucide-react";

const AccordionItem = ({
  title,
  children,
  icon: Icon,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden backdrop-blur-xl bg-white/5 mb-4 hover:border-green-500/30 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-green-400" />
            </div>
          )}
          <h3
            className="text-lg md:text-xl font-bold text-white"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            {title}
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-green-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-6 pb-6 text-gray-300 leading-relaxed space-y-4"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 rounded-lg mb-6">
              <FileText className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Legal Agreement
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Terms of <span className="text-green-400">Use</span>
            </h1>

            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Last Updated: February 14, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <p
              className="text-gray-300 leading-relaxed mb-4"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Welcome to Sysfi Nexus. By accessing or using our platform, you
              agree to be bound by these Terms of Use. Please read them
              carefully before using our services.
            </p>
            <p
              className="text-gray-300 leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Sysfi Nexus is a decentralized platform that provides blockchain
              infrastructure, tools, and services. Your use of our platform
              constitutes acceptance of these terms.
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {/* Section 1: Acceptance of Terms */}
            <AccordionItem
              title="1. Acceptance of Terms"
              icon={CheckCircle}
              defaultOpen={true}
            >
              <p>
                By accessing, browsing, or using the Sysfi Nexus platform
                (including the website, applications, smart contracts, and
                related services), you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Use and all
                applicable laws and regulations.
              </p>
              <p>
                If you do not agree with any part of these terms, you must not
                use our platform. We reserve the right to update, modify, or
                change these terms at any time without prior notice. Your
                continued use of the platform after any such changes constitutes
                acceptance of the new terms.
              </p>
              <p className="font-semibold text-green-400">
                You must be at least 18 years of age or the age of majority in
                your jurisdiction to use our services.
              </p>
            </AccordionItem>

            {/* Section 2: Smart Contract Security */}
            <AccordionItem
              title="2. Smart Contract Security & Testing"
              icon={Code}
            >
              <h4 className="font-bold text-white mb-2">
                Smart Contract Development
              </h4>
              <p>
                All smart contracts deployed on the Sysfi Nexus platform are
                rigorously tested within Sysfi Labs before being launched
                on-chain. Our development process includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comprehensive internal auditing and testing procedures</li>
                <li>Security reviews by our technical team</li>
                <li>Deployment on test networks before mainnet launch</li>
                <li>Continuous monitoring and improvement protocols</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Security Measures
              </h4>
              <p>
                We implement industry-standard security practices to ensure the
                integrity and safety of our smart contracts. However, blockchain
                technology and smart contracts carry inherent risks that users
                must acknowledge and accept.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Third-Party Projects Disclaimer
              </h4>
              <p className="text-yellow-400 font-semibold">
                IMPORTANT: While we ensure the security of Sysfi Nexus core
                smart contracts, we CANNOT and DO NOT guarantee the security,
                legitimacy, or performance of third-party projects or tokens
                that use our platform to launch their projects.
              </p>
              <p>
                Sysfi Nexus provides infrastructure and tools. Each project
                launching on our platform is independently developed and managed
                by third parties. Users must conduct their own due diligence
                before interacting with any third-party project.
              </p>
            </AccordionItem>

            {/* Section 3: Rug Pull Prevention */}
            <AccordionItem
              title="3. Rug Pull Prevention & Platform Limitations"
              icon={Shield}
            >
              <h4 className="font-bold text-white mb-2">
                Our Prevention Efforts
              </h4>
              <p>
                Sysfi Nexus implements multiple mechanisms designed to prevent
                approximately 90% of common rug pull scenarios, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Liquidity lock requirements for project launches</li>
                <li>Time-lock mechanisms on critical contract functions</li>
                <li>Transparency requirements for project teams</li>
                <li>Automated verification of contract code</li>
                <li>Community reporting and flagging systems</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Limitations of Control
              </h4>
              <p className="text-yellow-400 font-semibold">
                CRITICAL DISCLAIMER: While we implement preventive measures, we
                DO NOT and CANNOT control the decisions or actions of
                third-party project teams.
              </p>
              <p>
                Project teams retain autonomous control over their projects,
                smart contracts, and community decisions. Sysfi Nexus cannot
                prevent all malicious activities, market manipulation, or poor
                project management by third parties.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                User Responsibility
              </h4>
              <p>Users are solely responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Conducting thorough research before investing in any project
                </li>
                <li>Assessing the risks associated with each project</li>
                <li>
                  Understanding that all cryptocurrency investments carry risk
                  of total loss
                </li>
                <li>
                  Making informed decisions based on available information
                </li>
              </ul>
              <p className="font-semibold text-red-400 mt-4">
                NEVER INVEST MORE THAN YOU CAN AFFORD TO LOSE.
              </p>
            </AccordionItem>

            {/* Section 4: Open Platform */}
            <AccordionItem
              title="4. Open Platform & Non-Discrimination"
              icon={FileText}
            >
              <p>
                Sysfi Nexus operates as an <strong>open-to-all platform</strong>
                . We do not discriminate based on geography, identity, or
                project type (subject to legal compliance). Any individual or
                team may use our infrastructure to launch projects, subject to
                these Terms of Use.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Platform Neutrality
              </h4>
              <p>As an open platform, we:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Do not endorse or recommend specific projects</li>
                <li>
                  Do not guarantee the success or legitimacy of any project
                </li>
                <li>
                  Provide infrastructure without bias or preferential treatment
                </li>
                <li>
                  Allow market forces and community governance to determine
                  outcomes
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Prohibited Activities
              </h4>
              <p>While open, our platform prohibits:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Illegal activities or projects that violate applicable laws
                </li>
                <li>Projects designed to defraud users</li>
                <li>
                  Malicious smart contracts intended to harm users or the
                  network
                </li>
                <li>Spam, phishing, or other malicious activities</li>
                <li>Activities that violate intellectual property rights</li>
              </ul>
            </AccordionItem>

            {/* Section 5: Data Privacy */}
            <AccordionItem title="5. Data Collection & Privacy" icon={Shield}>
              <h4 className="font-bold text-white mb-2">
                No Data Collection Policy
              </h4>
              <p className="text-green-400 font-semibold">
                Sysfi Nexus DOES NOT collect, store, or process personal user
                data.
              </p>
              <p>Our platform operates on the following privacy principles:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>No Personal Information:</strong> We do not collect
                  names, email addresses, phone numbers, or other personal
                  identifiers
                </li>
                <li>
                  <strong>No User Tracking:</strong> We do not track user
                  behavior, browsing patterns, or usage analytics
                </li>
                <li>
                  <strong>No Data Storage:</strong> We do not maintain databases
                  of user information
                </li>
                <li>
                  <strong>Blockchain Transparency:</strong> All interactions
                  occur on-chain and are publicly visible on the blockchain
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Wallet Address Information
              </h4>
              <p>
                When you connect your wallet to interact with our platform, your
                wallet address becomes visible on the public blockchain. This is
                inherent to blockchain technology and is not data collection by
                Sysfi Nexus.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Third-Party Services
              </h4>
              <p>
                If you use third-party services integrated with our platform
                (such as wallet providers), those services may have their own
                data collection policies. We are not responsible for third-party
                privacy practices.
              </p>
            </AccordionItem>

            {/* Section 6: Non-Custodial Wallet */}
            <AccordionItem title="6. Non-Custodial Wallet" icon={Wallet}>
              <h4 className="font-bold text-white mb-2">Wallet Overview</h4>
              <p>
                Sysfi Nexus provides a <strong>non-custodial wallet</strong> as
                part of its platform. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  You maintain complete control and ownership of your wallet
                </li>
                <li>
                  Your private keys are encrypted and stored locally on your
                  device
                </li>
                <li>
                  Sysfi Nexus NEVER has access to your private keys or seed
                  phrase
                </li>
                <li>We cannot move, freeze, or access your funds</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2 text-red-400">
                CRITICAL: Password & Seed Phrase Responsibility
              </h4>
              <p className="text-yellow-400 font-semibold">
                IF YOU FORGET YOUR PASSWORD, WE CANNOT HELP YOU RECOVER YOUR
                WALLET.
              </p>
              <p>
                Because your wallet is encrypted using your password and we do
                not store passwords or private keys:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lost passwords mean permanent loss of wallet access</li>
                <li>There is NO password recovery mechanism</li>
                <li>
                  There is NO customer support that can restore your wallet
                </li>
                <li>You are solely responsible for securing your password</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Backup Your Wallet
              </h4>
              <p className="text-green-400 font-semibold">
                You MUST back up your wallet using the seed phrase provided
                during registration.
              </p>
              <p>To backup your wallet:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Access your wallet by unlocking it with your password</li>
                <li>Navigate to the Settings page within the platform</li>
                <li>Locate and copy your 12-24 word seed phrase</li>
                <li>
                  Store the seed phrase securely offline (paper, metal backup,
                  etc.)
                </li>
                <li>NEVER share your seed phrase with anyone</li>
                <li>NEVER store your seed phrase digitally or online</li>
              </ol>

              <h4 className="font-bold text-white mt-6 mb-2">
                Wallet Recovery
              </h4>
              <p>
                Your seed phrase is the ONLY way to recover your wallet if you
                forget your password or lose access to your device. Keep it safe
                and private.
              </p>
              <p className="text-red-400 font-semibold mt-4">
                WARNING: Anyone with access to your seed phrase can access and
                steal all your funds. Never share it with anyone, including
                Sysfi Nexus team members (who will never ask for it).
              </p>
            </AccordionItem>

            {/* Section 7: SYN Token - Utility Not Investment */}
            <AccordionItem
              title="7. SYN Token — Utility, Not Investment"
              icon={AlertTriangle}
            >
              <h4 className="font-bold text-white mb-2 text-yellow-400">
                IMPORTANT: NOT A FINANCIAL INVESTMENT
              </h4>
              <p className="text-lg font-semibold">
                The SYN token is a UTILITY TOKEN and is NOT an investment
                scheme, security, or financial instrument.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Utility Purpose
              </h4>
              <p>
                SYN is designed solely for utility purposes within the Sysfi
                ecosystem:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Platform Fees:</strong> Payment for transaction fees
                  and platform services
                </li>
                <li>
                  <strong>DAO Launches:</strong> Required for creating and
                  participating in Decentralized Autonomous Organizations
                </li>
                <li>
                  <strong>Token Launches:</strong> Facilitates launching new
                  tokens on the platform
                </li>
                <li>
                  <strong>Governance:</strong> Participation in ecosystem
                  governance and voting
                </li>
                <li>
                  <strong>Staking:</strong> Securing the network and earning
                  rewards (utility-based, not investment returns)
                </li>
                <li>
                  <strong>Access Rights:</strong> Unlocking premium features and
                  platform capabilities
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                No Investment Guarantees
              </h4>
              <p className="text-red-400 font-semibold">
                WE MAKE NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES REGARDING:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Future value or price appreciation of SYN tokens</li>
                <li>Potential returns or profits from holding SYN</li>
                <li>SYN as an investment opportunity</li>
                <li>
                  Any expectation of profit derived from the efforts of others
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Token Valuation Disclaimer
              </h4>
              <p>
                The market value of SYN tokens is determined by supply and
                demand in open markets. Sysfi Nexus:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Does NOT guarantee any specific token value</li>
                <li>Cannot and will not manipulate token prices</li>
                <li>
                  Is not responsible for market volatility or price fluctuations
                </li>
                <li>Makes no promises regarding future token performance</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Regulatory Compliance
              </h4>
              <p>
                SYN tokens are designed and intended as utility tokens, not
                securities. However:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Regulatory treatment may vary by jurisdiction</li>
                <li>You are responsible for compliance with local laws</li>
                <li>
                  You should consult legal and tax professionals regarding your
                  obligations
                </li>
                <li>
                  Purchase and use of SYN tokens may have tax implications
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Risk Acknowledgment
              </h4>
              <p className="font-semibold">
                By acquiring or using SYN tokens, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are purchasing utility, not an investment</li>
                <li>Token value may decrease to zero</li>
                <li>There is no guarantee of liquidity or marketability</li>
                <li>You may lose your entire purchase amount</li>
                <li>
                  Cryptocurrency markets are highly volatile and unpredictable
                </li>
              </ul>
            </AccordionItem>

            {/* Section 8: Risk Disclosure */}
            <AccordionItem title="8. Risk Disclosure" icon={AlertTriangle}>
              <h4 className="font-bold text-white mb-2">
                Blockchain & Cryptocurrency Risks
              </h4>
              <p>
                Using Sysfi Nexus and interacting with blockchain technology
                involves significant risks:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Loss of Funds:</strong> Transactions are irreversible;
                  lost or stolen funds cannot be recovered
                </li>
                <li>
                  <strong>Smart Contract Bugs:</strong> Despite testing, smart
                  contracts may contain vulnerabilities
                </li>
                <li>
                  <strong>Network Risks:</strong> Blockchain networks may
                  experience congestion, forks, or attacks
                </li>
                <li>
                  <strong>Regulatory Changes:</strong> Laws governing
                  cryptocurrency may change without notice
                </li>
                <li>
                  <strong>Market Volatility:</strong> Token values can fluctuate
                  dramatically
                </li>
                <li>
                  <strong>Technology Risks:</strong> Blockchain technology is
                  complex and constantly evolving
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                User Responsibility
              </h4>
              <p className="font-semibold">
                You acknowledge and accept full responsibility for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All transactions you initiate</li>
                <li>Security of your wallet, passwords, and seed phrases</li>
                <li>Understanding the risks before participating</li>
                <li>Your own investment research and due diligence</li>
                <li>Compliance with applicable laws in your jurisdiction</li>
              </ul>
            </AccordionItem>

            {/* Section 9: Liability Limitation */}
            <AccordionItem title="9. Limitation of Liability" icon={Shield}>
              <p className="text-yellow-400 font-semibold mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <p>
                Sysfi Nexus, its developers, team members, affiliates, and
                service providers SHALL NOT BE LIABLE for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of funds, tokens, or digital assets</li>
                <li>Damages resulting from third-party projects or tokens</li>
                <li>
                  Smart contract failures or exploits (third-party or our own)
                </li>
                <li>Network downtime or service interruptions</li>
                <li>Unauthorized access to your wallet or accounts</li>
                <li>Market losses or investment losses</li>
                <li>Regulatory action or legal consequences</li>
                <li>
                  Any indirect, incidental, special, or consequential damages
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Service "As Is"
              </h4>
              <p>
                The platform is provided "AS IS" and "AS AVAILABLE" without
                warranties of any kind, either express or implied, including but
                not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </AccordionItem>

            {/* Section 10: Modifications */}
            <AccordionItem
              title="10. Modifications & Termination"
              icon={FileText}
            >
              <h4 className="font-bold text-white mb-2">Platform Changes</h4>
              <p>We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Modify, suspend, or discontinue any part of the platform at
                  any time
                </li>
                <li>Update these Terms of Use without prior notice</li>
                <li>Change fees, features, or functionality</li>
                <li>Implement new requirements or restrictions</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Your Continued Use
              </h4>
              <p>
                Your continued use of the platform after any modifications
                constitutes acceptance of the updated terms.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">Termination</h4>
              <p>
                You may stop using the platform at any time. We may restrict or
                terminate your access if you violate these terms or engage in
                prohibited activities.
              </p>
            </AccordionItem>

            {/* Section 11: Governing Law */}
            <AccordionItem title="11. Governing Law & Disputes" icon={FileText}>
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with applicable international laws and regulations
                governing blockchain technology and decentralized platforms.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Dispute Resolution
              </h4>
              <p>
                Any disputes arising from these terms or your use of the
                platform should first be addressed through good-faith
                negotiation. If resolution cannot be reached, disputes may be
                subject to arbitration or legal proceedings in accordance with
                applicable law.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">Severability</h4>
              <p>
                If any provision of these terms is found to be invalid or
                unenforceable, the remaining provisions shall continue in full
                force and effect.
              </p>
            </AccordionItem>

            {/* Section 12: Contact */}
            <AccordionItem title="12. Contact Information" icon={FileText}>
              <p>
                For questions, concerns, or inquiries regarding these Terms of
                Use, please contact us through our official channels:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Website:</strong> https://sysfinexus.io
                </li>
                <li>
                  <strong>Email:</strong> legal@sysfinexus.io
                </li>
                <li>
                  <strong>Community:</strong> Join our official Discord or
                  Telegram
                </li>
              </ul>
              <p className="mt-4 text-yellow-400">
                IMPORTANT: Official team members will NEVER ask for your seed
                phrase, private keys, or passwords. Beware of impersonators.
              </p>
            </AccordionItem>
          </div>

          {/* Agreement Acknowledgment */}
          <div className="mt-12 backdrop-blur-xl bg-green-500/10 border border-green-500/30 rounded-xl p-8">
            <h3
              className="text-xl font-bold mb-4 text-green-400"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              By Using This Platform, You Acknowledge:
            </h3>
            <ul
              className="space-y-2 text-gray-300"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              <li>✓ You have read and understood these Terms of Use</li>
              <li>✓ You agree to be bound by these terms</li>
              <li>✓ You understand the risks of blockchain technology</li>
              <li>✓ SYN is a utility token, not an investment</li>
              <li>✓ You are responsible for your wallet security</li>
              <li>✓ We do not collect or store your personal data</li>
              <li>✓ You use the platform at your own risk</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
