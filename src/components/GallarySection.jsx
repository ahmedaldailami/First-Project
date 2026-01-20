import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";
import { useTranslation } from "react-i18next";
import { HeadTitle } from "./HeadTitle";

export const GallarySection = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      id="Gallary"
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
