// App.js
import React, { useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Intro');
  const { t } = useTranslation();

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
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header onComponentChange={handleComponentChange} />
        {currentContent}
        <Footer onComponentChange={handleComponentChange} />
        <div>{t('learnMore')}</div>
      </div>
    </I18nextProvider>
  );
}

export default App;
