import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

export const Marquee = () => {
    // const { t } = useTranslation();
    // const lang = document.documentElement.lang;



    const trustedLogosText = [
        'HTML/CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Git/GitHub',
        'Figma',
        'VS Code',
    ];

    return (
        <>
            {/* Skills MARQUEE */}
            <motion.div className="border-y border-white/6 bg-black/10 max-md:mt-10"
                initial={{ y: 60, opacity: 0 }
                }
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-2 text-sm md:text-base font-semibold text-forground hover:text-gray-300 tracking-wide transition-colors"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>

    )
}

