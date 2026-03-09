# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

Use **pnpm** exclusively.

## Commands

```bash
pnpm build          # Build tokens → output/ then dist/
pnpm test           # Run all tests once (vitest --run)
pnpm format:check   # Check formatting
pnpm format:fix     # Auto-fix formatting
```

Run a single test file:
```bash
pnpm vitest run specs/format.spec.ts
```

## Architecture

This project transforms design token definitions into CSS variables and JavaScript/TypeScript constants for the Nulogy Design System.

### Build Pipeline

```
src/tokens/{category}/index.ts   ← token definitions
         ↓
src/build/main.ts                ← entry point, calls generateTokens()
src/build/generate.ts            ← scans token folders, imports each index.ts,
                                    calls with each device's base unit, writes output
src/build/format.ts              ← formats tokens as CSS vars and JS constants
         ↓
output/                          ← intermediate: nds_tokens.{css,js,ts}
         ↓
scripts/postbuild.sh             ← generates .d.ts, moves to dist/, runs prettier
dist/                            ← published to npm
```

### Device System

Tokens are device-aware. Three devices exist (`desktop`, `tablet`, `phone`) each with a different `baseUnit` multiplier (`4`, `5.6`, `3.6`). Each token category's `index.ts` exports a default function `(baseUnit: number) => ({...})`.

Output naming:
- **CSS:** `--nds-{device}-{folderName}-{nestedPath}` (kebab-case, in `:root {}`)
- **JS/TS:** `{DEVICE}_{FOLDERNAME}_{NESTEDPATH}` (SCREAMING_SNAKE_CASE)

### Token Definition Pattern

```typescript
// src/tokens/my-category/index.ts
export default (baseUnit: number) => ({
  myCategory: {
    small: px(baseUnit * 1),   // → --nds-desktop-my-category-small: 4px
    large: px(baseUnit * 4),   // → NDS_DESKTOP_MY_CATEGORY_LARGE = "16px"
  },
})
```

### Utilities (`src/utils.ts`)

- `px(value)` — formats as `"4px"`
- `pct(value)` — formats as percentage
- `pxs(config)` — batch-converts object values to px strings
- `fmt` — `Intl.NumberFormat` (1–5 significant digits, en-CA locale)
- Template literal types: `Px`, `Hex`, `Pct`

### Tests (`specs/`)

- `format.spec.ts` — unit tests for CSS/JS formatting logic
- `generate.spec.ts` — integration tests using fixtures in `specs/fixtures/tokens/`, snapshot-tested against `specs/snapshots/tokens/`
- `utils.spec.ts` — unit tests for utility functions

### Code Style

Prettier config (`.prettierrc.json`): 120-char line width, no semicolons, single quotes.
