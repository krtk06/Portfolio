import { useState, useEffect, useRef } from 'react';

const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 6700,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 10,
  className = '',
}) => {
  const [shootingStars, setShootingStars] = useState([]);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const createShootingStar = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      
      const id = Date.now() + Math.random();
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      const angle = Math.random() * 45 - 22.5; // -22.5 to 22.5 degrees variation
      const startX = Math.random() * width * 0.3; // Start from left 30% of screen
      const startY = Math.random() * height * 0.3; // Start from top 30% of screen
      
      const newStar = {
        id,
        startX,
        startY,
        angle,
        speed,
        duration: (width + height) / speed * 50, // Duration based on speed and distance
      };

      setShootingStars(prev => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== id));
      }, newStar.duration);
    };

    const scheduleNextStar = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      intervalRef.current = setTimeout(() => {
        createShootingStar();
        scheduleNextStar();
      }, delay);
    };

    // Start the first shooting star
    scheduleNextStar();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  return (
    <div ref={containerRef} className={`w-full h-full overflow-hidden ${className}`}>
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute pointer-events-none"
          style={{
            left: `${star.startX}px`,
            top: `${star.startY}px`,
            width: `${starWidth}px`,
            height: `${starHeight}px`,
            background: `linear-gradient(90deg, ${starColor} 0%, ${trailColor} 50%, transparent 100%)`,
            borderRadius: '50%',
            transform: `rotate(${star.angle - 90}deg)`,
            animation: `shooting-star ${star.duration}ms linear forwards`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;