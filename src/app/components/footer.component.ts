import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand stagger-item">
          <div class="logo">
            <span class="logo-text">A1<span class="text-accent">Elite</span></span>
          </div>
          <p>The definitive boutique agency for Mumbai's extraordinary real estate assets. Defining luxury across the city since 1999.</p>
        </div>
        <div class="footer-sections stagger-item">
          <div class="footer-col">
            <h6>The Agency</h6>
            <ul>
              <li><a href="#about">Our Legacy</a></li>
              <li><a href="#services">Portfolio Services</a></li>
              <li><a href="#gallery">Insights</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:a1propertyconsultant&#64;gmail.com">The Elite Desk</a></li>
              <li><a href="#contact">Private Inquiry</a></li>
              <li><a href="tel:+910000000000">+91 90000 00000</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container flex-between">
          <p>&copy; 2026 A1 Property Consultant. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Charter</a>
            <a href="#">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--secondary);
      color: white;
      padding-top: 100px;
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 100px;
      margin-bottom: 80px;
    }
    .logo-text {
      font-size: 2rem;
      font-weight: 900;
      color: white;
      letter-spacing: -1px;
      margin-bottom: 25px;
      display: block;
    }
    .footer-brand p {
      color: rgba(255, 255, 255, 0.6);
      max-width: 400px;
      line-height: 1.7;
      font-size: 1.05rem;
    }
    .footer-sections {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    h6 {
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
      font-weight: 800;
      margin-bottom: 25px;
    }
    .footer-col ul li {
      margin-bottom: 15px;
    }
    .footer-col a {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
      font-size: 0.95rem;
      transition: var(--transition);
    }
    .footer-col a:hover {
      color: var(--accent);
      padding-left: 5px;
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 40px 0;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.4);
    }
    .flex-between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .legal-links {
      display: flex;
      gap: 40px;
    }
    .legal-links a:hover {
      color: white;
    }
    @media (max-width: 991px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 60px;
      }
      .footer-sections {
        grid-template-columns: 1fr 1fr;
      }
      .flex-between {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}

