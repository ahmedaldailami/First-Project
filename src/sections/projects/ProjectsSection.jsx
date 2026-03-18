import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HeadTitle } from "../../components/HeadTitle";
import { projects } from "./projects";
import Project from "./Project";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const categories = [t("projects.all"), "HTML&CSS", "JS", "React"];

  const [activeCategory, setActiveCategory] = useState(t("projects.all"));

  const filteredprojects = projects.filter(
    (project) =>
      activeCategory === t("projects.all") ||
      project.category === activeCategory,
  );
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/*           start Section Header         */}
        <HeadTitle Section="projects" />
        {/*           End Section Header         */}

        {/*          start  Projects  Catigories        */}
        <div className="flex flex-wrap justify-center md:gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 duration-300 capitalize rounded-2xl hover:-translate-y-2 hover:scale-110 
                ${activeCategory === category ? " gradient-border" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
        {/*          end  Projects  Catigories        */}

        {/*            Projects          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredprojects.map((item, key) => (
            <Project project={item} key={key} />
          ))}
        </div>

        {/*         viwe   my   github      */}
        <motion.div
          className="px-6 py-2 w-fit m-auto my-10 font-bold rounded-full border-[1.5px] border-primary text-primary hover:scale-110 duration-500"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ahmedaldailami"
          >
            {t("projects.btn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
