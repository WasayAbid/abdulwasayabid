'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHackerrank, FaTimes, FaExternalLinkAlt, FaBuilding } from 'react-icons/fa'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import { BsCloudCheck } from 'react-icons/bs'
import { useState } from 'react'

const certificates = [
  {
    id: "FJ4MD0DVQFH0",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    icon: SiCoursera,
    image: "/images/DL.png",
    description: "Comprehensive specialization covering neural networks, deep learning, CNN, RNN, and optimization algorithms. Completed hands-on projects in computer vision and sequence modeling.",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/FJ4MD0DVQFH0"
  },
  {
    id: "x",
    title: "Award for Best Performer DataScience Workshop",
    issuer: "GlowingSoft",
    date: "2023",
    icon: FaBuilding,
    image: "/images/dubai.jpg",
    description: "Recognized as the best performer in an intensive DataScience workshop, demonstrating exceptional skills in data analysis, machine learning, and practical implementation of data science concepts."
  },
  {
    id: "UC-26130733-1b5b-478a-aba4-6b5e4ec470f3",
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "2023",
    icon: SiUdemy,
    image: "/images/Udemy_certificate.png",
    description: "Comprehensive course covering all aspects of machine learning including regression, classification, clustering, and reinforcement learning with practical implementations."
  },
  {
    id: "6E89B4C7A2F1",
    title: "SQL",
    issuer: "HackerRank",
    date: "2023",
    icon: FaHackerrank,
    image: "/images/sql.png",
    description: "Advanced certification in SQL covering complex queries, database optimization, window functions, and advanced data manipulation techniques."
  },
  {
    id: "PIAIC-AI-58924",
    title: "Certified Cloud Applied Generative AI Engineer",
    issuer: "PIAIC",
    date: "2023",
    icon: BsCloudCheck,
    image: "/images/piaic.png",
    description: "Intensive program covering AI fundamentals, machine learning, deep learning, and practical AI application development. Focused on real-world AI solutions and industry best practices."
  }
]

const CertificateModal = ({ cert, onClose }: { cert: typeof certificates[0], onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl w-full bg-[#1A1A2E] rounded-3xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        >
          <FaTimes size={24} />
        </button>
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  )
}

const CertificateCard = ({ cert, index }: { cert: typeof certificates[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-[#1A1A2E] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-video">
          <img 
            src={cert.image} 
            alt={cert.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-80" />
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A2A3E] rounded-xl flex items-center justify-center">
              <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
            </div>
            <span className="px-3 py-1 sm:px-4 sm:py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs sm:text-sm">
              {cert.date}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">{cert.title}</h3>
          <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">Issued by {cert.issuer}</p>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{cert.description}</p>
          {cert.verifyLink ? (
            <a 
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-purple-400 hover:text-purple-300 text-xs sm:text-sm"
            >
              Verify Certificate <FaExternalLinkAlt className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          ) : (
            <p className="text-gray-600 text-xs">Certificate ID: {cert.id}</p>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <CertificateModal cert={cert} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certificates" className="py-10 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider"
          >
            RECOGNIZED FOR MY ACHIEVEMENTS AND EXPERTISE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 sm:mb-16"
          >
            Awards & Certifications<span className="text-gradient">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates