import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() showButtonAtTop: boolean = true;
  hideAuthButtons = false;
  user: IUser | null = null;

   supportedLanguages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch (Deutschland)' },
    { code: 'es', label: 'Español' },
    { code: 'it', label: 'Italiano' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'pt-BR', label: 'Português' },
    { code: 'zh-CN', label: '中文' }
  ];

  currentLang: string;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private userService: UserService
  
  ) {
    this.translate.setFallbackLang('en');

    const savedLang = localStorage.getItem('appLang') || 'en';
    this.currentLang = savedLang;
    this.translate.use(this.currentLang);

     this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        this.hideAuthButtons = ['/login', '/register', '/dashboard'].some(path => url.includes(path));
      });
  }

    ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }
  

    switchLanguage(event: Event) {
      const selectElement = event.target as HTMLSelectElement; 
      const lang = selectElement.value;
      this.currentLang = lang;
      this.translate.use(lang);

      localStorage.setItem('appLang', lang);
    }

    logout() {
      this.userService.logout();

      this.user = null;
      this.hideAuthButtons = false;

      this.router.navigate(['/home']);
}


}
