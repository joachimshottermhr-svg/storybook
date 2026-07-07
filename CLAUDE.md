# CLAUDE.md

Standing instructions for Claude Code when working in this repository.
Read this fully before generating or editing any component.

> ⚠️ **This is a tightening draft.** Every line marked `⚠️ CONFIRM` encodes an
> assumption about our conventions. Verify or correct it against the real codebase
> before relying on this file. Wrong rules here silently produce wrong components.

---

## 1. What this repo is

- A Storybook-driven Angular component library for **PeopleFirst**.
- Every component ships with: implementation, a Storybook story, and must meet
  **WCAG 2.2 AA**. A component is not "done" until all three are true.
- ⚠️ CONFIRM: Angular version `__` · standalone components or NgModules `__` ·
  signals in use `yes/no` · new control flow (`@if` / `@for`) or structural
  directives (`*ngIf` / `*ngFor`) `__`.

---

## 2. The golden rule: imitate, don't invent

You do not know our house style from training. You know it from what's in front of
you. **Always copy an existing reference component rather than generating from an
abstract description.**

Before writing any component:

1. Read the reference component(s) named in the task (or, if none given, ask which
   to use — do not guess).
2. Summarise the patterns you see back to me: file structure, selector prefix,
   styling approach, change-detection strategy, input/output style, story format.
3. Only after I confirm the summary, generate the new component mirroring those
   patterns exactly.

If your summary of our conventions is wrong, I want to catch it **before** a line of
code is written, not in review.

> ⚠️ CONFIRM — canonical reference components (pick our cleanest 2–3):
> - `__/button/` — reference for structure, styling, stories
> - `__/input/` — reference for form controls + validation
> - `__/card/` — reference for content/layout components

---

## 3. Component structure

⚠️ CONFIRM this matches our actual layout, then delete this warning:

```
components/
  <component-name>/
    <component-name>.component.ts
    <component-name>.component.html
    <component-name>.component.scss
    <component-name>.component.spec.ts
    <component-name>.stories.ts
    index.ts                     # barrel export
```

- File names: `kebab-case`. Class names: `PascalCase`. Selectors: `⚠️ CONFIRM prefix`
  + `kebab-case` (e.g. `pf-button`).
- One component per folder. Export it through the barrel `index.ts`.
- ⚠️ CONFIRM: inline template/styles vs separate files. Default here assumes separate
  `.html` / `.scss` files.

---

## 4. Angular conventions

- Change detection: **`OnPush`** on every component unless there's a documented
  reason not to.
- Inputs/outputs: ⚠️ CONFIRM — signal inputs (`input()`) / decorator inputs
  (`@Input()`). Match the reference, don't mix styles within a component.
- No logic in templates beyond simple binding. Derive values in the class.
- Prefer composition over inheritance. Reuse existing library components rather than
  re-implementing (e.g. don't hand-roll a button inside a card — use our button).
- Do **not** add dependencies. If a task seems to need one, stop and ask.

---

## 5. Styling & design tokens

- ⚠️ CONFIRM styling approach: SCSS / CSS custom properties / Tailwind / Angular
  Material theming — `__`.
- **Never hardcode a value that exists as a token.** Colours, spacing, radii,
  typography must reference our tokens/variables. If you can't find the right token,
  ask — don't invent a literal.
- ⚠️ CONFIRM: where tokens live (`__/tokens`, `_variables.scss`, CSS vars in
  `:root`, etc.).
- Respect existing breakpoints and spacing scale rather than introducing new values.

---

## 6. Storybook story conventions

- Format: **CSF3**, typed with `Meta` and `StoryObj`.
- ⚠️ CONFIRM story title namespacing, e.g. `Components/Button`.
- Cover **one story per meaningful state**: `Default`, each variant, plus
  `Disabled`, `Loading`, `Error` where they apply. Don't cram every arg into one
  story.
- Expose props via `args` and document them with `argTypes`.
- Enable `autodocs`.
- Include the **a11y addon** and treat its findings as blocking, not advisory.
- Where interaction or focus behaviour matters, add a `play` function that asserts
  it (keyboard nav, focus moves, aria state toggles).

Skeleton to mirror (adjust to match our reference story exactly):

```ts
import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',          // ⚠️ CONFIRM namespace
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = { args: { variant: 'primary' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
```

---

## 7. Accessibility — WCAG 2.2 AA (non-negotiable)

Every component must satisfy these before it's considered complete:

- **Semantic HTML first.** Use the correct native element (`<button>`, `<a>`,
  `<label>`). Reach for ARIA only when no native element fits — and never use ARIA
  to paper over the wrong element.
- **Keyboard:** every interactive element is reachable and operable by keyboard, in
  logical tab order, with no traps.
- **Visible focus:** a clear `:focus-visible` indicator that meets contrast
  requirements. Never remove focus outlines without a compliant replacement.
- **Names & roles:** all controls have accessible names; state (pressed, expanded,
  selected, disabled) is exposed programmatically.
- **Contrast:** text and meaningful non-text elements meet AA contrast. Use tokens,
  don't eyeball.
- **Target size (2.2):** interactive targets meet the 2.2 minimum target-size
  criterion.
- **Motion:** respect `prefers-reduced-motion`.
- Run the Storybook a11y addon / axe against the new stories and report the result.
  Zero violations is the bar.

If a design I hand you would force a WCAG 2.2 AA violation, **flag it rather than
implementing it** — I'd rather fix the design.

---

## 8. Workflow & guardrails

- **One component per PR / per run.** Don't regenerate the whole library in one go —
  that's where drift and invented patterns creep in.
- Work on a branch; open a PR — **never** commit to main or auto-merge.
- Before proposing a component as done, run and report: ⚠️ CONFIRM commands —
  lint `__`, type-check `__`, unit tests `__`, Storybook build `__`.
- When I correct something, assume it's a **standing rule**: propose adding it to
  this file so it sticks next session.
- If you're unsure about a convention, **ask or read another example** — do not
  guess and do not fabricate a pattern.

---

## 9. Design source of truth (optional, for Figma sync)

- Figma is the design source of truth. Where a component has a Figma counterpart,
  map it via **Code Connect** so generated/updated code references our real
  component instead of a generic one.
- ⚠️ CONFIRM: Code Connect config location `__`.

---

## Before you commit this file — confirm list

- [ ] Angular version, standalone vs NgModule, signals, control-flow syntax (§1, §4)
- [ ] Canonical reference components named (§2)
- [ ] Folder structure and selector prefix (§3)
- [ ] Input/output style — signal vs decorator (§4)
- [ ] Styling approach and token location (§5)
- [ ] Story title namespace and addon setup (§6)
- [ ] Lint / type / test / build commands (§8)
- [ ] Code Connect location, if using Figma sync (§9)
