// import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";
import BlurText from "./text/BlurText";
import { useTranslation } from "react-i18next";

export const GallarySection = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      id="hero"
      style={{ width: '100%', height: '100vh' }}
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

      <div className="mb-12 flex justify-center ">
        <BlurText
          text="My"
          delay={150}
          animateBy="litters"
          direction="top"
          className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
        />
        <BlurText
          text=" Gallary"
          delay={150}
          animateBy="litter"
          direction="top"
          className="text-3xl mb-8 md:text-4xl font-bold"
        />
      </div>


      <DomeGallery
      />
    </motion.div>
  );
};
