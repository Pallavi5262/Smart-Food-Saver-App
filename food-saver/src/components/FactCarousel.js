import React, { useState } from 'react';
import './FactCarousel.css';

export default function FactCarousel({ facts }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx - 1 + facts.length) % facts.length);
  const next = () => setIdx((idx + 1) % facts.length);

  return (
    <div className="slider-wrapper">
      <button className="slider-arrow left" onClick={prev}>‹</button>

      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {facts.map((text, i) => (
            <div className="slide" key={i}>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="slider-arrow right" onClick={next}>›</button>
    </div>
  );
}
