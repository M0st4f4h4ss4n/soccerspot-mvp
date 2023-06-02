import React from 'react';
import styles from '../styling/Intro.module.css';
import splashScreen from '../assets/splash.png'; 

function Intro(props) {
  return (
    <section className={`${styles.intro} ${props.isDarkTheme ? styles.dark : ''}`} id="intro" style={{backgroundImage: `url(${splashScreen})`}}>
      <div className={styles.content}>
        <h2 className={styles.title}>Welcome to SoccerSpot</h2>
        <p className={styles.description}>The best place to book your next soccer game.</p>
        <button className={styles.button}>Book Now</button>
      </div>
    </section>
  );
}

export default Intro;
