import type { Meta, StoryObj } from '@storybook/angular';

import { AbsenceCardComponent } from './absence-card.component';

const meta: Meta<AbsenceCardComponent> = {
  title: 'Example/Absence Card',
  component: AbsenceCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tag: {
      control: 'select',
      options: ['Booked', 'Pending', 'Approved', 'Holiday'],
    },
  },
};

export default meta;
type Story = StoryObj<AbsenceCardComponent>;

export const Default: Story = {
  args: {
    annualDays: 17,
    annualTotal: '36',
    sicknessDays: 3,
    upcomingDates: '09 - 14 Mar 2025 (4 days)',
    tag: 'Booked',
  },
};

export const Compact: Story = {
  args: {
    annualDays: 8,
    annualTotal: '24',
    sicknessDays: 1,
    upcomingDates: '22 - 23 Apr 2025 (2 days)',
    tag: 'Pending',
  },
};
