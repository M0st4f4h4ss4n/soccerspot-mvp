import React from 'react';
import styles from '../styling/About.module.css';

function About(props) {
  return (
    <section className={`${styles.about} ${props.isDarkTheme ? styles.dark : ''}`} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>SoccerSpot is the best place to book your next soccer game. We provide a simple and easy-to-use platform for players to find and book soccer fields in their area. Our mission is to make it easy for everyone to play soccer, anytime and anywhere.</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </section>
  );
}

export default About;
