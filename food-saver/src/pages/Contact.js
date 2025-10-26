// src/pages/Contact.js

import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: contact info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Have questions or want to partner? Reach us here:</p>
          <ul>
            <li><strong>Email:</strong> food.saver.notifications@gmail.com</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Address:</strong> 123 Food Street, City, Country</li>
          </ul>
        </div>

        {/* Right: simple contact form */}
        <form className="contact-form">
          <h3>Send Us a Message</h3>

          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="How can we help?"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
);
}
