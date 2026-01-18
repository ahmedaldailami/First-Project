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
import { AnimatePresence } from "motion/react"
import Dock from "./components/dock"
import { useEffect, useState } from "react"
import { motion } from "framer-motion";

// import { Sun, Moon } from "lucide-react";




function App() {

  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);


  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down -> show Dock
        setShowDock(true);
      } else {
        // scrolling up -> hide Dock
        setShowDock(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  // Helper for smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  // Dock items
  const dockItems = [
    {
      // icon: <Home size={24} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      // icon: <User size={24} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      // icon: <GraduationCap size={24} />,
      label: "Education",
      onClick: () => scrollToSection("education"),
    },
    {
      // icon: <Briefcase size={24} />,
      label: "Career",
      onClick: () => scrollToSection("career"),
    },
    {
      // icon: <FolderKanban size={24} />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
  ];

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
      {!showDock && (
        <header className=" w-full top-0 fixed flex justify-center z-[1000]">
          <PillNav
            logo={"vite.svg"}
            logoAlt="Company Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="  rounded-2xl backdrop-blur-md"
            ease="power2.easeOut"
            baseColor="var(--foreground)"
            pillColor="var(--background)"
            hoveredPillTextColor="var(--background)"
            pillTextColor="var(--background)"
          />
        </header>
      )}
      <HeroSection />





      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallarySection />



      {/* Dock with smooth show/hide animation */}
      <AnimatePresence>
        {showDock && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]"
          >
            <Dock
              items={dockItems}
              position="bottom"
              magnification={70}
              baseItemSize={50}
            />
          </motion.div>
        )}
      </AnimatePresence>


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






export default App;
