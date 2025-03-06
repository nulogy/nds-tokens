import fs from 'fs'
import path from 'path'
import { describe, afterEach, beforeEach, it, expect } from 'vitest'
import { generateTokens } from '../src/build/generate'
import { DEVICE_BASE_UNITS } from '../src/build/constants'

describe('generateTokens', () => {
  const tokensFixtureDir = path.resolve(__dirname, 'fixtures', 'tokens')

  let tmpOutputDir: string

  beforeEach(() => {
    tmpOutputDir = fs.mkdtempSync(path.join(__dirname, 'temp-tokens-output-'))
  })

  afterEach(() => {
    fs.rmSync(tmpOutputDir, { recursive: true, force: true })
  })

  it('should generate token files from fixture tokens', async () => {
    await generateTokens(DEVICE_BASE_UNITS, path.relative(path.join(__dirname, '..'), tmpOutputDir), tokensFixtureDir)

    const tokensCssPath = path.join(tmpOutputDir, 'nds_tokens.css')
    const tokensJsPath = path.join(tmpOutputDir, 'nds_tokens.js')
    const tokensTsPath = path.join(tmpOutputDir, 'nds_tokens.ts')

    expect(fs.existsSync(tokensCssPath)).toBe(true)
    expect(fs.existsSync(tokensJsPath)).toBe(true)
    expect(fs.existsSync(tokensTsPath)).toBe(true)

    const cssContent = fs.readFileSync(tokensCssPath, 'utf8')
    const jsContent = fs.readFileSync(tokensJsPath, 'utf8')

    await expect(cssContent).toMatchFileSnapshot(path.join(__dirname, 'snapshots', 'tokens', 'nds_tokens.css'))
    await expect(jsContent).toMatchFileSnapshot(path.join(__dirname, 'snapshots', 'tokens', 'nds_tokens.js'))
  })
})
