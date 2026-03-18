import { HeroSection } from "./components/HeroSection";
import Particles from "./components/Particles";
import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { GallarySection } from "./components/GallarySection";
import { SkillsSection } from "./components/SkillsSection";
import { useTranslation } from "react-i18next";
import { ContactSection } from "./components/ContactSection";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

function App() {
  const { t } = useTranslation();

  return (
    <>
      {/*            Background            */}
      <Particles
        particleColors={["#fff", "#fff"]}
        particleCount={700}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={50}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/*                  Header                 */}
      {/* {!showDock && (
        <header className=" w-full top-0 fixed flex justify-center z-[1000]">
          <PillNav
            logo={"logo.png"}
            logoAlt="Company Logo"
            items={[
              { label: t("navbar.home"), href: '#Home' },
              { label: t("navbar.about"), href: '#about' },
              { label: t("navbar.skills"), href: '#skills' },
              { label: t("navbar.projects"), href: '#Projects'},
              { label: t("navbar.gallary"), href: '#Gallary' }
            ]}
            activeHref="#Home"
            className="rounded-full border-[1px] border-gray-200 dark:border-gray-700 backdrop-blur-xl"
            ease="power2.easeOut"
            baseColor="var(--foreground)"
            pillColor="var(--background)"
            hoveredPillTextColor="var(--background)"
            pillTextColor="var(--background)"
          />
        </header>
      )} */}

      <Header />

      <HeroSection />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallarySection />
      <ContactSection />

<Footer />
      

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
  );
}

export default App;
