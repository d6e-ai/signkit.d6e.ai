import en from '../messages/en.json';
import ja from '../messages/ja.json';

export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

const dictionaries = { en, ja } satisfies Record<Locale, Dictionary>;

export function isLocale(value: string | undefined): value is Locale {
	return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}
