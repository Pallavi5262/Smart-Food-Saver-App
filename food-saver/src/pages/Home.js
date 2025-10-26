// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import FactCarousel from '../components/FactCarousel';
import '../styles.css';  // global styles
import bgImage from '../assets/foodhome.png';

export default function Home() {
  const facts = [
    'Every year, the world wastes about 1.3 billion tons of food.',
    'Roughly one‑third of all food produced globally is lost or wasted.',
    'Wasted food generates 8 % of global greenhouse gas emissions.',
    'If food waste were a country, it would be the third‑largest emitter of CO₂.',
  ];

  return (
    <>
      {/* HERO with full‑bleed background image */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-content">
          <h1>Save Surplus Food, Feed Hope</h1>
          <p>
            A community-driven platform connecting generous donors with orphanages in need.
          </p>
          <div className="flex flex-center gap-4">
            <Link to="/donate" className="btn btn-primary">
              Donate Food
            </Link>
            <Link to="/login" className="btn btn-outline">
               Login
            </Link>
          </div>
        </div>
      </section>

      {/* DID YOU KNOW CAROUSEL */}
      <section
        style={{
          width: '100%',
          padding: '4rem 1rem 2rem',
          background: 'none',
          boxShadow: 'none',
        }}
      >
        <h2
          className="text-center"
          style={{ fontSize: '2rem', marginBottom: '2rem', color: '#12520cff' }}
        >
          Did You Know?
        </h2>
        <FactCarousel facts={facts} />
      </section>
    </>
  );
}
