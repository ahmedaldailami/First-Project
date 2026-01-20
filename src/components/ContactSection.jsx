// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitter,
// } from "lucide-react";
// import {  } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HeadTitle } from "./HeadTitle";

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-50 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/*           start Section Header         */}
        <HeadTitle Section="contact" />
        {/*           End Section Header         */}

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.contactInfo")}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Mail className="h-6 w-6 text-primary" />{" "} */}
                  <p className="h-6 w-6 text-primary">p</p>
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.email")}</h4>
                  <a
                    href="mailto:Eng.ahmedbenadnan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    eng.ahmedbenadnan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Phone className="h-6 w-6 text-primary" />{" "} */}
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.phone")}</h4>
                  <a
                    href="tel:+967772554203"
                    className="text-muted-foreground text-center hover:text-primary transition-colors"
                  >
                    +967 (772) 554-203
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <MapPin className="h-6 w-6 text-primary" />{" "} */}
                </div>
                <div>
                  <h4 className="font-medium"> {t("contact.location")}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {t("contact.locSub")}
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="pt-8">
              <h4 className="font-medium mb-4">{t("contact.socialTitle")}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/anas-sultan-502119242/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/anas_sultan_" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/w1n_er_/" target="_blank">
                  <Instagram />
                </a>
                
              </div>
            </div> */}
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> {t("contact.form.title")}</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("contact.form.name.title")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.name.PH")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("contact.form.email.title")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.email.PH")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {t("contact.form.message.title")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.form.message.PH")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? t("contact.form.btnSending") : t("contact.form.btnSend")}
                {/* <Send size={16} /> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
