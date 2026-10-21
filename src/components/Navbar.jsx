import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#results", label: t.nav.results },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const languageButtons = (location) =>
    ["hy", "en", "ru"].map((lang) => (
      <button
        key={lang}
        className={language === lang ? "active" : ""}
        onClick={() => changeLanguage(lang)}
        aria-label={`Change language to ${lang.toUpperCase()}`}
        aria-pressed={language === lang}
      >
        {lang.toUpperCase()}
      </button>
    ));

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="container navbar-inner">
        <motion.a
          href="#home"
          className="logo"
          onClick={handleLinkClick}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          SMP <span>by Donara</span>
        </motion.a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="nav-book"
            onClick={handleLinkClick}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {t.nav.book}
          </motion.a>

          <div className="language-switcher mobile-language">
            {languageButtons("mobile")}
          </div>
        </nav>

        <div className="navbar-actions">
          <div className="language-switcher desktop-language">
            {languageButtons("desktop")}
          </div>

          <motion.button
            className="menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                style={{ display: "inline-flex" }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
