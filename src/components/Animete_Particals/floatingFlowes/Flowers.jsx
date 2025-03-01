import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./flowers.scss";

const flowerEmojis = ["🌸","🌺","🌸","🌸"]; // Different flower types

const Flowers = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      setParticles((prevParticles) => [
        ...prevParticles,
        {
          id: Math.random(),
          emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
          size: Math.random() * 30 + 20, // Random size (20px - 50px)
          startX: Math.random() * window.innerWidth, // Random horizontal position
          duration: Math.random() * 6 + 4, // Animation duration (4s - 10s)
        },
      ]);

      // Remove old particles after animation
      setTimeout(() => {
        setParticles((prevParticles) => prevParticles.slice(1));
      }, 10000);
    };

    const interval = setInterval(createParticle, 200); // Generate new flowers every 400ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flower-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="flowers"
          initial={{
            opacity: 0.8,
            y: -500,
            x: particle.startX,
            rotate: Math.random() * 360, // Random initial rotation
          }}
          animate={{
            opacity: 0,
            y: window.innerHeight, // Moves upwards
            x: particle.startX + Math.random() * 50 - 25, // Slight drifting
            rotate: Math.random() * 360, // Rotates while moving
          }}
          transition={{
            duration: particle.duration,
            ease: "linear",
          }}
          style={{
            fontSize: `${particle.size}px`,
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default Flowers;
