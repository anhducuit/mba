import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfiniteSliderProps {
  children: ReactNode[];
  duration?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

/**
 * Component hiển thị slider di chuyển vô hạn từ phải sang trái hoặc ngược lại
 */
export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  duration = 25,
  direction = 'left',
  pauseOnHover = true,
}) => {
  const directionFactor = direction === 'left' ? -1 : 1;

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: direction === 'left' ? '0%' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0%' }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        <div className="flex">
          {children.map((child, index) => (
            <div key={`item-${index}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
        <div className="flex">
          {children.map((child, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
