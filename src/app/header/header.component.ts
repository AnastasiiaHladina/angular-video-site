import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language/language.service';
import { GenreStoreFacadeService } from '../services/facade/genre-store-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  currentLang = this.languageService.getCurrentLanguage();
  translations$ = this.languageService.translations$;
  genre$ = this.genreStoreFacadeService.genreList$;

  constructor(private languageService: LanguageService,
              private genreStoreFacadeService: GenreStoreFacadeService) {}

  ngOnInit() {
    this.genreStoreFacadeService.dispatchGenre();
  }
}
