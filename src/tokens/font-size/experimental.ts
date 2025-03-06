import { fmt } from '../../utils'

export type ExperimentalFontSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const experimentalFontSizes = (baseUnit: number) =>
  ({
    xxs: fmt(baseUnit * 2.25),
    xs: fmt(baseUnit * 3),
    sm: fmt(baseUnit * 3.75),
    md: fmt(baseUnit * 4.5),
    lg: fmt(baseUnit * 5.25),
    xl: fmt(baseUnit * 6),
    xxl: fmt(baseUnit * 7.5),
  }) satisfies Record<ExperimentalFontSize, string>
