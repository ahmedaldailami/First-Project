import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Marquee } from "./Marquee";
import { HeadTitle } from "./HeadTitle";

export const SkillsSection = () => {
  const { t } = useTranslation();


  const trustedLogosText = [
    'HTML5',
    'Css3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Git/GitHub',
    'Figma',
    'VS Code',
  ];



  return (
    <section id="skills" className="py-30 px-4 relative">

      {/*           start Section Header         */}
      <HeadTitle Section="skills" />
      {/*           End Section Header         */}



      <Marquee />



      <div className="flex flex-wrap justify-center gap-2">
        {trustedLogosText.map((skill, i) => (
          <motion.div key={i} className="w-fit font-bold p-3 rounded-bl-xl rounded-tr-2xl bg-black/10 duration-1000 hover:bg-black/20 hover:-translate-y-2 hover:scale-110  max-md:mt-10 "
            initial={{ y: 60, opacity: 0 }
            }
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>




    </section >
  );
};
