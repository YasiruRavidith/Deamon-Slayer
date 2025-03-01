import React from "react";
import { motion } from "framer-motion";
import "./Mist.scss";

const Mist = () => {
  const mistParticles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100, // Random mist size
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    duration: Math.random() * 10 + 10, // Different speeds for each mist particle
    opacity: Math.random() * 0.5 + 0.9, // Random opacity
  }));

  return (
    <div className="mist-container">
      {mistParticles.map((mist) => (
        <motion.div
          key={mist.id}
          className="mist"
          initial={{ opacity: 0, x: mist.x, y: mist.y }}
          animate={{
            opacity: mist.opacity,
            x: [mist.x, mist.x + 50, mist.x - 50, mist.x], // Swaying effect
            y: [mist.y, mist.y + 30, mist.y - 30, mist.y],
          }}
          transition={{
            duration: mist.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: mist.size,
            height: mist.size,
          }}
        />
      ))}
    </div>
  );
};

export default Mist;
