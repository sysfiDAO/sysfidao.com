const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050508]">
      {/* Static gradient orbs - no animation, just CSS */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-[120px] will-change-transform" />
      <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] rounded-full bg-purple-500/15 blur-[120px] will-change-transform" />
      <div className="absolute bottom-[5%] left-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/15 blur-[120px] will-change-transform" />

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),transparent)]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,8,0.5)_100%)]" />
    </div>
  )
}

export default Background