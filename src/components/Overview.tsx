'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Overview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="overview" className="py-10 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider"
          >
            INTRODUCTION
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4 sm:mb-6"
          >
            Overview<span className="text-gradient">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4"
          >
            <p>
              Specialized in AI development with expertise in Generative AI, Machine Learning, and AI Agents. Focused on creating intelligent systems that push the boundaries of artificial intelligence through innovative solutions and practical applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Overview