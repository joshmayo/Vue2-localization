import supportedLocales from '@/config/supported-locales';

export const getSupportedLocales = () => {
  const annotatedLocales = [];
  //   for (const code of Object.keys(supportedLocales)) {
  //     annotatedLocales.push({
  //       code,
  //       name: supportedLocales[code],
  //     });
  //   }
  Object.keys(supportedLocales).forEach((code) => {
    annotatedLocales.push({
      code,
      name: supportedLocales[code],
    });
  });

  return annotatedLocales;
};

export function supportedLocalesInclude(locale) {
  return Object.keys(supportedLocales).includes(locale);
}

export default { getSupportedLocales, supportedLocalesInclude };
