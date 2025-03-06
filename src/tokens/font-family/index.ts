type FontFamily = 'base' | 'mono' | 'sc'

export default () =>
  ({
    base: "'IBM Plex Sans', sans-serif",
    mono: "'IBM Plex Mono', monospace",
    sc: "'Noto Sans SC', sans-serif",
  }) satisfies Record<FontFamily, string>
