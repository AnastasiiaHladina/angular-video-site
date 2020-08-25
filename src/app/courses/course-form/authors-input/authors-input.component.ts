import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../../../enitities';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthorsStoreFacadeService } from '../../../services/facade/authors-store-facade.service';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AuthorsInputComponent,
      multi: true,
    },
  ],
})

export class AuthorsInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() control: FormControl;
  courseAuthors: Author[];

  onFormModelChange: (data: Author[]) => void;
  onFormControlTouched: () => void;

  private subscription: Subscription;
  authorsSelect = new FormControl();
  authors: Author[];
  authors$ = this.authorsStoreFacadeService.authorsList$
    .pipe(tap((authors: Author[]) => {
      this.authors = authors;
    }));

  constructor(private authorsStoreFacadeService: AuthorsStoreFacadeService) {}

  ngOnInit(): void {
    this.subscription = this.authorsSelect.valueChanges
      .pipe(
        filter(() => Boolean(this.authors)),
        tap(id => {
          this.courseAuthors.push(this.authors.find(author => author.id === id));
          this.authors.splice(this.authors.findIndex(author => author.id === id), 1);
          this.onFormModelChange(this.courseAuthors);
      }))
      .subscribe();
  }

  public removeSelectedAuthor(id: string) {
    this.changeElementSelectStatus(id);
  }

  private changeElementSelectStatus(id: string): void {
    const authorIndex = this.courseAuthors.findIndex(author => author.id === id);
    this.authors.push(this.courseAuthors[authorIndex]);
    this.courseAuthors.splice(authorIndex, 1);
    this.onFormModelChange(this.courseAuthors);
  }

  writeValue(authors: Author[]) {
    this.courseAuthors = authors;
    this.authorsSelect.setValue(authors);
  }

  registerOnChange(fn: any): void {
    this.onFormModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onFormControlTouched = fn;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
