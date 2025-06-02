"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "IoT Smart Home Controller",
    description: "Developed a custom embedded system for home automation using ESP32, featuring real-time sensor monitoring and automated control systems.",
    technologies: ["ESP32", "C++", "MQTT", "RTOS"],
    image: "/images/projects/smart-home.jpg",
    link: "#",
    category: "IoT"
  },
  {
    title: "Industrial Monitoring System",
    description: "Designed and implemented a real-time monitoring system for industrial equipment using STM32 microcontrollers and custom sensor interfaces.",
    technologies: ["STM32", "C", "CAN Bus", "Modbus"],
    image: "/images/projects/industrial.jpg",
    link: "#",
    category: "Industrial"
  },
  {
    title: "Automotive ECU Development",
    description: "Created a custom Engine Control Unit with advanced features for performance optimization and emissions control.",
    technologies: ["ARM Cortex-M", "C", "AutoSAR", "UDS"],
    image: "/images/projects/ecu.jpg",
    link: "#",
    category: "Automotive"
  },
  {
    title: "Wireless Sensor Network",
    description: "Implemented a low-power wireless sensor network for environmental monitoring using custom PCB design and mesh networking.",
    technologies: ["PCB Design", "RF", "Low Power", "Mesh Network"],
    image: "/images/projects/sensor-network.jpg",
    link: "#",
    category: "IoT"
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      animate={{
                        opacity: hoveredProject === project.title ? 0.3 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      View Project
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 