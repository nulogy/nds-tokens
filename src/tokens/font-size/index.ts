import { StandardFontSize, standardFontSize } from './standard'
import { ExperimentalFontSize, experimentalFontSizes } from './experimental'
import { SemanticFontSize, semanticFontSizes } from './semantic'

interface FontSize {
  standard: Record<StandardFontSize, string>
  experimental: Record<ExperimentalFontSize, string>
  semantic: Record<SemanticFontSize, string>
}

export default (baseUnit: number) =>
  ({
    standard: standardFontSize(baseUnit),
    experimental: experimentalFontSizes(baseUnit),
    semantic: semanticFontSizes(baseUnit),
  }) satisfies FontSize
