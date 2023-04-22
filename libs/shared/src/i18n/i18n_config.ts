import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultTranslates } from './defaultTranslates';

export const resources = {
  en: {
    translation: defaultTranslates.en,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
