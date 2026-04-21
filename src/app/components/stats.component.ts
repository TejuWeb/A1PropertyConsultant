import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="stats-bar-section">
      <div class="container">
        <div class="stats-container stagger-item">
          @for (stat of stats; track stat.label) {
            <div class="stat-item">
              <div class="stat-value text-accent">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-bar-section {
      padding: 60px 0;
      background: var(--secondary);
      margin-top: -60px; /* Slight overlap for modern look */
      position: relative;
      z-index: 5;
      border-radius: var(--radius-lg);
      margin-left: 5%;
      margin-right: 5%;
    }
    .stats-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 30px;
    }
    .stat-item {
      text-align: center;
    }
    .stat-value {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 5px;
      letter-spacing: -1px;
    }
    .stat-label {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
    }
    @media (max-width: 991px) {
      .stats-container {
        flex-wrap: wrap;
        justify-content: center;
      }
      .stat-item {
        flex: 1 1 200px;
      }
    }
  `]
})
export class StatsSectionComponent {
  stats = [
    { value: '500Cr+', label: 'Volume Managed' },
    { value: '250+', label: 'Elite Estates' },
    { value: '15+', label: 'Prime Localities' },
    { value: '4.9/5', label: 'Client Trust' }
  ];
}

