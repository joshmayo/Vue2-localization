export const getBrowserLocale = (options = {}) => {
  const defaultOptions = { countryCodeOnly: false };

  const opt = { ...defaultOptions, ...options };
  // navigator is browser function for fetching browsers default language
  const navigatorLocale =
    navigator.languages !== undefined ? navigator.languages[0] : navigator.language;

  // if languages is not undefined get first language else return undefined to default to en
  if (!navigatorLocale) {
    return undefined;
  }
  // if only country code is true then ignore language variants
  const trimmedLocale = opt.countryCodeOnly ? navigatorLocale.trim().split(/-|_/)[0] : navigator.trim();

  return trimmedLocale;
};

export default { getBrowserLocale };
