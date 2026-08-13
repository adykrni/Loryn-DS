# Design system rules

- Never hardcode colors, spacing, or radii. Use tokens from index.css / Tailwind utilities only.
- Every component composes on the existing shadcn/Radix primitive — do not hand-roll accessible behavior.
- Every component gets a matching *.stories.tsx with one story per variant in its contract.
- Props must match the component's contract in /contracts. If a variant isn't in the contract, don't invent it — flag it.
- Encode ARIA/roles from the contract's a11y block; never ship a component without keyboard focus handling.
