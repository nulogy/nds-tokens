import { fmt, px } from '../../utils'

type Space =
  | 'none'
  | 'x0'
  | 'x0_25'
  | 'half'
  | 'x0_5'
  | 'x0_75'
  | 'x1'
  | 'x1_25'
  | 'x1_5'
  | 'x1_75'
  | 'x2'
  | 'x2_5'
  | 'x3'
  | 'x4'
  | 'x5'
  | 'x6'
  | 'x7'
  | 'x8'
  | 'x9'
  | 'x10'
  | 'x11'
  | 'x12'

export default (baseUnit: number) =>
  ({
    none: px(0),
    x0: px(0),
    x0_25: px(fmt(baseUnit * 0.5)),
    half: px(fmt(baseUnit * 1)),
    x0_5: px(fmt(baseUnit * 1)),
    x0_75: px(fmt(baseUnit * 1.5)),
    x1: px(fmt(baseUnit * 2)),
    x1_25: px(fmt(baseUnit * 2.5)),
    x1_5: px(fmt(baseUnit * 3)),
    x1_75: px(fmt(baseUnit * 3.5)),
    x2: px(fmt(baseUnit * 4)),
    x2_5: px(fmt(baseUnit * 5)),
    x3: px(fmt(baseUnit * 6)),
    x4: px(fmt(baseUnit * 8)),
    x5: px(fmt(baseUnit * 10)),
    x6: px(fmt(baseUnit * 12)),
    x7: px(fmt(baseUnit * 14)),
    x8: px(fmt(baseUnit * 16)),
    x9: px(fmt(baseUnit * 18)),
    x10: px(fmt(baseUnit * 20)),
    x11: px(fmt(baseUnit * 22)),
    x12: px(fmt(baseUnit * 24)),
  }) satisfies Record<Space, string>
