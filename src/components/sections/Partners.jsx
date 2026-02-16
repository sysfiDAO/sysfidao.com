import { motion } from 'framer-motion'
import Matic from '../../assets/pol.png'
import Eth from '../../assets/eth.png'
import Avax from '../../assets/avax.png'
import base from '../../assets/base.png'
import BNB from '../../assets/bnb.png'
import Arb from '../../assets/arb.png'

const partners = [
//   { name: 'Ethereum', logo: 'ETH' },
  { name: 'Polygon', logo: Matic },
  { name: 'BNB Chain', logo: BNB },
  { name: 'Arbitrum', logo: Arb },
//   { name: 'Optimism', logo: 'OP' },
  { name: 'Base', logo: base },
    { name: 'Avalaunche', logo: Avax },
]

const Partners = () => {
  return (
    <section className="py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          Supported Networks & Integration Partners
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <img src={partner.logo} className="w-10 h-10  rounded-lg flex items-center justify-center text-sm font-bold"/>
              <span className="font-medium hidden sm:block">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners