import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('appLang') || 'en';
    this.setLanguage(savedLang);
   }

   setLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('appLang', lang);
   }

   getLanguage(): string {
    return this.currentLang;
   }
}
