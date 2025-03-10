import { px } from '../../utils'

type BaseBreakpoint = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'

export type BaseBreakpoints = Record<BaseBreakpoint, string>

export const baseBreakpoints = {
  extraSmall: px(0),
  small: px(768),
  medium: px(1024),
  large: px(1360),
  extraLarge: px(1920),
} satisfies BaseBreakpoints
