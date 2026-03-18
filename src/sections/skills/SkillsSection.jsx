import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Marquee } from "./Marquee";
import { HeadTitle } from "../../components/HeadTitle";
import { skills } from "./skills";
import { weDo } from "./weDo";
import { Skill } from "./Skill";
export const SkillsSection = () => {
  const { t } = useTranslation();

  const trustedLogosText = [
    "HTML5",
    "Css3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git/GitHub",
    "Figma",
    "VS Code",
  ];

  return (
    <section id="skills" className="py-30 px-4 relative">
      {/*           start Section Header         */}
      <HeadTitle Section="skills" />
      {/*           End Section Header         */}

      <div className="mb-10">
        {skills.map((categ, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-2">
            {categ.map((item, i) => (
              <Skill skill={item} key={i} />
            ))}
          </div>
        ))}
      </div>

      <Marquee data={weDo} />
    </section>
  );
};
