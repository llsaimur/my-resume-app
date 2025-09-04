import { useMatrixColumns } from '../../hooks/useMatrixEffect';
import { MatrixColumn } from './MatrixColumn';
import type { MatrixConfig } from '../../types/index';

interface MatrixBackgroundProps {
  config?: Partial<MatrixConfig>;
  className?: string;
}

export function MatrixBackground({ config = {}, className = '' }: MatrixBackgroundProps) {
  const { columns, config: matrixConfig } = useMatrixColumns(config);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {columns.map((left, i) => (
        <MatrixColumn
          key={i}
          left={left}
          height={20 + Math.floor(Math.random() * 15)}
          chars={matrixConfig.chars}
          fallDuration={matrixConfig.fallDuration}
          updateInterval={matrixConfig.updateInterval}
          opacity={matrixConfig.opacity}
          fontSize={matrixConfig.fontSize}
        />
      ))}
    </div>
  );
}