"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  const [animationData, setAnimationData] = useState<any | null>(null);
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [animationError, setAnimationError] = useState<string | null>(null);

  useEffect(() => {
    // Try to load a user-provided about_me.json first, then fall back to embedded-systems.json
    const load = async () => {
      setLoadingAnimation(true);
      try {
        const candidates = [
          "/animations/about_me.json",
          "/animations/embedded-systems.json",
        ];

        let loaded: any = null;
        for (const path of candidates) {
          try {
            const res = await fetch(path);
            if (!res.ok) continue;
            const json = await res.json();
            loaded = json;
            break;
          } catch (e) {
            continue;
          }
        }

        if (!loaded) throw new Error("Animation not found");
        setAnimationData(loaded);
      } catch (err) {
        setAnimationError((err as Error).message || "Failed to load animation");
      } finally {
        setLoadingAnimation(false);
      }
    };

    load();
  }, []);

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
              <div className="w-full h-[400px] flex items-center justify-center">
                {loadingAnimation && !animationError && (
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                )}

                {animationError && (
                  <div className="text-foreground/60 text-center">
                    <p>Animation could not be loaded</p>
                  </div>
                )}

                {!loadingAnimation && !animationError && animationData && (
                  <div className="w-full h-full">
                    {/* @ts-ignore - lottie-react default export */}
                    <Lottie animationData={animationData} loop className="w-full h-full" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 