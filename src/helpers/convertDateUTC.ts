/**
 * Convert Date Format into Unix Timestamp
 * @method convertDateUTC
 * @param date
 */
export const convertDateUTC = (date: string): number => {
  return Math.round(new Date(date).getTime() / 1000);
};
