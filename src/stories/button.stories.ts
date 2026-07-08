import type { Meta, StoryObj } from '@storybook/angular';
import { expect, fn, userEvent, within } from 'storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost'] },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    label: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn(), label: 'Button' },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          '⚠️ **Known WCAG 2.2 AA failure.** White text on `--color-primary` (#50a9c2) ' +
          'is ~2.3:1 contrast — below the 4.5:1 minimum for normal text. Built as designed ' +
          'in Figma; needs a design-token fix (darken the primary background or the text). ' +
          'The a11y addon will report this violation.',
      },
    },
  },
  // Assert the a11y basics: the button has an accessible name, is reachable
  // by keyboard, and is operable.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });

    await userEvent.tab();
    await expect(button).toHaveFocus();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          '⚠️ **Known WCAG 2.2 AA failure.** White text on `--color-danger` (#fb6262) ' +
          'is ~2.5:1 contrast — below the 4.5:1 minimum for normal text. Built as designed ' +
          'in Figma; needs a design-token fix. The a11y addon will report this violation.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    label: 'Button',
  },
  // A disabled button must be truly inert: not keyboard-focusable and it
  // must not fire click handlers.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });

    await expect(button).toBeDisabled();

    await userEvent.tab();
    await expect(button).not.toHaveFocus();

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
