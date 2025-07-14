const baseColors = {
  blue: '#487FD9',
  green: '#0BD9B3',
  red: '#FF647C',
  yellow: '#EBC455',
  black: '#000000',
}

const brandColors = {
  raisinBlack: '#16171C',
  caribbeanGreen: baseColors.green,
}

const colors = {
  ...baseColors,
  ...brandColors,
}

const fontSizes = [12, 14, 16, 18, 20, 21]
const spaces = [4, 8, 12, 16, 20, 24, 32, 64, 128]

export const definitions = {
  colors,
  fontSizes,
  spaces,
}
