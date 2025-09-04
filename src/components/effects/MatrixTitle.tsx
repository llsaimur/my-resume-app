import { useMatrixText } from '../../hooks/useMatrixEffect';
import type { MatrixConfig } from '../../types/index';

interface MatrixTitleProps {
  text: string;
  className?: string;
  config?: Partial<MatrixConfig>;
}

export function MatrixTitle({ text, className = '', config = {} }: MatrixTitleProps) {
  const displayText = useMatrixText(text, config);

  return (
    <h2 className={`text-4xl sm:text-5xl font-mono font-bold text-green-400 mb-8 select-none pointer-events-none ${className}`}>
      {displayText}
    </h2>
  );
}