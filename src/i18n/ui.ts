export const languages = {
  en: 'English',
  es: 'Español',
  da: 'Dansk',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'lang.select': 'Choose your language',
    'btn.saveTheDate': 'Save the Date',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
  },
  es: {
    'lang.select': 'Elige tu idioma',
    'btn.saveTheDate': 'Guarda la Fecha',
    'countdown.days': 'Días',
    'countdown.hours': 'Horas',
    'countdown.minutes': 'Minutos',
    'countdown.seconds': 'Segundos',
  },
  da: {
    'lang.select': 'Vælg dit sprog',
    'btn.saveTheDate': 'Gem Datoen',
    'countdown.days': 'Dage',
    'countdown.hours': 'Timer',
    'countdown.minutes': 'Minutter',
    'countdown.seconds': 'Sekunder',
  },
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
