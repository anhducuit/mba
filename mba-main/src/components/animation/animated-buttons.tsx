import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Định nghĩa các biến thể cho button
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-mba-primary text-white hover:bg-mba-primary/90",
        secondary: "bg-mba-secondary text-white hover:bg-mba-secondary/90",
        outline: "border border-mba-primary text-mba-primary hover:bg-mba-primary/10",
        ghost: "text-mba-primary hover:bg-mba-primary/10",
        link: "text-mba-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Props cho AnimatedButton
interface MotionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animationType?: 'bounce' | 'scale' | 'shimmer' | 'pulse' | 'glow' | 'none';
}

export const MotionButton: React.FC<MotionButtonProps> = ({
  children,
  className,
  variant,
  size,
  asChild = false,
  icon,
  iconPosition = 'left',
  animationType = 'scale',
  ...props
}) => {
  // Hiệu ứng hover và tap cho button
  const getAnimationProps = () => {
    switch (animationType) {
      case 'bounce':
        return {
          whileHover: { y: -3 },
          whileTap: { y: 0, scale: 0.97 },
        };
      case 'scale':
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.97 },
        };
      case 'pulse':
        return {
          whileHover: { 
            boxShadow: '0 0 10px rgba(63, 135, 245, 0.7)',
            scale: 1.02,
          },
          whileTap: { scale: 0.97 },
        };
      case 'glow':
        return {
          whileHover: { 
            boxShadow: '0 0 15px rgba(63, 135, 245, 0.8)',
            scale: 1.03,
            transition: { duration: 0.2 },
          },
          whileTap: { scale: 0.97 },
        };
      case 'none':
        return {};
      default:
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.97 },
        };
    }
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <motion.span 
          className="mr-2"
          initial={{ x: 0 }}
          animate={{ x: [0, -3, 0] }}
          transition={{ repeat: animationType === 'shimmer' ? Infinity : 0, repeatDelay: 3 }}
        >
          {icon}
        </motion.span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <motion.span 
          className="ml-2"
          initial={{ x: 0 }}
          animate={{ x: [0, 3, 0] }}
          transition={{ repeat: animationType === 'shimmer' ? Infinity : 0, repeatDelay: 3 }}
        >
          {icon}
        </motion.span>
      )}
    </>
  );

  // Shimmer effect
  if (animationType === 'shimmer') {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        {...getAnimationProps()}
      >
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ opacity: 0.3 }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
          {buttonContent}
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      {...getAnimationProps()}
    >
      {buttonContent}
    </motion.button>
  );
};

// Button với hiệu ứng gradient animation
interface GradientButtonProps extends MotionButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
  size = 'default',
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-indigo-600',
  gradientDirection = 'to-r',
  animationType = 'scale',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center rounded-md text-sm font-medium text-white",
        // Sử dụng className riêng cho phần gradient
        `bg-gradient-${gradientDirection}`, gradientFrom, gradientTo,
        {
          'h-10 py-2 px-4': size === 'default',
          'h-8 px-3 text-xs': size === 'sm',
          'h-12 px-6 text-base': size === 'lg',
          'h-14 px-8 text-lg': size === 'xl',
        },
        className
      )}
      whileHover={animationType === 'scale' ? { scale: 1.05 } : { y: -3 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

// Button với biên dạng ảo ảnh
export const GhostBorderButton: React.FC<MotionButtonProps> = ({
  children,
  className,
  size = 'default',
  animationType = 'scale',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <motion.button
      className={cn(
        `relative inline-flex items-center justify-center text-sm font-medium text-mba-primary`,
        `border border-mba-primary/30 bg-transparent rounded-md`,
        `overflow-hidden`,
        {
          'h-10 py-2 px-4': size === 'default',
          'h-8 px-3 text-xs': size === 'sm',
          'h-12 px-6 text-base': size === 'lg',
          'h-14 px-8 text-lg': size === 'xl',
        },
        className
      )}
      whileHover={{ 
        boxShadow: 'inset 0 0 15px rgba(63, 135, 245, 0.3)',
        borderColor: 'rgb(63, 135, 245)',
        scale: 1.02
      }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
