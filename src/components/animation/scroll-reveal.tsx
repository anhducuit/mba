import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './motion-variants';

type ScrollRevealProps = {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  amount?: number | 'some' | 'all';
};

/**
 * ScrollReveal component that adds animation when elements enter the viewport
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
  amount = 0.3,
}) => {
  const variants = fadeIn(direction, delay, duration);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollRevealGroup component for staggered animations
 */
export const ScrollRevealGroup: React.FC<
  ScrollRevealProps & { staggerChildren?: number }
> = ({
  children,
  delay = 0,
  staggerChildren = 0.1,
  once = true,
  className = '',
  amount = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};

/**
 * Staggered items in a horizontal layout
 */
export const HorizontalScroll: React.FC<
  ScrollRevealProps & { staggerChildren?: number; gap?: number }
> = ({
  children,
  delay = 0,
  staggerChildren = 0.1,
  once = true,
  className = '',
  amount = 0.1,
  gap = 4,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
      className={`flex flex-wrap ${gap ? `gap-${gap}` : ''} ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              variants={{
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  }
                },
                hidden: { opacity: 0, x: 30 },
              }}
            >
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};
