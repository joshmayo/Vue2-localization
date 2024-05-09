import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getBrowserLocale } from '@/util/get-browser-locale';
import { supportedLocalesInclude } from '@/util/supported-locales';

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const locales = require.context(
    './',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
};

const getStartingLocale = () => {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  }

  return process.env.VUE_APP_I18N_LOCALE || 'en';
};

export default new VueI18n({
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
