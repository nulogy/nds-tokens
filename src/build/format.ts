import { capitalize, kebabCase, startCase, isPlainObject, upperCase, toUpper } from 'lodash'
import { Device, TokenValue } from './constants'

export interface FormattedTokens {
  header: string
  cssVars: string[]
  jsExports: string[]
  css: string
  js: string
}

/**
 * Generates a header comment based on the token folder name.
 * @param folderName The token category (e.g. 'color', 'spacing')
 * @param includeHeader Whether to include the header comment.
 * @returns A header comment string.
 */
function generateHeader(folderName: string, includeHeader: boolean): string {
  if (!includeHeader) return ''

  return `
/*
|-----------------------------------------------------------------------------
| ${capitalize(startCase(folderName))}
|-----------------------------------------------------------------------------
*/`.trim()
}

/**
 * Recursively formats token objects into CSS variable declarations and JS export statements.
 * @param tokenObject The token object to format
 * @param folderName The token category (e.g. 'color', 'spacing')
 * @param device The device type ('desktop' | 'tablet' | 'phone')
 * @param prefix Current key path prefix
 * @param includeHeader Whether to include a header comment at the top level
 * @returns An object containing a header, arrays of CSS variables and JS exports, plus full wrapped strings.
 */
export function formatTokens(
  tokenObject: Record<string, TokenValue>,
  folderName: string,
  device: Device,
  prefix: string[] = [],
  includeHeader: boolean = true,
): FormattedTokens {
  const cssVars: string[] = []
  const jsExports: string[] = []

  Object.entries(tokenObject).forEach(([key, value]) => {
    const currentPath = [...prefix, key]

    if (isPlainObject(value)) {
      const nestedFormats = formatTokens(value as Record<string, TokenValue>, folderName, device, currentPath, false)
      cssVars.push(...nestedFormats.cssVars)
      jsExports.push(...nestedFormats.jsExports)
    } else {
      const cssVarName = `--nds-${device}-${kebabCase(folderName)}-${currentPath.join('-')}`
      const jsVarName = toUpper(`${device}_${folderName}_${currentPath.join('_')}`)

      cssVars.push(`${cssVarName}: ${value};`)
      jsExports.push(`export const ${jsVarName} = "${value}";`)
    }
  })

  const header = generateHeader(folderName, includeHeader)
  const css = `${header}
:root {
  ${cssVars.join('\n  ')}
}`
  const js = `${header}
${jsExports.join('\n')}`

  return {
    header,
    cssVars,
    jsExports,
    css,
    js,
  }
}

/**
 * Wraps grouped CSS tokens in a single :root block while preserving section headers.
 * @param groups Array of objects with a header and CSS variable declarations.
 * @returns A single CSS string.
 */
export function wrapCss(groups: { header: string; cssVars: string[] }[]): string {
  const content = groups
    .map((group) => {
      const headerPart = group.header ? group.header + '\n' : ''
      return headerPart + group.cssVars.join('\n  ')
    })
    .join('\n\n')
  return `
/* 
  Nulogy Design System Tokens
  THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 
*/

:root {
  ${content}
}
`
}

/**
 * Wraps grouped JS exports in a single block while preserving section headers.
 * @param groups Array of objects with a header and JS export statements.
 * @returns A single JS string.
 */
export function wrapJs(groups: { header: string; jsExports: string[] }[]): string {
  const content = groups
    .map((group) => {
      const headerPart = group.header ? group.header + '\n' : ''
      return headerPart + group.jsExports.join('\n')
    })
    .join('\n\n')
  return `
/* 
  Nulogy Design System Tokens
  THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 
*/

${content}
`
}
