import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection"
import Particles from "./components/Particles"
import PillNav from "./components/PillNav"
import { AnimatePresence, motion } from "framer-motion";
// import { Sun, Moon } from "lucide-react";




function App() {


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });


  // Theme toggle
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);








  return (
    <>
      {/*            Background            */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
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


      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} >
        {theme}
      </button>
      

      {/* Theme Toggle Button */}
      <div className="bg-amber-400">

      <motion.button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 bg-amber-50 rounded-full text-sm font-semibold
              hover:bg-pink-400 dark:hover:bg-pink-800 transition-colors
               hidden md:block"
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
      >

        {/* <AnimatePresence mode="wait" initial={false}> */}
          {theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              
              {/* <Moon size={20} className="text-gray-800 dark:text-white" /> */}
              <span>dark</span>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* <Sun size={20} className="text-gray-800 dark:text-white" /> */}
                <span>light</span>

            </motion.div>
          )}
        {/* </AnimatePresence> */}
      </motion.button>

      </div>




      <HeroSection />

      {/* <section className="container m-auto min-h-dvh flex items-center ">
        
      
      </section> */}









    </>
  )
}






export default App
