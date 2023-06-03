import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import homeIcon from '../assets/icons8-home-50.png';
import featuresIcon from '../assets/icons8-features-64.png';
import aboutIcon from '../assets/icons8-about.gif';
import bookIcon from '../assets/icons8-soccer-128.png';
import styles from '../styling/footer.module.css';

export function Footer({ isDarkTheme, onComponentChange }) {
  const handleLinkClick = (event, componentName) => {
    event.preventDefault();
    onComponentChange(componentName);
  };

  return (
    <Navbar 
      bg="light"
      variant={isDarkTheme ? "dark" : "light"}
      fixed="bottom"
      className={`${styles.navbar}`}
    >
      <Nav className="mx-auto">
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
        <Nav.Link 
          href="#contact" 
          onClick={(event) => handleLinkClick(event, 'Contact')} 
          className={styles.link}
          aria-label="Contact Us"
        >
          Contact Us
        </Nav.Link>
        <Nav.Link 
          href="#faq" 
          onClick={(event) => handleLinkClick(event, 'FAQ')} 
          className={styles.link}
          aria-label="FAQ"
        >
          FAQ
        </Nav.Link>
        <Nav.Link 
          href="#terms" 
          onClick={(event) => handleLinkClick(event, 'Terms')} 
          className={styles.link}
          aria-label="Terms and Conditions"
        >
          Terms and Conditions
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}