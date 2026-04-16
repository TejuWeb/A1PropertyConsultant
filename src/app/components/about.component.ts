import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about-section">
      <div class="container about-grid">
        <div class="about-image stagger-item">
          <div class="elite-image-frame">
            <img src="/assets/hero.png" alt="Mumbai Skyline">
            <div class="experience-badge">
              <h2 class="text-gold">25+</h2>
              <p>Years of Legacy</p>
            </div>
          </div>
        </div>
        <div class="about-text stagger-item">
          <h4 class="text-gold">The Agency</h4>
          <h2 class="text-emerald">A Legacy of Trust in <br> Mumbai Real Estate</h2>
          <p class="lead">A1 Property Consultant is the premier boutique agency for the city's most significant property transactions.</p>
          <p>We combine deep local intelligence with a global perspective to serve a discerning clientele of investors, developers, and homeowners.</p>
          <div class="about-features">
            <div class="feat">
              <h5 class="text-emerald">Bespoke Advisory</h5>
              <p>Personalized strategies for high-value acquisitions.</p>
            </div>
            <div class="feat">
              <h5 class="text-emerald">Unrivaled Access</h5>
              <p>Direct connections to off-market premium listings.</p>
            </div>
          </div>
          <a href="#contact" class="btn-elite">Connect With Us</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background: var(--primary-alt);
    }
    .about-grid {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 100px;
      align-items: center;
    }
    .about-text h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin-bottom: 30px;
      font-weight: 800;
      letter-spacing: -1px;
    }
    .lead {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--text-main);
      margin-bottom: 25px;
    }
    .about-text p {
      color: var(--text-muted);
      font-size: 1.1rem;
      margin-bottom: 25px;
    }
    .elite-image-frame {
      position: relative;
      width: 100%;
      height: 650px;
    }
    .elite-image-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 50px 100px rgba(6, 78, 59, 0.15);
    }
    .experience-badge {
      position: absolute;
      bottom: -40px;
      right: -40px;
      background: var(--secondary);
      padding: 40px;
      color: white;
      text-align: center;
      min-width: 200px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    }
    .experience-badge h2 {
      margin-bottom: 5px;
      font-size: 3rem;
    }
    .experience-badge p {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.75rem;
      font-weight: 700;
      margin-bottom: 0;
      color: rgba(255, 255, 200, 0.8);
    }
    .about-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin: 40px 0 60px;
    }
    .feat h5 {
      margin-bottom: 10px;
      font-weight: 800;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 1px;
    }
    .feat p {
      font-size: 0.9rem;
      margin-bottom: 0;
    }
    @media (max-width: 1200px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 80px;
      }
      .elite-image-frame {
        height: 500px;
      }
      .experience-badge {
        right: 0;
        bottom: -20px;
      }
    }
  `]
})
export class AboutSectionComponent {}
