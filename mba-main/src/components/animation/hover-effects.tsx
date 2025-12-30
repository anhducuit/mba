import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  amplitude?: number; // Độ lớn của hiệu ứng nổi
  duration?: number; // Thời gian hiệu ứng
  className?: string;
}

/**
 * Component tạo hiệu ứng nổi nhẹ nhàng cho các phần tử
 */
export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  amplitude = 10,
  duration = 3,
  className = '',
}) => {
  return (
    <motion.div
      animate={{
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface TiltElementProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotateIntensity?: number;
  perspective?: number;
  transitionDuration?: number;
}

/**
 * Component tạo hiệu ứng tilt 3D khi hover chuột
 */
export const TiltElement: React.FC<TiltElementProps> = ({
  children,
  className = '',
  scale = 1.05,
  rotateIntensity = 10,
  perspective = 1000,
  transitionDuration = 0.3,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale,
        rotateX: rotateIntensity,
        rotateY: rotateIntensity,
        transition: { duration: transitionDuration },
      }}
      style={{ perspective }}
    >
      {children}
    </motion.div>
  );
};

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  color?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: number;
  [key: string]: any;
}

/**
 * Button với hiệu ứng shimmer khi hover
 */
export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = '',
  color = '#3f87f5',
  shimmerColor = 'rgba(255, 255, 255, 0.8)',
  shimmerSize = '30%',
  shimmerDuration = 1.5,
  ...props
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      initial={false}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
          backgroundSize: shimmerSize,
        }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          ease: 'linear',
          duration: shimmerDuration,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      {children}
    </motion.button>
  );
};

interface PulseElementProps {
  children: ReactNode;
  className?: string;
  pulseColor?: string;
  duration?: number;
  scale?: number;
}

/**
 * Component tạo hiệu ứng nhịp đập cho các phần tử
 */
export const PulseElement: React.FC<PulseElementProps> = ({
  children,
  className = '',
  pulseColor = 'rgba(63, 135, 245, 0.5)',
  duration = 2,
  scale = 1.1,
}) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-inherit"
        animate={{
          boxShadow: [
            `0 0 0 0 ${pulseColor}`,
            `0 0 0 10px rgba(0, 0, 0, 0)`,
          ],
          scale: [1, scale, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      {children}
    </div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * Component tạo hiệu ứng parallax khi cuộn
 */
export const ParallaxElement: React.FC<ParallaxProps> = ({
  children,
  className = '',
  offset = 50,
  direction = 'up',
}) => {
  const getDirectionValues = () => {
    switch (direction) {
      case 'up':
        return { y: [-offset, offset] };
      case 'down':
        return { y: [offset, -offset] };
      case 'left':
        return { x: [-offset, offset] };
      case 'right':
        return { x: [offset, -offset] };
    }
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 'some' }}
      variants={{
        initial: { ...getDirectionValues() },
        animate: {
          x: 0,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 30,
            damping: 30,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
