import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";
import resultBanner from "../assets/result.jpg";

const results = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1];

const BeforeAfter = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [active, setActive] = useState(0);

  const current = results[active];

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? results.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === results.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section results" id="results">
      <div className="container">
        <motion.div
          className="section-heading results-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <span className="eyebrow">{t.results.eyebrow}</span>
            <h2>{t.results.title}</h2>
          </div>

          <p>{t.results.description}</p>
        </motion.div>

        <motion.div
          className="before-after-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="before-after-card">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="result-image"
                key={`before-${active}`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, ease }}
              >
                <img
                  src={current.before}
                  alt={t.results.before}
                />

                <span>{t.results.before}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="result-image"
                key={`after-${active}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease }}
              >
                <img
                  src={current.after}
                  alt={t.results.after}
                />

                <span>{t.results.after}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="result-controls"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(results.length).padStart(2, "0")}
            </span>

            <div>
              <motion.button
                onClick={previous}
                aria-label="Previous"
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.92 }}
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                onClick={next}
                aria-label="Next"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.92 }}
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
