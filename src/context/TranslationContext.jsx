import React, { createContext, useContext, useState, useMemo } from 'react';
import { translations, getAvailableLanguages } from '../utils/translations';
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

  const languageCode = useMemo(() => getLanguageCode(language), [language]);

  // Translation function
  const t = useMemo(() => {
    return (key) => {
      const keys = key.split('.');
      let value = translations[languageCode];
      
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          // Fallback to English if translation not found
          let enValue = translations.en;
          for (const enK of keys) {
            enValue = enValue?.[enK];
          }
          return enValue || key;
        }
      }
      
      return value || key;
    };
  }, [languageCode]);

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

