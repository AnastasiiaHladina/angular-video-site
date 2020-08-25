import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isVisibleLoadingSubject$$: BehaviorSubject<boolean>;
  isVisibleLoadingSubject$: Observable<boolean>;

  constructor() {
    this.isVisibleLoadingSubject$$ = new BehaviorSubject(false);
    this.isVisibleLoadingSubject$ = this.isVisibleLoadingSubject$$.asObservable();
  }

  setIsVisibleLoading(ans: boolean) {
    this.isVisibleLoadingSubject$$.next(ans);
  }
}
