import { Component } from '@angular/core';
import { ButtonComponent } from '../stories/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  template: `
    <main class="demo">
      <header class="demo__header">
        <p class="demo__eyebrow">PeopleFirst · live demo</p>
        <h1>Component demo</h1>
        <p class="demo__sub">
          Stage 3 of the pipeline: real components, consumed as code and styled entirely by
          design tokens.
        </p>
      </header>

      <section class="demo__section">
        <h2>Button</h2>

        <div class="demo__row">
          <storybook-button variant="primary" label="Primary"></storybook-button>
          <storybook-button variant="secondary" label="Secondary"></storybook-button>
          <storybook-button variant="danger" label="Danger"></storybook-button>
          <storybook-button variant="ghost" label="Ghost"></storybook-button>
        </div>

        <div class="demo__row">
          <storybook-button variant="primary" size="small" label="Small"></storybook-button>
          <storybook-button variant="primary" size="medium" label="Medium"></storybook-button>
          <storybook-button variant="primary" size="large" label="Large"></storybook-button>
        </div>

        <div class="demo__row">
          <storybook-button variant="primary" [disabled]="true" label="Disabled"></storybook-button>
          <storybook-button variant="secondary" [disabled]="true" label="Disabled"></storybook-button>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      /* The demo chrome dogfoods the same tokens the components use. */
      :host {
        display: block;
        min-height: 100vh;
        background: var(--color-background);
        color: var(--color-text);
        font-family:
          Inter,
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          sans-serif;
      }

      .demo {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
        max-width: 880px;
        margin: 0 auto;
        padding: var(--spacing-xl);
        box-sizing: border-box;
      }

      .demo__header {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .demo__eyebrow {
        margin: 0;
        color: var(--color-text-muted);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-bold);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
        line-height: 1.2;
      }

      .demo__sub {
        margin: 0;
        color: var(--color-text-muted);
        font-size: var(--font-size-md);
      }

      .demo__section {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        padding: var(--spacing-lg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
      }

      h2 {
        margin: 0;
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-medium);
      }

      .demo__row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-md);
      }
    `,
  ],
})
export class App {}
