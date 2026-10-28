import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const ease = [0.22, 1, 0.36, 1];

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <motion.div
            className="faq-intro"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="eyebrow">{t.faq.eyebrow}</span>

            <h2>{t.faq.title}</h2>
          </motion.div>

          <motion.div
            className="faq-list"
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {t.faq.items.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  className={`faq-item ${
                    isOpen ? "open" : ""
                  }`}
                  key={item.question}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease },
                    },
                  }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease }}
                    >
                      {isOpen ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </motion.span>
                  </button>

                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
