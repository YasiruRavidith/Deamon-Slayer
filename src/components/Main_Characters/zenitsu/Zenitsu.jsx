
import "./zenitsu.scss"
import { motion } from "framer-motion"
import Particals from "../../Animete_Particals/fireflames/Particals";
import Flowers from "../../Animete_Particals/floatingFlowes/Flowers";
import Tringles from "../../Animete_Particals/triangles/tringles";

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

const Zenitsu =() => {
    return (
        <div className="zenitsu">
            <div className="wrapper">
                <div><Tringles/></div>
                <motion.div className="textContainer" variants={textVariants} initial = "initial" animate="animate">
                    <motion.h2 variants={textVariants}>ZENITSU AGATSUMA</motion.h2>
                    <motion.h1 variants={textVariants}>Zenitsu Agatsuma is a member of the Demon Killing Corps and a traveling companion of Kamado Tanjirou. Zenitsu has fair skin and downward-sloped, scared-looking eyes that fade from soft brown to gold. He has short, yellow hair of varying lengths, cutting off squarely at the ends where it fades to a darker orange color, that falls in front of his face in uneven bangs. Before he became a Demon Slayer, Zenitsu's hair was originally black, but it turned the color it is currently when he was struck by lightning during his training.</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <a href="https://myanimelist.net/character/146157/Nezuko_Kamado"><motion.button variants={textVariants} whileHover={{background:"lightgray", color:"black"}} whileTap={{scale:0.95}}>More Details</motion.button></a>
                        <a href="https://myanimelist.net/character/146157/Nezuko_Kamado"><motion.button variants={textVariants}  whileHover={{background:"lightgray", color:"black"}} whileTap={{scale:0.95}}>My Anime List</motion.button></a>   
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="\scroll.png" alt="" />
                </motion.div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">ZENITSU AGATSUMA</motion.div>
                <div className="imageContainer">
                    <img src="\zinitsu-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Zenitsu;