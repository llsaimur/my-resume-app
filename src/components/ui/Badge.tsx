interface BadgeProps {
  children: React.ReactNode;
  variant?: 'skill' | 'tech';
  className?: string;
}

export function Badge({ children, variant = 'skill', className = '' }: BadgeProps) {
  const baseClass = variant === 'skill'
    ? 'px-4 py-2 rounded-full border border-green-500 text-green-400 bg-green-900/20 font-mono text-sm drop-shadow-[0_0_4px_rgba(0,255,70,0.8)]'
    : 'text-xs px-2 py-1 border border-green-500 rounded-full text-green-400 bg-green-900/20 font-mono';
    
  return (
    <span className={`${baseClass} ${className}`}>
      {children}
    </span>
  );
}