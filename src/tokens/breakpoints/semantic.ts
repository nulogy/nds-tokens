import { px } from '../../utils'

export type SemanticBreakpoints = {
  phone: {
    portrait: string
    landscape: string
  }
  tablet: {
    portrait: string
    landscape: string
  }
  laptop: string
  desktop: string
}

export const semanticBreakpoints = {
  phone: {
    portrait: px(320),
    landscape: px(640),
  },
  tablet: {
    portrait: px(768),
    landscape: px(1024),
  },
  laptop: px(1280),
  desktop: px(1440),
} satisfies SemanticBreakpoints
