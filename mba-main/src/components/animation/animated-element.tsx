import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";
import { fadeIn, scaleIn, slideIn, staggerContainer, bounce, rotate } from "./motion-variants";

type AnimationType = "fade" | "scale" | "slide" | "stagger" | "bounce" | "rotate";
type DirectionType = "up" | "down" | "left" | "right" | "none";

interface AnimatedElementProps extends MotionProps {
  children: ReactNode;
  type: AnimationType;
  direction?: DirectionType;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: boolean;
  once?: boolean;
  amount?: number | "some" | "all";
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  type = "fade",
  direction = "none",
  delay = 0,
  duration = 0.4,
  className = "",
  viewport = true,
  once = true,
  amount = 0.3,
  ...rest
}) => {
  const getVariants = () => {
    switch (type) {
      case "fade":
        return fadeIn(direction, delay, duration);
      case "scale":
        return scaleIn(delay, duration);
      case "slide":
        return slideIn(direction === "none" ? "up" : direction, delay, duration);
      case "stagger":
        return staggerContainer(delay, duration);
      case "bounce":
        return bounce(delay, duration);
      case "rotate":
        return rotate(delay, duration);
      default:
        return fadeIn(direction, delay, duration);
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView={viewport ? "visible" : undefined}
      animate={!viewport ? "visible" : undefined}
      viewport={viewport ? { once, amount } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText: React.FC<AnimatedElementProps & { as?: keyof JSX.IntrinsicElements }> = ({
  as = "p",
  children,
  ...props
}) => {
  const Component = motion[as as keyof typeof motion];
  return (
    <AnimatedElement {...props}>
      {Component ? (
        <Component>{children}</Component>
      ) : (
        children
      )}
    </AnimatedElement>
  );
};

export const AnimatedImage: React.FC<AnimatedElementProps & React.ImgHTMLAttributes<HTMLImageElement>> = ({
  children,
  ...props
}) => {
  return (
    <AnimatedElement {...props}>
      {children}
    </AnimatedElement>
  );
};

export const AnimatedButton: React.FC<AnimatedElementProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <AnimatedElement 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </AnimatedElement>
  );
};
