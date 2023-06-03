// LanguageToggler.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggler() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}

export default LanguageToggler;
