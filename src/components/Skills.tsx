"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPython, FaRobot, FaBrain, FaDatabase } from "react-icons/fa";
import {
  SiTensorflow,
  SiOpenai,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import {
  BsLightningChargeFill,
  BsGraphUp,
  BsRobot,
  BsGear,
} from "react-icons/bs";
import { TbMathFunction, TbChartHistogram } from "react-icons/tb";
import { BiData } from "react-icons/bi";

const skillCategories = [
  {
    name: "Core ML & Data Science",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Matplotlib", icon: TbChartHistogram, color: "#11557C" },
      { name: "SciPy", icon: BsGraphUp, color: "#8CAAE6" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Data Manipulation", icon: BiData, color: "#60A5FA" },
      { name: "EDA", icon: TbChartHistogram, color: "#6EE7B7" },
    ],
  },
  {
    name: "Deep Learning & Neural Networks",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Deep Learning", icon: FaBrain, color: "#6366F1" },
      { name: "Machine Learning", icon: BsGraphUp, color: "#8B5CF6" },
      { name: "Linear Models", icon: TbMathFunction, color: "#EC4899" },
      { name: "Neural Networks", icon: FaBrain, color: "#F43F5E" },
    ],
  },
  {
    name: "AI & LLM Technologies",
    skills: [
      { name: "Generative AI", icon: FaRobot, color: "#10B981" },
      { name: "Large Language Models", icon: SiOpenai, color: "#00A67E" },
      { name: "AI Agents", icon: BsRobot, color: "#3B82F6" },
      { name: "RAG", icon: BsLightningChargeFill, color: "#F59E0B" },
      { name: "Vector Databases", icon: FaDatabase, color: "#8B5CF6" },
      { name: "LangChain", icon: BsGear, color: "#00A67E" },
    ],
  },
];

const InfiniteScroll = ({
  items,
  speed = 2,
}: {
  items: { name: string; icon: any; color: string }[];
  speed?: number;
}) => {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        animate={{
          x: [-50 * items.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: items.length * speed,
            ease: "linear",
          },
        }}
        className="flex gap-4 whitespace-nowrap"
      >
        {[...items, ...items].map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="bg-[#2A2A3E] rounded-2xl p-4 transition-all duration-300 hover:shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A1A2E] rounded-xl flex items-center justify-center">
                <skill.icon
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
              </div>
              <div>
                <h4 className="text-white text-sm sm:text-base font-medium">
                  {skill.name}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-10 sm:py-20 relative">
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
            MY EXPERTISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 sm:mb-16 text-center"
          >
            Skills & Technologies<span className="text-gradient">.</span>
          </motion.h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-[#1A1A2E] rounded-3xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
                  {category.name}
                </h3>
                <InfiniteScroll
                  items={category.skills}
                  speed={2 + categoryIndex * 0.5}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
