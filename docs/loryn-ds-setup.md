# Loryn Design System — setup guide (Cursor)

Everything to get from empty folder to a live component + Storybook, contract-ready. Follow top to bottom. Verified against the current Tailwind v4 / shadcn / Storybook 9 toolchain.

---

## 0. Accounts & access — now vs later

| Need it now | What for | Have an account? |
|---|---|---|
| **Node 20 LTS+** | runs everything | n/a — install from nodejs.org |
| **Cursor** | editor + AI | ✅ |
| **GitHub** | version control / repo | likely ✅ |
| **Vercel** | deploy the live Storybook | ✅ (adykrni) |

**Not needed now:** Storybook account (there isn't one — it's free/local), Chromatic (optional paid visual testing — skip), npm publish account (only if you package the library later).

Check Node first:
```bash
node -v      # want v20.x or newer
```

---

## 1. Create the project

```bash
npm create vite@latest loryn-ds -- --template react-ts
cd loryn-ds
npm install
```

## 2. Tailwind v4

```bash
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
```

**`vite.config.ts`** — add the Tailwind plugin and the `@` alias:
```ts
import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
```

**`tsconfig.json`** — add `baseUrl` + `paths` (shadcn reads the root file):
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**`tsconfig.app.json`** — add the same so the editor resolves imports:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**`src/index.css`** — replace the contents with just:
```css
@import "tailwindcss";
```

## 3. shadcn (Radix under the hood)

```bash
npx shadcn@latest init
```
Pick **Neutral** as the base color when asked. This generates `components.json`, wires your CSS variables, and creates `lib/utils.ts`. (If it ever complains about Tailwind, you're on v4 → use `shadcn@latest`; only Tailwind v3 projects need the older `shadcn@2.3.0`.)

Add your first primitives:
```bash
npx shadcn@latest add button input badge
```

## 4. Storybook 9 (free, local, no account)

```bash
npx storybook@latest init
```
It auto-detects React + Vite, installs `@storybook/react-vite`, and drops a `.storybook/` folder plus example stories. Run it:
```bash
npm run storybook      # opens localhost:6006
```
If it asks about the Vitest addon or Playwright binaries, you can say yes — harmless — or skip for now.

One wiring step: make Storybook load your Tailwind tokens by importing your CSS once. In **`.storybook/preview.ts`**:
```ts
import "../src/index.css"
```

---

## 5. The Loryn token layer (your Week 1 deliverable)

shadcn writes default tokens into `src/index.css`. This is where *your* work starts — replace the values with Loryn's. Tailwind v4 keeps tokens in CSS, so your `:root` becomes the single source the whole system reads from.

```css
@import "tailwindcss";

:root {
  /* --- Loryn core tokens (raw values) --- */
  --loryn-blue-600: oklch(0.55 0.18 255);   /* replace with real Loryn values */
  --loryn-neutral-0: oklch(1 0 0);
  --loryn-neutral-900: oklch(0.21 0.01 260);
  --loryn-radius: 0.625rem;

  /* --- component tokens (map onto core — your two-tier architecture) --- */
  --background: var(--loryn-neutral-0);
  --foreground: var(--loryn-neutral-900);
  --primary: var(--loryn-blue-600);
  --radius: var(--loryn-radius);
}

@theme inline {
  /* expose tokens to Tailwind utilities like bg-primary, text-foreground */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --radius-md: var(--radius);
}
```

That two-tier split — raw core tokens feeding component tokens, no semantic layer — is the exact architecture decision from your Loryn case study, now real in code. Keep it.

---

## 6. Contract-lite starter (what makes this *yours*)

Add a `contracts/` folder. Week 1 you author these by hand; Week 2 you write the tiny generator that turns them into CVA variants + TS types.

**`contracts/tokens.contract.json`** — tokens as the typed source of truth:
```json
{
  "core": {
    "color": { "blue-600": "oklch(0.55 0.18 255)", "neutral-0": "oklch(1 0 0)" },
    "radius": { "base": "0.625rem" }
  },
  "component": {
    "primary": "{core.color.blue-600}",
    "background": "{core.color.neutral-0}"
  }
}
```

**`contracts/button.contract.json`** — one component's decisions, machine-readable:
```json
{
  "name": "Button",
  "props": {
    "variant": { "type": "enum", "values": ["primary", "secondary", "ghost"], "default": "primary" },
    "size": { "type": "enum", "values": ["sm", "md", "lg"], "default": "md" },
    "disabled": { "type": "boolean", "default": false }
  },
  "tokens": { "background": "component.primary", "radius": "core.radius.base" },
  "a11y": { "role": "button", "focusVisible": true, "disabledAriaDisabled": true }
}
```

Note the `a11y` block — encoding accessibility semantics *in the contract* is your differentiator (the thing even the article authors flagged as underused). Make it a first-class field from day one.

---

## 7. Cursor rules — a mini-contract for the AI

Create **`.cursor/rules/design-system.md`** so Cursor builds *within* your system instead of hardcoding values. This is the "give the AI a strict rulebook" idea from the contract articles, at project scale:

```md
# Design system rules
- Never hardcode colors, spacing, or radii. Use tokens from index.css / Tailwind utilities only.
- Every component composes on the existing shadcn/Radix primitive — do not hand-roll accessible behavior.
- Every component gets a matching *.stories.tsx with one story per variant in its contract.
- Props must match the component's contract in /contracts. If a variant isn't in the contract, don't invent it — flag it.
- Encode ARIA/roles from the contract's a11y block; never ship a component without keyboard focus handling.
```

This one file is worth a paragraph in your case study on its own: it's you making the AI honest against the contract, which is the whole thesis.

---

## 8. Folder structure you're aiming for

```
loryn-ds/
├─ .cursor/rules/design-system.md
├─ contracts/
│  ├─ tokens.contract.json
│  └─ button.contract.json
├─ src/
│  ├─ index.css            # tokens live here
│  ├─ components/ui/       # shadcn primitives you re-theme
│  │  ├─ button.tsx
│  │  └─ button.stories.tsx
│  ├─ patterns/            # Loryn-specific: form-panel/ etc. (Week 3)
│  └─ lib/utils.ts
└─ .storybook/
```

## 9. Prove the loop — first story

Create **`src/components/ui/button.stories.tsx`**:
```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = { title: "UI/Button", component: Button }
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: "Request access" } }
export const Secondary: Story = { args: { variant: "secondary", children: "Cancel" } }
```
Run `npm run storybook` — if you see the button in both variants with Loryn's tokens applied, your whole pipeline works and Week 1 is essentially done.

## 10. Deploy (so it's a real link)

```bash
git init && git add . && git commit -m "init loryn-ds"
# push to a new GitHub repo, then import it in Vercel
```
In Vercel, set the **build command** to `npm run build-storybook` and the **output directory** to `storybook-static`. That publishes your Storybook as the live artifact for the Loryn Design System tab.

---

## Order of operations for Cursor

Run sections 1–4 as raw terminal commands first (don't have Cursor "help" — they're deterministic, and its help adds noise). *Then* bring Cursor in for sections 5–9, where the token values, contracts, and components are judgment calls it can accelerate — with the rules file keeping it honest.
