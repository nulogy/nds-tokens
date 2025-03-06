import { baseColors, BaseColors } from './base'
import { categoricalColors, CategoricalColors } from './categorical'

interface Colors {
  base: BaseColors
  categorical: CategoricalColors
}

export default () =>
  ({
    base: baseColors,
    categorical: categoricalColors,
  }) satisfies Colors
