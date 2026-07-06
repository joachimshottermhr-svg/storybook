import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'storybook-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div
  class="storybook-card"
  [ngStyle]="{
    'background-color': backgroundColor,
    'border-radius': borderRadius,
    'max-width': maxWidth,
  }"
>
  <div
    class="storybook-card__accent"
    [ngStyle]="{
      background: accentColorEnd
        ? 'linear-gradient(90deg, ' + accentColor + ' 0%, ' + accentColorEnd + ' 100%)'
        : accentColor,
      'border-radius': borderRadius + ' ' + borderRadius + ' 0 0',
    }"
  ></div>

  <div class="storybook-card__header" [ngStyle]="{ padding: headerPadding }">
    <div class="storybook-card__heading">
      <span class="storybook-card__icon" *ngIf="icon">
        <ng-container *ngTemplateOutlet="icon"></ng-container>
      </span>
      <h3
        class="storybook-card__title"
        [ngStyle]="{ color: titleColor, 'font-size': titleFontSize }"
      >
        {{ title }}
      </h3>
    </div>
    <div class="storybook-card__actions">
      <ng-content select="[card-actions]"></ng-content>
    </div>
  </div>

  <div class="storybook-card__body" [ngStyle]="{ padding: bodyPadding }">
    <ng-content></ng-content>
  </div>

  <div class="storybook-card__footer" *ngIf="hasFooter" [ngStyle]="{ padding: footerPadding }">
    <ng-content select="[card-footer]"></ng-content>
  </div>
</div>`,
  styleUrls: ['./card.css'],
})
export class CardComponent {
  /** Card heading text */
  @Input()
  title = '';

  /** Colour of the title text */
  @Input()
  titleColor = '#3E3E3E';

  /** Font size of the title text */
  @Input()
  titleFontSize = '16px';

  /** Card background colour */
  @Input()
  backgroundColor = '#FFFFFF';

  /** Colour of the top accent bar (or the start colour when accentColorEnd is set) */
  @Input()
  accentColor = '#9E5BBA';

  /** Optional end colour to render the accent bar as a gradient */
  @Input()
  accentColorEnd?: string;

  /** Corner radius applied to the card container */
  @Input()
  borderRadius = '8px';

  /** Maximum width of the card */
  @Input()
  maxWidth = '444px';

  /** Horizontal/vertical padding around the header content */
  @Input()
  headerPadding = '20px 20px 12px';

  /** Horizontal/vertical padding around the body content */
  @Input()
  bodyPadding = '0 20px';

  /** Horizontal/vertical padding around the footer content */
  @Input()
  footerPadding = '16px 20px 20px';

  /** Whether to render the footer slot */
  @Input()
  hasFooter = false;

  /** Template used to render an icon next to the title */
  @Input()
  icon?: TemplateRef<unknown>;
}
