export const randomBackgroundColor = (): string => {
  let color = '#' + Math.floor(Math.random() * 16777216).toString(16);
  // Ensure the color is exactly 6 characters long by padding with zeros if necessary
  while (color.length < 7) {
    color += '0';
  }
  return color;
  // return '#' + Math.floor(Math.random() * 16777216).toString(16);
};
