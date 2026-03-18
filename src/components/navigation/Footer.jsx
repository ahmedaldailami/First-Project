import { useEffect, useState } from "react";
import Dock from "./dock";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const Footer = () => {
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
      icon: <p>🏠</p>,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      // icon: <User size={24} />,
      icon: <p>👤</p>,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      // icon: <GraduationCap size={24} />,
      icon: <p>⌨️</p>,
      label: "Skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      // icon: <Briefcase size={24} />,
      icon: <p>💻</p>,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      // icon: <FolderKanban size={24} />,
      icon: <p>🖼️</p>,
      label: "Gallary",
      onClick: () => scrollToSection("gallary"),
    },
    {
      icon: <p>📞</p>,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];
  return (
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
  );
};
export default Footer;
