import { Component } from '@angular/core';
import { AuthStoreFacadeService } from '../../services/facade/auth-store-facade.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent {
  isAuthenticated$ = this.authStoreFacade.isAuthenticated$;
  user$ = this.authStoreFacade.user$;

  constructor(private authStoreFacade: AuthStoreFacadeService) {}

  logout() {
    this.authStoreFacade.logout();
  }
}
