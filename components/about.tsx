"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const [animationError, setAnimationError] = useState(false);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am a passionate Embedded Systems Engineer with expertise in developing
                robust and efficient solutions for complex hardware-software systems.
                My journey in embedded systems began with a deep fascination for how
                software interacts with hardware at the lowest level.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With extensive experience in firmware development, hardware design,
                and real-time operating systems, I specialize in creating reliable
                embedded solutions that meet strict performance and safety requirements.
                I enjoy tackling challenging problems and finding elegant solutions
                that bridge the gap between hardware and software.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines technical expertise with a strong focus on
                quality and maintainability. I believe in writing clean, well-documented
                code and following industry best practices to ensure the longevity
                and reliability of embedded systems.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-[400px]">
                {!isAnimationLoaded && !animationError && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {animationError ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-foreground/60 text-center">
                      <p>Animation could not be loaded</p>
                    </div>
                  </div>
                ) : (
                  <Lottie
                    animationData={require("@/public/animations/embedded-systems.json")}
                    loop={true}
                    className="w-full h-full"
                    onLoadedImages={() => setIsAnimationLoaded(true)}
                    onError={() => setAnimationError(true)}
                    style={{ display: isAnimationLoaded ? "block" : "none" }}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 