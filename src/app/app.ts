import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ServicesSectionComponent } from './components/services.component';
import { StatsSectionComponent } from './components/stats.component';
import { AboutSectionComponent } from './components/about.component';
import { GallerySectionComponent } from './components/gallery.component';
import { ContactSectionComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesSectionComponent,
    StatsSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-stats></app-stats>
      <app-services></app-services>
      <app-about></app-about>
      <app-gallery></app-gallery>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
    :host ::ng-deep section {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }
    :host ::ng-deep section.reveal {
      opacity: 1;
      transform: translateY(0);
    }
  `],
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }
}
