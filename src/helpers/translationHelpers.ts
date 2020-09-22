import { FreeTranslationType, TranslationType } from "../typings";

/**
 * Find translation text by language,
 * If no matched translation found, return first translation text
 * @param translations
 * @param language
 */
export const getTranslationByLanguage = (
  translations: Array<TranslationType>,
  language: string
): string => {
  if (translations.length > 0) {
    const selectedTranslation =
      translations.find(
        (translation: TranslationType) =>
          translation.language === language.toUpperCase() ||
          translation.language === language.toLowerCase()
      ) || translations[0];

    return selectedTranslation.text;
  }

  return "";
};

/**
 * Find translation obj by language,
 * Translation obj should have `language` property
 * If no matched translation found, return the first translation obj
 * If translations is `[]`, return undefined
 * @param translations
 * @param language
 */
export const getFreeTranslationByLanguage = (
  translations: Array<FreeTranslationType>,
  language: string
): FreeTranslationType =>
  translations.find(
    (translation: FreeTranslationType) =>
      translation.language === language.toUpperCase() ||
      translation.language === language.toLowerCase()
  ) || translations[0];
