import React from 'react';
import styles from '../styling/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer({ isDarkTheme, onComponentChange }) {
  const handleLinkClick = (event, componentName) => {
    event.preventDefault();
    onComponentChange(componentName);
  };

  return (
    <footer className={`${styles.footer} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.footerLinks}>
        <a href="#intro" onClick={(event) => handleLinkClick(event, 'Intro')} className={styles.link}>
          Home
        </a>
        <a href="#features" onClick={(event) => handleLinkClick(event, 'Features')} className={styles.link}>
          Features
        </a>
        <a href="#about" onClick={(event) => handleLinkClick(event, 'About')} className={styles.link}>
          About
        </a>
        <a href="#book" onClick={(event) => handleLinkClick(event, 'Book')} className={styles.link}>
          Book Now
        </a>
      </div>
      <div className={styles.footerText}>
        <p>Follow us on social media:</p>
        <div className={styles.socialMediaLinks}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
          </a>
        </div>
        <p>Subscribe to our newsletter:</p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <p>&copy; 2023 Soccer Spot</p>
      </div>
    </footer>
  );
}