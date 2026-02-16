import { motion } from 'framer-motion'
import GradientText from './GradientText'

const SectionHeader = ({ label, title, description, center = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {typeof title === 'string' ? title : title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader