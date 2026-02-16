import { motion } from 'framer-motion'
import { Vote, Users, Wallet, ArrowLeftRight, Image, MessageSquare } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import GradientText from '../ui/GradientText'

const features = [
  {
    icon: Vote,
    title: 'DAO Governance',
    description: 'Create and manage DAOs with powerful voting mechanisms, proposals, and treasury management.',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Guilds & Groups',
    description: 'Build communities with Telegram-like chat, channels, and collaborative tools.',
    color: 'cyan',
  },
  {
    icon: Wallet,
    title: 'Non-Custodial Wallet',
    description: 'Your keys, your crypto. Securely store, send, and receive tokens across chains.',
    color: 'purple',
  },
  {
    icon: ArrowLeftRight,
    title: 'Token Swap',
    description: 'Instantly swap tokens with the best rates across decentralized exchanges.',
    color: 'pink',
  },
  {
    icon: Image,
    title: 'NFT Gallery',
    description: 'View, manage, and trade your NFT collection directly from the app.',
    color: 'orange',
  },
  {
    icon: MessageSquare,
    title: 'Web3 Messaging',
    description: 'Encrypted, decentralized messaging for secure community communication.',
    color: 'blue',
  },
]

const colorVariants = {
  emerald: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20',
  purple: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20',
  pink: 'bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20',
  orange: 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20',
  blue: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20',
}

const FeaturesOverview = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Features"
          title={<>Everything You Need to <GradientText>Build Web3</GradientText></>}
          description="One app to create communities, govern together, manage assets, and connect with the decentralized world."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${colorVariants[feature.color]}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesOverview