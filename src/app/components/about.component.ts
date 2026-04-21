import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="gallery-layout">
          <div class="gallery-header stagger-item">
            <div class="label-box">
               <span class="text-accent">Elite Collection</span>
            </div>
            <h2 class="text-navy">Experience true luxury <br> with our signature estates</h2>
            <p>Our hand-picked portfolio represents the pinnacle of Mumbai's architectural landscape, designed for those who seek the extraordinary.</p>
          </div>
          
          <div class="image-grid stagger-item">
            <div class="grid-column">
              <div class="grid-item tall">
                <img src="/assets/hero.png" alt="Luxury Penthouse">
                <div class="hover-info">
                   <h4>Penthouses</h4>
                </div>
              </div>
            </div>
            <div class="grid-column">
              <div class="grid-item">
                <img src="/assets/villa-1.png" alt="Luxury Villa">
                <div class="hover-info">
                   <h4>Estates</h4>
                </div>
              </div>
              <div class="grid-item">
                <img src="/assets/interior-1.png" alt="Luxury Interior">
                <div class="hover-info">
                   <h4>Interiors</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background: var(--primary);
    }
    .gallery-layout {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }
    .gallery-header {
      max-width: 800px;
    }
    .label-box {
      margin-bottom: 20px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
    }
    h2 {
      font-size: 3.2rem;
      margin-bottom: 25px;
    }
    p {
      color: var(--text-muted);
      font-size: 1.15rem;
      line-height: 1.6;
    }
    .image-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 30px;
      height: 700px;
    }
    .grid-column {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .grid-item {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius-lg);
      overflow: hidden;
      cursor: pointer;
    }
    .grid-item.tall {
      height: 100%;
    }
    .grid-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }
    .grid-item:hover img {
      transform: scale(1.1);
    }
    .hover-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.8));
      opacity: 0;
      transition: var(--transition);
      display: flex;
      align-items: flex-end;
      padding: 30px;
    }
    .grid-item:hover .hover-info {
      opacity: 1;
    }
    .hover-info h4 {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 0;
    }
    @media (max-width: 768px) {
      .image-grid {
        grid-template-columns: 1fr;
        height: auto;
      }
      .grid-item {
        height: 300px;
      }
      h2 {
        font-size: 2.2rem;
      }
    }
  `]
})
export class AboutSectionComponent {}

