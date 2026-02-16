const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

export default GradientText