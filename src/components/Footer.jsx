import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const ease = [0.22, 1, 0.36, 1];

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            className="footer-brand"
            variants={footerItem}
            transition={{ duration: 0.65, ease }}
          >
            <a href="#home" className="logo">
              SMP <span>by Donara</span>
            </a>

            <p>{t.footer.description}</p>
          </motion.div>

          <motion.div
            className="footer-links"
            variants={footerItem}
            transition={{ duration: 0.65, ease }}
          >
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#results">{t.nav.results}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contact">{t.nav.contact}</a>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/smp_by_donara/"
            target="_blank"
            rel="noreferrer"
            className="footer-instagram"
            variants={footerItem}
            transition={{ duration: 0.65, ease }}
            whileHover={{ y: -3 }}
          >
            <span className="instagram-icon">◎</span>
            Instagram
          </motion.a>

          <motion.button
            className="back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            variants={footerItem}
            transition={{ duration: 0.65, ease }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>
            © {new Date().getFullYear()} SMP by Donara.{" "}
            {t.footer.rights}
          </span>

          <span>{t.footer.privacy}</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;