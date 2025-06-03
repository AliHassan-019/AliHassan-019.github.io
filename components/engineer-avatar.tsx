"use client";

import { motion } from "framer-motion";

export default function EngineerAvatar() {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Microchip Body */}
      <rect x="8" y="8" width="16" height="16" rx="2" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
      {/* Pins - Top */}
      <rect x="11" y="4" width="2" height="4" rx="1" fill="#60A5FA" />
      <rect x="15" y="4" width="2" height="4" rx="1" fill="#60A5FA" />
      <rect x="19" y="4" width="2" height="4" rx="1" fill="#60A5FA" />
      {/* Pins - Bottom */}
      <rect x="11" y="24" width="2" height="4" rx="1" fill="#60A5FA" />
      <rect x="15" y="24" width="2" height="4" rx="1" fill="#60A5FA" />
      <rect x="19" y="24" width="2" height="4" rx="1" fill="#60A5FA" />
      {/* Pins - Left */}
      <rect x="4" y="11" width="4" height="2" rx="1" fill="#60A5FA" />
      <rect x="4" y="15" width="4" height="2" rx="1" fill="#60A5FA" />
      <rect x="4" y="19" width="4" height="2" rx="1" fill="#60A5FA" />
      {/* Pins - Right */}
      <rect x="24" y="11" width="4" height="2" rx="1" fill="#60A5FA" />
      <rect x="24" y="15" width="4" height="2" rx="1" fill="#60A5FA" />
      <rect x="24" y="19" width="4" height="2" rx="1" fill="#60A5FA" />
      {/* Chip Inner Lines */}
      <rect x="13" y="13" width="6" height="6" rx="1" fill="none" stroke="#60A5FA" strokeWidth="1" />
    </motion.svg>
  );
} 