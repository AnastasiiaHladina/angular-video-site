import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
})
export class FindComponent implements OnDestroy {
  @Output() searchChange = new EventEmitter<string>();
  private searchTextSubscription: Subscription;

  searchValue = new FormControl('');

  constructor() {
    this.searchTextSubscription = this.searchValue.valueChanges
      .pipe(
        debounceTime(1000),
        filter((str: string) => !str.length || (str && str.length >= 3)),
        tap((str: string) => {
          this.searchChange.emit(str);
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.searchTextSubscription.unsubscribe();
  }
}
