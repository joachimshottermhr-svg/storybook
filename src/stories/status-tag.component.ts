import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type StatusTagType =
  | 'Neutral'
  | 'Expired'
  | 'Positive'
  | 'Warning'
  | 'Negative'
  | 'Other'
  | 'Theme';

type StatusTagSize = 'small' | 'large';

@Component({
  selector: 'storybook-status-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [ngClass]="classes">
      <span *ngIf="leftIcon" class="status-tag__icon" aria-hidden="true">{{ icon }}</span>
      <span>{{ label }}</span>
      <span *ngIf="rightIcon" class="status-tag__icon" aria-hidden="true">{{ icon }}</span>
    </span>
  `,
  styleUrls: ['./status-tag.css'],
})
export class StatusTagComponent {
  @Input() type: StatusTagType = 'Neutral';
  @Input() size: StatusTagSize = 'small';
  @Input() label = 'Status';
  @Input() leftIcon = false;
  @Input() rightIcon = false;
  @Input() darkMode = false;
  @Input() icon = '●';

  get classes(): string[] {
    return [
      'status-tag',
      `status-tag--${this.type.toLowerCase()}`,
      `status-tag--${this.size}`,
      this.darkMode ? 'status-tag--dark' : '',
    ].filter(Boolean);
  }
}
