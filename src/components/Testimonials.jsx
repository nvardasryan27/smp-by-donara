
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const ease = [0.22, 1, 0.36, 1];

const Testimonials = () => {
  const { language } = useLanguage();

  const current = translations[language] ?? translations.hy;
  const testimonialData =
    current.testimonials ?? translations.hy.testimonials;

  return (
    <section className="section testimonials">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="eyebrow">
            {testimonialData.eyebrow}
          </span>

          <h2>{testimonialData.title}</h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {testimonialData.items.map((item) => (
            <motion.article
              className="testimonial-card"
              key={`${language}-${item.name}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease },
                },
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease }}
            >
              <Quote className="quote-icon" size={30} />

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p>"{item.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
