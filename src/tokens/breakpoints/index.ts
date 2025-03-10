import { BaseBreakpoints, baseBreakpoints } from './base'
import { SemanticBreakpoints, semanticBreakpoints } from './semantic'

type Breakpoint = {
  base: BaseBreakpoints
  semantic: SemanticBreakpoints
}

export default () =>
  ({
    base: baseBreakpoints,
    semantic: semanticBreakpoints,
  }) satisfies Breakpoint
