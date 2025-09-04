import React from 'react';
import { motion } from 'framer-motion';
import { MatrixBackground } from '../effects/MatrixBackground';
import type { MatrixConfig } from '../../types/index';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  withMatrixBackground?: boolean;
  matrixConfig?: Partial<MatrixConfig>;
}

export function Section({
  id,
  title,
  children,
  className = '',
  withMatrixBackground = false,
  matrixConfig = {},
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`w-full py-12 sm:py-16 bg-black text-green-400 font-mono relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {withMatrixBackground && <MatrixBackground config={matrixConfig} />}
      
      {title && (
        <div className="relative z-10 mb-6">
          <span className="text-green-300 mr-2">_</span>
          <span className="text-green-400 text-xl sm:text-2xl font-bold">
            {title}
          </span>
        </div>
      )}

      <div className="relative z-10">{children}</div>

      {/* Terminal glow lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border-t border-green-800/20 animate-pulse"></div>
        <div className="absolute inset-0 border-l border-green-800/20 animate-pulse"></div>
      </div>
    </motion.section>
  );
}