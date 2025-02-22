"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHackerrank,
  FaTimes,
  FaExternalLinkAlt,
  FaBuilding,
} from "react-icons/fa";
import { SiCoursera, SiUdemy, SiMicrosoft } from "react-icons/si";
import { BsCloudCheck } from "react-icons/bs";
import { useState } from "react";

const certificates = [
  {
    id: "x",
    title: "Award for Best Performer DataScience Workshop",
    issuer: "GlowingSoft",
    date: "2024",
    icon: FaBuilding,
    image: "/images/dubai.jpg",
    description:
      "Recognized as the best performer in an intensive DataScience workshop.",
  },
  {
    id: "FJ4MD0DVQFH0",
    title: "Deep Learning and Reinforcment Learning Specialization",
    issuer: "Coursera",
    date: "2024",
    icon: SiCoursera,
    image: "/images/DL.png",
    description:
      "Comprehensive specialization covering neural networks, deep learning, CNN, RNN, and optimization algorithms.",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/FJ4MD0DVQFH0",
  },
  {
    id: "UC-26130733-1b5b-478a-aba4-6b5e4ec470f3",
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "2024",
    icon: SiUdemy,
    image: "/images/Udemy_certificate.png",
    description:
      "Comprehensive course covering all aspects of machine learning.",
  },
  {
    id: "MICROSOFT_CERT_ID",
    title: "Power Bi and Power Virtual Agents",
    issuer: "Microsoft",
    date: "2025",
    icon: SiMicrosoft,
    image: "/images/powerbi.png",
    description:
      "Learned Power BI fundamentals like dashboards, visualization, and data transformation. Built and deployed Microsoft Virtual Agents across multiple platforms.",

    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/30JCXQMN1I7J",
  },
  {
    id: "6E89B4C7A2F1",
    title: "SQL",
    issuer: "HackerRank",
    date: "2023",
    icon: FaHackerrank,
    image: "/images/sql.png",
    description:
      "Advanced certification in SQL covering complex queries and database optimization.",
  },
  {
    id: "PIAIC-AI-58924",
    title: "Certified Cloud Applied Generative AI Engineer",
    issuer: "PIAIC",
    date: "Ongoing",
    icon: BsCloudCheck,
    image: "/images/piaic.png",
    description:
      "Intensive program covering AI fundamentals and practical AI application development.",
  },
];

const CertificateModal = ({
  cert,
  onClose,
}: {
  cert: (typeof certificates)[0];
  onClose: () => void;
}) => {
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
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        >
          <FaTimes size={24} />
        </button>
        <img src={cert.image} alt={cert.title} className="w-full h-auto" />
      </motion.div>
    </motion.div>
  );
};

const CertificateCard = ({
  cert,
  index,
}: {
  cert: (typeof certificates)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-[#1A1A2E] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[4/3]">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-80" />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-[#2A2A3E] rounded-xl flex items-center justify-center">
              <cert.icon className="w-5 h-5 text-purple-500" />
            </div>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs">
              {cert.date}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-white">{cert.title}</h3>
          <p className="text-gray-400 mb-3 text-sm">Issued by {cert.issuer}</p>
          <p className="text-gray-500 text-xs leading-relaxed mb-3">
            {cert.description}
          </p>
          {cert.verifyLink ? (
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center text-purple-400 hover:text-purple-300 text-xs"
            >
              Verify Certificate <FaExternalLinkAlt className="ml-2 w-3 h-3" />
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
  );
};

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            className="block text-center text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider mb-2"
          >
            RECOGNIZED FOR MY ACHIEVEMENTS AND EXPERTISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 sm:mb-16 text-center"
          >
            Awards & Certifications<span className="text-gradient">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
