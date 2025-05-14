import type { Variant } from "framer-motion";

// Fade in animation
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "none",
  delay: number = 0,
  duration: number = 0.4
): Record<string, Variant> => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};

// Scale animation
export const scaleIn = (
  delay: number = 0,
  duration: number = 0.4
): Record<string, Variant> => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};

// Stagger animation for children elements
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Record<string, Variant> => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Slide in animation
export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0,
  duration: number = 0.4
): Record<string, Variant> => {
  const offsets = {
    up: { y: "100%" },
    down: { y: "-100%" },
    left: { x: "100%" },
    right: { x: "-100%" },
  };

  return {
    hidden: {
      ...offsets[direction],
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};

// Bounce animation
export const bounce = (
  delay: number = 0,
  duration: number = 0.4
): Record<string, Variant> => {
  return {
    hidden: {
      y: 0,
    },
    visible: {
      y: [0, -15, 0],
      transition: {
        delay,
        duration,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };
};

// Rotation animation
export const rotate = (
  delay: number = 0,
  duration: number = 2
): Record<string, Variant> => {
  return {
    hidden: {
      rotate: 0,
    },
    visible: {
      rotate: 360,
      transition: {
        delay,
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
};

// Hover animation for buttons and interactive elements
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};
