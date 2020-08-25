import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Genre } from '../../../enitities';
import { Subscription } from 'rxjs';
import { GenreStoreFacadeService } from '../../../services/facade/genre-store-facade.service';
import { filter, tap } from 'rxjs/operators';


@Component({
  selector: 'app-genre-input',
  templateUrl: './genre-input.component.html',
  styleUrls: ['./genre-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GenreInputComponent,
      multi: true,
    },
  ],
})

export class GenreInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() control: FormControl;
  courseGenre: Genre[];
  allGenre: Genre[];

  onFormModelChange: (data: Genre[]) => void;
  onFormControlTouched: () => void;

  private subscription: Subscription;
  genreSelect = new FormControl();
  genre$ = this.genreStoreFacadeService.genreList$
    .pipe(tap((genre: Genre[]) => {
      this.allGenre = genre;
    }));

  constructor(private genreStoreFacadeService: GenreStoreFacadeService) { }

  ngOnInit(): void {
    this.subscription = this.genreSelect.valueChanges
      .pipe(
        filter(() => Boolean(this.allGenre)),
        tap(id => {
          this.courseGenre.push(this.allGenre.find(g => g.id === id));
          this.allGenre.splice(this.allGenre.findIndex(author => author.id === id), 1);
          this.onFormModelChange(this.courseGenre);
        }))
      .subscribe();
  }

  public removeSelectedGenre(id: string) {
    this.changeElementSelectStatus(id);
  }

  private changeElementSelectStatus(id: string): void {
    const genreIndex = this.courseGenre.findIndex(genre => genre.id === id);
    this.allGenre.push(this.courseGenre[genreIndex]);
    this.courseGenre.splice(genreIndex, 1);
    this.onFormModelChange(this.courseGenre);
  }

  writeValue(genre: Genre[]) {
    this.courseGenre = genre;
    this.genreSelect.setValue(genre);
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
