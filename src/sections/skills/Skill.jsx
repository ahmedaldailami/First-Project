import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export const Skill = ({skill}) => {
  const { t } = useTranslation();

  return (
    <motion.div
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
  );
};
