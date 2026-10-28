import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  X,
  Plus,
} from "lucide-react";
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

const BeforeAfter = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [active, setActive] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [selectedResult, setSelectedResult] = useState(null);

  // Desktop: 2 images, mobile: 1 image
  useEffect(() => {
    const updateLayout = () => {
      setItemsPerPage(window.innerWidth <= 600 ? 1 : 2);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

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
      prev >= totalPages - 1 ? 0 : prev + 1
    );
  };

  // Close popup with Escape
  useEffect(() => {
    if (!selectedResult) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedResult(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedResult]);

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
            <span className="eyebrow">
              {t.results.eyebrow}
            </span>

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
                key={`${active}-${itemsPerPage}`}
                className="results-images"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease }}
              >
                {visibleResults.map((item, index) => {
                  const imageIndex =
                    active * itemsPerPage + index;

                  return (
                    <div
                      className="result-item"
                      key={item.image}
                    >
                      <button
                        type="button"
                        className="result-image"
                        onClick={() =>
                          setSelectedResult({
                            ...item,
                            index: imageIndex,
                          })
                        }
                        aria-label={`View result ${imageIndex + 1}`}
                      >
                        <img
                          src={item.image}
                          alt={`${t.results.title} ${imageIndex + 1}`}
                          loading="lazy"
                        />

                        <span className="result-zoom">
                          <ArrowUpRight size={22} />
                        </span>
                      </button>

                      <div className="result-image-info">
                        <span className="result-image-number">
                          {String(imageIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="result-image-label">
                          {t.results.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="result-controls">
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>

            <div className="result-arrows">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous result"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next result"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RESULT DETAILS POPUP */}
      <AnimatePresence>
        {selectedResult && (
          <motion.div
            className="result-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedResult(null)}
          >
            <motion.div
              className="result-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${t.results.title} ${selectedResult.index + 1}`}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="result-modal-close"
                onClick={() => setSelectedResult(null)}
                aria-label="Close popup"
              >
                <X size={21} />
              </button>

              <div className="result-modal-image">
                <img
                  src={selectedResult.image}
                  alt={`${t.results.title} ${selectedResult.index + 1}`}
                />
              </div>

              <div className="result-modal-content">
                <span className="result-modal-eyebrow">
                  SMP BY DONARA ·{" "}
                  {String(selectedResult.index + 1).padStart(2, "0")}
                </span>

                <h3>{t.results.title}</h3>

                <p>{t.results.description}</p>

                <a
                  href="#contact"
                  className="result-modal-book"
                  onClick={() => setSelectedResult(null)}
                >
                  {t.results.book}
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeforeAfter;