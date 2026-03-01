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
          } catch {
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
            {/* Left Side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am an Embedded Systems Engineer with a strong foundation in 
                hardware design, firmware development, real-time systems, and 
                secure connected technologies. My work spans across microcontroller-
                based systems, FPGA design, and PCB development, enabling the 
                creation of reliable and scalable embedded solutions.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                I have experience working with STM32, ESP32, nRF, and FPGA platforms, 
                integrating communication protocols such as BLE, LoRaWAN, Wi-Fi, CAN, 
                SPI, and I2C to develop robust IoT and robotics systems. My approach 
                emphasizes system-level thinking — ensuring seamless interaction between 
                hardware, software, and network layers.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Alongside development, I focus on embedded security, verification 
                and validation (V&V), and structured engineering workflows including 
                CI/CD practices. My goal is to design efficient, secure, and 
                production-ready embedded architectures that bridge innovation 
                with reliability.
              </p>
            </div>

            {/* Right Side - Animation */}
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
                    {/* @ts-ignore */}
                    <Lottie
                      animationData={animationData}
                      loop
                      className="w-full h-full"
                    />
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