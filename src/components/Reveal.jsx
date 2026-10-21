import { motion } from "motion/react";

const animations = {
  up: {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  down: {
    hidden: {
      opacity: 0,
      y: -70,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  left: {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={animations[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}