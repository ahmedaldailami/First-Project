import TiltedCard from "./TiltedCard";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <motion.div
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
                  🔗
                  {/* <ExternalLink size={20} /> */}
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  😺
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
  );
};
export default Project;
