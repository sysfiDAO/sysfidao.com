import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import GradientText from '../ui/GradientText'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'DeFi Builder',
    avatar: 'AC',
    content: 'SYSFI made it incredibly easy to launch our community DAO. The voting mechanisms are powerful yet simple to configure.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'NFT Creator',
    avatar: 'SW',
    content: 'Finally, a Web3 app that feels like a native mobile experience. The wallet and NFT gallery are beautifully designed.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Community Lead',
    avatar: 'MJ',
    content: 'We migrated our entire community governance to SYSFI. The guild features replaced our Telegram groups completely.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Crypto Investor',
    avatar: 'ER',
    content: 'The non-custodial wallet gives me peace of mind. I can manage my portfolio and participate in DAOs all in one place.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Protocol Developer',
    avatar: 'DP',
    content: 'The technical implementation is solid. Smart contracts are audited and the multi-chain support is seamless.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'DAO Contributor',
    avatar: 'LT',
    content: 'Quadratic voting changed how our community makes decisions. Smaller holders finally have a real voice.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title={<>Loved by <GradientText>Web3 Builders</GradientText></>}
          description="See what our community has to say about building with SYSFI."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials