import { fmt, n } from '../../utils'
import fontSize from '../font-size'

type LineHeight =
  | 'base'
  | 'baseRelaxed'
  | 'smallTextBase'
  | 'smallRelaxed'
  | 'smallTextCompressed'
  | 'smallerText'
  | 'smallerRelaxed'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'title'
  | 'sectionTitle'
  | 'subsectionTitle'

export default (baseUnit: number) => {
  const fontSizes = fontSize(baseUnit)

  return {
    base: fmt((5 * baseUnit) / n(fontSizes.semantic.base)),
    baseRelaxed: fmt((6 * baseUnit) / n(fontSizes.semantic.base)),
    smallTextBase: fmt((5 * baseUnit) / n(fontSizes.standard.small)),
    smallTextCompressed: fmt((5 * baseUnit) / n(fontSizes.standard.small)),
    smallRelaxed: fmt((6 * baseUnit) / n(fontSizes.standard.small)),
    smallerText: fmt((4 * baseUnit) / n(fontSizes.standard.smaller)),
    smallerRelaxed: fmt((5 * baseUnit) / n(fontSizes.standard.smaller)),
    heading1: fmt((8 * baseUnit) / n(fontSizes.semantic.heading1)),
    heading2: fmt((7 * baseUnit) / n(fontSizes.semantic.heading2)),
    heading3: fmt((6 * baseUnit) / n(fontSizes.semantic.heading3)),
    heading4: fmt((5 * baseUnit) / n(fontSizes.semantic.heading4)),
    title: fmt((8 * baseUnit) / n(fontSizes.semantic.heading1)),
    sectionTitle: fmt((7 * baseUnit) / n(fontSizes.semantic.heading2)),
    subsectionTitle: fmt((6 * baseUnit) / n(fontSizes.semantic.heading3)),
  } satisfies Record<LineHeight, string>
}
