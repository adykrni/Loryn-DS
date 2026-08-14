# Loryn Design System — Token Reference (Primitive Tier)

Raw values, zero meaning — the substrate the semantic and component tiers are built on.

**How the tiers split, and why it matters for reading this doc:**

- **Color primitives live in `:root`** and are consumed *only* by the semantic tier — never used directly in components. `bg-teal-600` in a component is a smell; components use semantic tokens like `bg-primary`.
- **Dimensional primitives live in `@theme`** (spacing, radius, type, shadow, etc.) and are consumed directly as Tailwind utilities (`p-4`, `rounded-lg`, `text-xl`). They don't re-theme, so they need no semantic indirection.
- **Breakpoints must be literal values** — media queries can't read CSS variables, so a `var()`-based breakpoint silently breaks `md:` variants.

Every color value below is generated from the teal anchor `#209688` (pinned exactly at `teal-500`).

---

## 1. Color

Three buckets. **Teal** is the brand. **Gray** is a teal-*tinted* neutral for UI surfaces on white — the tint keeps cards, borders, and backgrounds feeling part of the brand rather than clinical. **Neutral** is a pure, untinted gray for text and dividers where you want zero color cast.

### Teal — brand

| Token | Hex | OKLCH | Usage |
|---|---|---|---|
| `teal-100` | `#E5F1EF` | `oklch(0.949 0.013 182.8)` | Subtle brand tint — hover fills, selected backgrounds |
| `teal-200` | `#C7E1DC` | `oklch(0.890 0.028 182.8)` | Light fills, badges |
| `teal-300` | `#A1CDC5` | `oklch(0.816 0.047 182.8)` | Disabled brand, subtle borders |
| `teal-400` | `#70B4A9` | `oklch(0.722 0.072 182.8)` | Hover borders, secondary accents |
| **`teal-500`** | **`#209688`** | `oklch(0.608 0.101 182.8)` | **Primary brand — default CTA, links** |
| `teal-600` | `#057E72` | `oklch(0.534 0.094 182.8)` | Primary hover |
| `teal-700` | `#00695E` | `oklch(0.466 0.088 182.8)` | Primary active / pressed |
| `teal-800` | `#00534B` | `oklch(0.399 0.082 182.8)` | Brand text on light |
| `teal-900` | `#003F38` | `oklch(0.331 0.076 182.8)` | High-emphasis brand text |

### Gray — teal-tinted, for UI surfaces on white

| Token | Hex | OKLCH | Usage |
|---|---|---|---|
| `gray-100` | `#F4FAF9` | `oklch(0.980 0.006 182.8)` | App background |
| `gray-200` | `#ECF4F2` | `oklch(0.960 0.008 182.8)` | Subtle surface, raised panels |
| `gray-300` | `#DCE5E3` | `oklch(0.915 0.010 182.8)` | Card borders, dividers |
| `gray-400` | `#C4CFCD` | `oklch(0.845 0.012 182.8)` | Disabled borders, input outlines |
| `gray-500` | `#9DA7A5` | `oklch(0.720 0.012 182.8)` | Placeholder text, disabled icons |
| `gray-600` | `#77817F` | `oklch(0.595 0.012 182.8)` | Secondary text, muted icons |
| `gray-700` | `#58605E` | `oklch(0.480 0.010 182.8)` | Body text (tinted) |
| `gray-800` | `#3C4341` | `oklch(0.375 0.009 182.8)` | Strong text |
| `gray-900` | `#2A2F2E` | `oklch(0.300 0.008 182.8)` | Highest-emphasis tinted text |

### Neutral — pure gray, no tint

| Token | Hex | OKLCH | Usage |
|---|---|---|---|
| `neutral-100` | `#F8F8F8` | `oklch(0.980 0 0)` | Pure surface where tint is unwanted |
| `neutral-200` | `#F2F2F2` | `oklch(0.960 0 0)` | Neutral fills |
| `neutral-300` | `#E3E3E3` | `oklch(0.915 0 0)` | Neutral borders |
| `neutral-400` | `#CCCCCC` | `oklch(0.845 0 0)` | Neutral disabled |
| `neutral-500` | `#A4A4A4` | `oklch(0.720 0 0)` | Neutral placeholder |
| `neutral-600` | `#7F7F7F` | `oklch(0.595 0 0)` | Neutral secondary text |
| `neutral-700` | `#5D5D5D` | `oklch(0.480 0 0)` | Neutral body text |
| `neutral-800` | `#414141` | `oklch(0.375 0 0)` | Neutral strong text |
| `neutral-900` | `#2E2E2E` | `oklch(0.300 0 0)` | Primary text |

> **Mapping to the semantic tier (next step):** `primary → teal-500`, `primary-hover → teal-600`, `surface / background → gray-100/200`, `border → gray-300`, `text-primary → neutral-900`, `text-secondary → gray-600`. Text leans neutral; surfaces lean tinted gray; action leans teal.

