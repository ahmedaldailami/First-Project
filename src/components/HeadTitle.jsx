import { useTranslation } from "react-i18next";
import BlurText from "./text/BlurText";

export const HeadTitle = ({ Section }) => {
    const { t } = useTranslation();
    const lang = document.documentElement.lang;




    return (
        <>

            {/*           start Section Header         */}
            <div className="mb-2 flex justify-center ">
                {lang === "en" ?
                    <>
                        <BlurText
                            text={t(`${Section}.title1`)}
                            delay={150}
                            animateBy="litter"
                            direction="top"
                            className="text-3xl mb-8 md:text-4xl font-bold"
                        />
                        <BlurText
                            text={t(`${Section}.title2`)}
                            delay={200}
                            animateBy="litters"
                            direction="bottom"
                            className="text-3xl mb-8 md:text-4xl font-bold text-primary"
                        />
                    </>
                    : lang === "ar" ?
                        <>
                            <BlurText
                                text={t(`${Section}.title1`)}
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-3xl mb-8 md:text-4xl font-bold"
                            />
                            <BlurText
                                text={t(`${Section}.title2`)}
                                delay={150}
                                animateBy="words"
                                direction="bottom"
                                className="text-3xl mb-8 md:text-4xl font-bold text-primary"
                            />
                        </>
                        : <></>
                }
            </div>
            {/*           End Section Header         */}
        </>
    )
}