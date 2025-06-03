"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Student Management System Using C++",
    description: "Developed a data management application to handle student records efficiently. Utilized Object-Oriented Programming (OOP), file handling, data structures, and algorithm development for robust performance.",
    technologies: ["C++", "OOP", "File Handling", "Data Structures", "Algorithms"],
    image: "/images/projects/student-management.jpg",
    link: "#",
    category: "Software"
  },
  {
    title: "Catheter Trackability Testing Machine",
    description: "Integrated and calibrated a Futek load cell for accurate force measurement. Calibrated and controlled a stepper motor for precise speed and distance in testing procedures. Focused on microcontroller programming, sensor integration, and embedded C.",
    technologies: ["Microcontroller", "Sensor Integration", "Motor Control", "Futek Load Cell", "Embedded C"],
    image: "/images/projects/catheter-testing.jpg",
    link: "#",
    category: "Medical"
  },
  {
    title: "IoT Based Pick & Place Robotic Arm",
    description: "Implemented an IoT-enabled robotic arm for remote operation and automated object handling. Utilized ESP32, IoT integration, robotics, automation, and sensor interfacing.",
    technologies: ["ESP32", "IoT", "Robotics", "Automation", "Sensor Interfacing"],
    image: "/images/projects/robotic-arm.jpg",
    link: "#",
    category: "IoT"
  },
  {
    title: "Disposable Real Time Pressure Monitoring Device",
    description: "Engineered a low-cost medical device for real-time pressure monitoring to ensure accurate data collection. Used STM32, Arduino, embedded systems design, real-time data acquisition, sensor calibration, and PCB design.",
    technologies: ["STM32", "Arduino", "Embedded Systems", "Real-Time Data", "Sensor Calibration", "PCB Design"],
    image: "/images/projects/pressure-monitoring.jpg",
    link: "#",
    category: "Medical"
  },
  {
    title: "Flexural Testing Machine",
    description: "Developed a mechanical testing system for material strength analysis with automated data recording. Utilized STM32, RTOS, control systems, embedded programming, and web app integration.",
    technologies: ["STM32", "RTOS", "Control Systems", "Embedded Programming", "Web App Integration"],
    image: "/images/projects/flexural-testing.jpg",
    link: "https://github.com/AliHassan-019/FTM",
    category: "Industrial"
  },
  {
    title: "Robotic Arm Based Skin Tumor Detection and Intervention Using Computer Vision",
    description: "Designed a robotic system using computer vision for automated skin tumor detection and intervention procedures. Leveraged Raspberry Pi, Python, computer vision, image processing, robotics, and machine learning algorithms.",
    technologies: ["Raspberry Pi", "Python", "Computer Vision", "Image Processing", "Robotics", "Machine Learning"],
    image: "/images/projects/skin-tumor-robot.jpg",
    link: "https://github.com/AliHassan-019/Robotic-Arm-Based-Skin-Tumor-Detection-Intervention-System-Using-Computer-Vision",
    category: "Medical"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
                whileHover={{ scale: 1.04 }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title + ' project screenshot'}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.08 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      animate={{
                        opacity: hoveredProject === project.title ? 0.3 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
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
                          aria-label={tech}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-auto pt-2">
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        aria-label={`View project: ${project.title}`}
                      >
                        View Project
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                      </motion.a>
                    </div>
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