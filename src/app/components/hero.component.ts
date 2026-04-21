import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-bg-gradient"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <h4 class="stagger-item text-accent">Exclusive Property Registry</h4>
          <h1 class="stagger-item">Find Your <br> Dream Home</h1>
          <p class="stagger-item">Bespoke property consultancy for the most discerning global clients. Experience the pinnacle of Mumbai's luxury landscape.</p>
          <div class="hero-actions stagger-item">
            <a href="#gallery" class="btn-primary">Explore Now</a>
            <a href="#contact" class="btn-outline-white">Watch Video</a>
          </div>
        </div>
        <div class="hero-image stagger-item">
          <div class="image-card">
            <img src="/assets/hero.png" alt="Luxury Architecture">
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
      min-height: 100vh;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 120px 0 160px;
      overflow: hidden;
      background: #0F172A;
    }
    .hero-bg-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 0% 0%, rgba(19, 78, 94, 0.4) 0%, transparent 50%),
                  radial-gradient(circle at 100% 100%, rgba(255, 118, 117, 0.1) 0%, transparent 50%);
      z-index: 0;
    }
    .hero-container {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      gap: 60px;
    }
    .hero-content {
      max-width: 650px;
    }
    h4 {
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 0.85rem;
      margin-bottom: 20px;
    }
    h1 {
      font-size: clamp(3.5rem, 8vw, 6rem);
      color: white;
      margin-bottom: 30px;
    }
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.2rem;
      margin-bottom: 45px;
      line-height: 1.5;
    }
    .hero-actions {
      display: flex;
      gap: 25px;
    }
    .btn-outline-white {
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 16px 36px;
      border-radius: 50px;
      font-weight: 700;
    }
    .btn-outline-white:hover {
      background: white;
      color: var(--secondary);
    }
    .hero-image {
      position: relative;
    }
    .image-card {
      width: 100%;
      aspect-ratio: 1;
      background: var(--white);
      border-radius: 40px;
      overflow: hidden;
      box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
      transform: rotate(2deg);
    }
    .image-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: rotate(-2deg) scale(1.15);
    }
    
    /* Search Bar Wrapper */
    .search-wrapper {
      position: absolute;
      bottom: -40px;
      left: 0;
      width: 100%;
      z-index: 10;
    }
    .search-container {
      background: white;
      padding: 25px 50px;
      border-radius: 100px;
      box-shadow: 0 40px 80px -15px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }
    .search-field {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .search-field .label {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    .search-field .value {
      font-size: 1rem;
      color: var(--secondary);
      font-weight: 600;
    }
    .divider {
      width: 1px;
      height: 40px;
      background: rgba(0,0,0,0.1);
    }
    .search-btn {
      width: 65px;
      height: 65px;
      background: var(--secondary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      transition: var(--transition);
      box-shadow: 0 10px 20px rgba(15, 23, 42, 0.2);
    }
    .search-btn:hover {
      background: var(--accent);
      transform: scale(1.05);
    }

    @media (max-width: 1100px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .hero-content {
        margin: 0 auto;
      }
      .hero-actions {
        justify-content: center;
      }
      .hero-image {
        display: none;
      }
      .search-container {
        padding: 30px;
        flex-direction: column;
        border-radius: 30px;
      }
      .divider {
        width: 100%;
        height: 1px;
      }
      .search-field {
        text-align: center;
      }
      .search-wrapper {
        bottom: -150px;
      }
      .hero {
        padding-bottom: 200px;
      }
    }
  `]
})
export class HeroComponent {}

