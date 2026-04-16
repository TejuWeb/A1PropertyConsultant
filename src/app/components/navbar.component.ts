import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="container nav-content">
        <div class="logo">
          <img src="/assets/logo.png" alt="A1 Property Logo">
        </div>
        <ul class="nav-links">
          <li><a href="#hero">Excellence</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">The Agency</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="cta">
          <a href="#contact" class="btn-navbar">Private Inquiry</a>
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
      padding: 40px 0;
      transition: var(--transition);
    }
    nav.scrolled {
      background: var(--white);
      padding: 20px 0;
      box-shadow: 0 10px 40px rgba(6, 78, 59, 0.05);
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo img {
      height: 60px;
      transition: var(--transition);
    }
    nav.scrolled .logo img {
      height: 45px;
    }
    .nav-links {
      display: flex;
      gap: 50px;
    }
    .nav-links a {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-main);
      text-transform: uppercase;
      letter-spacing: 2.5px;
      position: relative;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: var(--transition);
    }
    .nav-links a:hover::after {
      width: 100%;
    }
    .btn-navbar {
      border: 1px solid var(--secondary);
      padding: 12px 28px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--secondary);
    }
    .btn-navbar:hover {
      background: var(--secondary);
      color: white;
    }
    @media (max-width: 1024px) {
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
