export type TokenValue = string | number | Record<string, any>
export type Device = 'desktop' | 'tablet' | 'phone'

export const DEVICE_BASE_UNITS: Record<Device, number> = {
  tablet: 5.6,
  phone: 3.6,
  desktop: 4,
} as const

export const OUTPUT_PATH_NAME = 'output'
