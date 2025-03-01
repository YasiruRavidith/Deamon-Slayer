import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./imgAnimet.scss";

const flowerEmojis = ["public/inu.png"]; // Flower types
const gridSize = 200; // Spacing between flowers in pixels

const ImgAnimet = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createGridParticles = () => {
      const newParticles = [];
      const cols = Math.ceil(window.innerWidth / gridSize)+2;
      const rows = Math.ceil(window.innerHeight / gridSize)+2;

      for (let row = -10; row < rows; row++) { //continuas motion
        for (let col = -10; col < cols; col++) {
          newParticles.push({
            id: `${row}-${col}`,
            image: flowerEmojis[(row + col) % flowerEmojis.length], // Alternate flower type
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
    <div className="imgg-container">
      {particles.map((particle) => (
        <motion.img
          key={particle.id}
          className="imgg"
          src={particle.image}
          alt="inuske"
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
            delay: particle.delay,
          }}

          
        />
         
        
      ))}
    </div>
  );
};

export default ImgAnimet;