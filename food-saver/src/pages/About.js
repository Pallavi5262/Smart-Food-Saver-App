// src/pages/About.js

import React, { useState, useEffect } from 'react';
import './About.css';

const stats = [
  { label: 'Meals Served', value: 1200, icon: '🍽️' },
  { label: 'Tons Rescued', value: 500, icon: '♻️' },
  { label: 'Orphanages Partnered', value: 30, icon: '🏠' },
];

const faqs = [
  {
    q: 'How do I sign up to donate?',
    a: 'Just fill out the donation form on the Donate page and we’ll handle the rest.',
  },
  {
    q: 'What items can I donate?',
    a: 'Any non‑expired, sealed or freshly cooked food in safe containers.',
  },
  {
    q: 'How are donations distributed?',
    a: 'Our partner orphanages pick up or receive delivered donations directly.',
  },
];

const founders = [
  {
    name: 'P. Sathwik',
    title: 'Co‑Founder',
    bio: 'Tech enthusiast who built our platform and ensures every donation finds its way.',
  },
  {
    name: 'G. Pallavi',
    title: 'Co‑Founder',
    bio: 'Logistics expert coordinating pickups and deliveries with our partner orphanages.',
  },
  {
    name: 'A. Karthikeya',
    title: 'Co‑Founder',
    bio: 'Community advocate forging relationships and growing our donor network.',
  },
];

export default function About() {
  // animate stats
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    stats.forEach((s, i) => {
      let start = 0;
      const end = s.value;
      const step = Math.ceil(end / (1000 / 50));
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const next = [...prev];
          next[i] = start;
          return next;
        });
      }, 50);
    });
  }, []);

  // FAQ accordion
  const [openIdx, setOpenIdx] = useState(null);

  // scroll‑fade‑in
  useEffect(() => {
    const sections = document.querySelectorAll('.about-section');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-section section-hero">
        <h1>Our Mission</h1>
        <p>Feeding communities and ending waste by bridging hunger and abundance.</p>
      </section>

      {/* Stats */}
      <section className="about-section section-stats">
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-icon">{s.icon}</div>
              <h2>{counts[i]}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="about-section section-faq faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((f, idx) => (
          <div className="faq-item" key={idx}>
            <button
              className={`faq-question ${openIdx === idx ? 'active' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {f.q}
              <span className="arrow">{openIdx === idx ? '×' : '+'}</span>
            </button>
            <div className={`faq-answer ${openIdx === idx ? 'open' : ''}`}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Founders */}
      <section className="about-section section-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {founders.map(f => (
            <div className="team-card" key={f.name}>
              <h3>{f.name}</h3>
              <p className="team-title">{f.title}</p>
              <p className="team-bio">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
