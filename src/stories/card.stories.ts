import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { AbsenceCardComponent } from './absence-card.component';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    titleColor: { control: 'color' },
    accentColor: { control: 'color' },
    accentColorEnd: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Card title',
    titleColor: '#3E3E3E',
    titleFontSize: '16px',
    backgroundColor: '#FFFFFF',
    accentColor: '#9E5BBA',
    accentColorEnd: '#B87DD0',
  },
  render: (args) => ({
    props: args,
    template: `<storybook-card
      [title]="title"
      [titleColor]="titleColor"
      [titleFontSize]="titleFontSize"
      [backgroundColor]="backgroundColor"
      [accentColor]="accentColor"
      [accentColorEnd]="accentColorEnd"
    >
      <p style="margin: 0; color: #656565; font-size: 14px;">Card body content goes here.</p>
    </storybook-card>`,
  }),
};

export const AbsenceExample: Story = {
  parameters: { controls: { disable: true } },
  decorators: [
    moduleMetadata({
      imports: [AbsenceCardComponent],
    }),
  ],
  render: () => ({
    template: `<storybook-absence-card></storybook-absence-card>`,
  }),
};
