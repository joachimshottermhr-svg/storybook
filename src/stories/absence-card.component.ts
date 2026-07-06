import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-absence-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="absence-card">
      <section class="absence-card__balance" aria-label="Annual leave balance">
        <span class="absence-card__label">{{ annualLabel }}</span>
        <strong class="absence-card__days">{{ annualDays }}</strong>
        <span class="absence-card__subtext">of {{ annualTotal }} left</span>
      </section>

      <section class="absence-card__balance" aria-label="Sickness days">
        <span class="absence-card__label">{{ sicknessLabel }}</span>
        <strong class="absence-card__days">{{ sicknessDays }}</strong>
        <span class="absence-card__subtext">{{ sicknessSubtext }}</span>
      </section>

      <section class="absence-card__upcoming" aria-label="Upcoming absence">
        <div class="absence-card__plane" aria-hidden="true">✈</div>
        <div class="absence-card__details">
          <span class="absence-card__label">Upcoming absence</span>
          <strong>{{ upcomingDates }}</strong>
        </div>
        <div class="absence-card__timer" aria-hidden="true">⌛</div>
      </section>
    </article>
  `,
  styleUrls: ['./absence-card.css'],
})
export class AbsenceCardComponent {
  @Input() annualLabel = 'Annual days';
  @Input() annualDays = 17;
  @Input() annualTotal = '36';
  @Input() sicknessLabel = 'Sickness';
  @Input() sicknessDays = 3;
  @Input() sicknessSubtext = 'Sickness days this year';
  @Input() upcomingDates = '09 - 14 Mar 2025 (4 days)';
}
