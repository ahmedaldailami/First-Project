import { useState } from "react";
import { useTranslation } from "react-i18next";
import TiltedCard from "../components/TiltedCard";
import { motion } from "framer-motion";
import { HeadTitle } from "../components/HeadTitle";
import { projects } from "../data/projects";

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
        {/*          start  Projects  Catigories        */}

        {/*            Projects          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredprojects.map((project, key) => (
            <motion.div
              key={key}
              className="rounded-lg overflow-hidden shadow-xs"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
            >
              <TiltedCard
                imageSrc={project.image}
                altText=""
                captionText={project.title}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="190px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {" "}
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          {/* <ExternalLink size={20} /> */}
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          {/* <Github size={20} /> */}
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>
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
          {" "}
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
