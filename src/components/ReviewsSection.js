// src/components/ReviewsSection.js
import React from 'react';
import './reviewssection.css';
import reviews from '../data/reviews';

const ReviewsSection = () => {
  // Duplicate the reviews array to create a seamless scroll effect
  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className="reviews-section">
      <h2>What Colleagues and Experts Are Saying</h2>
      <div className="reviews-container">
        {doubledReviews.map((review) => (
          <div key={review.id} className="review-box">
            <div className="review-header">
              <img src={review.image} alt={review.name} className="client-image" />
              <div className="client-info">
                <h3>{review.name}</h3>
                <div className="rating">
                  <span>{review.rating}</span>
                  <span className="star-icon">⭐</span>
                </div>
              </div>
            </div>
            <div className="review-text">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
