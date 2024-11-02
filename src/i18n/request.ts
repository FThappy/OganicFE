import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
export type SupportedLocale = 'en-US' | 'vi-VN';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as SupportedLocale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../assets/locale/${locale}.json`)).default
  };
});
