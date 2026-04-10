import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return undefined;
    }

    let frameId = 0;
    let hasAnimated = false;

    const animateCounter = () => {
      const startTime = performance.now();
      const duration = 2000;

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easedProgress * target));

        if (progress < 1) {
          frameId = requestAnimationFrame(updateCounter);
        } else {
          setCount(target);
        }
      };

      frameId = requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <div ref={containerRef} className="impact-stat__value">
      {prefix && <span>{prefix}</span>}
      <span>{count}</span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}
