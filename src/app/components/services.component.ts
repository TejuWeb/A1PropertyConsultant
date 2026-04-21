import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="section services-section">
      <div class="container">
        <div class="split-layout">
          <div class="content-left stagger-item">
            <h2 class="text-navy">Our services for <br> <span class="text-accent">everything related</span> to your home</h2>
            <p>Bespoke property consultancy for the most discerning global clients. Experience the pinnacle of Mumbai's luxury landscape.</p>
            <div class="action">
               <a href="#contact" class="btn-primary">View All Services</a>
            </div>
          </div>
          
          <div class="content-right stagger-item">
            @for (service of services; track service.title) {
              <div class="service-item">
                <div class="icon-circle">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                   </svg>
                </div>
                <div class="item-text">
                  <h3>{{ service.title }}</h3>
                  <p>{{ propertyLongDescription }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background: var(--white);
    }
    .split-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
    }
    h2 {
      font-size: 3.2rem;
      margin-bottom: 25px;
    }
    p {
      color: var(--text-muted);
      font-size: 1.1rem;
      margin-bottom: 40px;
      line-height: 1.6;
    }
    .content-right {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .service-item {
      display: flex;
      gap: 25px;
      align-items: flex-start;
    }
    .icon-circle {
      width: 60px;
      height: 60px;
      background: var(--accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 10px 20px rgba(255, 118, 117, 0.2);
    }
    .item-text h3 {
      font-size: 1.4rem;
      color: var(--secondary);
      margin-bottom: 8px;
    }
    .item-text p {
      font-size: 0.95rem;
      margin-bottom: 0;
    }
    @media (max-width: 991px) {
      .split-layout {
        grid-template-columns: 1fr;
        gap: 60px;
      }
      h2 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class ServicesSectionComponent {
  propertyLongDescription = 'Our expert agents provide personalized consultation to ensure every detail matches your elite lifestyle.';
  services = [
    {
      title: 'Premium Property Search',
      description: 'Acquire iconic sea-facing penthouses and architectural masterpieces.'
    },
    {
      title: 'Expert Valuation',
      description: 'Bespoke consultancy for expansive suburban estates and legacy homes.'
    }
  ];
}

