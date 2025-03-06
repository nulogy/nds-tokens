import { fmt } from '../../utils'

export type StandardFontSize = 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest'

export const standardFontSize = (baseUnit: number) =>
  ({
    smaller: fmt(baseUnit * 3),
    small: fmt(baseUnit * 3.75),
    medium: fmt(baseUnit * 3.75),
    large: fmt(baseUnit * 5.25),
    larger: fmt(baseUnit * 6),
    largest: fmt(baseUnit * 7.5),
  }) satisfies Record<StandardFontSize, string>
