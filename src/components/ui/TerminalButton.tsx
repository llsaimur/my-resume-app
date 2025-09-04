import { motion } from 'framer-motion';

interface TerminalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  variant?: 'red' | 'blue' | 'green';
  className?: string;
}

export function TerminalButton({
  children,
  onClick,
  href,
  download,
  variant = 'green',
  className = '',
}: TerminalButtonProps) {
  const variantClasses = {
    red: 'border-red-500 text-red-400 hover:text-red-300 hover:border-red-400 drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]',
    blue: 'border-blue-500 text-blue-400 hover:text-blue-300 hover:border-blue-400 drop-shadow-[0_0_6px_rgba(0,150,255,0.7)]',
    green: 'border-green-500 text-green-400 hover:text-green-300 hover:border-green-400 drop-shadow-[0_0_6px_rgba(0,255,70,0.7)]',
  };

  const baseClass = `inline-block px-4 py-2 font-mono rounded border bg-black/50 hover:bg-black/70 transition-colors ${variantClasses[variant]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      download={download}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={baseClass}
    >
      {children}
    </MotionComponent>
  );
}