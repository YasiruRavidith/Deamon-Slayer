import "./services.scss";
import { animate, color, motion, useInView } from "framer-motion";
import { useRef,useEffect, useState } from "react";
import Particals from "../Animete_Particals/fireflames/Particals";
import Flowers from "../Animete_Particals/floatingFlowes/Flowers";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity :1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services =() =>{

    const ref =useRef();

    const isInView = useInView(ref,{margin:"100px"});


    return (
        
        
        <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        //whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        //animate={"animate"}
        >
            
            
            <motion.div className="textContainer" variants={variants}>
                <p>Demon Slayer <br/>Kimetsu no Yaiba</p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
            
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">

                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button>What we Do?</button>
                </div>
            </motion.div>
            <div className="flames"></div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Baranding</h2>
                    <p>
                        fsdfd dfdgdf dfgdfgdg gddsgsd dfdfgdgfd dgdfgdg dfgdgdd rhfh vbnvn fcbcvnn qeweer wewerer wewerw 
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Baranding</h2>
                    <p>
                        fsdfd dfdgdf dfgdfgdg gddsgsd dfdfgdgfd dgdfgdg dfgdgdd rhfh vbnvn fcbcvnn qeweer wewerer wewerw 
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Baranding</h2>
                    <p>
                        fsdfd dfdgdf dfgdfgdg gddsgsd dfdfgdgfd dgdfgdg dfgdgdd rhfh vbnvn fcbcvnn qeweer wewerer wewerw 
                    </p>
                    <button>Go</button>
                </motion.div>
    

                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Baranding</h2>
                    <p>
                        fsdfd dfdgdf dfgdfgdg gddsgsd dfdfgdgfd dgdfgdg dfgdgdd rhfh vbnvn fcbcvnn qeweer wewerer wewerw 
                    </p>
                    <button>Go</button>
                </motion.div>

            </motion.div>
            
        </motion.div>
        
        
        
       
   
    )
}

export default Services