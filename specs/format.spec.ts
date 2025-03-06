import { describe, it, expect } from 'vitest'
import { formatTokens, wrapCss, wrapJs } from '../src/build/format'
import { toUpper } from 'lodash'

describe('formatTokens function', () => {
  const dummyTokens = {
    primary: '#ffffff',
    secondary: '#000000',
    nested: {
      tertiary: '#ff00ff',
    },
  }
  const folderName = 'color'
  const device = 'phone'
  const result = formatTokens(dummyTokens, folderName, device, [], true)

  it('should generate a header containing the capitalized folder name', () => {
    expect(result.header).toContain('Color')
  })

  it('should generate correct CSS variable declarations', () => {
    expect(result.cssVars).toContain(`--nds-${device}-${folderName}-primary: #ffffff;`)
    expect(result.cssVars).toContain(`--nds-${device}-${folderName}-nested-tertiary: #ff00ff;`)
  })

  it('should generate correct JS export statements', () => {
    expect(result.jsExports).toContain(`export const ${toUpper(device)}_${toUpper(folderName)}_PRIMARY = "#ffffff";`)
    expect(result.jsExports).toContain(
      `export const ${toUpper(device)}_${toUpper(folderName)}_NESTED_TERTIARY = "#ff00ff";`,
    )
  })

  it('should include a ":root" block in the CSS output', () => {
    expect(result.css).toContain(':root {')
  })

  it('should include the correct export in the JS output', () => {
    expect(result.js).toContain(`export const ${toUpper(device)}_${toUpper(folderName)}_PRIMARY = "#ffffff";`)
  })
})

describe('wrapCss and wrapJs functions', () => {
  it('should wrap CSS groups correctly', () => {
    const groups = [
      {
        header: '/* Test Header */',
        cssVars: ['--test: 1px;', '--example: 2px;'],
      },
    ]
    const wrapped = wrapCss(groups)
    expect(wrapped).toContain(':root {')
    expect(wrapped).toContain('--test: 1px;')
    expect(wrapped).toContain('/* Test Header */')
  })

  it('should wrap JS groups correctly', () => {
    const groups = [
      {
        header: '/* Test JS Header */',
        jsExports: ['export const TEST = "value";'],
      },
    ]
    const wrapped = wrapJs(groups)
    expect(wrapped).toContain('export const TEST = "value";')
    expect(wrapped).toContain('/* Test JS Header */')
  })
})
