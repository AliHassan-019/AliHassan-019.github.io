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
    title: "Embedded System Engineer",
    company: "Niura",
    period: "2025 - Present",
    description: [
      "Designed and developed embedded systems leveraging nRF series, ESP32, and STM32, utilizing Zephyr RTOS and FreeRTOS for real-time applications.",
      "Worked on EEG data acquisition using ADS1299, integrating it into wireless earbuds for real-time bio-signal processing.",
      "Implemented BLE, BLC, Wi-Fi, and other wireless communication protocols for IoT applications.",
      "Wrote optimized firmware in C/C++, integrating UART, SPI, I2C, and DMA for efficient hardware interaction.",
      "Debugged and optimized embedded systems for performance, reliability, and low-power applications.",
    ],
  },
  {
    title: "Embedded System Engineer",
    company: "Revive Medical Technologies",
    period: "2024 - 2025",
    description: [
      "Programmed embedded systems for medical devices, focusing on enhancing functionality, safety, and compliance with industry standards.",
      "Developed firmware for microcontrollers, including PIC, STM32, and NRF controllers, using C/C++ to ensure precise control and reliable operation of medical equipment.",
      "Implemented communication protocols, including UART, SPI, I2C, and IoT-based connectivity solutions, to facilitate effective data exchange between device components.",
      "Integrated hardware components such as sensors, actuators, and communication modules into medical devices, ensuring seamless operation, compatibility, and IoT-enabled remote monitoring.",
    ],
  },
];

const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Electrical Engineering",
    school: "COMSATS University Islamabad",
    period: "2020 - 2024",
    description: [
      "Focused on embedded systems, electronics, and circuit design.",
      "Completed projects involving microcontrollers, IoT, and real-time systems.",
      "Graduated with strong academic performance and active participation in technical societies.",
    ],
  },
  {
    degree: "F.Sc Pre-Engineering",
    school: "Punjab Group of Colleges",
    period: "2018 - 2020",
    description: [
      "Studied foundational courses in mathematics, physics, and chemistry.",
      "Developed analytical and problem-solving skills essential for engineering studies.",
      "Participated in science exhibitions and technical competitions.",
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