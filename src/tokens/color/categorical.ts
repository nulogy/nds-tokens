import { Hex } from '../../utils'
import { baseColors } from './base'

type CategoricalColor = 1 | 2 | 3 | 4 | 5 | 6

export type CategoricalColors = Record<CategoricalColor, Hex>

export const categoricalColors: CategoricalColors = {
  1: baseColors.aqua,
  2: baseColors.purple,
  3: baseColors.pink,
  4: baseColors.turquoise,
  5: baseColors.orange,
  6: baseColors.avocado,
}
