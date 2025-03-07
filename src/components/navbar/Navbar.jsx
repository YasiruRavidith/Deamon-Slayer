import BackgroundAudio from "../audio/BackgroundAudio";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const Navbar = ()=>{
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            
            
            <div className="wrapper">
            
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Demon Slayer  -  鬼滅の刃 - Kimetsu no Yaiba</motion.span>
                <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="social">
                    <a href="https://www.facebook.com/yasiru.ravidith.5/"><img src="\facebook.png" alt=""/></a>
                    <a href="#"><img src="\instagram.png" alt=""/></a>
                    <a href="#"><img src="\youtube.png" alt=""/></a>
                    <a href="#"><img src="\dribbble.png" alt=""/></a>
                    <BackgroundAudio/>
                </motion.div>
            </div>
        </div>
    )
        
    
}
export default Navbar