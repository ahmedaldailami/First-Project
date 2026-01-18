// import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollFloat from "./text/ScrollFloat";
import BlurText from "./text/BlurText";
import { motion } from "framer-motion";
import { Marquee } from "./Marquee";

export const SkillsSection = () => {
  const { t } = useTranslation();
  const lang = document.documentElement.lang;




  return (
    <section id="skills" className="py-30 px-4 relative">

      {/*          start Section Header         */}
      <div className="mb-12 flex justify-center ">
        {lang === "en" ?
          <>
            <BlurText
              text={t("skills.title1")}
              delay={150}
              animateBy="litter"
              direction="top"
              className="text-3xl mb-8 md:text-4xl font-bold"
            />
            <BlurText
              text={t("skills.title2")}
              delay={500}
              animateBy="litters"
              direction="bottom"
              className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
            />
          </>
          :
          <>
            <BlurText
              text={t("skills.title1")}
              delay={500}
              animateBy="words"
              direction="top"
              className="text-3xl mb-8 md:text-4xl font-bold"
            />
            <BlurText
              text={t("skills.title2")}
              delay={500}
              animateBy="words"
              direction="bottom"
              className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
            />
          </>
        }
      </div>
      {/*           End Section Header         */}

      <Marquee />

      <div className="text-center mt-12">
          <a
          className="custom-card w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/anassultanali"
          >
            {t("projects.btn")} 
          </a>
        </div>

    </section >
  );
};
