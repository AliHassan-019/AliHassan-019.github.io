"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">Ali Hassan</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              <TypeAnimation
                sequence={[
                  "Embedded Systems Engineer",
                  1000,
                  "Firmware Developer",
                  1000,
                  "Hardware Designer",
                  1000,
                  "RTOS Specialist",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Specializing in embedded systems design, firmware development, and hardware prototyping.
              Passionate about creating efficient, reliable, and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 