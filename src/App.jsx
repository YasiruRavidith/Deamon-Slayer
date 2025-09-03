import "./app.scss"
import Hero from "./components/Main_Characters/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Nezuko from "./components/Main_Characters/nezuko/Nezuko";
import Zenitsu from "./components/Main_Characters/zenitsu/Zenitsu";
import BackgroundAudio from "./components/audio/BackgroundAudio";
import Inosuke from "./components/Main_Characters/inosuke/Inosuke";


const App = () => {
  return <div>

    
    
    <Cursor/>
    
    <section id="Home">
    
      <Navbar/>
      <Parallax type="services"/>
      
    </section>
    <section id="Tanjiro"><Hero/></section>
    <section id="Zenitsu"><Zenitsu/></section>
    <section id="Nezuko"><Nezuko/></section>
    <section id="Inosuke"><Inosuke/></section>
    
    
    {/* <section><Services/></section> */}
    {/* <section id="Parallax"><Parallax type="parallax"/></section> */}
    <Portfolio/>
    <section id ="Contact"><Contact/></section>

    
    
  </div>;
};

export default App;