```css
/* TIER 1 · COLOR PRIMITIVES — :root, consumed only by the semantic tier */
:root {
  /* Teal — brand */
  --teal-100: oklch(0.949 0.013 182.8);
  --teal-200: oklch(0.890 0.028 182.8);
  --teal-300: oklch(0.816 0.047 182.8);
  --teal-400: oklch(0.722 0.072 182.8);
  --teal-500: oklch(0.608 0.101 182.8);   /* #209688 */
  --teal-600: oklch(0.534 0.094 182.8);
  --teal-700: oklch(0.466 0.088 182.8);
  --teal-800: oklch(0.399 0.082 182.8);
  --teal-900: oklch(0.331 0.076 182.8);

  /* Gray — teal-tinted surfaces */
  --gray-100: oklch(0.980 0.006 182.8);
  --gray-200: oklch(0.960 0.008 182.8);
  --gray-300: oklch(0.915 0.010 182.8);
  --gray-400: oklch(0.845 0.012 182.8);
  --gray-500: oklch(0.720 0.012 182.8);
  --gray-600: oklch(0.595 0.012 182.8);
  --gray-700: oklch(0.480 0.010 182.8);
  --gray-800: oklch(0.375 0.009 182.8);
  --gray-900: oklch(0.300 0.008 182.8);

  /* Neutral — pure gray */
  --neutral-100: oklch(0.980 0 0);
  --neutral-200: oklch(0.960 0 0);
  --neutral-300: oklch(0.915 0 0);
  --neutral-400: oklch(0.845 0 0);
  --neutral-500: oklch(0.720 0 0);
  --neutral-600: oklch(0.595 0 0);
  --neutral-700: oklch(0.480 0 0);
  --neutral-800: oklch(0.375 0 0);
  --neutral-900: oklch(0.300 0 0);
}
```

---

## 2. Spacing

4px base scale, extended to **256px**.

| Token | rem | px |
|---|---|---|
| `spacing-0` | 0 | 0 |
| `spacing-px` | — | 1 |
| `spacing-0_5` | 0.125 | 2 |
| `spacing-1` | 0.25 | 4 |
| `spacing-1_5` | 0.375 | 6 |
| `spacing-2` | 0.5 | 8 |
| `spacing-2_5` | 0.625 | 10 |
| `spacing-3` | 0.75 | 12 |
| `spacing-4` | 1 | 16 |
| `spacing-5` | 1.25 | 20 |
| `spacing-6` | 1.5 | 24 |
| `spacing-8` | 2 | 32 |
| `spacing-10` | 2.5 | 40 |
| `spacing-12` | 3 | 48 |
| `spacing-16` | 4 | 64 |
| `spacing-20` | 5 | 80 |
| `spacing-24` | 6 | 96 |
| `spacing-32` | 8 | 128 |
| `spacing-40` | 10 | 160 |
| `spacing-48` | 12 | 192 |
| `spacing-56` | 14 | 224 |
| `spacing-64` | 16 | **256** |

```css
@theme {
  --spacing-0: 0rem;      --spacing-px: 1px;      --spacing-0_5: 0.125rem;
  --spacing-1: 0.25rem;   --spacing-1_5: 0.375rem; --spacing-2: 0.5rem;
  --spacing-2_5: 0.625rem; --spacing-3: 0.75rem;  --spacing-4: 1rem;
  --spacing-5: 1.25rem;   --spacing-6: 1.5rem;    --spacing-8: 2rem;
  --spacing-10: 2.5rem;   --spacing-12: 3rem;     --spacing-16: 4rem;
  --spacing-20: 5rem;     --spacing-24: 6rem;     --spacing-32: 8rem;
  --spacing-40: 10rem;    --spacing-48: 12rem;    --spacing-56: 14rem;
  --spacing-64: 16rem;    /* 256px */
}
```

---

## 3. Typography

Type scale from **8px to 96px**.

| Token | rem | px | Typical use |
|---|---|---|---|
| `text-2xs` | 0.5 | 8 | Dense metadata, legal |
| `text-xs` | 0.75 | 12 | Captions, labels |
| `text-sm` | 0.875 | 14 | Secondary body, controls |
| `text-base` | 1 | 16 | Body |
| `text-lg` | 1.125 | 18 | Lead paragraph |
| `text-xl` | 1.25 | 20 | Small headings |
| `text-2xl` | 1.5 | 24 | H4 |
| `text-3xl` | 1.875 | 30 | H3 |
| `text-4xl` | 2.25 | 36 | H2 |
| `text-5xl` | 3 | 48 | H1 |
| `text-6xl` | 3.75 | 60 | Display |
| `text-7xl` | 4.5 | 72 | Large display |
| `text-8xl` | 6 | 96 | Hero |

