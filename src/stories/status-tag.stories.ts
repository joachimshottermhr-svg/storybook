import type { Meta, StoryObj } from '@storybook/angular';

import { StatusTagComponent } from './status-tag.component';

const meta: Meta<StatusTagComponent> = {
  title: 'Example/Status Tag',
  component: StatusTagComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['Neutral', 'Expired', 'Positive', 'Warning', 'Negative', 'Other', 'Theme'],
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
    label: {
      control: 'text',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
    darkMode: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<StatusTagComponent>;

export const Neutral: Story = {
  args: {
    type: 'Neutral',
    size: 'small',
    label: 'Neutral',
  },
};

export const Positive: Story = {
  args: {
    type: 'Positive',
    size: 'small',
    label: 'Positive',
    leftIcon: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'Warning',
    size: 'large',
    label: 'Warning',
    rightIcon: true,
  },
};

export const NegativeDark: Story = {
  args: {
    type: 'Negative',
    size: 'large',
    label: 'Negative',
    darkMode: true,
    leftIcon: true,
  },
};

export const AllTypes: Story = {
  render: () => ({
    template: `
      <div class="status-tag-gallery">
        <div class="status-tag-gallery__row">
          <storybook-status-tag type="Neutral" label="Neutral"></storybook-status-tag>
          <storybook-status-tag type="Expired" label="Expired"></storybook-status-tag>
          <storybook-status-tag type="Positive" label="Positive"></storybook-status-tag>
          <storybook-status-tag type="Warning" label="Warning"></storybook-status-tag>
          <storybook-status-tag type="Negative" label="Negative"></storybook-status-tag>
          <storybook-status-tag type="Other" label="Other"></storybook-status-tag>
          <storybook-status-tag type="Theme" label="Theme"></storybook-status-tag>
        </div>
        <div class="status-tag-gallery__row">
          <storybook-status-tag type="Positive" size="large" label="With left icon" [leftIcon]="true"></storybook-status-tag>
          <storybook-status-tag type="Warning" size="large" label="With right icon" [rightIcon]="true"></storybook-status-tag>
          <storybook-status-tag type="Theme" size="large" label="Dark mode" [darkMode]="true"></storybook-status-tag>
        </div>
      </div>
    `,
    props: {},
  }),
};
