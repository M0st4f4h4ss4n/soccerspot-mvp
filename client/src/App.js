import React, { useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Intro');

  const handleComponentChange = (componentName) => {
    setCurrentComponent(componentName);
  };

  let currentContent;
  switch (currentComponent) {
    case 'Intro':
      currentContent = <Intro />;
      break;
    case 'Features':
      currentContent = <Features />;
      break;
    case 'About':
      currentContent = <About />;
      break;
    default:
      currentContent = <Intro />;
  }

  return (
    <div className="App">
      <Header onComponentChange={handleComponentChange} />
      {currentContent}
      <Footer onComponentChange={handleComponentChange} /> {/* add the Footer component */}
    </div>
  );
}

export default App;