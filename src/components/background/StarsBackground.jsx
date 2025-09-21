import { useState, useEffect, useRef } from 'react';

const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 2,
  maxTwinkleSpeed = 4,
  className = '',
}) => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const generateStars = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const numStars = Math.floor(starDensity * width * height);
      
      // Clamp star count for performance
      const clampedStars = Math.min(Math.max(numStars, 50), window.innerWidth < 768 ? 250 : 600);

      const newStars = Array.from({ length: clampedStars }, (_, i) => {
        const shouldTwinkle = allStarsTwinkle && Math.random() < twinkleProbability;
        const twinkleSpeed = minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed);
        
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.2,
          twinkle: shouldTwinkle,
          twinkleSpeed: twinkleSpeed,
          twinkleDelay: Math.random() * 4,
        };
      });

      setStars(newStars);
    };

    generateStars();

    const resizeObserver = new ResizeObserver(generateStars);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const handleResize = () => {
      // Debounce resize events
      clearTimeout(window.starResizeTimeout);
      window.starResizeTimeout = setTimeout(generateStars, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      clearTimeout(window.starResizeTimeout);
    };
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: star.twinkle 
              ? `twinkle ${star.twinkleSpeed}s ease-in-out infinite ${star.twinkleDelay}s`
              : 'none',
            willChange: star.twinkle ? 'opacity, transform' : 'auto',
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;