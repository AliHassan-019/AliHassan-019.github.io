"use client";

import { motion } from "framer-motion";
import {
  CpuChipIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const skillCategories = [
  {
    title: "Microcontrollers",
    icon: CpuChipIcon,
    skills: ["ARM Cortex-M", "ESP32", "STM32", "PIC", "AVR"],
  },
  {
    title: "Programming",
    icon: CodeBracketIcon,
    skills: ["C/C++", "Python", "Assembly", "Rust", "RTOS"],
  },
  {
    title: "Hardware Design",
    icon: WrenchScrewdriverIcon,
    skills: ["PCB Design", "Circuit Design", "Schematic Capture", "Prototyping"],
  },
  {
    title: "Development Tools",
    icon: CommandLineIcon,
    skills: ["Git", "Docker", "CI/CD", "Debugging Tools", "Version Control"],
  },
  {
    title: "Testing & Validation",
    icon: BeakerIcon,
    skills: ["Unit Testing", "Integration Testing", "Hardware Testing", "Validation"],
  },
  {
    title: "Embedded Systems",
    icon: CpuChipIcon,
    skills: ["Firmware", "Drivers", "Bootloaders", "Communication Protocols"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 