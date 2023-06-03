import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./locales/en/translation.json'),
  },
  ar: {
    translation: require('./locales/ar/translation.json'),
  },
};

const supportedLanguages = ['en', 'ar'];

const determineLanguage = () => {
  const path = window.location.pathname;
  const pathParts = path.split('/');
  const language = pathParts[1];

  if (supportedLanguages.includes(language)) {
    return language;
  }
  return 'ar'; // Default language
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: determineLanguage(),
    fallbackLng: 'ar',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18n;
