import React, { useState } from 'react';
import './style.css'

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail('');
  };

  return (
    <div className="newsletter-subscription">
      <h3 className="newsletter-subscription-title">Subscribe to our Newsletter</h3>
      <form className="newsletter-subscription-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="newsletter-subscription-input"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className="newsletter-subscription-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
