import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "./motion-variants";

interface AnimatedListProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer(staggerDelay, delay)}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
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

export const AnimatedGrid: React.FC<
  AnimatedListProps & { columns?: number; gap?: number }
> = ({ children, columns = 3, gap = 4, ...props }) => {
  return (
    <AnimatedList
      {...props}
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-${gap} ${props.className}`}
    >
      {children}
    </AnimatedList>
  );
};
