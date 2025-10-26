import React, { useRef, useEffect, useState } from 'react';

export default function Fact({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in${isVisible ? ' visible' : ''}`}
      style={{ margin: '2rem 0', fontSize: '1.25rem' }}
    >
      {children}
    </div>
  );
}
 