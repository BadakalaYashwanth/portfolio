export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 0,
    },
  },
};

export const hoverScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const iconHover = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
  },
  hover: { scale: 1.15, rotate: 5, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.9, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } },
};
