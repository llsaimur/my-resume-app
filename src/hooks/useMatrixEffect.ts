import { useState, useEffect, useCallback } from 'react';
import type { MatrixConfig } from '../types/index';

const DEFAULT_CONFIG: MatrixConfig = {
  chars: ['0', '1'],
  columnCount: 0, // Will be calculated
  fallDuration: [10, 20],
  updateInterval: [500, 1000],
  opacity: [0.2, 0.7],
  fontSize: [12, 18],
};

export function useMatrixColumns(config: Partial<MatrixConfig> = {}) {
  const [columns, setColumns] = useState<number[]>([]);
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  const updateColumns = useCallback(() => {
    const width = window.innerWidth;
    const numCols = Math.floor(width / 20);
    const newCols = Array.from({ length: numCols }, () => Math.random() * width);
    setColumns(newCols);
  }, []);

  useEffect(() => {
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [updateColumns]);

  return { columns, config: mergedConfig };
}

export function useMatrixText(text: string, config: Partial<MatrixConfig> = {}) {
  const [chars, setChars] = useState<string[]>(text.split(''));
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };

  useEffect(() => {
    const interval = setInterval(() => {
      setChars(prev =>
        prev.map((_, i) =>
          Math.random() < 0.02
            ? mergedConfig.chars[Math.floor(Math.random() * mergedConfig.chars.length)]
            : text[i]
        )
      );
    }, 500);

    return () => clearInterval(interval);
  }, [text, mergedConfig.chars]);

  return chars.join('');
}