import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="section">
      <div class="container">
        <div class="section-header stagger-item">
          <h4 class="text-gold">Exclusive Services</h4>
          <h2 class="text-emerald">Tailored Real Estate Solutions</h2>
          <p>We provide a comprehensive suite of services for the acquisition and disposition of Mumbai's most prestigious properties.</p>
        </div>
        <div class="services-grid">
          @for (service of services; track service.title) {
            <div class="elite-card stagger-item">
              <div class="elite-card-img">
                <img [src]="service.image" [alt]="service.title">
              </div>
              <div class="elite-card-body">
                <h4 class="text-gold">{{ service.category }}</h4>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <a href="#contact" class="elite-link">Discover More &rarr;</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      margin-bottom: 80px;
      max-width: 800px;
    }
    .section-header h2 {
      font-size: clamp(2.5rem, 5vw, 3.8rem);
      margin-bottom: 20px;
      font-weight: 800;
      letter-spacing: -1px;
    }
    .section-header p {
      font-size: 1.25rem;
      color: var(--text-muted);
      line-height: 1.6;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
    h3 {
      font-size: 1.8rem;
      margin: 10px 0 20px;
      font-weight: 700;
    }
    .elite-card-body p {
      color: var(--text-muted);
      margin-bottom: 30px;
      font-size: 1rem;
      line-height: 1.6;
    }
    .elite-link {
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.8rem;
      color: var(--secondary);
      transition: var(--transition);
    }
    .elite-link:hover {
      color: var(--accent);
      padding-left: 10px;
    }
    @media (max-width: 1100px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
      .section-header h2 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class ServicesSectionComponent {
  services = [
    {
      title: 'Ultra-Luxury Residences',
      category: 'Residential',
      description: 'Acquire iconic sea-facing penthouses and architectural masterpieces in Mumbai’s most elite zip codes.',
      image: '/assets/interior-1.png'
    },
    {
      title: 'Premium Estates & Villas',
      category: 'Legacy Estates',
      description: 'Bespoke consultancy for expansive suburban estates and historically significant bungalows.',
      image: '/assets/villa-1.png'
    },
    {
      title: 'Corporate Portfolio Management',
      category: 'Commercial',
      description: 'Strategic advisory for the city’s most prestigious commercial spaces and headquarters.',
      image: '/assets/services.png'
    }
  ];
}
