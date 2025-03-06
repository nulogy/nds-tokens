import { Hex } from '../../utils'

type BaseColor =
  | 'black'
  | 'blackBlue'
  | 'darkBlue'
  | 'blue'
  | 'lightBlue'
  | 'darkGrey'
  | 'midGrey'
  | 'grey'
  | 'lightGrey'
  | 'whiteGrey'
  | 'white'
  | 'yellow'
  | 'lightYellow'
  | 'green'
  | 'lightGreen'
  | 'red'
  | 'lightRed'
  | 'aqua'
  | 'purple'
  | 'pink'
  | 'turquoise'
  | 'orange'
  | 'avocado'

export type BaseColors = Record<BaseColor, Hex>

export const baseColors: BaseColors = {
  black: '#011E38',
  blackBlue: '#122B47',
  darkBlue: '#00438F',
  blue: '#216BEB',
  lightBlue: '#E1EBFA',
  darkGrey: '#434D59',
  midGrey: '#6C7784',
  grey: '#C0C8D1',
  lightGrey: '#E4E7EB',
  whiteGrey: '#F0F2F5',
  white: '#FFFFFF',
  green: '#008059',
  lightGreen: '#E9F7F2',
  red: '#CC1439',
  lightRed: '#FAE6EA',
  yellow: '#FFBB00',
  lightYellow: '#FCF5E3',
  aqua: '#19C4E6',
  purple: '#8033CC',
  pink: '#E372D0',
  turquoise: '#55DDB0',
  orange: '#EE5513',
  avocado: '#D3D322',
}
