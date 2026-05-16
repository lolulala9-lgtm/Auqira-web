'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeUpScale' | 'fadeLeft' | 'fadeRight';
  delay?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0 },
    },
    fadeUpScale: {
      hidden: { opacity: 0, y: 24, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -24 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 24 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
