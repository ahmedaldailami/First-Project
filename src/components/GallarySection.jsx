import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";
import { HeadTitle } from "./HeadTitle";

export const GallarySection = () => {

  return (
    <motion.div
      id="gallary"
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


      {/*           start Section Header         */}
      <HeadTitle Section="gallary" />
      {/*           End Section Header         */}

      <DomeGallery
      />
    </motion.div>
  );
};
