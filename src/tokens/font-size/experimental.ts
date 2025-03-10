import { fmt, px } from '../../utils'

export type ExperimentalFontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const experimentalFontSizes = (baseUnit: number) =>
  ({
    xxs: px(fmt(baseUnit * 2.25)),
    xs: px(fmt(baseUnit * 3)),
    sm: px(fmt(baseUnit * 3.75)),
    md: px(fmt(baseUnit * 4.5)),
    lg: px(fmt(baseUnit * 5.25)),
    xl: px(fmt(baseUnit * 6)),
    xxl: px(fmt(baseUnit * 7.5)),
  }) satisfies Record<ExperimentalFontSize, string>
