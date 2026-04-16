import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="gallery" class="section gallery-section">
      <div class="container">
        <div class="section-header stagger-item">
          <h4 class="text-gold">Visual Portfolio</h4>
          <h2 class="text-emerald">Resonating Architecture</h2>
          <p>A curated selection of Mumbai's most significant contemporary residences.</p>
        </div>
        <div class="gallery-grid">
          @for (image of images; track image.id) {
            <div class="gallery-item stagger-item" [style.grid-area]="image.area">
              <div class="image-inner">
                <img [src]="image.src" [alt]="image.title">
                <div class="image-overlay">
                  <div class="overlay-content">
                    <h6>{{ image.category }}</h6>
                    <h3>{{ image.title }}</h3>
                    <p>{{ image.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      margin-bottom: 70px;
    }
    .section-header h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 15px;
    }
    .section-header p {
      color: var(--text-muted);
      font-size: 1.1rem;
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 400px);
      gap: 30px;
    }
    .gallery-item {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 20px 60px -20px rgba(6, 78, 59, 0.2);
    }
    .image-inner {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .image-inner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent 30%, rgba(6, 78, 59, 0.9) 100%);
      opacity: 0;
      transition: var(--transition);
      display: flex;
      align-items: flex-end;
      padding: 40px;
    }
    .gallery-item:hover .image-overlay {
      opacity: 1;
    }
    .gallery-item:hover .image-inner img {
      transform: scale(1.1);
    }
    .overlay-content h3 {
      color: white;
      font-size: 1.6rem;
      margin-bottom: 5px;
      font-weight: 700;
    }
    .overlay-content p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    .overlay-content h6 {
      color: var(--accent);
      font-size: 0.75rem;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: 800;
    }
    @media (max-width: 1100px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 300px);
      }
    }
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .gallery-item {
        height: 400px;
        grid-area: auto !important;
      }
    }
  `]
})
export class GallerySectionComponent {
  images = [
    {
      id: 1,
      src: '/assets/interior-1.png',
      title: 'Oceanic Horizon',
      category: 'Luxury Interior',
      location: 'Worli Sea-Face',
      area: '1 / 1 / 3 / 3'
    },
    {
      id: 2,
      src: '/assets/villa-1.png',
      title: 'The Azure Estate',
      category: 'Legacy Estate',
      location: 'Juhu Scheme',
      area: '1 / 3 / 2 / 5'
    },
    {
      id: 3,
      src: '/assets/hero.png',
      title: 'The Skyreach Penthouse',
      category: 'Ultra-Luxury',
      location: 'Cuffe Parade',
      area: '2 / 3 / 3 / 5'
    }
  ];
}
