import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Language {
  code: string;
  language: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  translations$: Observable<Language[]>;
  defaultLanguage: Language = { code: 'en', language: 'English' };

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.getCurrentLanguage();

    this.translations$ = this.translateService.get('LANGUAGES')
      .pipe(map(languages => Object.entries(languages).map(([ code, language ]: [ string, string ]): Language => ({
        code,
        language,
      }))));
  }

  getCurrentLanguage(): Language {
    const currentLanguage = JSON.parse(localStorage.getItem('currentLanguage')) || this.defaultLanguage;

    this.setCurrentLanguage(currentLanguage);
    return currentLanguage;
  }

  setCurrentLanguage(language: Language) {
    localStorage.setItem('currentLanguage', JSON.stringify(language));
    this.translateService.use(language.code);
  }
}
