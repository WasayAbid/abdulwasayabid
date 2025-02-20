"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  type: string;
  period: string;
  image: string;
  link?: string; // Optional link for the project
};

const projects: Project[] = [
  {
    title: "Code Alpha",
    description:
      "Machine learning internship project focused on developing and implementing advanced ML solutions.",
    tags: ["Machine Learning", "Python", "Data Science"],
    type: "Machine Learning Internship",
    period: "2025",
    image: "/images/codeAlphaInternship.png",
  },
  {
    title: "AI Furniture Designer",
    description:
      "Innovative system that generates custom furniture designs using LLMs based on customer descriptions and preferences.",
    tags: ["Generative AI", "LLM", "Design"],
    type: "Generative AI",
    period: "2024",
    image: "/images/murphy-al-saham.png",
    link: "https://aifurnituredesigner.vercel.app", // Replace with actual link
  },
  {
    title: "AI Furniture Personal Consultant",
    description:
      "Fine-tuned LLM specifically trained to provide expert advice on custom furniture design and construction.",
    tags: ["LLM", "Fine-tuning", "Consulting"],
    type: "AI Agent",
    period: "2024",
    image: "/images/chat.png",
    link: "https://aifurnituredesigner.vercel.app", // Replace with actual link
  },

  {
    title: "Nutri Bot",
    description:
      "AI-powered nutrition assistant that provides personalized health and nutrition advice using advanced language models.",
    tags: ["LLM", "AI Agent", "Healthcare"],
    type: "AI Agent",
    period: "2024",
    image: "/images/nutribot.png",
    link: "https://nutribotwasay.vercel.app", // Replace with actual link
  },
  {
    title: "AI Career Counsellor",
    description:
      "A supervised learning-based model trained on diverse career data to recommend suitable career paths based on required skills and user preferences.",
    tags: ["Supervised Learning", "Career Prediction", "Machine Learning"],
    type: "Predictive Model",
    period: "2024",
    image: "/images/AIc.png",
    link: "https://github.com/WasayAbid/AI-CAREER-COUNSELLOR/tree/main", // Replace with actual link
  },
  {
    title: "MNIST Digit Detector",
    description:
      "Deep learning model trained on 20,000 MNIST images for accurate handwritten digit recognition.",
    tags: ["Computer Vision", "Deep Learning", "PyTorch"],
    type: "Machine Learning",
    period: "2025",
    image: "/images/mnist.png",
    link: "https://digit-classifier-b0ok.onrender.com", // Replace with actual link
  },
  {
    title: "Spotify Music Recommendation",
    description:
      "A machine learning-powered recommendation system that predicts the next song a user is likely to listen to based on their listening history and preferences.",
    tags: ["Music Recommendation", "Machine Learning", "Python", "Spotify API"],
    type: "Machine Learning",
    period: "2025",
    image: "/images/spotify.png", // Add an actual image for the project
    link: "https://github.com/WasayAbid/SPOTIFY_RECOMMENDATION_SYSTEM", // Replace with actual link
  },
  {
    title: "Generative AI Learning Assignments",
    description:
      "A collection of assignments and projects focused on learning and applying generative AI techniques. Includes integrations with Gemini API, OpenAI API, image generation, text generation, vector databases, and building intelligent agents using LangChain and CrewAI.",
    tags: [
      "Generative AI",
      "AI Agents",
      "Image Generation",
      "Text Generation",
      "Vector Databases",
    ],
    type: "Generative AI ",
    period: "2025",
    image: "/images/assign.jpeg", // Add an actual image for the project
    link: "https://github.com/orgs/PIAIC-Assignments-M-Abdul-Wasay/repositories", // Replace with actual link
  },

  {
    title: "E-Commerce Website with Next.js",
    description:
      "A fully functional e-commerce website built using Next.js, integrating a CMS as the backend database for managing products, orders, and customer data.",
    tags: ["E-commerce", "Next.js", "CMS", "React", "Web Development"],
    type: "Web Development",
    period: "2025",
    image: "/images/thegamervault.png", // Add an actual image for the project
    link: "https://thegamervault.vercel.app", // Replace with actual link
  },
];

const WorkExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience-projects" className="py-10 sm:py-20 relative">
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
            WHAT I HAVE DONE SO FAR
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 sm:mb-16 text-center"
          >
            Experience and Projects<span className="text-gradient">.</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line - visible on all screen sizes */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-purple-900" />

            {/* Projects Timeline */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col sm:flex-row items-start mb-8 sm:mb-12 lg:mb-20 relative ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#1A1A2E] border-4 border-purple-600 flex items-center justify-center z-10">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Project Card */}
                <div
                  className={`ml-12 sm:ml-0 w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"
                  }`}
                >
                  <motion.div
                    className="rounded-3xl bg-[#1A1A2E] text-white overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-80" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs sm:text-sm whitespace-nowrap">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                        {project.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 0
                            ? "sm:justify-end"
                            : "sm:justify-start"
                        }`}
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#2A2A3E] text-gray-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <div className="flex justify-center pb-4">
                        {" "}
                        {/* Added container for centering */}
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full" // Increased padding and font size
                        >
                          View Project{" "}
                          <FaExternalLinkAlt className="ml-2 w-4 h-4" />{" "}
                          {/* Slightly larger icon */}
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;