```css
@theme {
  --text-2xs: 0.5rem;   --text-xs: 0.75rem;  --text-sm: 0.875rem;
  --text-base: 1rem;    --text-lg: 1.125rem; --text-xl: 1.25rem;
  --text-2xl: 1.5rem;   --text-3xl: 1.875rem; --text-4xl: 2.25rem;
  --text-5xl: 3rem;     --text-6xl: 3.75rem; --text-7xl: 4.5rem;
  --text-8xl: 6rem;     /* 96px */

  /* Families */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;   /* swap for Loryn's */
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Weights */
  --font-weight-regular: 400;  --font-weight-medium: 500;
  --font-weight-semibold: 600; --font-weight-bold: 700;

  /* Line heights */
  --leading-none: 1;      --leading-tight: 1.25;  --leading-snug: 1.375;
  --leading-normal: 1.5;  --leading-relaxed: 1.625; --leading-loose: 2;

  /* Letter spacing */
  --tracking-tighter: -0.05em; --tracking-tight: -0.025em; --tracking-normal: 0em;
  --tracking-wide: 0.025em;    --tracking-wider: 0.05em;
}
```

---

## 4. Radius

| Token | Value |
|---|---|
| `radius-none` | 0 |
| `radius-sm` | 0.25rem |
| `radius-md` | 0.375rem |
| `radius-lg` | 0.5rem |
| `radius-xl` | 0.75rem |
| `radius-2xl` | 1rem |
| `radius-full` | 9999px |

```css
@theme {
  --radius-none: 0px;  --radius-sm: 0.25rem; --radius-md: 0.375rem;
  --radius-lg: 0.5rem; --radius-xl: 0.75rem; --radius-2xl: 1rem;
  --radius-full: 9999px;
}
```

---

## 5. Shadows

| Token | Value |
|---|---|
| `shadow-xs` | `0 1px 2px 0 oklch(0 0 0 / 0.05)` |
| `shadow-sm` | `0 1px 3px 0 …/0.10, 0 1px 2px -1px …/0.10` |
| `shadow-md` | `0 4px 6px -1px …/0.10, 0 2px 4px -2px …/0.10` |
| `shadow-lg` | `0 10px 15px -3px …/0.10, 0 4px 6px -4px …/0.10` |
| `shadow-xl` | `0 20px 25px -5px …/0.10, 0 8px 10px -6px …/0.10` |
| `shadow-2xl` | `0 25px 50px -12px oklch(0 0 0 / 0.25)` |
| `shadow-inner` | `inset 0 2px 4px 0 oklch(0 0 0 / 0.05)` |

```css
@theme {
  --shadow-xs:  0 1px 2px 0 oklch(0 0 0 / 0.05);
  --shadow-sm:  0 1px 3px 0 oklch(0 0 0 / 0.10), 0 1px 2px -1px oklch(0 0 0 / 0.10);
  --shadow-md:  0 4px 6px -1px oklch(0 0 0 / 0.10), 0 2px 4px -2px oklch(0 0 0 / 0.10);
  --shadow-lg:  0 10px 15px -3px oklch(0 0 0 / 0.10), 0 4px 6px -4px oklch(0 0 0 / 0.10);
  --shadow-xl:  0 20px 25px -5px oklch(0 0 0 / 0.10), 0 8px 10px -6px oklch(0 0 0 / 0.10);
  --shadow-2xl: 0 25px 50px -12px oklch(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 oklch(0 0 0 / 0.05);
}
```

---

## 6. Motion, containers, breakpoints

```css
@theme {
  /* Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);

  /* Container max-widths */
  --container-sm: 40rem;  --container-md: 48rem; --container-lg: 64rem;
  --container-xl: 80rem;  --container-prose: 65ch;

  /* Breakpoints — literal values only */
  --breakpoint-sm: 40rem;  --breakpoint-md: 48rem;  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;  --breakpoint-2xl: 96rem;
}
```

## 7. Raw values used in component CSS (not utilities)

```css
:root {
  /* Z-index */
  --z-base: 0; --z-dropdown: 1000; --z-sticky: 1100; --z-overlay: 1200;
  --z-modal: 1300; --z-popover: 1400; --z-toast: 1500; --z-tooltip: 1600;

  /* Motion durations (pair with --ease-*) */
  --duration-instant: 0ms; --duration-fast: 100ms; --duration-normal: 200ms;
  --duration-slow: 300ms;  --duration-slower: 500ms;

  /* Border widths */
  --border-0: 0px; --border-1: 1px; --border-2: 2px; --border-4: 4px;

  /* Opacity */
  --opacity-0: 0; --opacity-10: 0.1; --opacity-20: 0.2; --opacity-40: 0.4;
  --opacity-60: 0.6; --opacity-80: 0.8; --opacity-100: 1;
}
```

---

## Tiers 2 & 3 — next

The **semantic tier** (`:root` + `.dark`, exposed via `@theme inline`) and **component tier** are built on top of these primitives. Use the mapping note under §1 as the starting point for the semantic color tokens: text → neutral, surfaces → tinted gray, action → teal.
