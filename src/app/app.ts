import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <main class="storybook-shell">
      <header class="storybook-shell__header">
        <div>
          <p class="storybook-shell__eyebrow">Builder.io preview</p>
          <h1>{{ title() }}</h1>
        </div>
        <a href="https://6a4b893fba40a186d0975a47-qzhzupcjby.chromatic.com/" target="_blank" rel="noreferrer">Open Storybook</a>
      </header>

      <iframe
        title="Storybook"
        src="https://6a4b893fba40a186d0975a47-qzhzupcjby.chromatic.com/"
        class="storybook-shell__frame"
      ></iframe>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: #f6f7f9;
        color: #111827;
        font-family:
          Inter,
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          sans-serif;
      }

      .storybook-shell {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        box-sizing: border-box;
      }

      .storybook-shell__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        border: 1px solid #d9dde3;
        border-radius: 14px;
        background: #ffffff;
        box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
      }

      .storybook-shell__eyebrow {
        margin: 0 0 4px;
        color: #6b7280;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
        font-size: 24px;
        line-height: 1.2;
      }

      a {
        flex: 0 0 auto;
        border-radius: 999px;
        background: #ff4785;
        color: #ffffff;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
      }

      .storybook-shell__frame {
        flex: 1;
        min-height: 720px;
        width: 100%;
        border: 1px solid #d9dde3;
        border-radius: 14px;
        background: #ffffff;
        box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('Storybook');
}
