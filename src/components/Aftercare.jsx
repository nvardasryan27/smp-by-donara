import { motion } from "motion/react";
import {
  Droplets,
  Dumbbell,
  Sun,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const icons = [Dumbbell, Sun, Heart];

const ease = [0.22, 1, 0.36, 1];

const Aftercare = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.hy;
  const content = t.aftercare;

  if (!content) return null;

  return (
    <section className="section aftercare" id="aftercare">
      <div className="container">
        <motion.div
          className="aftercare-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="eyebrow">{content.eyebrow}</span>

          <h2>{content.title}</h2>
        </motion.div>

        <div className="aftercare-grid">
          {content.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                className="aftercare-card"
                key={`${language}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="aftercare-card-top">
                  <div className="aftercare-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <span className="aftercare-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="aftercare-card-line" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="aftercare-note"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="aftercare-note-icon">
            <Heart size={20} strokeWidth={1.5} />
          </div>

          <div className="aftercare-note-content">
            <h3>{content.noteTitle}</h3>
            <p>{content.note}</p>
          </div>

          <a
            className="aftercare-link"
            href="#contact"
            aria-label={content.cta}
          >
            <span>{content.cta}</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Aftercare;