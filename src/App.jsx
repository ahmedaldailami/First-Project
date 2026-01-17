import { HeroSection } from "./components/HeroSection"
import Particles from "./components/Particles"
import PillNav from "./components/PillNav"
import './App.css'
import ScrambledText from "./components/text/ScrambledText"
import ScrollFloat from "./components/text/ScrollFloat"
import { AboutSection } from "./components/AboutSection"
import { ProjectsSection } from "./components/ProjectsSection"
import MagicBento from "./components/MagicBento"
import TiltedCard from "./components/TiltedCard"
import DomeGallery from "./components/DomeGallery"
import { GallarySection } from "./components/GallarySection"
import { SkillsSection } from "./components/SkillsSection"
// import { Sun, Moon } from "lucide-react";




function App() {

 



  return (
    <>
      {/*            Background            */}
      <Particles
        particleColors={['#fff', '#fff']}
        particleCount={700}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={50}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />



      {/*                  Header                 */}
      <header className="flex justify-center">
        <PillNav
          logo={"logo.svg"}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </header>

      <HeroSection />

   



      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallarySection />




      {/* 
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      /> */}








      {/* 
      <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".:;!?"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique pariatur dignissimos porro eius quam doloremque
        et enim velit nobis maxime.
      </ScrambledText> */}

      {/* <section className="container m-auto min-h-dvh flex items-center ">
        
      
      </section> */}









    </>
  )
}






export default App
