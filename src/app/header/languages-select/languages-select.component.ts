import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Language, LanguageService } from '../../services/language/language.service';
import { filter, find, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-languages-select',
  templateUrl: './languages-select.component.html',
  styleUrls: ['./languages-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesSelectComponent implements OnInit, OnDestroy {
  @Input() currentLang: Language;
  @Input() langList: Language[];
  valueFormControl: FormControl;
  private subscription: Subscription;
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.valueFormControl = new FormControl(this.currentLang.code);
    this.subscription = this.valueFormControl.valueChanges
      .pipe(
        tap((code: string) => {
          const lang = this.langList.find(el => el.code === code);
          this.languageService.setCurrentLanguage(lang);
      }))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
