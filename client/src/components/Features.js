// components/Features.js
import React from 'react';
import styles from '../styling/features.module.css';
import featuresImage from '../assets/features.png'; // import the image

function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.title}>Key Features</h2>
        <div className={styles.feature}>
          <h3>Easy Booking</h3>
          <p>Find and book your next game with just a few clicks.</p>
        </div>
        <div className={styles.feature}>
          <h3>Local Games</h3>
          <p>Discover games happening in your local area.</p>
        </div>
        <div className={styles.feature}>
          <h3>Connect with Players</h3>
          <p>Connect with other players, form teams, and enjoy the game.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
