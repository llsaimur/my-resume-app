import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'experience' | 'project';
}

const cardVariants = {
  default: 'bg-black/80 border border-green-600 rounded-lg shadow-lg',
  experience: 'mb-6 p-4 rounded-lg border-l-4 border-green-600 bg-black/80 hover:bg-black/70 transition-colors shadow-lg',
  project: 'bg-black/80 border border-green-600 rounded-xl p-6 shadow-lg transition-all duration-300',
};

export function Card({ children, className = '', hover = true, variant = 'default' }: CardProps) {
  const baseClass = cardVariants[variant];
  
  if (!hover) {
    return <div className={`${baseClass} ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`${baseClass} ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={variant === 'project' ? { y: -5, boxShadow: '0 0 20px rgba(0,255,70,0.6)' } : undefined}
    >
      {children}
    </motion.div>
  );
}