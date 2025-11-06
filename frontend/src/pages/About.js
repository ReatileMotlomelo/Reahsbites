import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">About ReahBites</h1>
          <p className="about-tagline">
            Where Food Lovers and Movie Buffs Unite
          </p>
        </div>

        {/* Mission Section */}
        <section className="about-section">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="section-heading">Our Mission</h2>
              <p className="section-text">
                ReahBites was created with a simple mission: to bring together two of life's greatest pleasures - 
                movies and food. We believe that sharing experiences and opinions makes them even better.
              </p>
              <p className="section-text">
                Whether you're looking for the perfect restaurant for date night or trying to decide what movie 
                to watch this weekend, ReahBites is here to help you make informed decisions based on real reviews 
                from real people.
              </p>
            </div>
            <div className="col-md-6">
              <div className="about-emoji-grid">
                <div className="emoji-item">🎬</div>
                <div className="emoji-item">🍿</div>
                <div className="emoji-item">🍕</div>
                <div className="emoji-item">⭐</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="about-section">
          <h2 className="section-heading text-center mb-5">What We Offer</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <div className="feature-icon-large">🎥</div>
                <h3>Movie Reviews</h3>
                <p>
                  Browse thousands of movies from TMDB's extensive database. Read reviews, 
                  share your thoughts, and discover your next favorite film.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <div className="feature-icon-large">🍽️</div>
                <h3>Restaurant Reviews</h3>
                <p>
                  Find the best restaurants in your area. Read authentic reviews from fellow 
                  food enthusiasts and share your dining experiences.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <div className="feature-icon-large">👥</div>
                <h3>Community</h3>
                <p>
                  Join a vibrant community of reviewers. Follow your favorite critics, 
                  engage in discussions, and help others make better choices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <h2 className="section-heading text-center mb-5">Our Values</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="value-card">
                <h4>🎯 Authenticity</h4>
                <p>We believe in genuine reviews from real users. No fake reviews, no manipulation.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="value-card">
                <h4>🤝 Community First</h4>
                <p>Our users are at the heart of everything we do. We listen, we adapt, we grow together.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="value-card">
                <h4>✨ Quality</h4>
                <p>We strive for excellence in every aspect - from our platform to our user experience.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="value-card">
                <h4>🌟 Passion</h4>
                <p>We're passionate about movies and food, and it shows in everything we create.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-section contact-section">
          <div className="contact-box">
            <h2 className="section-heading text-center">Get In Touch</h2>
            <p className="text-center section-text">
              Have questions, suggestions, or just want to say hi? We'd love to hear from you!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@reahbites.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Review Street, Food City</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

