import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <h4 class="stagger-item text-accent">Exclusive Property Registry</h4>
          <h1 class="stagger-item text-navy">Find Your <br> Dream Home</h1>
          <p class="stagger-item text-navy">Bespoke property consultancy for the most discerning global clients. Experience the pinnacle of Mumbai's luxury landscape.</p>
          <div class="hero-actions stagger-item">
            <a href="#gallery" class="btn-primary">Explore Now</a>
            <a href="#contact" class="btn-outline">Watch Video</a>
          </div>
        </div>
      </div>

      <!-- Floating Search Bar -->
      <div class="search-wrapper">
        <div class="container">
          <div class="search-container stagger-item">
            <div class="search-field">
              <span class="label">Location</span>
              <span class="value">Worli, Mumbai</span>
            </div>
            <div class="divider"></div>
            <div class="search-field">
              <span class="label">Category</span>
              <span class="value">Luxury Villa</span>
            </div>
            <div class="divider"></div>
            <div class="search-field">
              <span class="label">Price Range</span>
              <span class="value">₹10Cr - ₹25Cr</span>
            </div>
            <button class="search-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 140px 0 180px;
      z-index: 20; /* Ensure search bar stays on top of stats */
    }
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/assets/hero.png') no-repeat center center/cover;
      z-index: -2;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(240, 249, 255, 0.98) 0%, rgba(240, 249, 255, 0.6) 100%);
      z-index: -1;
    }
    .hero-container {
      position: relative;
      z-index: 1;
    }
    .hero-content {
      max-width: 850px;
    }
    h4 {
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.8rem;
      margin-bottom: 20px;
      font-weight: 800;
    }
    h1 {
      font-size: clamp(3rem, 10vw, 6.5rem);
      margin-bottom: 30px;
      line-height: 0.95;
      letter-spacing: -2px;
    }
    p {
      color: rgba(15, 23, 42, 0.8);
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      margin-bottom: 40px;
      line-height: 1.6;
      max-width: 650px;
    }
    .hero-actions {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    /* Search Bar Wrapper */
    .search-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      transform: translateY(50%); /* Halfway overlap */
    }
    .search-container {
      background: white;
      padding: 20px 50px;
      border-radius: 100px;
      box-shadow: 0 40px 80px -15px rgba(15, 23, 42, 0.15);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      border: 1px solid rgba(15, 23, 42, 0.05);
    }
    .search-field {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .search-field .label {
      font-size: 0.7rem;
      color: var(--text-muted);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    .search-field .value {
      font-size: 0.95rem;
      color: var(--secondary);
      font-weight: 700;
    }
    .divider {
      width: 1px;
      height: 40px;
      background: rgba(0,0,0,0.1);
    }
    .search-btn {
      width: 60px;
      height: 60px;
      background: var(--secondary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      transition: var(--transition);
    }
    .search-btn:hover {
      background: var(--accent);
      transform: scale(1.05);
    }

    @media (max-width: 991px) {
      .hero {
        padding: 120px 0 100px;
        text-align: center;
        min-height: auto;
      }
      .hero-content {
        margin: 0 auto;
      }
      .hero-actions {
        justify-content: center;
      }
      .search-wrapper {
        position: relative;
        bottom: 0;
        transform: translateY(0);
        margin-top: 60px;
      }
      .search-container {
        padding: 30px;
        flex-direction: column;
        border-radius: 30px;
        gap: 20px;
      }
      .divider {
        width: 100%;
        height: 1px;
      }
      .search-btn {
        width: 100%;
        border-radius: 50px;
      }
    }
  `]
})
export class HeroComponent {}



