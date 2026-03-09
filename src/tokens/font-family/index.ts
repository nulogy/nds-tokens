type FontFamily = 'base' | 'mono' | 'sc' | 'jp'

export default () =>
  ({
    base: "'IBM Plex Sans', sans-serif",
    mono: "'IBM Plex Mono', monospace",
    sc: "'Noto Sans SC', sans-serif",
    jp: "'IBM Plex Sans JP', sans-serif",
  }) satisfies Record<FontFamily, string>
