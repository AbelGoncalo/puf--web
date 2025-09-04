const baseColors = {
  blue: '#487FD9',
  green: '#0BD9B3',
  red: '#FF647C',
  yellow: '#EBC455',
  black: '#000000',
  gray: '#A0A2EE', // corrigido (6 dígitos)
}

const brandColors = {
  raisinBlack: '#16171C',
  caribbeanGreen: baseColors.green,
}

const colors = {
  ...baseColors,
  ...brandColors,
}

const fontSizes = [10, 12, 14, 16, 18, 21, 24, 27, 30, 36, 42, 48]
const spaces = [4, 8, 12, 16, 20, 24, 32, 64, 128]

export const definitions = {
  colors,
  fontSizes,
  spaces,
}
