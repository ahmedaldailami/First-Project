import { HeroSection } from "./sections/HeroSection";
import "./App.css";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/projects/ProjectsSection";
import { GallarySection } from "./sections/gallary/GallarySection";
import { SkillsSection } from "./sections/skills/SkillsSection";
import { useTranslation } from "react-i18next";
import { ContactSection } from "./sections/ContactSection";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Background from "./components/background/Background";

function App() {
  const { t } = useTranslation();

  return (
    <div className="px-2">
      {/*            Background            */}
      <Background />

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
    </div>
  );
}

export default App;
