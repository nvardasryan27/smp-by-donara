import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const results = [
  { image: "/src/assets/images/result-1.jpg" },
  { image: "/src/assets/images/result-2.jpg" },
  { image: "/src/assets/images/result-3.jpg" },
  { image: "/src/assets/images/result-4.jpg" },
  { image: "/src/assets/images/result-6.jpg" },
  { image: "/src/assets/images/result-5.jpg" },
  { image: "/src/assets/images/result-7.jpg" },
  { image: "/src/assets/images/result-8.jpg" },
  { image: "/src/assets/images/result-9.jpg" },
  { image: "/src/assets/images/result-10.jpg" },
  { image: "/src/assets/images/result-11.jpg" },
  { image: "/src/assets/images/result-12.jpg" },
  { image: "/src/assets/images/result-133.jpg" },
  { image: "/src/assets/images/result-14.jpg" },
];

const ease = [0.22, 1, 0.36, 1];
const itemsPerPage = 2;

const BeforeAfter = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [active, setActive] = useState(0);

  const totalPages = Math.ceil(results.length / itemsPerPage);

  const visibleResults = results.slice(
    active * itemsPerPage,
    active * itemsPerPage + itemsPerPage
  );

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
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
                key={`results-page-${active}`}
                className="results-images"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease }}
              >
                {visibleResults.map((item, index) => (
                  <div
                    className="result-image"
                    key={item.image}
                  >
                    <img
                      src={item.image}
                      alt={`${t.results.title} ${
                        active * itemsPerPage + index + 1
                      }`}
                    />
                  </div>
                ))}
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
              {String(totalPages).padStart(2, "0")}
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