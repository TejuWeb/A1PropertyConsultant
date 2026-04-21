import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info stagger-item">
            <div class="label text-accent">Private Consultation</div>
            <h2 class="text-navy">Ready to find your <br> next masterpiece?</h2>
            <p>Our expert agents provide personalized consultation to ensure every detail matches your elite lifestyle.</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h6>Global HQ</h6>
                  <p>Mumbai Elite Tower, BKC, Mumbai 400051</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h6>Elite Desk</h6>
                  <p>concierge&#64;a1property.in</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modern-card contact-form stagger-item">
            <form (submit)="onSubmit($event)">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Johnathan Doe" required>
                </div>
                <div class="form-group">
                  <label>Interest</label>
                  <select required>
                    <option value="" disabled selected>Select Category</option>
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
                <textarea placeholder="Tell us about your requirements..." rows="3"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">Initiate Consultation</button>
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
      gap: 100px;
      align-items: center;
    }
    .contact-info .label {
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
      margin-bottom: 20px;
    }
    .contact-info h2 {
      font-size: 3.2rem;
      margin-bottom: 30px;
    }
    .contact-info p {
      font-size: 1.15rem;
      color: var(--text-muted);
      margin-bottom: 50px;
      line-height: 1.6;
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
      width: 54px;
      height: 54px;
      background: var(--white);
      color: var(--accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow);
    }
    .info-item h6 {
      font-weight: 800;
      font-size: 0.9rem;
      color: var(--secondary);
      margin-bottom: 4px;
    }
    .info-item p {
      margin-bottom: 0;
      font-size: 1rem;
    }
    .contact-form {
      padding: 50px;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .form-group {
      margin-bottom: 25px;
    }
    .form-group label {
      display: block;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--secondary);
    }
    input, select, textarea {
      width: 100%;
      padding: 18px 24px;
      background: #F8FAF9;
      border: 2px solid transparent;
      border-radius: 12px;
      font-family: inherit;
      color: var(--text-main);
      font-size: 1rem;
      transition: var(--transition);
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      background: white;
      border-color: var(--accent);
      box-shadow: 0 5px 15px rgba(255, 118, 117, 0.1);
    }
    .w-full {
      width: 100%;
      justify-content: center;
    }
    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 60px;
      }
      h2 {
        font-size: 2.5rem;
      }
    }
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
      .contact-form {
        padding: 30px 20px;
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

