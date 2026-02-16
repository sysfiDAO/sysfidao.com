import { motion } from 'framer-motion'

const PhoneMockup = ({ children, className = '', animate = true }) => {
  const Wrapper = animate ? motion.div : 'div'
  const wrapperProps = animate ? {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' }
  } : {}

  return (
    <Wrapper
      className={`relative ${className}`}
      {...wrapperProps}
    >
      {/* Phone Frame */}
      <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-emerald-500/20">
        {/* Inner bezel */}
        <div className="absolute inset-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-[2.5rem]" />
        
        {/* Screen */}
        <div className="relative h-full w-full bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
          
          {/* Screen Content */}
          <div className="h-full w-full">
            {children}
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute -right-1 top-32 w-1 h-12 bg-gray-700 rounded-l-lg" />
        <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-700 rounded-r-lg" />
        <div className="absolute -left-1 top-36 w-1 h-16 bg-gray-700 rounded-r-lg" />
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-[4rem] blur-3xl -z-10" />
    </Wrapper>
  )
}

export default PhoneMockup