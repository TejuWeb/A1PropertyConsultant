import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand stagger-item">
          <div class="logo">
            <img src="/assets/logo.png" alt="A1 Property" height="50">
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
              <li><a href="mailto:concierge&#64;a1property.in">The Elite Desk</a></li>
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
      background: #064E3B; /* Deep Emerald Footer */
      color: white;
      padding-top: 120px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 100px;
      margin-bottom: 100px;
    }
    .logo img {
      margin-bottom: 30px;
      filter: brightness(0) invert(1); /* Logo to white on emerald bg */
    }
    .footer-brand p {
      color: rgba(255, 255, 255, 0.7);
      max-width: 400px;
      line-height: 1.8;
      font-size: 1.1rem;
    }
    .footer-sections {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    h6 {
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.8rem;
      font-weight: 800;
      margin-bottom: 30px;
    }
    .footer-col ul li {
      margin-bottom: 18px;
    }
    .footer-col a {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      font-size: 0.95rem;
    }
    .footer-col a:hover {
      color: var(--accent);
      padding-left: 8px;
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 50px 0;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
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
    @media (max-width: 992px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 60px;
      }
      .flex-between {
        flex-direction: column;
        gap: 30px;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
