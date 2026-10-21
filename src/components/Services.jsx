import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.hy;

  const [selectedService, setSelectedService] = useState(null);

  // Close popup with Escape and prevent background scrolling.
  useEffect(() => {
    if (!selectedService) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  return (
    <section className="section services" id="services">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2>{t.services.title}</h2>
          </div>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {t.services.items.map((service) => (
            <motion.article
              className="service-card"
              key={service.number}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease }}
              role="button"
              tabIndex={0}
              aria-label={service.title}
              onClick={() => setSelectedService(service)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedService(service);
                }
              }}
            >
              <div className="service-image">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    loading="lazy"
                  />
                )}

                <div className="service-image-overlay" />

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <span className="service-more">
                  {t.services.learnMore}
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* SERVICE DETAILS POPUP */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="service-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="service-modal-close"
                type="button"
                aria-label="Close popup"
                onClick={() => setSelectedService(null)}
              >
                <X size={21} />
              </button>

              <div className="service-modal-image">
                {selectedService.image && (
                  <img
                    src={selectedService.image}
                    alt={
                      selectedService.imageAlt ||
                      selectedService.title
                    }
                  />
                )}

                <span className="service-modal-number">
                  {selectedService.number}
                </span>
              </div>

              <div className="service-modal-content">
                <span className="service-modal-eyebrow">
                  {t.services.eyebrow}
                </span>

                <h2 id="service-modal-title">
                  {selectedService.title}
                </h2>

                <p className="service-modal-description">
                  {selectedService.fullDescription ||
                    selectedService.description}
                </p>

                {selectedService.details?.length > 0 && (
                  <ul className="service-modal-details">
                    {selectedService.details.map((detail, index) => (
                      <li key={index}>
                        <span className="service-detail-dot" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  className="service-modal-book"
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                >
                  {t.services.bookNow}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;