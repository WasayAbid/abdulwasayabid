'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const text = "Abdul Wasay"
  const letters = Array.from(text)

  return (
    <section className="relative min-h-screen">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="text-center"
        >
          {/* Profile Image for Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-600/20">
                <img
                  src="/images/profile.jpg"
                  alt="Abdul Wasay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#4C1D95]">Hi</span>
              <span className="text-[#4C1D95]">,</span>
              <span className="text-[#4C1D95]">I'm</span>
            </div>
            <span className="inline-flex flex-wrap justify-center text-[#4C1D95]">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: 1.2,
            }}
            className="text-3xl font-bold text-[#8B5CF6] mb-6"
          >
            an aspiring AI engineer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-gray-400 text-base mb-8 px-4"
          >
            Passionate about exploring and developing cutting-edge AI solutions, with a focus on generative AI, machine learning, and autonomous systems.
          </motion.p>
          
          <motion.button
            className="gradient-purple text-white px-6 py-3 rounded-full font-medium inline-flex items-center space-x-2 hover:opacity-90 transition-opacity text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <span>Download CV</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center min-h-screen container mx-auto px-6">
        <div className="flex items-center justify-between gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="flex-1 text-left"
          >
            <h1 className="text-8xl font-bold mb-6">
              <div className="flex items-center justify-start gap-4">
                <span className="text-[#4C1D95]">Hi</span>
                <span className="text-[#4C1D95]">,</span>
                <span className="text-[#4C1D95]">I'm</span>
              </div>
              <span className="inline-flex flex-wrap justify-start text-[#4C1D95]">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    transition={{
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: 1.2,
              }}
              className="text-7xl font-bold text-[#8B5CF6] mb-16"
            >
              an aspiring AI engineer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-gray-400 text-2xl max-w-3xl mb-16"
            >
              Passionate about exploring and developing cutting-edge AI solutions, with a focus on generative AI, machine learning, and autonomous systems. Let's push the boundaries of artificial intelligence together!
            </motion.p>
            
            <motion.button
              className="gradient-purple text-white px-10 py-4 rounded-full font-medium inline-flex items-center space-x-2 hover:opacity-90 transition-opacity text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <span>Download CV</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1"
          >
            <div className="relative w-[500px] h-[500px]">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-600/20">
                <img
                  src="/images/profile.jpg"
                  alt="Abdul Wasay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero