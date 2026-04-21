import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="logo">
              <span class="logo-text">A1<span class="text-accent">Elite</span></span>
            </div>
            <p class="brand-desc">The definitive boutique agency for Mumbai's extraordinary real estate assets. Defining luxury across the city since 1999.</p>
            <div class="social-links">
              <a href="#" class="social-icon">Instagram</a>
              <a href="#" class="social-icon">LinkedIn</a>
              <a href="#" class="social-icon">Twitter</a>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h6>Quick Navigation</h6>
              <ul>
                <li><a href="#hero">Home Registry</a></li>
                <li><a href="#gallery">Elite Properties</a></li>
                <li><a href="#services">Architecture Services</a></li>
                <li><a href="#contact">Private Inquiry</a></li>
              </ul>
            </div>
            <div class="link-group">
              <h6>Contact Hub</h6>
              <ul>
                <li><a href="mailto:a1propertyconsultant&#64;gmail.com">Concierge Desk</a></li>
                <li><a href="#contact">Private Booking</a></li>
                <li><a href="tel:+919000000000">+91 90000 00000</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-newsletter">
            <h6>Stay Informed</h6>
            <p>Join our private list for off-market insights.</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Email Address">
              <button class="btn-newsletter">→</button>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="flex-between">
            <p class="copyright">&copy; 2026 A1 Property Consultant. All rights reserved.</p>
            <p class="developer">Developed by <span class="text-accent">Tejas</span> ❤️</p>
            <div class="legal-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
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
    .footer-top {
      display: grid;
      grid-template-columns: 1.5fr 2fr 1.2fr;
      gap: 80px;
      margin-bottom: 80px;
    }
    .logo-text {
      font-size: 2rem;
      font-weight: 900;
      color: white;
      letter-spacing: -2px;
      margin-bottom: 25px;
      display: block;
    }
    .brand-desc {
      color: rgba(255, 255, 255, 0.6);
      max-width: 350px;
      line-height: 1.7;
      margin-bottom: 30px;
    }
    .social-links {
      display: flex;
      gap: 20px;
    }
    .social-icon {
      font-size: 0.8rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--accent);
      transition: var(--transition);
    }
    .social-icon:hover {
      color: white;
      transform: translateY(-2px);
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    h6 {
      color: white;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
      font-weight: 800;
      margin-bottom: 30px;
    }
    .link-group ul li {
      margin-bottom: 15px;
    }
    .link-group a {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
      font-size: 0.95rem;
      transition: var(--transition);
    }
    .link-group a:hover {
      color: var(--accent);
      padding-left: 5px;
    }

    .footer-newsletter p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 20px;
    }
    .newsletter-form {
      display: flex;
      background: rgba(255, 255, 255, 0.05);
      padding: 5px;
      border-radius: 50px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .newsletter-form input {
      background: transparent;
      border: none;
      padding: 10px 20px;
      color: white;
      font-family: inherit;
      flex: 1;
      outline: none;
      width: 100px;
    }
    .btn-newsletter {
      width: 45px;
      height: 45px;
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
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
    .developer {
      font-weight: 700;
      color: rgba(255, 255, 255, 0.6);
    }
    .legal-links {
      display: flex;
      gap: 30px;
    }
    .legal-links a:hover {
      color: white;
    }

    @media (max-width: 1100px) {
      .footer-top {
        grid-template-columns: 1.5fr 2fr;
        gap: 60px;
      }
      .footer-newsletter {
        grid-column: span 2;
        max-width: 500px;
      }
    }
    @media (max-width: 768px) {
      .footer-top {
        grid-template-columns: 1fr;
      }
      .footer-links {
        grid-template-columns: 1fr;
      }
      .flex-between {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
      .footer-newsletter {
        grid-column: span 1;
      }
    }
  `]
})
export class FooterComponent {}


