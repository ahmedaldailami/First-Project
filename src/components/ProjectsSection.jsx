import { useState } from "react";
// import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import MagicBento from "./MagicBento";
import TiltedCard from "./TiltedCard";
import { motion } from "framer-motion";
import BlurText from "./text/BlurText";



export const ProjectsSection = () => {
  const { t } = useTranslation();
  const lang = document.documentElement.lang;

  const projects = [
    {
      id: 1,
      category: "backend",
      title: t("projects.project1.title"),
      description: t("projects.project1.sub"),
      image: "/projects/project1.png",
      tags: ["Bootstrab"],
      demoUrl: "https://anassultanali.github.io/Mohamed-Ali-Club/",
      githubUrl: "https://github.com/anassultanali/Mohamed-Ali-Club",
    },
    {
      id: 2,
      category: "backend",
      title: t("projects.project2.title"),
      description: t("projects.project2.sub"),
      image: "/projects/project2.png",
      tags: ["Tailwind"],
      demoUrl: "https://anassultanali.github.io/Landing_page_tailwind/",
      githubUrl: "https://github.com/anassultanali/Landing_page_tailwind",
    },
    {
      id: 3,
      category: "backend",
      title: t("projects.project3.title"),
      description: t("projects.project3.sub"),
      image: "/projects/project3.png",
      tags: ["React", "Tailwind"],
      demoUrl: "https://moviesrecommendation1.netlify.app/",
      githubUrl: "https://github.com/anassultanali/React-Movies-Recommendation",
    },
    {
      id: 3,
      category: "frontend",
      title: t("projects.project3.title"),
      description: t("projects.project3.sub"),
      image: "/projects/project4.png",
      tags: ["React", "Tailwind"],
      demoUrl: "https://moviesrecommendation1.netlify.app/",
      githubUrl: "https://github.com/anassultanali/React-Movies-Recommendation",
    },
    {
      id: 4,
      category: "frontend",
      title: t("projects.project3.title"),
      description: t("projects.project3.sub"),
      image: "/projects/project5.png",
      tags: ["React", "Tailwind"],
      demoUrl: "https://moviesrecommendation1.netlify.app/",
      githubUrl: "https://github.com/anassultanali/React-Movies-Recommendation",
    },
    {
      id: 5,
      category: "frontend",
      title: t("projects.project3.title"),
      description: t("projects.project3.sub"),
      image: "/projects/project6.png",
      tags: ["React", "Tailwind"],
      demoUrl: "https://moviesrecommendation1.netlify.app/",
      githubUrl: "https://github.com/anassultanali/React-Movies-Recommendation",
    },
    {
      id: 6,
      category: "frontend",
      title: t("projects.project3.title"),
      description: t("projects.project1.sub"),
      image: "/projects/project5.png",
      tags: ["React", "Tailwind"],
      demoUrl: "https://moviesrecommendation1.netlify.app/",
      githubUrl: "https://github.com/anassultanali/React-Movies-Recommendation",
    },
  ];

  const categories = [t("projects.all"), "frontend", "backend", t("projects.tools")];

  const [activeCategory, setActiveCategory] = useState(t("projects.all"));

  const filteredprojects = projects.filter(
    (projects) => activeCategory === t("projects.all") || projects.category === activeCategory
  );
  return (
    <section id="projectss" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/*           start Section Header         */}
        <div className="mb-12 flex justify-center ">
          {lang === "en" ?
            <>
              <BlurText
                text={t("projects.title1")}
                delay={150}
                animateBy="litter"
                direction="top"
                className="text-3xl mb-8 md:text-4xl font-bold"
              />
              <BlurText
                text={t("projects.title2")}
                delay={200}
                animateBy="litters"
                direction="bottom"
                className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
              />
            </>
            :
            <>
              <BlurText
                text={t("projects.title1")}
                delay={500}
                animateBy="words"
                direction="top"
                className="text-3xl mb-8 md:text-4xl font-bold"
              />
              <BlurText
                text={t("projects.title2")}
                delay={500}
                animateBy="words"
                direction="bottom"
                className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
              />
            </>
          }
        </div>
        {/*           End Section Header         */}

        <div className="flex flex-wrap justify-center md:gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={
                `px-5 py-2 duration-300 capitalize rounded-2xl
                ${activeCategory === category
                  ? " gradient-border"
                  : "neon-pulse"}`
              }
            >
              {category}
            </button>
          ))}
        </div>

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
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
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
                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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
                        <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/anassultanali"
          >
            {t("projects.btn")} {lang === "en" ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          </a>
        </div> */}


      </div>
    </section>
  );
};
