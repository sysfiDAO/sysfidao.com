import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../../assets/background.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const videoRef = useRef(null);

  const rotatingWords = ["SYSFI", "Decentralized Community"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Lazy load video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const source = video.querySelector("source");
            if (source && source.dataset.src) {
              source.src = source.dataset.src;
              video.load();
              observer.unobserve(video);
            }
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Typing animation logic
  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
          } else {
            setDisplayText(displayText.slice(0, -1));
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10 md:via-black/70" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-0 transition-opacity duration-1000 data-[loaded=true]:opacity-40 md:left-[60%]"
          data-loaded={videoLoaded}
        >
          <source data-src={Background} type="video/mp4" />
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl pt-10 mt-10">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h1 className="text-white font-light mb-4">
                <span
                  className="block text-3xl md:text-5xl lg:text-6xl tracking-tight mb-2"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  WELCOME TO
                </span>

                {/* Typing Text */}
                <span className="block relative">
                  <span
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="inline-block w-1 h-14 md:h-18 lg:h-20 ml-2 bg-green-500 align-middle"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-12"
            >
              <p
                className="text-gray-300 text-xl md:text-3xl lg:text-4xl font-light tracking-wide"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                Launch your{" "}
                <span className="text-green-400 font-medium">DAO</span>
                <span className="text-gray-500">/</span>
                <span className="text-green-400 font-medium">DAC</span> in{" "}
                <span className="relative inline-block">
                  <span className="text-green-400 font-bold text-4xl md:text-5xl">
                    60
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-green-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>{" "}
                seconds
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={`/sysfi/nexus`}>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-green-500 text-black font-bold text-lg tracking-wide uppercase relative overflow-hidden group"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  <span className="relative z-10">Get Started</span>

                  <motion.div
                    className="absolute inset-0 bg-green-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link to={`/about`}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold text-lg tracking-wide uppercase hover:bg-green-500/10 transition-colors"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center gap-4"
            >
              <div className="h-px bg-gradient-to-r from-green-500 to-transparent w-24" />
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
