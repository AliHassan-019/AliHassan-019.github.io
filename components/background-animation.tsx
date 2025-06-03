"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#0f172a",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 900 },
          },
          color: { value: ["#60A5FA", "#38BDF8", "#64748B"] },
          shape: {
            type: ["circle", "polygon"],
            polygon: { nb_sides: 4 },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: false },
          },
          size: {
            value: 3,
            random: { enable: true, minimumValue: 1 },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#60A5FA",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

// Add the following CSS to your global styles (globals.css):
// @keyframes gradientBG {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// } 