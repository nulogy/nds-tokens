import { fmt } from '../../../../src/utils'

export default function (baseUnit: number) {
  return {
    small: fmt(baseUnit * 1),
    medium: fmt(baseUnit * 2),
    large: fmt(baseUnit * 3),
  }
}
