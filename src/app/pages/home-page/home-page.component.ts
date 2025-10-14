import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('details') detailsSection!: ElementRef;
  showButtonAtTop = true;
  showScrollTopButton = false;

  scrollToDetails() {
    this.detailsSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;

    this.showButtonAtTop = scrollY < 100;

    this.showScrollTopButton = scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({top:0, behavior: 'smooth'});
  }
}
