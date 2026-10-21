
import { motion } from "motion/react";
import {
  Sparkles,
  UserRound,
  Heart,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const icons = [
  Sparkles,
  UserRound,
  ShieldCheck,
  Heart,
];

const WhyDonara = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.hy;

  return (
    <section className="section why-donara">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.why.eyebrow}</span>
            <h2>{t.why.title}</h2>
          </div>
        </div>

        <div className="why-grid">
          {t.why.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                className="why-card"
                key={`${language}-${index}`}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <div className="why-icon">
                  <Icon size={22} />
                </div>

                <span className="why-number">
                  0{index + 1}
                </span>

                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDonara;
