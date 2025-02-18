'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a passionate Full Stack Developer and DevOps Engineer with extensive experience in building and deploying web applications. My journey in technology started with a deep curiosity about how things work on the internet, which led me to pursue a career in software development.
            </p>
            
            <p>
              With expertise in modern web technologies and cloud infrastructure, I help businesses create scalable and efficient solutions. I'm particularly interested in cloud-native applications, containerization, and automation.
            </p>
            
            <p>
              When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About