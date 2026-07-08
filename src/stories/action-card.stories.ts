import type { Meta, StoryObj } from '@storybook/angular';
import { expect, fn, userEvent, within } from 'storybook/test';

import { ActionCardComponent } from './action-card.component';

const meta: Meta<ActionCardComponent> = {
  title: 'Example/Action Card',
  component: ActionCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    ctaLabel: { control: 'text' },
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
  },
  args: {
    cta: fn(),
    title: 'Discover Something New',
    description:
      "Explore our curated collection and find exactly what you've been looking for. Quality you can count on.",
    ctaLabel: 'Learn more',
  },
};

export default meta;
type Story = StoryObj<ActionCardComponent>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '⚠️ **Inherits a known WCAG 2.2 AA failure from its CTA.** The primary button ' +
          '(white on `--color-primary` #50a9c2 ≈ 2.3:1) is below the 4.5:1 minimum. ' +
          'Tracked against the button token fix — see the Button stories.',
      },
    },
  },
  // The CTA is reachable and fires the card's `cta` output.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const cta = canvas.getByRole('button', { name: 'Learn more' });

    await userEvent.click(cta);
    await expect(args.cta).toHaveBeenCalled();
  },
};

export const WithImage: Story = {
  args: {
    title: 'Explore the Outdoors',
    description: 'Fresh routes and hidden trails, curated for your next weekend away.',
    ctaLabel: 'Start exploring',
    // Inline SVG data URI keeps the story self-contained (no network image).
    imageUrl:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='360' height='200'><rect width='360' height='200' fill='%234c7286'/></svg>",
    imageAlt: 'Placeholder landscape',
  },
};
