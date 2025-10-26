// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import './Dashboard.css';

export default function Dashboard() {
  const [donations, setDonations] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/food')
      .then(res => setDonations(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = donations.filter(d =>
    filter === '' || d.foodType === filter || d.dietary.includes(filter)
  );

  // ✅ Expiry check function
  function isExpired(expiryDate) {
    if (!expiryDate) return false;
    const today = new Date();
    const exp = new Date(expiryDate);
    return exp < today;
  }

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">📦 Available Food Donations</h2>

      <div className="filter-container">
        <label htmlFor="filter-select">Filter by:</label>
        <select id="filter-select" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Cooked">Cooked</option>
          <option value="Packaged">Packaged</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Halal">Halal</option>
          <option value="Gluten-Free">Gluten-Free</option>
        </select>
      </div>

      <div className="donation-cards">
        {filtered.map((donation, index) => (
          <div key={index} className="donation-card">
            {donation.photo && (
              <img
                src={`http://localhost:5000${donation.photo}`}
                alt="Food"
                className="donation-image"
              />
            )}
            <div className="donation-info">
              <h4>{donation.name} ({donation.foodType})</h4>
              <p><strong>Quantity:</strong> {donation.quantity}</p>
              <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()} | <strong>Slot:</strong> {donation.timeSlot}</p>
              <p><strong>Dietary:</strong> {donation.dietary.join(', ') || 'None'}</p>
              <p><strong>Contact:</strong> {donation.email} | {donation.phone}</p>
              <p><strong>Location:</strong> {donation.location}</p>
              <p><strong>Instructions:</strong> {donation.instructions || 'N/A'}</p>

              {/* ✅ Expiry Status */}
              <p>
                <strong>Expiry:</strong>{' '}
                <span style={{ color: isExpired(donation.bestBy) ? 'red' : 'green', fontWeight: 'bold' }}>
                  {isExpired(donation.bestBy)
                    ? 'Food Expired'
                    : new Date(donation.bestBy).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
