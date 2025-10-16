import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HomePageText } from 'src/app/enums/text.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('details') detailsSection!: ElementRef;
  showButtonAtTop = true;
  showScrollTopButton = false;
  homePageText = HomePageText;

  scrollToDetails(): void {
    this.detailsSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;

    this.showButtonAtTop = scrollY < 100;

    this.showScrollTopButton = scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({top:0, behavior: 'smooth'});
  }
}
