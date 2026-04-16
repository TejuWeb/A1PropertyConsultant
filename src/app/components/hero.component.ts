import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h4 class="text-gold stagger-item">Exclusive Real Estate Portfolio</h4>
        <h1 class="stagger-item">Defining the <br> <span class="text-emerald">Standard of Luxury</span></h1>
        <p class="stagger-item">Bespoke property consultancy for the most discerning global clients. Experience the pinnacle of Mumbai's luxury landscape.</p>
        <div class="hero-actions stagger-item">
          <a href="#services" class="btn-elite">Explore Estates</a>
          <a href="#contact" class="btn-outline-gold">Private Consultation</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      padding-top: 80px;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/assets/hero.png') no-repeat center center/cover;
      z-index: -1;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.4) 100%);
    }
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 1000px;
    }
    h1 {
      font-size: clamp(3.5rem, 12vw, 6.5rem); /* Massive Impact */
      font-weight: 800;
      margin: 24px 0;
      letter-spacing: -3px;
    }
    p {
      max-width: 650px;
      color: var(--text-muted);
      font-size: 1.3rem;
      font-weight: 500;
      margin-bottom: 50px;
      line-height: 1.5;
    }
    .hero-actions {
      display: flex;
      gap: 30px;
    }
    @media (max-width: 768px) {
      .hero-actions {
        flex-direction: column;
        width: 100%;
      }
      .btn-elite, .btn-outline-gold {
        text-align: center;
        width: 100%;
      }
      h1 {
        letter-spacing: -1px;
      }
    }
  `]
})
export class HeroComponent {}
