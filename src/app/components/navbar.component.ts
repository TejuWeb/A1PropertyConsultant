import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav [class.scrolled]="isScrolled()" [class.mobile-open]="isMenuOpen()">
      <div class="container nav-content">
        <div class="logo">
          <span class="logo-text">A1<span class="text-accent">Elite</span></span>
        </div>
        
        <!-- Desktop Links -->
        <ul class="nav-links desktop-only">
          <li><a href="#hero">Home</a></li>
          <li><a href="#gallery">Properties</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">About</a></li>
        </ul>
        
        <div class="cta desktop-only">
          <a href="#contact" class="btn-primary">Talk to Agent</a>
        </div>

        <!-- Mobile Toggle -->
        <button class="menu-toggle" (click)="toggleMenu()">
          <div class="bar" [class.active]="isMenuOpen()"></div>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu" [class.open]="isMenuOpen()">
        <ul class="mobile-links">
          <li><a href="#hero" (click)="toggleMenu()">Home</a></li>
          <li><a href="#gallery" (click)="toggleMenu()">Properties</a></li>
          <li><a href="#services" (click)="toggleMenu()">Services</a></li>
          <li><a href="#contact" (click)="toggleMenu()">About</a></li>
          <li class="mt-4"><a href="#contact" class="btn-primary" (click)="toggleMenu()">Talk to Agent</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 30px 0;
      transition: var(--transition);
    }
    nav.scrolled {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(20px);
      padding: 15px 0;
      box-shadow: var(--shadow);
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1001;
    }
    .logo-text {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--secondary);
      letter-spacing: -1.5px;
    }
    .nav-links {
      display: flex;
      gap: 40px;
    }
    .nav-links a {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--secondary);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--accent);
    }

    /* Mobile Toggle */
    .menu-toggle {
      display: none;
      width: 40px;
      height: 40px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    }
    .bar {
      width: 30px;
      height: 2px;
      background: var(--secondary);
      position: relative;
      transition: var(--transition);
    }
    .bar::before, .bar::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background: var(--secondary);
      left: 0;
      transition: var(--transition);
    }
    .bar::before { top: -8px; }
    .bar::after { top: 8px; }
    
    .bar.active { background: transparent; }
    .bar.active::before { transform: rotate(45deg); top: 0; }
    .bar.active::after { transform: rotate(-45deg); top: 0; }

    /* Mobile Menu */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 400px;
      height: 100vh;
      background: white;
      z-index: 1000;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: -20px 0 60px rgba(0,0,0,0.1);
    }
    .mobile-menu.open {
      right: 0;
    }
    .mobile-links {
      display: flex;
      flex-direction: column;
      gap: 30px;
      text-align: center;
      width: 100%;
    }
    .mobile-links a {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--secondary);
    }
    .mt-4 { margin-top: 20px; }

    @media (max-width: 991px) {
      .desktop-only {
        display: none;
      }
      .menu-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}


