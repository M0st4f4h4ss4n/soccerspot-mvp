import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styling/header.module.css';
import homeIcon from '../assets/icons8-home-50.png';
import featuresIcon from '../assets/icons8-features-64.png';
import aboutIcon from '../assets/icons8-about.gif';
import logo from '../assets/icons8-soccer-200.svg';
import bookIcon from '../assets/icons8-soccer-128.png';
import { useTranslation } from 'react-i18next';
import LanguageToggler from './LanguageToggler';
export function Header({ isDarkTheme, onComponentChange }) {
  const handleLinkClick = (event, componentName) => {
    event.preventDefault();
    onComponentChange(componentName);
  };

  return (
    <div className={styles.container}>
      <Navbar 
        bg="light"
        variant={isDarkTheme ? "dark" : "light"}
        fixed="top"
        className={`${styles.navbar}`}
      >
        <Navbar.Brand href="#home" className={styles.brand}>
          <img src={logo} alt="logo" className={styles.logo} />
          SoccerSpot
        </Navbar.Brand>
        <Nav className={styles.navLinks}>
          <Nav.Link 
            href="#intro" 
            onClick={(event) => handleLinkClick(event, 'Intro')} 
            className={styles.link} 
            aria-label="Home"
          >
            <img src={homeIcon} alt="home" className={styles.icon} />
            Home
          </Nav.Link>
          <Nav.Link 
            href="#features" 
            onClick={(event) => handleLinkClick(event, 'Features')} 
            className={styles.link}
            aria-label="Features"
          >
            <img src={featuresIcon} alt="features" className={styles.icon} />
            Features
          </Nav.Link>
          <Nav.Link 
            href="#about" 
            onClick={(event) => handleLinkClick(event, 'About')} 
            className={styles.link}
            aria-label="About"
          >
            <img src={aboutIcon} alt="about" className={styles.icon} />
            About
          </Nav.Link>
          <Nav.Link 
            href="#book" 
            onClick={(event) => handleLinkClick(event, 'Book')} 
            className={styles.link}
            aria-label="Book Now"
          >
            <img src={bookIcon} alt="book" className={styles.icon} />
            Book Now
          </Nav.Link>
        </Nav>
        <div className={`ml-auto ${styles.languageToggler}`}>
          <LanguageToggler />
        </div>
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
export { Header as HeaderComponent };
export const HeaderPropTypes = {
  isDarkTheme: PropTypes.bool,
  onComponentChange: PropTypes.func.isRequired,
};
export const HeaderDefaultProps = {
  isDarkTheme: false,
};