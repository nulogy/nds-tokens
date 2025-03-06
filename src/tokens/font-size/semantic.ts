import { standardFontSize } from './standard'

export type SemanticFontSize = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'base'

export const semanticFontSizes = (baseUnit: number) =>
  ({
    heading1: standardFontSize(baseUnit).larger,
    heading2: standardFontSize(baseUnit).large,
    heading3: standardFontSize(baseUnit).medium,
    heading4: standardFontSize(baseUnit).small,
    base: standardFontSize(baseUnit).small,
  }) satisfies Record<SemanticFontSize, string>
