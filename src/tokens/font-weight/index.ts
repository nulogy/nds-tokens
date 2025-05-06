type FontWeight = 'light' | 'normal' | 'medium' | 'bold'

export default () =>
  ({
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
  }) satisfies Record<FontWeight, number>
