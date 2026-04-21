import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="container nav-content">
        <div class="logo">
          <span class="logo-text">A1<span class="text-accent">Property Consultant</span></span>
        </div>
        <ul class="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#gallery">Properties</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">About</a></li>
        </ul>
        <div class="cta">
          <a href="#contact" class="btn-primary">Talk to Agent</a>
        </div>
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
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      padding: 15px 0;
      box-shadow: var(--shadow);
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-text {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--secondary);
      letter-spacing: -1px;
    }
    .nav-links {
      display: flex;
      gap: 40px;
    }
    .nav-links a {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--accent);
    }
    @media (max-width: 991px) {
      .nav-links, .cta {
        display: none;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}

