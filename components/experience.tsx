"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Embedded Systems Engineer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: [
      "Led the development of embedded systems for IoT devices",
      "Designed and implemented real-time operating systems",
      "Optimized firmware for power efficiency and performance",
      "Mentored junior engineers and conducted code reviews",
    ],
  },
  {
    title: "Embedded Systems Engineer",
    company: "Smart Solutions Ltd",
    period: "2018 - 2020",
    description: [
      "Developed firmware for microcontroller-based systems",
      "Implemented communication protocols (I2C, SPI, UART)",
      "Created hardware abstraction layers and device drivers",
      "Collaborated with hardware team on PCB design",
    ],
  },
  {
    title: "Junior Firmware Developer",
    company: "Embedded Systems Co.",
    period: "2016 - 2018",
    description: [
      "Assisted in firmware development and testing",
      "Debugged and optimized existing codebase",
      "Participated in hardware testing and validation",
      "Documented technical specifications and procedures",
    ],
  },
];

const education: EducationItem[] = [
  {
    degree: "Master of Science in Embedded Systems",
    school: "Technical University",
    period: "2014 - 2016",
    description: [
      "Specialized in real-time systems and hardware design",
      "Thesis on power optimization in embedded systems",
      "Graduated with honors",
    ],
  },
  {
    degree: "Bachelor of Engineering in Electronics",
    school: "Engineering University",
    period: "2010 - 2014",
    description: [
      "Focused on digital electronics and microcontrollers",
      "Senior project on IoT-based monitoring system",
      "Active member of robotics club",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-700 p-1">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-white dark:bg-gray-800 shadow-md"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-white dark:bg-gray-800 shadow-md"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <AcademicCapIcon className="w-5 h-5 mr-2" />
              Education
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {(activeTab === "experience" ? experiences : education).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-primary"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {activeTab === "experience" 
                        ? (item as ExperienceItem).title 
                        : (item as EducationItem).degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {activeTab === "experience" 
                        ? (item as ExperienceItem).company 
                        : (item as EducationItem).school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 