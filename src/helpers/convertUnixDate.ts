/**
 * Transform Unix Timestamp into Date Format
 * @method convertUnixDate
 * @param UTC
 */
export const convertUnixDate = (UTC: string) => {
  const dateTime = new Date(parseInt(UTC) * 1000);
  const month = dateTime.toLocaleString("default", { month: "long" });

  let dateOnly: string = `${dateTime.getDate()} ${month} ${dateTime.getFullYear()}`;
  let timeOnly: string = `${dateTime.getHours()}:${dateTime.getMinutes()} WIB`;

  return { UTC, date: dateOnly, time: timeOnly, dateTime };
};
