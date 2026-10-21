import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";
import aboutBanner from "../assets/Donara-photo.jpg";

const ease = [0.22, 1, 0.36, 1];

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    t.about.experience,
    t.about.quality,
    t.about.care,
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              className="about-image"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease }}
            >
              <img
                src={aboutBanner}
                alt="Donara - SMP specialist"
              />
            </motion.div>

            <motion.div
              className="about-badge"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
            >
              <span>SMP</span>
              <small>BY DONARA</small>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {t.about.eyebrow}
            </motion.span>

            <h2>{t.about.title}</h2>

            <p className="about-description">
              {t.about.description}
            </p>

            <p>{t.about.text}</p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  className="about-feature"
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + index * 0.12,
                    ease,
                  }}
                >
                  <span className="check-icon">
                    <Check size={15} />
                  </span>

                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
