import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./particals.scss";


const Particls = () => {
  const [particls, setParticls] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      setParticls((prevParticles) => [
        ...prevParticles,
        {
          id: Math.random(),
          size: Math.random() * 30 + 5, // Random size (5px - 20px)
          startX: Math.random() * window.innerWidth, // Random start X position
          duration: Math.random() * 10 + 3, // Random duration (3s - 8s)
        },
      ]);

      setTimeout(() => {
        setParticls((prevParticles) =>
          prevParticles.slice(1) // Remove old particles
        );
      }, 8000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particle-container">
      {particls.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{
            opacity: 1,
            y:1000,
            x: particle.startX,
          }}
          animate={{
            opacity: 0,
            y: -500,
            x: particle.startX + Math.random() * 100 - 50, // Slight drift
          }}
          transition={{
            duration: particle.duration,
            ease: "linear",
          }}
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default Particls;