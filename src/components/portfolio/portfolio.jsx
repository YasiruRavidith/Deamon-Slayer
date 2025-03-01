import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Muichiro Tokito",
        img:"/Muichiro Tokito.webp",
        desc:"Tokitou Muichirou is a Demon Slayer and the Mist Pillar of the Demon Killing Corps. He is usually cold but has a soft side for people that reminds him of his family.",
        link:"https://myanimelist.net/character/151147/Muichirou_Tokitou",

    },

    {
        id:2,
        title:"Sanemi Shinazugawa",
        img:"/Sanemi Shinazugawa.webp",
        desc:"Shinazugawa Sanemi is a Demon Slayer and the Wind Pillar of the Demon Slayer Corps",
        link:"https://myanimelist.net/character/151147/Muichirou_Tokitou",

    },

    {
        id:3,
        title:"Gyoumei Himejima",
        img:"/Gyomei Himejima.webp",
        desc:"Himejima Gyoumei is the Stone Pillar of the Demon Slayer Corps",
        link:"https://myanimelist.net/character/151146/Gyoumei_Himejima",

    },

    {
        id:4,
        title:"Obanai Iguro",
        img:"/Obanai Iguro.jpg",
        desc:"Iguro Obanai is a Demon Hunter and the Snake Pillar of the Demon Killing Corps.",
        link:"https://myanimelist.net/character/151148/Obanai_Iguro?q=Obanai%20Iguro&cat=character",

    },

    {
        id:5,
        title:"Tengen Uzui",
        img:"/Tengen Uzui.webp",
        desc:"Age: 23 Birthday: October 31 Height: 198 cm  Weight: 95 kg (209 lbs) Affiliation: Demon Slayer Corps Combat Style: Sound Breathing Uzui Tengen is a Demon Hunter and the Sound Pillar of the Demon Killing Corps.",
        link:"https://myanimelist.net/character/151144/Tengen_Uzui?q=Tengen%20Uzui&cat=character",

    },
];

const Single =({item}) =>{

    const ref = useRef();
    

    const {scrollYProgress} = useScroll({
        target:ref,
        //offset:["start start","end start"] 
    });

    const y =useTransform(scrollYProgress,[0,1],[-300,300])

    return <section> 
    
        <div className="container">
            <div className="wrapper">
                <div className="imgContainer" ref ={ref}>
                    <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer" style={{y:y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link}><button >See More</button></a>

            </motion.div>
            </div>
        </div>
     </section>;
};

const Portfolio = ()=>{

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"],

    });
    
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Hashira</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>

            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;