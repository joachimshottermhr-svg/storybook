import type { Preview } from '@storybook/angular'

// Design tokens (src/styles.scss) load automatically via the Angular
// browserTarget's `styles` array in angular.json — same source of truth as
// the app — so every story renders with the real token values.

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;