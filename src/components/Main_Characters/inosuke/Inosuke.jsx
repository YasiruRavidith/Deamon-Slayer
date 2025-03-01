
import "./inosuke.scss"
import { motion } from "framer-motion"
import Particals from "../../Animete_Particals/fireflames/Particals";
import Flowers from "../../Animete_Particals/floatingFlowes/Flowers";
import Mist from "../../Animete_Particals/mist/Mist";
import ImgAnimet from "../../Animete_Particals/imgAnimet/ImgAnimet";

const textVariants ={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
            
        },
    }
};

const sliderVariants ={
    initial:{
        x:0,

    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    }
};

const Inosuke =() => {
    return (
        <div className="inosuke">
            <div className="wrapper">
                <div><Mist/><ImgAnimet/></div>
                <motion.div className="textContainer" variants={textVariants} initial = "initial" animate="animate">
                    <motion.h2 variants={textVariants}>INOSUKE HASHIBIRA</motion.h2>
                    <motion.h1 variants={textVariants}>Inosuke is a member of the Demon Slayer Corps and a traveling companion of Tanjirou Kamado. He is often seen wearing the head of a boar.</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <a href="https://myanimelist.net/character/146157/Nezuko_Kamado"><motion.button variants={textVariants} whileHover={{background:"lightgray", color:"black"}} whileTap={{scale:0.95}}>More Details</motion.button></a>
                        <a href="https://myanimelist.net/character/146157/Nezuko_Kamado"><motion.button variants={textVariants}  whileHover={{background:"lightgray", color:"black"}} whileTap={{scale:0.95}}>My Anime List</motion.button></a>   
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="\scroll.png" alt="" />
                </motion.div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">INOSUKE HASHIBIRA</motion.div>
                <div className="imageContainer">
                    <img src="\inusuke.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Inosuke;