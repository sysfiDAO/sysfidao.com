import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '../ui/Button'
import PhoneMockup from '../ui/PhoneMockup'
import GradientText from '../ui/GradientText'

const AppShowcase = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DAO Creation Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
              DAO Creation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Launch Your DAO in <GradientText>60 Seconds</GradientText>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              No coding required. Set your governance parameters, choose your voting mechanism, and deploy your DAO on-chain with just a few taps.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Custom quorum and threshold settings',
                'Multiple voting mechanisms (Quadratic, Token-weighted, Snapshot)',
                'Built-in treasury management',
                'Multi-chain deployment support',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button to="/features">Learn More</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <PhoneMockup>
              <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-10">
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-white font-semibold text-lg">Create New DAO</h3>
                  <p className="text-gray-500 text-sm">Step 2 of 4</p>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`flex-1 h-1 rounded-full ${
                        step <= 2 ? 'bg-emerald-500' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Voting Mechanism</label>
                    <div className="bg-white/5 border border-emerald-500/50 rounded-xl p-3 flex items-center justify-between">
                      <span className="text-white">Quadratic Voting</span>
                      <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Quorum Required</label>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">51%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-full w-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Voting Period</label>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <span className="text-white">7 Days</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">DAO Category</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['DeFi', 'NFT', 'Social'].map((cat) => (
                        <div
                          key={cat}
                          className={`py-2 rounded-lg text-center text-sm ${
                            cat === 'DeFi'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                              : 'bg-white/5 text-gray-400 border border-white/10'
                          }`}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="absolute bottom-8 left-4 right-4">
                  <div className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-center text-white font-semibold">
                    Continue
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>

        {/* Wallet Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <div className="h-full w-full bg-gradient-to-b from-[#0f1118] to-[#0a0a0f] p-4 pt-10">
                {/* Wallet Header */}
                <div className="flex items-center justify-between mb-6 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full" />
                    <div>
                      <p className="text-white font-medium">Main Wallet</p>
                      <p className="text-gray-500 text-sm">0x7a3...f92</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white/5 rounded-lg" />
                </div>

                {/* Balance */}
                <div className="text-center mb-6">
                  <p className="text-gray-500 text-sm">Total Balance</p>
                  <p className="text-4xl font-bold text-white mt-1">$24,892</p>
                  <p className="text-emerald-400 text-sm mt-1">+$1,234.56 (5.2%)</p>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-6 mb-6">
                  {['Send', 'Receive', 'Buy'].map((action) => (
                    <div key={action} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg" />
                      </div>
                      <span className="text-gray-400 text-sm">{action}</span>
                    </div>
                  ))}
                </div>

                {/* Tokens */}
                <div>
                  <p className="text-white font-medium mb-3">Tokens</p>
                  <div className="space-y-3">
                    {[
                      { name: 'Ethereum', symbol: 'ETH', balance: '4.2', value: '$15,234', color: 'from-blue-400 to-purple-400' },
                      { name: 'SYN Token', symbol: 'SYN', balance: '12,500', value: '$8,750', color: 'from-emerald-400 to-cyan-400' },
                      { name: 'USDC', symbol: 'USDC', balance: '908', value: '$908', color: 'from-blue-400 to-blue-500' },
                    ].map((token) => (
                      <div key={token.symbol} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${token.color} rounded-full`} />
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{token.name}</p>
                          <p className="text-gray-500 text-xs">{token.balance} {token.symbol}</p>
                        </div>
                        <p className="text-white text-sm">{token.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
              Wallet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Crypto, <GradientText>Your Control</GradientText>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              A beautiful, secure non-custodial wallet built right in. Manage multiple chains, track your portfolio, and transact with confidence.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Non-custodial — you hold your keys',
                'Multi-chain support (Ethereum, Polygon, BSC, and more)',
                'Real-time portfolio tracking',
                'Built-in swap with best rates',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button to="/features">Explore Wallet Features</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase