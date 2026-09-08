import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  type: 'star' | 'circle' | 'rect';
  delay: number;
}

const COLORS = ['#16C784', '#2452FF', '#F59E0B', '#EC4899', '#8B5CF6', '#10B981', '#FFD166'];

export const MascotCelebration: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const particles: Particle[] = useMemo(() => {
    if (!active) return [];
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 160,
      y: -40 - Math.random() * 120,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      type: (['star', 'circle', 'rect'] as const)[i % 3],
      delay: (i % 6) * 0.05
    }));
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.5],
            x: p.x,
            y: p.y,
            rotate: p.rotation + 180
          }}
          transition={{
            duration: 1.2,
            delay: p.delay,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.2, 0.8, 1]
          }}
          className="absolute"
          style={{ width: p.size, height: p.size }}
        >
          {p.type === 'circle' && (
            <div
              className="w-full h-full rounded-full shadow-xs"
              style={{ backgroundColor: p.color }}
            />
          )}
          {p.type === 'rect' && (
            <div
              className="w-full h-full rounded-xs shadow-xs"
              style={{ backgroundColor: p.color }}
            />
          )}
          {p.type === 'star' && (
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full"
              style={{ fill: p.color }}
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
