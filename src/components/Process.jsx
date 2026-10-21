import { motion } from "motion/react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const ease = [0.22, 1, 0.36, 1];

const Process = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section process" id="process">
      <div className="container">
        <motion.div
          className="section-heading process-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <span className="eyebrow">{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
          </div>
        </motion.div>

        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.14 },
            },
          }}
        >
          {t.process.steps.map((step) => (
            <motion.article
              className="process-item"
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease },
                },
              }}
            >
              <motion.span
                className="process-number"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                {step.number}
              </motion.span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;