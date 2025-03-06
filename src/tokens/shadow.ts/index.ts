type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type CssShadow = `${number}px ${number}px ${number}px ${number}px ${RGBA}`

type Shadow = 'small' | 'medium' | 'large'

export default () =>
  ({
    small: '0px 1px 2px 0px rgba(1, 30, 56, 0.25)',
    medium: '0px 3px 8px 0px rgba(1, 30, 56, 0.18)',
    large: '0px 6px 12px 2px rgba(1, 30, 56, 0.15)',
  }) satisfies Record<Shadow, CssShadow>
