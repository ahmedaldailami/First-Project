// import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  const lang = document.documentElement.lang;



  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full my-15 sm:py-30"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // acts like staggerChildren / delayChildren
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className={`flex-1 space-y-4 p-6  ${lang === "en" ? "text-left" : "text-right"}`}
        initial={false} // so it inherits parent animation
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <motion.span
            className="text-sm text-blue-600 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            {t("hero.welcome")}
          </motion.span>
          {t("hero.fName")}
          {t("hero.lName")}
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          {t("hero.subtitle")}
          {/* Front-End Developer & Graphic Designer */}
        </motion.h2>

        <motion.p
          className="mt-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Crafting elegant, user-friendly, and high-performance digital
          experiences for global brands. Specializing in UI/UX design, frontend
          & backend development, and creating scalable solutions that captivate
          audiences. Passionate about blending creativity with technology to
          bring ideas to life.
        </motion.p>


      </motion.div>
      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="/public/user.jpg"
            alt="Scarlett Rose"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
