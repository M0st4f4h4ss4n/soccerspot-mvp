import React from 'react';
import styles from '../styling/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export function Footer({ isDarkTheme, onComponentChange }) {
  const { t } = useTranslation();

  const handleLinkClick = (event, componentName) => {
    event.preventDefault();
    onComponentChange(componentName);
  };

  return (
    <footer className={`${styles.footer} ${isDarkTheme ? styles.dark : styles.light}`}>
      <div className={styles.footerLinks}>
        <a href="#intro" onClick={(event) => handleLinkClick(event, 'Intro')} className={styles.link}>
          {t('footer.home')}
        </a>
        <a href="#features" onClick={(event) => handleLinkClick(event, 'Features')} className={styles.link}>
          {t('footer.features')}
        </a>
        <a href="#about" onClick={(event) => handleLinkClick(event, 'About')} className={styles.link}>
          {t('footer.about')}
        </a>
        <a href="#book" onClick={(event) => handleLinkClick(event, 'Book')} className={styles.link}>
          {t('footer.bookNow')}
        </a>
      </div>
      <div className={styles.footerText}>
        <p>{t('footer.followUs')}</p>
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
        <p>{t('footer.subscribe')}</p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder={t('footer.enterEmail')} />
          <button type="submit">{t('footer.subscribeBtn')}</button>
        </form>
        <p>&copy; 2023 Soccer Spot</p>
      </div>
    </footer>
  );
}
