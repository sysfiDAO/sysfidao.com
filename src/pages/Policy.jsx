import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  Eye,
  Database,
  Lock,
  Globe,
  UserX,
  AlertCircle,
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

const PrivacyPolicy = () => {
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
              <Shield className="w-4 h-4 text-green-400" />
              <span
                className="text-sm text-green-400 font-medium uppercase tracking-wider"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Your Privacy Matters
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Privacy <span className="text-green-400">Policy</span>
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
              At Sysfi Nexus, we are committed to protecting your privacy. This
              Privacy Policy explains our approach to data collection, usage,
              and protection.
            </p>
            <p
              className="text-green-400 font-semibold text-lg"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Core Principle: We DO NOT collect, store, or process personal user
              data.
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {/* Section 1: No Data Collection */}
            <AccordionItem
              title="1. No Data Collection Policy"
              icon={UserX}
              defaultOpen={true}
            >
              <h4 className="font-bold text-white mb-2 text-green-400">
                We Don't Collect Your Data
              </h4>
              <p className="text-lg">
                Sysfi Nexus operates on a strict no-data-collection policy. We
                have deliberately designed our platform to function without
                collecting, storing, or processing personal information.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                What We Do NOT Collect:
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal Information:</strong> No names, email
                  addresses, phone numbers, physical addresses, or government
                  IDs
                </li>
                <li>
                  <strong>Account Data:</strong> No usernames, passwords (except
                  locally encrypted), or account profiles
                </li>
                <li>
                  <strong>Financial Information:</strong> No credit card
                  details, bank accounts, or payment information
                </li>
                <li>
                  <strong>Identity Documents:</strong> No KYC (Know Your
                  Customer) documentation
                </li>
                <li>
                  <strong>Usage Analytics:</strong> No tracking of user
                  behavior, browsing patterns, or activity logs
                </li>
                <li>
                  <strong>Device Information:</strong> No device fingerprinting,
                  IP addresses, or technical identifiers
                </li>
                <li>
                  <strong>Location Data:</strong> No GPS coordinates or
                  geolocation tracking
                </li>
                <li>
                  <strong>Cookies:</strong> No tracking cookies or persistent
                  identifiers
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Why We Don't Collect Data:
              </h4>
              <p>
                Our commitment to privacy is fundamental to our decentralized
                philosophy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We believe in user sovereignty and self-custody</li>
                <li>We cannot be compelled to share data we don't have</li>
                <li>
                  We minimize security risks by not storing sensitive
                  information
                </li>
                <li>
                  We align with the principles of decentralization and privacy
                </li>
              </ul>

              <p className="mt-4 text-green-400 font-semibold">
                Result: We have no user database, no customer records, and no
                personal information files.
              </p>
            </AccordionItem>

            {/* Section 2: Blockchain Transparency */}
            <AccordionItem
              title="2. Blockchain Transparency & Public Data"
              icon={Globe}
            >
              <h4 className="font-bold text-white mb-2">
                How Blockchain Works
              </h4>
              <p>
                While Sysfi Nexus does not collect data, blockchain technology
                is inherently transparent. When you use our platform, certain
                information is publicly recorded on the blockchain.
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Publicly Visible Blockchain Data:
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Wallet Addresses:</strong> Your public wallet address
                  is visible when you perform transactions
                </li>
                <li>
                  <strong>Transaction History:</strong> All on-chain
                  transactions are permanently recorded and publicly viewable
                </li>
                <li>
                  <strong>Token Balances:</strong> Token holdings associated
                  with your wallet address are publicly visible
                </li>
                <li>
                  <strong>Smart Contract Interactions:</strong> Your
                  interactions with smart contracts are recorded on-chain
                </li>
                <li>
                  <strong>Timestamps:</strong> When transactions occur
                </li>
                <li>
                  <strong>Transaction Amounts:</strong> Values transferred in
                  transactions
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Important Distinctions:
              </h4>
              <p className="font-semibold">
                This blockchain data is NOT collected by Sysfi Nexus:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  It is generated and stored by the blockchain network itself
                </li>
                <li>It is public by design and accessible to anyone</li>
                <li>
                  It is not linked to your personal identity (unless you choose
                  to reveal it)
                </li>
                <li>Sysfi Nexus does not control, own, or manage this data</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Pseudonymity vs. Anonymity
              </h4>
              <p>
                Blockchain transactions are <strong>pseudonymous</strong>, not
                anonymous:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your wallet address acts as a pseudonym</li>
                <li>Transactions are traceable to wallet addresses</li>
                <li>
                  If you link your wallet to your identity (e.g., on exchanges),
                  your transactions may become identifiable
                </li>
                <li>
                  Blockchain analysis can potentially link addresses and
                  identify patterns
                </li>
              </ul>

              <p className="mt-4 text-yellow-400">
                Recommendation: If privacy is important to you, practice good
                operational security and avoid linking your wallet to personally
                identifiable information.
              </p>
            </AccordionItem>

            {/* Section 3: Local Storage */}
            <AccordionItem
              title="3. Local Storage & Non-Custodial Wallet"
              icon={Lock}
            >
              <h4 className="font-bold text-white mb-2">
                Local-Only Data Storage
              </h4>
              <p>
                Our non-custodial wallet stores certain information locally on
                your device:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Encrypted Wallet Data:</strong> Your wallet file is
                  encrypted and stored on your device
                </li>
                <li>
                  <strong>Password Hash:</strong> Your password is used for
                  local encryption only
                </li>
                <li>
                  <strong>Seed Phrase:</strong> Stored locally in encrypted
                  format (accessible in Settings)
                </li>
                <li>
                  <strong>Wallet Preferences:</strong> Settings and preferences
                  stored in your browser's local storage
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Critical Understanding:
              </h4>
              <p className="text-green-400 font-semibold">
                This data is stored ONLY on your device, NOT on our servers.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We never receive or access your encrypted wallet</li>
                <li>We never see or store your password</li>
                <li>
                  We never have access to your private keys or seed phrase
                </li>
                <li>
                  If you clear your browser data, you may lose access (backup
                  seed phrase required)
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Your Responsibility:
              </h4>
              <p>Because all wallet data is local:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must securely backup your seed phrase</li>
                <li>
                  You are responsible for protecting your device and password
                </li>
                <li>We cannot recover your wallet if you lose access</li>
                <li>
                  We cannot reset your password or retrieve your seed phrase
                </li>
              </ul>
            </AccordionItem>

            {/* Section 4: Third-Party Services */}
            <AccordionItem
              title="4. Third-Party Services & Integrations"
              icon={Eye}
            >
              <h4 className="font-bold text-white mb-2">External Services</h4>
              <p>
                Sysfi Nexus may integrate with or link to third-party services
                that have their own privacy policies:
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                Examples of Third-Party Services:
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Wallet Providers:</strong> If you use external wallets
                  (MetaMask, WalletConnect, etc.), their privacy policies apply
                </li>
                <li>
                  <strong>Blockchain Explorers:</strong> Public blockchain
                  explorers (Etherscan, etc.) have their own policies
                </li>
                <li>
                  <strong>RPC Providers:</strong> Node service providers may
                  collect connection data
                </li>
                <li>
                  <strong>IPFS Gateways:</strong> Decentralized storage
                  providers may log access
                </li>
                <li>
                  <strong>Social Links:</strong> If we link to social media,
                  those platforms have their own tracking
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">Our Position:</h4>
              <p>
                Sysfi Nexus is not responsible for third-party privacy
                practices:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not control what data third parties collect</li>
                <li>We encourage you to review third-party privacy policies</li>
                <li>Use third-party services at your own discretion</li>
                <li>
                  We select service providers that align with privacy principles
                  when possible
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                No Third-Party Data Sharing
              </h4>
              <p className="text-green-400 font-semibold">
                Since we don't collect data, we have no data to share with third
                parties.
              </p>
              <p>We will never:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell user data (we don't have any to sell)</li>
                <li>Share user information with advertisers</li>
                <li>Provide data to analytics companies</li>
                <li>
                  Disclose information to third parties (except as required by
                  law, if applicable)
                </li>
              </ul>
            </AccordionItem>

            {/* Section 5: Security */}
            <AccordionItem title="5. Security Measures" icon={Shield}>
              <h4 className="font-bold text-white mb-2">Platform Security</h4>
              <p>
                While we don't collect data, we still implement robust security
                measures to protect our platform and users:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Smart Contract Audits:</strong> Our contracts undergo
                  security reviews before deployment
                </li>
                <li>
                  <strong>Encryption:</strong> All wallet data is encrypted
                  locally using industry-standard algorithms
                </li>
                <li>
                  <strong>Secure Communication:</strong> HTTPS/TLS encryption
                  for all web traffic
                </li>
                <li>
                  <strong>No Centralized Database:</strong> No user database
                  means no database to hack
                </li>
                <li>
                  <strong>Open Source:</strong> Core smart contracts are open
                  source for community review
                </li>
                <li>
                  <strong>Bug Bounties:</strong> We maintain responsible
                  disclosure programs
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Your Security Responsibilities:
              </h4>
              <p>
                Because of our non-custodial approach, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keeping your device secure from malware and hackers</li>
                <li>Creating strong, unique passwords</li>
                <li>Protecting your seed phrase from theft or loss</li>
                <li>Not sharing passwords or seed phrases with anyone</li>
                <li>Being cautious of phishing attempts and scams</li>
                <li>Verifying you're on the official Sysfi Nexus website</li>
              </ul>

              <p className="mt-4 text-yellow-400 font-semibold">
                IMPORTANT: Sysfi Nexus team members will NEVER ask for your
                password, private keys, or seed phrase. If someone claims to be
                from Sysfi and requests this information, it is a scam.
              </p>
            </AccordionItem>

            {/* Section 6: International Users */}
            <AccordionItem
              title="6. International Users & Jurisdictions"
              icon={Globe}
            >
              <h4 className="font-bold text-white mb-2">Global Platform</h4>
              <p>
                Sysfi Nexus is accessible globally and operates as a
                decentralized platform without geographic restrictions (subject
                to local laws).
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                No Geographic Data Collection:
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not collect location data or IP addresses</li>
                <li>
                  We do not restrict access based on geography (unless legally
                  required)
                </li>
                <li>We do not maintain records of user locations</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Your Legal Obligations:
              </h4>
              <p>
                Users are responsible for compliance with laws in their
                jurisdiction:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cryptocurrency regulations vary by country</li>
                <li>
                  Some jurisdictions may restrict or prohibit cryptocurrency use
                </li>
                <li>
                  You must ensure your use of Sysfi Nexus complies with local
                  laws
                </li>
                <li>
                  We are not responsible for legal consequences in your
                  jurisdiction
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Data Protection Regulations:
              </h4>
              <p>Regarding GDPR, CCPA, and similar privacy laws:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Since we collect no personal data, most data protection
                  obligations do not apply
                </li>
                <li>
                  There is no data to access, delete, or port (as we don't
                  collect it)
                </li>
                <li>
                  Users inherently have control through wallet self-custody
                </li>
                <li>
                  Blockchain data is public and immutable by design, not
                  controlled by us
                </li>
              </ul>
            </AccordionItem>

            {/* Section 7: Children's Privacy */}
            <AccordionItem title="7. Children's Privacy" icon={AlertCircle}>
              <h4 className="font-bold text-white mb-2">Age Restrictions</h4>
              <p>
                Sysfi Nexus is not intended for use by individuals under the age
                of 18 (or the age of majority in your jurisdiction).
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                No Collection from Minors:
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not knowingly collect data from anyone under 18</li>
                <li>
                  Since we collect no data at all, we have no way to identify
                  underage users
                </li>
                <li>
                  Parents/guardians are responsible for monitoring their
                  children's internet use
                </li>
                <li>If you are under 18, do not use this platform</li>
              </ul>
            </AccordionItem>

            {/* Section 8: Legal Requests */}
            <AccordionItem title="8. Legal Requests & Compliance" icon={Shield}>
              <h4 className="font-bold text-white mb-2">Government Requests</h4>
              <p>
                In the event of legal requests from government authorities or
                law enforcement:
              </p>

              <h4 className="font-bold text-white mt-6 mb-2">
                What We Can Provide:
              </h4>
              <p className="text-green-400 font-semibold">
                Nothing — because we have no user data to provide.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not maintain user databases or logs</li>
                <li>
                  We cannot identify users or link wallet addresses to
                  individuals
                </li>
                <li>We do not have access to private keys or funds</li>
                <li>
                  We have no transaction records beyond what's public on the
                  blockchain
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Blockchain Data:
              </h4>
              <p>Law enforcement can access blockchain data directly:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All blockchain transactions are public and permanent</li>
                <li>Anyone (including authorities) can view blockchain data</li>
                <li>This data is not controlled or provided by Sysfi Nexus</li>
                <li>We have no special access or insider information</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Transparency Report:
              </h4>
              <p>If we ever receive legal requests, we commit to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Publishing transparency reports (when legally permissible)
                </li>
                <li>Contesting overly broad or unjustified requests</li>
                <li>Protecting user rights to the extent possible under law</li>
              </ul>
            </AccordionItem>

            {/* Section 9: Changes to Policy */}
            <AccordionItem
              title="9. Changes to This Privacy Policy"
              icon={Database}
            >
              <h4 className="font-bold text-white mb-2">Policy Updates</h4>
              <p>
                We may update this Privacy Policy from time to time to reflect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Changes in technology or platform features</li>
                <li>Changes in privacy best practices</li>
                <li>Legal or regulatory requirements</li>
                <li>Clarifications or improvements to policy language</li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                How We Notify You:
              </h4>
              <p>When we update this policy:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  We will update the "Last Updated" date at the top of this page
                </li>
                <li>
                  Material changes may be announced on our website or social
                  media
                </li>
                <li>
                  Your continued use constitutes acceptance of the updated
                  policy
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">
                Our Commitment:
              </h4>
              <p className="text-green-400 font-semibold">
                We will NEVER change our core principle: We will not start
                collecting personal data.
              </p>
              <p>
                Our commitment to privacy and non-collection is fundamental to
                Sysfi Nexus's philosophy and will not change.
              </p>
            </AccordionItem>

            {/* Section 10: Contact */}
            <AccordionItem title="10. Contact & Questions" icon={AlertCircle}>
              <h4 className="font-bold text-white mb-2">Privacy Questions</h4>
              <p>
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Website:</strong> https://sysfinexus.io
                </li>
                <li>
                  <strong>Email:</strong> privacy@sysfinexus.io
                </li>
                <li>
                  <strong>Community:</strong> Join our official Discord or
                  Telegram
                </li>
              </ul>

              <h4 className="font-bold text-white mt-6 mb-2">Data Requests:</h4>
              <p>If you wish to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access your data:</strong> We have none to provide
                </li>
                <li>
                  <strong>Delete your data:</strong> We have none to delete
                </li>
                <li>
                  <strong>Correct your data:</strong> We have none to correct
                </li>
                <li>
                  <strong>Port your data:</strong> All blockchain data is
                  already portable and public
                </li>
              </ul>
              <p className="mt-4">
                Your wallet and seed phrase are your data. You maintain complete
                control.
              </p>
            </AccordionItem>
          </div>

          {/* Summary Box */}
          <div className="mt-12 backdrop-blur-xl bg-green-500/10 border border-green-500/30 rounded-xl p-8">
            <h3
              className="text-xl font-bold mb-4 text-green-400"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Privacy Policy Summary
            </h3>
            <ul
              className="space-y-2 text-gray-300"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              <li>✓ We DO NOT collect personal data</li>
              <li>✓ We DO NOT store user information</li>
              <li>✓ We DO NOT track user activity</li>
              <li>✓ Your wallet is non-custodial (you control it)</li>
              <li>
                ✓ Blockchain data is public by design (not collected by us)
              </li>
              <li>✓ You are responsible for your security and privacy</li>
              <li>✓ Third-party services have their own privacy policies</li>
              <li>✓ We have no data to share, sell, or disclose</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
