
# cashloan-prototype — CLAUDE.md

## What this project is

A React + TypeScript Vite prototype of a Vietnamese cash-loan mobile UI. It renders inside a `375×774px` phone-frame shell on desktop and goes full-viewport on narrow screens (≤ 420px). No backend — all state is local.

## Tech stack

| Tool | Version / role |
|------|---------------|
| React 18 | UI |
| TypeScript 5 | Type safety |
| Vite 5 | Dev server & build (`npm run dev`) |
| Vitest 2 + Testing Library | Unit tests (`npm test`) |
| Plain CSS (`src/styles.css`) | All styling — no CSS-in-JS, no utility framework |
| `agentation` | Floating debug/agent overlay rendered inside `<App>` |

## Project layout

```
src/
  main.tsx          # React entry point
  App.tsx           # All screen components (LoanOfferStep, LoanReviewStep, shared pieces)
  loan-flow.tsx     # LoanFlowContext + LoanFlowProvider + useLoanFlow hook
  loan-quote.ts     # Pure calc logic: constants, types, calculateLoanQuote, formatCurrency
  styles.css        # Global styles — BEM-like class names, no modules
  App.test.tsx      # Component tests
  test/setup.ts     # Vitest setup (jest-dom)
material/           # SVG/PNG assets imported directly by App.tsx
Icon /              # Icon SVGs (Second/, Pri/, etc.)
```

## Styling conventions

- **Plain CSS only.** No Tailwind, no CSS Modules, no styled-components.
- **BEM-like naming**: block (`loan-card`), element (`loan-card__header`), modifier (`installment-chip--active`).
- **Design tokens live in CSS custom properties on `:root`**. Brand colours used throughout:
  - `#001f3e` — primary text / dark navy
  - `#0033c9` — primary action / interactive blue
  - `#005f8d` — secondary blue (card titles)
  - `#66798b` — muted / secondary text
  - `#d3eeff` / `#c8e4ff` — light blue borders & track fills
- **Icon masking**: icons are `<span>` or `<img>` elements using the `.icon-mask` utility. The icon SVG path is injected via the `--icon-url` CSS custom property as an inline style: `style={{ "--icon-url": `url(${icon})` } as CSSProperties}`.
- **Phone-frame responsiveness**: the frame is `375×774px` on desktop. On `≤ 420px` it fills `100vw / 100vh` with no border-radius or shadow.

## State management

All mutable state lives in `LoanFlowContext` (`src/loan-flow.tsx`):

- `amount` — selected loan amount (clamped to min/max/step by `clampLoanAmount`)
- `term` — selected term in months (`3 | 6 | 9 | 12`)
- `step` — current screen (`"offer" | "review"`)
- `quote` — derived via `useMemo(calculateLoanQuote, [amount, term])`

Do **not** add local state to screen components for values that need to survive a step change. Extend the context instead.

## Loan calculation rules (`src/loan-quote.ts`)

- Range: 10 000 000 – 30 000 000 VND, step 500 000.
- Fixed processing fee: 200 000 VND.
- Monthly rates by term: 3 m → 1.8%, 6 m → 2.0%, 9 m → 2.3%, 12 m → 2.7%.
- Formula: standard amortising payment `P * r / (1 - (1+r)^-n)`.
- `firstPaymentDate` is hardcoded to `"23/05/2023"` (prototype only).
- Currency is formatted with `Intl.NumberFormat("vi-VN")` + `đ` suffix.

## Commands

```bash
npm run dev       # start dev server
npm run build     # type-check then Vite build
npm test          # run Vitest once
npm run test:watch  # Vitest watch mode
```

## Things to know before editing

1. **This is a prototype, not production.** There is no auth, no API, no routing library. Keep changes scoped to UI fidelity and interaction correctness.
2. **Asset imports are relative to the file.** `material/` and `Icon /` (note the trailing space in the folder name) are imported at the top of `App.tsx`. Adding new assets means adding new imports there.
3. **The `<Agentation />` overlay** is a third-party dev tool injected at the bottom of `<LoanPrototype>`. Don't remove it unless asked.
4. **CSS slider is custom-rendered** — the native `<input type="range">` is invisible (`opacity: 0`); the visible track, fill and thumb are separate `<div>` elements driven by the `progress` percentage. Keep them in sync when changing slider logic.
5. **Vietnamese copy** — all user-facing strings are in Vietnamese. Don't translate or change copy unless explicitly asked.
6. **`agentation` is in `devDependencies`** only conceptually — it's actually listed under `devDependencies` in `package.json`. Don't move it to `dependencies` without a reason.
