import { describe, it, expect } from 'vitest'
import { px, pct, fmt, n } from '../src/utils'

describe('Utils functions', () => {
  it('should format pixels correctly', () => {
    expect(px(10)).toBe('10px')
  })

  it('should format percentages correctly', () => {
    expect(pct(50)).toBe('50%')
  })

  it('should format numbers with fmt correctly', () => {
    const formatted = fmt(3.14159)
    expect(typeof formatted).toBe('string')
    expect(parseFloat(formatted)).toBeCloseTo(3.14159, 3)
  })

  it('should parse numbers with n correctly', () => {
    expect(n('3.14')).toBeCloseTo(3.14)
  })
})
