import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="section stats-section">
      <div class="container grid-stats">
        @for (stat of stats; track stat.label) {
          <div class="stat-item stagger-item">
            <h2 class="text-emerald">{{ stat.value }}</h2>
            <p class="text-gold">{{ stat.label }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .stats-section {
      background: var(--white);
      padding: 100px 0;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .grid-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      text-align: center;
    }
    .stat-item h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      margin-bottom: 5px;
      letter-spacing: -2px;
    }
    .stat-item p {
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 3px;
      font-weight: 800;
      margin-bottom: 0;
    }
    @media (max-width: 992px) {
      .grid-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
      }
    }
    @media (max-width: 480px) {
      .grid-stats {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
  `]
})
export class StatsSectionComponent {
  stats = [
    { value: '₹500Cr+', label: 'Volume Managed' },
    { value: '250+', label: 'Elite Estates' },
    { value: '15+', label: 'Prime Localities' },
    { value: '4.9/5', label: 'Client Trust' }
  ];
}
