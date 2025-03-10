import { fmt, px } from '../../utils'

export type StandardFontSize = 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest'

export const standardFontSize = (baseUnit: number) =>
  ({
    smaller: px(fmt(baseUnit * 3)),
    small: px(fmt(baseUnit * 3.75)),
    medium: px(fmt(baseUnit * 3.75)),
    large: px(fmt(baseUnit * 5.25)),
    larger: px(fmt(baseUnit * 6)),
    largest: px(fmt(baseUnit * 7.5)),
  }) satisfies Record<StandardFontSize, string>
