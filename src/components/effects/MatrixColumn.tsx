import { useState, useEffect } from 'react';

interface MatrixColumnProps {
  left: number;
  height: number;
  chars: string[];
  fallDuration: [number, number];
  updateInterval: [number, number];
  opacity: [number, number];
  fontSize: [number, number];
}

export function MatrixColumn({
  left,
  height,
  chars,
  fallDuration,
  updateInterval,
  opacity,
  fontSize,
}: MatrixColumnProps) {
  const [columnChars, setColumnChars] = useState<string[]>([]);

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  useEffect(() => {
    const newChars = Array.from({ length: height }, randomChar);
    setColumnChars(newChars);

    const interval = setInterval(() => {
      setColumnChars(prev => [...prev.slice(1), randomChar()]);
    }, updateInterval[0] + Math.random() * (updateInterval[1] - updateInterval[0]));

    return () => clearInterval(interval);
  }, [height, updateInterval, chars]);

  const duration = fallDuration[0] + Math.random() * (fallDuration[1] - fallDuration[0]);
  const columnOpacity = opacity[0] + Math.random() * (opacity[1] - opacity[0]);
  const columnFontSize = fontSize[0] + Math.random() * (fontSize[1] - fontSize[0]);

  return (
    <div
      className="matrix-column absolute top-0 text-green-400 font-mono select-none pointer-events-none"
      style={{
        left,
        fontSize: columnFontSize,
        opacity: columnOpacity,
        animation: `matrix-fall ${duration}s linear infinite`,
      }}
    >
      {columnChars.map((char, i) => (
        <span key={i} className="block leading-4">
          {char}
        </span>
      ))}
    </div>
  );
}