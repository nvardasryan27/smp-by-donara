
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";
import heroBanner from "../assets/hero--banner-2.png";
import heroBannerMobile from "../assets/hero-banner-2-mobile.png";

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 97}%`,
  top: `${(i * 53 + 7) % 94}%`,
  delay: `${(i % 8) * -0.9}s`,
  duration: `${7 + (i % 6) * 1.5}s`,
  size: i % 5 === 0 ? 4 : 2,
}));

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="hero"
      id="home"
      style={{
        "--hero-image": `url(${heroBanner})`,
        "--hero-image-mobile": `url(${heroBannerMobile})`,
      }}
    >
      <div className="hero-effects" aria-hidden="true">
        <motion.div
          className="hero-glow hero-glow-one"
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="hero-glow hero-glow-two"
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="hero-particles">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="hero-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        <div className="hero-vignette" />
      </div>

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.16,
              delayChildren: 0.15,
            },
          },
        }}
      >
        <motion.span
          className="hero-eyebrow"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease }}
        >
          {t.hero.eyebrow}
        </motion.span>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease }}
        >
          {t.hero.title1}
          <span>{t.hero.titleAccent1}</span>
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease }}
        >
          {t.hero.title2}
          <span>{t.hero.titleAccent2}</span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.primaryButton}
          </motion.a>

          <motion.a
            href="#results"
            className="btn btn-secondary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.secondaryButton}
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease }}
      >
        <span>{t.hero.scroll}</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ display: "inline-flex" }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;