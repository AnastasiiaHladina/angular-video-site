import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserHeaderComponent } from './header/user-header/user-header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TokenInterceptor } from './services/interceptor/auth/auth.interceptor';
import { AuthGuard } from './services/guard/auth-guard.service';
import { CheckIfAuthorizedGuard } from './services/guard/check-if-authorized-guard.service';
import { CourseResolver } from './resolvers/course-resolver';
import { LoggerService } from './services/logger/logger.service';
import { ConsoleLoggerService } from './services/logger/console-logger.service';
import { LoadingBlockComponent } from './loading-block/loading-block.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect, CoursesEffects } from './store/effects';
import { appReducers } from './store/reducers';
import { AuthorsEffect } from './store/effects';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { CourseBreadcrumbsComponent } from './course-breadcrumbs/course-breadcrumbs.component';
import { LanguagesSelectComponent } from './header/languages-select/languages-select.component';
import { GenreEffect } from './store/effects';
import { BoldDirective } from './directive/bold/bold.directive';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses', canActivate: [AuthGuard] },
  {
    path: 'authorization',
    component: AuthorizationComponent,
    canActivate: [CheckIfAuthorizedGuard],
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module')
      .then(module => module.CoursesModule),
  },
  { path: 'not_found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not_found' },
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthorizationComponent,
    UserHeaderComponent,
    NotFoundComponent,
    LoadingBlockComponent,
    CourseBreadcrumbsComponent,
    LanguagesSelectComponent,
    BoldDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ AuthEffect, CoursesEffects, AuthorsEffect, GenreEffect ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ],
      },
    }),
    BreadcrumbsModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
    CourseResolver,
    {
      provide: LoggerService,
      useClass: ConsoleLoggerService,
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
