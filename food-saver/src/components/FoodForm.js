// src/components/FoodForm.js

import React, { useState } from 'react';
import axios from '../api/axios';
import './FoodForm.css';

export default function FoodForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    foodType: '',
    quantity: '',
    bestBy: '',
    dietary: [],
    date: '',
    timeSlot: '',
    instructions: '',
    photo: null,
    location: '', // ✅ Added
  });
  const [preview, setPreview] = useState(null);

  const timeSlots = [
    '9:00 AM – 11:00 AM',
    '11:00 AM – 1:00 PM',
    '1:00 PM – 3:00 PM',
    '3:00 PM – 5:00 PM',
  ];

  function handleChange(e) {
    const { name, value, checked, files } = e.target;
    if (name === 'dietary') {
      setFormData(prev => ({
        ...prev,
        dietary: checked
          ? [...prev.dietary, value]
          : prev.dietary.filter(item => item !== value)
      }));
    } else if (name === 'photo') {
      const file = files[0];
      setFormData(prev => ({ ...prev, photo: file }));
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'dietary') {
          value.forEach(tag => form.append('dietary', tag));
        } else {
          form.append(key, value);
        }
      });

      await axios.post('/food', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('🙏 Your donation has been recorded.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        foodType: '',
        quantity: '',
        bestBy: '',
        dietary: [],
        date: '',
        timeSlot: '',
        instructions: '',
        photo: null,
        location: '', // reset location too
      });
      setPreview(null);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  }

  return (
    <>
      <div className="guidelines">
        <h3>Donation Guidelines</h3>
        <ul>
          <li>Use clean, sealed containers.</li>
          <li>Label food with type and date if possible.</li>
          <li>No expired or spoiled items.</li>
          <li>If it's cooked, it must be less than 4 hours old.</li>
          <li>Inform us of any allergens or special handling.</li>
        </ul>
      </div>

      <form className="donation-form" onSubmit={handleSubmit}>
        <h2>Donate Food</h2>

        <div className="row">
          <div className="col">
            <label>Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <label>Phone *</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Type of Food *</label>
        <select name="foodType" value={formData.foodType} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option>Cooked</option>
          <option>Packaged</option>
          <option>Produce</option>
          <option>Baked Goods</option>
          <option>Canned</option>
        </select>

        <label>Quantity (e.g. 5 kg, 10 boxes) *</label>
        <input name="quantity" value={formData.quantity} onChange={handleChange} required />

        <label>Best‑by / Expiration Date</label>
        <input type="date" name="bestBy" value={formData.bestBy} onChange={handleChange} />

        <fieldset className="dietary-tags">
          <legend>Dietary Tags</legend>
          {['Vegetarian', 'Vegan', 'Halal', 'Gluten‑Free'].map(tag => (
            <label key={tag} className="dietary-label">
              <input
                type="checkbox"
                name="dietary"
                value={tag}
                checked={formData.dietary.includes(tag)}
                onChange={handleChange}
              />
              <span>{tag}</span>
            </label>
          ))}
        </fieldset>

        <div className="row">
          <div className="col">
            <label>Preferred Date *</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Time Slot *</label>
            <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
              <option value="">Select Slot</option>
              {timeSlots.map(slot => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        <label>Photo of Food</label>
        <div className="file-upload-wrapper">
          <input
            type="file"
            name="photo"
            accept="image/*"
            id="photo-upload"
            onChange={handleChange}
          />
          <label htmlFor="photo-upload" className="file-upload-label">
            {formData.photo ? 'Change Photo' : 'Upload Photo'}
          </label>
        </div>
        {preview && <img src={preview} alt="Preview" className="preview" />}

        {/* ✅ Location field */}
        <label>Location *</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>Special Instructions</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="e.g., knock twice, ring bell"
        />

        <button type="submit">Submit Donation</button>
      </form>
    </>
  );
}
