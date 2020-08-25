import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './services/authorization/authorization.service';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading/loading.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private authorizationService: AuthorizationService, private loadingService: LoadingService) {}

  ngOnInit() {
    this.loading$ = this.loadingService.isVisibleLoadingSubject$
      .pipe(delay(0));
  }
}
