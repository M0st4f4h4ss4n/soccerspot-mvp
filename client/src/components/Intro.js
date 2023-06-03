import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styling/Intro.module.css';
import splashScreen from '../assets/splash.png'; 

function Intro(props) {
  const { t } = useTranslation();

  return (
    <section className={`${styles.intro} ${props.isDarkTheme ? styles.dark : ''}`} id="intro" style={{backgroundImage: `url(${splashScreen})`}}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t('intro.title')}</h2>
        <p className={styles.description}>{t('intro.description')}</p>
        <button className={styles.button}>{t('intro.bookNow')}</button>
      </div>
    </section>
  );
}

export default Intro;
