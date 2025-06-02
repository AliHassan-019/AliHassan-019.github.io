import React from "react";

const BackgroundAnimation = () => (
  <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-900 via-blue-700 to-gray-900 opacity-80" style={{
    backgroundSize: '400% 400%',
    animation: 'gradientBG 15s ease infinite',
  }} />
);

export default BackgroundAnimation;

// Add the following CSS to your global styles (globals.css):
// @keyframes gradientBG {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// } 