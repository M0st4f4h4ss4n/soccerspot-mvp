import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styling/features.module.css';

function Features() {
  const { t } = useTranslation();

  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.title}>{t('features.title')}</h2>
        <div className={styles.feature}>
          <h3>{t('features.booking.title')}</h3>
          <p>{t('features.booking.description')}</p>
        </div>
        <div className={styles.feature}>
          <h3>{t('features.localGames.title')}</h3>
          <p>{t('features.localGames.description')}</p>
        </div>
        <div className={styles.feature}>
          <h3>{t('features.connect.title')}</h3>
          <p>{t('features.connect.description')}</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
