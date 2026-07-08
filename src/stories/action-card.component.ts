import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonComponent } from './button.component';

/** Module-level counter for unique, stable title ids across card instances. */
let nextCardId = 0;

/**
 * Action Card — a hero image, title, description and a full-width primary CTA.
 * Composes the library `storybook-button` for its call to action rather than
 * re-implementing one (see CLAUDE.md §4).
 */
@Component({
  selector: 'storybook-action-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <article class="action-card" [attr.aria-labelledby]="titleId">
      <img
        *ngIf="imageUrl; else placeholder"
        class="action-card__hero"
        [src]="imageUrl"
        [alt]="imageAlt"
      />
      <ng-template #placeholder>
        <div class="action-card__hero action-card__hero--placeholder" aria-hidden="true"></div>
      </ng-template>

      <div class="action-card__content">
        <h3 class="action-card__title" [id]="titleId">{{ title }}</h3>
        <p class="action-card__description">{{ description }}</p>
        <storybook-button
          class="action-card__cta"
          variant="primary"
          size="medium"
          [fullWidth]="true"
          [label]="ctaLabel"
          (onClick)="cta.emit($event)"
        ></storybook-button>
      </div>
    </article>
  `,
  styleUrls: ['./action-card.css'],
})
export class ActionCardComponent {
  /** Card heading. */
  @Input() title = 'Discover Something New';

  /** Supporting copy under the title. */
  @Input() description =
    "Explore our curated collection and find exactly what you've been looking for. Quality you can count on.";

  /** Label for the call-to-action button. */
  @Input() ctaLabel = 'Learn more';

  /** Optional hero image URL. When empty, a decorative gradient placeholder is shown. */
  @Input() imageUrl = '';

  /** Alt text for the hero image. Required whenever `imageUrl` is set. */
  @Input() imageAlt = '';

  /** Emitted when the CTA button is activated. */
  @Output() cta = new EventEmitter<Event>();

  /** Unique id so each card's <article> can be labelled by its own title. */
  readonly titleId = `action-card-title-${nextCardId++}`;
}

