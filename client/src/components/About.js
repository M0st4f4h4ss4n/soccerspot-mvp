import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styling/About.module.css';

function About() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <section className={`${styles.about}`} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>{t('about.title')}</h2>
        <p className={styles.description}>{t('about.description')}</p>
        <button className={styles.button}>{t('about.learnMore')}</button>
        <p>Current language: {language}</p>
      </div>
    </section>
  );
}

export default About;
