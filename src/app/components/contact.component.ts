import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info stagger-item">
            <h4 class="text-gold">Private Inquiries</h4>
            <h2 class="text-emerald">Partner with Mumbai's <br> Luxury Experts</h2>
            <p>We provide exclusive advisory for high-net-worth individuals and corporate entities seeking the city's most significant real estate assets.</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div>
                  <h6>Global HQ</h6>
                  <p>Mumbai Elite Tower, BKC, Mumbai 400051</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div>
                  <h6>Elite Desk</h6>
                  <p>concierge&#64;a1property.in</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-wrapper stagger-item">
            <form (submit)="onSubmit($event)">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Johnathan Doe" required>
                </div>
                <div class="form-group">
                  <label>Service Type</label>
                  <select required>
                    <option value="" disabled selected>Select Your Interest</option>
                    <option value="luxury-res">Luxury Residential</option>
                    <option value="legacy">Legacy Estates</option>
                    <option value="commercial">Commercial Portfolio</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Prefered Contact</label>
                <input type="text" placeholder="Phone or Email" required>
              </div>
              <div class="form-group">
                <label>Additional Notes</label>
                <textarea placeholder="Tell us about your requirements..." rows="4"></textarea>
              </div>
              <button type="submit" class="btn-elite w-full">Initiate Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: var(--primary-alt);
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 120px;
      align-items: center;
    }
    .contact-info h2 {
      font-size: clamp(2.5rem, 5vw, 3.8rem);
      font-weight: 800;
      margin-bottom: 30px;
    }
    .contact-info p {
      font-size: 1.2rem;
      color: var(--text-muted);
      margin-bottom: 50px;
    }
    .info-items {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .info-item {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .info-icon {
      font-size: 1.5rem;
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(6, 78, 59, 0.05);
    }
    .info-item h6 {
      font-weight: 800;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    .contact-form-wrapper {
      background: white;
      padding: 60px;
      box-shadow: 0 40px 100px rgba(6, 78, 59, 0.1);
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 30px;
    }
    .form-group {
      margin-bottom: 30px;
    }
    .form-group label {
      display: block;
      margin-bottom: 12px;
      font-weight: 800;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--secondary);
    }
    input, select, textarea {
      width: 100%;
      padding: 20px;
      background: #F8FAF9;
      border: 1px solid transparent;
      font-family: inherit;
      color: var(--text-main);
      font-size: 1rem;
      transition: var(--transition);
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      background: white;
      border-color: var(--accent);
      box-shadow: 0 5px 15px rgba(212, 175, 55, 0.1);
    }
    .w-full {
      width: 100%;
    }
    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 80px;
      }
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
    @media (max-width: 768px) {
      .contact-form-wrapper {
        padding: 40px 20px;
      }
    }
  `]
})
export class ContactSectionComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for your interest. Our boutique desk will contact you shortly.');
  }
}
