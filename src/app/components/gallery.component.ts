import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="gallery" class="section gallery-section">
      <div class="container">
        <div class="section-header stagger-item">
          <h2 class="text-navy">Featured Listings <span class="text-accent">+</span> Type</h2>
          <p>Hand-picked premium residences curated for the elite lifestyle.</p>
        </div>
        
        <div class="gallery-grid">
          @for (property of properties; track property.id) {
            <div class="modern-card property-card stagger-item">
              <div class="card-img">
                <img [src]="property.src" [alt]="property.title">
                <div class="price-tag">{{ property.price }}</div>
              </div>
              <div class="property-info">
                <h3>{{ property.title }}</h3>
                <p class="location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {{ property.location }}
                </p>
                <div class="features">
                  <div class="feature">
                    <span>{{ property.beds }} Beds</span>
                  </div>
                  <div class="feature">
                    <span>{{ property.baths }} Baths</span>
                  </div>
                  <div class="feature">
                    <span>{{ property.sqft }} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="pagination stagger-item">
          <div class="dot active"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .section-header h2 {
      font-size: 2.8rem;
      margin-bottom: 10px;
    }
    .section-header p {
      color: var(--text-muted);
      font-size: 1.1rem;
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .property-card {
      padding: 15px; /* Tighter padding for standard card look */
    }
    .card-img {
      position: relative;
      margin-bottom: 20px;
    }
    .price-tag {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: var(--white);
      color: var(--secondary);
      padding: 8px 16px;
      border-radius: 50px;
      font-weight: 800;
      font-size: 0.9rem;
      box-shadow: var(--shadow);
    }
    .property-info h3 {
      font-size: 1.4rem;
      margin-bottom: 8px;
      color: var(--secondary);
    }
    .property-info .location {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 20px;
    }
    .features {
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
      border-top: 1px solid var(--border);
    }
    .feature {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-main);
    }
    .pagination {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 60px;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.1);
      cursor: pointer;
      transition: var(--transition);
    }
    .dot.active {
      background: var(--secondary);
      width: 30px;
      border-radius: 10px;
    }
    
    @media (max-width: 1024px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class GallerySectionComponent {
  properties = [
    {
      id: 1,
      src: '/assets/interior-1.png',
      title: 'Oceanic Horizon',
      location: 'Worli Sea-Face, Mumbai',
      price: '₹15.50 Cr',
      beds: 4,
      baths: 3,
      sqft: '3,200',
    },
    {
      id: 2,
      src: '/assets/villa-1.png',
      title: 'The Azure Estate',
      location: 'Juhu Scheme, Mumbai',
      price: '₹22.75 Cr',
      beds: 5,
      baths: 4,
      sqft: '5,800',
    },
    {
      id: 3,
      src: '/assets/hero.png',
      title: 'Skyreach Penthouse',
      location: 'Cuffe Parade, Mumbai',
      price: '₹18.00 Cr',
      beds: 4,
      baths: 4,
      sqft: '4,100',
    }
  ];
}

