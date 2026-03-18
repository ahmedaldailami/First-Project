import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Marquee } from "../components/Marquee";
import { HeadTitle } from "../components/HeadTitle";
import { skills } from "../data/skills";
import { weDo } from "../data/weDo";
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
            {categ.map((skill, i) => (
              <motion.div
                key={i}
                className="w-fit font-bold shadow-2xl p-3 rounded-bl-xl rounded-tr-2xl bg-card duration-1000  hover:-translate-y-2 hover:scale-110 mt-5 "
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <Marquee data={weDo} />
    </section>
  );
};
