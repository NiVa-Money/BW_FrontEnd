export const randomBackgroundColor = (): string => {
  let color = '#' + Math.floor(Math.random() * 16777216).toString(16);
  // Ensure the color is exactly 6 characters long by padding with zeros if necessary
  while (color.length < 7) {
    color += '0';
  }
  return color;
  // return '#' + Math.floor(Math.random() * 16777216).toString(16);
};
export const formatedDate = (timeStamp: string): string => {
  const date = new Date(timeStamp);
  const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(
    2,
    '0'
  )}:${String(date.getMinutes()).padStart(2, '0')}:${String(
    date.getSeconds()
  ).padStart(2, '0')}`;
  return formattedDate;
};
