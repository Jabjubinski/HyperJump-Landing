import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import en from "../../messages/en.json";
import ka from "../../messages/ka.json";

const messageMap: Record<string, any> = { en, ka };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messageMap[locale] || en,
  };
});
