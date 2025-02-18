'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRobot, FaBrain, FaPencilRuler } from 'react-icons/fa'

const WhyChooseMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const iconHoverVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="pt-0 pb-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {/* Main Feature Card - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            whileHover="hover"
            variants={cardHoverVariants}
            className="p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-[#4361EE] to-[#7209B7] text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/10 text-xs sm:text-sm mb-4 sm:mb-6">
              Why Choose Me
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              AI Engineering Excellence
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Building intelligent systems that shape the future of technology.
            </p>
          </motion.div>

          {/* Generative AI Card - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            whileHover="hover"
            variants={cardHoverVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4 sm:p-8 rounded-3xl bg-[#1A1A2E] text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              variants={iconHoverVariants}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A3E] rounded-xl flex items-center justify-center mb-4 sm:mb-6"
            >
              <FaPencilRuler className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Generative AI</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Creating cutting-edge generative models for text, images, and code. Expertise in diffusion models, GANs, and large language models.
            </p>
          </motion.div>

          {/* AI Agents Card - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            whileHover="hover"
            variants={cardHoverVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-4 sm:p-8 rounded-3xl bg-[#1A1A2E] text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              variants={iconHoverVariants}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A3E] rounded-xl flex items-center justify-center mb-4 sm:mb-6"
            >
              <FaRobot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI Agents</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Developing autonomous AI agents with advanced reasoning capabilities. Expert in LLMs, multi-agent systems, and cognitive architectures.
            </p>
          </motion.div>

          {/* Machine Learning Card - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            whileHover="hover"
            variants={cardHoverVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-4 sm:p-8 rounded-3xl bg-[#1A1A2E] text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              variants={iconHoverVariants}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A3E] rounded-xl flex items-center justify-center mb-4 sm:mb-6"
            >
              <FaBrain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Machine Learning & Deep Learning</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Expert in neural networks, transformers, and advanced ML architectures. Specializing in supervised, unsupervised, and reinforcement learning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseMe