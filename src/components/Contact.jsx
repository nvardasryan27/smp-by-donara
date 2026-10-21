import { motion } from "motion/react";
import {
  MessageCircle,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 55, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease }}
        >
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <span className="eyebrow">
              {t.contact.eyebrow}
            </span>

            <h2>{t.contact.title}</h2>

            <p>{t.contact.description}</p>

            <div className="contact-buttons">
              <motion.a
                href="https://www.instagram.com/smp_by_donara/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="instagram-icon">◎</span>
                <span>{t.contact.instagram}</span>
                <ArrowUpRight size={17} />
              </motion.a>

              <motion.a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={20} />
                <span>{t.contact.whatsapp}</span>
                <ArrowUpRight size={17} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="contact-info-item">
              <Phone size={20} />

              <div>
                <span>{t.contact.phone}</span>
                <a href="tel:+37433040331">
                  +374 33 04 03 31
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <MapPin size={20} />

              <div>
                <span>{t.contact.location}</span>
                <strong>Yerevan, Armenia</strong>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="tel:+37433040331"
            className="btn btn-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {t.contact.book}
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
