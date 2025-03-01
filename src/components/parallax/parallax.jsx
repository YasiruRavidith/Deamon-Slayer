import { useRef } from "react";
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

const Parallax = ({type}) =>{

    const ref =useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const yBg= useTransform(scrollYProgress,[0,1],["0%","100%"])
    const yText= useTransform(scrollYProgress,[0,1],["0%","300%"])


    return( 
        <div className="parallax" 
        ref={ref}
        style={{
            background:
            type === "services" 
                ? "linear-gradient(180deg,#111132,#0c0c1d)"
                : "linear-gradient(180deg,#111132,#505064)",
        }}
        >
            
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{
                //y: yText, translateY: yText,
                backgroundImage:`url(${type==="services" ? "public/all.png" : "/sun.png"})`,
            }}
            animate={{
                translateY: ["100%", "0%"],
                transition: {
                  delay: 0.5, 
                  duration: 1, 
                },
              }}></motion.div>
            <motion.div style={{x: yBg}} className="stars"></motion.div>
            <motion.div 
            style={{ y: yText, translateY: yText }}
            className="moon"
            animate={{
                translateY: ["-100%", "0%"],
                transition: {
                  delay: 1, 
                  duration: 1, 
                },
              }}
            ></motion.div>
            <motion.div style={{y: yText}} className="moonlogo"></motion.div>
        </div>
    );            
};

export default Parallax;