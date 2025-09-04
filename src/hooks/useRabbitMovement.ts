import { useState, useEffect } from "react";

export function useRabbitMovement(interval = 2000) {
  const [position, setPosition] = useState(() => ({
    x: Math.random() * (window.innerWidth - 50),
    y: Math.random() * (window.innerHeight - 50),
  }));

  useEffect(() => {
    const moveRabbit = () => {
      const x = Math.random() * (window.innerWidth - 50);
      const y = Math.random() * (window.innerHeight - 50);
      setPosition({ x, y });
    };

    const intervalId = setInterval(moveRabbit, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  return position;
}
