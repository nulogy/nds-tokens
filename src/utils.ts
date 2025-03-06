export type Px = `${string}px`
export type Hex = `#${string}`
export type Pct = `${string}%`

export type StringifyNumbers<T> = {
  [K in keyof T]: T[K] extends number ? string : T[K]
}

export const px = (value: number | string): Px => `${value}px`

export const pct = (value: number | string): Pct => `${value}%`

export const s = String

export const n = parseFloat

export const fmt = new Intl.NumberFormat('en-CA', {
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 5,
}).format

export function pxs<T extends Record<string, number>>(config: T): { [K in keyof T]: string } {
  return Object.entries(config).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `${value}px`,
    }),
    {},
  ) as { [K in keyof T]: string }
}
