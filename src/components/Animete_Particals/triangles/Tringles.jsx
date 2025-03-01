import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./tringles.scss";

const flowerEmojis = ["▲"]; // Flower types
const gridSize = 200; // Spacing between flowers in pixels

const Tringles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createGridParticles = () => {
      const newParticles = [];
      const cols = Math.ceil(window.innerWidth / gridSize);
      const rows = Math.ceil(window.innerHeight / gridSize);

      for (let row = -10; row < rows; row++) { //continuas motion
        for (let col = -10; col < cols; col++) {
          newParticles.push({
            id: `${row}-${col}`,
            emoji: flowerEmojis[(row + col) % flowerEmojis.length], // Alternate flower type
            startX: col * gridSize,
            startY: row * gridSize,
            endX: col * gridSize + window.innerWidth,
            endY: row * gridSize + window.innerHeight,
          });
        }
      }
      setParticles(newParticles);
    };

    createGridParticles();
    window.addEventListener("resize", createGridParticles);
    return () => window.removeEventListener("resize", createGridParticles);
  }, []);

  return (
    <div className="tringles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="tringles"
          initial={{ x: particle.startX, y: particle.startY, opacity: 0.5 }}
          animate={{
            x: particle.endX,
            y: particle.endY,
            opacity: 0.5,
          }}
          transition={{
            duration: 6, // Fixed speed for all particles
            repeat: Infinity, // Loop animation
            ease: "linear",
          }}
          style={{
            fontSize: "30px",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default Tringles;