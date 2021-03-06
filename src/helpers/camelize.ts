/**
 * Convert string into camel case
 *
 * @param str
 */
export const camelize = (str: string) =>
  str
    .replace(/^[_.,\- ]+/, '')
    .toLowerCase()
    .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) => p1.toUpperCase())
    .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, (m) => m.toUpperCase());
