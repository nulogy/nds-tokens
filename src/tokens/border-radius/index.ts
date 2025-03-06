import { pct, px } from '../../utils'

type BorderRadius = 'small' | 'medium' | 'large' | 'circle' | 'rounded'

export default (baseUnit: number) =>
  ({
    small: px(baseUnit * 0.5),
    medium: px(baseUnit * 1),
    large: px(baseUnit * 2),
    circle: pct(50),
    rounded: px(9999),
  }) satisfies Record<BorderRadius, string>
