// Header.js
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import styles from '../styling/header.module.css';
import homeIcon from '../assets/icons8-home-50.png';
import featuresIcon from '../assets/icons8-features-64.png';
import aboutIcon from '../assets/icons8-about.gif';
import logo from '../assets/icons8-soccer-200.svg';
import bookIcon from '../assets/icons8-soccer-128.png';
import { useTranslation } from 'react-i18next';

export function Header({ isDarkTheme, onComponentChange }) {
  const { t, i18n } = useTranslation();

  const handleLinkClick = (event, componentName) => {
    event.preventDefault();
    onComponentChange(componentName);
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.container}>
      <Navbar bg="light" fixed="top" className={styles.navbar}>
        <Navbar.Brand href="#home" className={styles.brand}>
          <img src={logo} alt="logo" className={styles.logo} />
          {t('header.brand')}
        </Navbar.Brand>
        <Nav className={styles.navLinks}>
          <Nav.Link
            href="#intro"
            onClick={(event) => handleLinkClick(event, 'Intro')}
            className={styles.link}
            aria-label="Home"
          >
            <img src={homeIcon} alt="home" className={styles.icon} />
            {t('header.home')}
          </Nav.Link>
          <Nav.Link
            href="#features"
            onClick={(event) => handleLinkClick(event, 'Features')}
            className={styles.link}
            aria-label="Features"
          >
            <img src={featuresIcon} alt="features" className={styles.icon} />
            {t('header.features')}
          </Nav.Link>
          <Nav.Link
            href="#about"
            onClick={(event) => handleLinkClick(event, 'About')}
            className={styles.link}
            aria-label="About"
          >
            <img src={aboutIcon} alt="about" className={styles.icon} />
            {t('header.about')}
          </Nav.Link>
          <Nav.Link
            href="#book"
            onClick={(event) => handleLinkClick(event, 'Book')}
            className={styles.link}
            aria-label="Book Now"
          >
            <img src={bookIcon} alt="book" className={styles.icon} />
            {t('header.bookNow')}
          </Nav.Link>
        </Nav>
        <Nav className={styles.navLinks}>
          <NavLink
            to="#"
            onClick={handleLanguageChange}
            className={styles.link}
          >
            {i18n.language === 'en' ? 'عربي' : 'English'}
          </NavLink>
        </Nav>
      </Navbar>
      <div className={styles.spacer} />
    </div>
  );
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool,
  onComponentChange: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isDarkTheme: false,
};

export default Header;
