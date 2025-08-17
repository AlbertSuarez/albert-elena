import React, { useEffect, useState, useMemo } from 'react';
import styles from './Confetti.module.css';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  moveX: number;
  moveY: number;
}

interface ConfettiProps {
  isActive: boolean;
  duration?: number;
  particleCount?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ 
  isActive, 
  duration = 3000, 
  particleCount = 50 
}) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  // Colors from globals.css - memoized to prevent re-creation on every render
  const colors = useMemo(() => [
    'var(--primary)', // #313930
    'var(--primary-light)', // #A2BBA0
    'var(--secondary)', // #CA9C8D
    'var(--background)', // #EBDAA8
    'var(--background-light)', // #DEC6A8
    'var(--secondary-light)', // #f5e6d3
  ], []);

  useEffect(() => {
    if (isActive) {
      const newPieces: ConfettiPiece[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        // Start all particles from the center
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.8; // Distribute evenly in a circle with some randomness
        const distance = Math.random() * 120 + 80; // Distance to travel from center
        
        // Calculate movement direction based on angle
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        newPieces.push({
          id: i,
          x: 50, // Start from center (50%)
          y: 50, // Start from center (50%)
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 5 + 2, // Smaller size between 2-7px
          delay: Math.random() * 800, // Reduced delay up to 0.8s
          duration: Math.random() * 500 + 2000, // Duration between 2-2.5s
          rotation: Math.random() * 360, // Random initial rotation
          moveX: moveX,
          moveY: moveY,
        });
      }
      
      setPieces(newPieces);

      // Clear pieces after animation completes
      const timeout = setTimeout(() => {
        setPieces([]);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isActive, duration, particleCount, colors]);

  if (!isActive || pieces.length === 0) {
    return null;
  }

  return (
    <div className={styles.confettiContainer}>
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={styles.confettiPiece}
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: `${piece.delay}ms`,
            animationDuration: `${piece.duration}ms`,
            transform: `rotate(${piece.rotation}deg)`,
            zIndex: -1,
            '--move-x': `${piece.moveX}px`,
            '--move-y': `${piece.moveY}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Confetti;
