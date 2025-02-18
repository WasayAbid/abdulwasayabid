'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-gray-300 mb-12">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a
              href="mailto:jahanzaib.tayyab@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <FaEnvelope className="text-3xl text-primary mb-4" />
              <span className="text-gray-300">Email</span>
              <span className="text-sm text-gray-400">jahanzaib.tayyab@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/jahanzaibtariq/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <FaLinkedin className="text-3xl text-primary mb-4" />
              <span className="text-gray-300">LinkedIn</span>
              <span className="text-sm text-gray-400">Connect with me</span>
            </motion.a>
            
            <motion.a
              href="https://twitter.com/jahanzaibtariq_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <FaTwitter className="text-3xl text-primary mb-4" />
              <span className="text-gray-300">Twitter</span>
              <span className="text-sm text-gray-400">Follow me</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact