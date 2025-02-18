"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaChartLine,
  FaExternalLinkAlt,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

const projects = [
  {
    title: "Code Alpha",
    description:
      "Machine learning internship project focused on developing and implementing advanced ML solutions.",
    icon: FaBrain,
    tags: ["Machine Learning", "Python", "Data Science"],
    type: "Machine Learning Internship",
  },
  {
    title: "AI Furniture Designer",
    description:
      "Innovative system that generates custom furniture designs using LLMs based on customer descriptions and preferences.",
    icon: FaRobot,
    tags: ["Generative AI", "LLM", "Design"],
    type: "Generative AI",
  },
  {
    title: "AI Furniture Talker",
    description:
      "Fine-tuned LLM specifically trained to provide expert advice on custom furniture design and construction.",
    icon: FaRobot,
    tags: ["LLM", "Fine-tuning", "Consulting"],
    type: "AI Agent",
  },
  {
    title: "AI Career Counsellor",
    description:
      "A supervised learning-based model trained on diverse career data to recommend suitable career paths based on required skills and user preferences.",
    icon: FaChartLine,
    tags: ["Supervised Learning", "Career Prediction", "Machine Learning"],
    type: "Predictive Model",
  },

  {
    title: "Nutri Bot",
    description:
      "AI-powered nutrition assistant that provides personalized health and nutrition advice using advanced language models.",
    icon: FaRobot,
    tags: ["LLM", "AI Agent", "Healthcare"],
    type: "AI Agent",
  },
  {
    title: "MNIST Digit Detector",
    description:
      "Deep learning model trained on 20,000 MNIST images for accurate handwritten digit recognition.",
    icon: FaBrain,
    tags: ["Computer Vision", "Deep Learning", "PyTorch"],
    type: "Machine Learning",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative">
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
            className="text-gray-400 uppercase tracking-wider"
          >
            MY WORK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold mt-2 mb-16"
          >
            Projects<span className="text-gradient">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1A1A2E] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#2A2A3E] rounded-xl flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <span className="px-4 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#2A2A3E] text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
