// import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollFloat from "./text/ScrollFloat";
import BlurText from "./text/BlurText";

export const AboutSection = () => {
  const { t } = useTranslation();
  const lang = document.documentElement.lang;




  return (
    <section id="about" className="py-30 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 flex justify-center ">
          {lang === "en" ?
            <>
              <BlurText
                text={t("about.title1")}
                delay={150}
                animateBy="litter"
                direction="top"
                className="text-3xl mb-8 md:text-4xl font-bold"
              />
              <BlurText
                text={t("about.title2")}
                delay={500}
                animateBy="litters"
                direction="bottom"
                className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
              />
            </>
            :
            <>
              <BlurText
                text={t("about.title1")}
                delay={500}
                animateBy="words"
                direction="top"
                className="text-3xl mb-8 md:text-4xl font-bold"
              />
              <BlurText
                text={t("about.title2")}
                delay={500}
                animateBy="words"
                direction="bottom"
                className="text-3xl mb-8 md:text-4xl font-bold text-primarylw"
              />
            </>
}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {lang === "en" ?
              <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
              >
                {t("about.subTitle")}
              </ScrollFloat> : <h3 className="text-3xl font-bold">{t("about.subTitle")}</h3>
            }

            <p className="text-muted-foreground">{t("about.subtitles2")}</p>

            {/* <p className="text-muted-foreground">{t("about.subtitles2")}</p> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="px-6 py-2 rounded-full border border-primarylw text-primarylw hover:scale-110 duration-500"
              >
                {" "}
                {t("about.contactBtn")}
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primarylw hover:scale-110 duration-500"
              >
                {t("about.CVbtn")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Code className="h-6 w-6 text-primary" /> */}
                  <span className="h-6 w-6" >p</span>

                </div>

                <div className={lang === "en" ? "text-left" : "text-right"} >
                  <h4 className="font-semibold text-lg">
                    {t("about.card1.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.card1.sub")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <User className="h-6 w-6 text-primary" /> */}
                </div>
                <div className={lang === "en" ? "text-left" : "text-right"}>
                  <h4 className="font-semibold text-lg">
                    {t("about.card2.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.card2.sub")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Briefcase className="h-6 w-6 text-primary" /> */}
                </div>

                <div className={lang === "en" ? "text-left" : "text-right"}>
                  <h4 className="font-semibold text-lg">
                    {t("about.card3.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.card3.sub")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
