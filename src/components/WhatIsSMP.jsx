
import { motion } from "motion/react";
import { Sparkles, Target, Palette } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";
import smpResult from "../assets/result.jpg";

const ease = [0.22, 1, 0.36, 1];

const icons = [Target, Palette, Sparkles];

const WhatIsSMP = () => {
  const { language } = useLanguage();
  const t = translations[language].whatIsSmp;

  return (
    <section className="what-smp-section" id="what-is-smp">
      <div className="smp-light smp-light-one" />
      <div className="smp-light smp-light-two" />

      <div className="what-smp-container">
        <motion.div
          className="what-smp-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="what-smp-eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSMP;
