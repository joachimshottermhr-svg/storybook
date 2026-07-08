import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
  type="button"
  [ngClass]="classes"
  [disabled]="disabled"
  (click)="onClick.emit($event)"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /** Visual style of the button. Mirrors the Figma "Variant" property. */
  @Input()
  variant: 'primary' | 'secondary' | 'danger' | 'ghost' = 'primary';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /** Disable the button (non-interactive, dimmed). */
  @Input()
  disabled = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return [
      'storybook-button',
      `storybook-button--${this.size}`,
      `storybook-button--${this.variant}`,
    ];
  }
}
