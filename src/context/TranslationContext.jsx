import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation, getAvailableLanguages } from '../utils/translations';
import { storage } from '../utils/storage';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const settings = storage.loadSettings();
    return settings?.language || 'English';
  });

  // Map language name to code
  const getLanguageCode = (langName) => {
    const langMap = {
      'English': 'en',
      'Yoruba': 'yo',
      'Hausa': 'ha',
      'Igbo': 'ig'
    };
    return langMap[langName] || 'en';
  };

  const languageCode = getLanguageCode(language);
  const { t } = useTranslation(languageCode);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    const settings = storage.loadSettings() || {};
    settings.language = newLanguage;
    storage.saveSettings(settings);
  };

  return (
    <TranslationContext.Provider value={{ t, language, changeLanguage, languageCode, availableLanguages: getAvailableLanguages() }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useT = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useT must be used within TranslationProvider');
  }
  return context;
};

