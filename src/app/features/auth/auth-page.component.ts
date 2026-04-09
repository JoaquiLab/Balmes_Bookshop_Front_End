import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthFacade } from './state/auth.facade';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-auth-page',
  templateUrl: 'auth-page.component.html',
  providers: [],
  imports: [ReactiveFormsModule],
})
export class AuthPageComponent implements OnDestroy {
  private _subscriptions: Subscription[] = [];
  protected name = new FormControl('');
  protected password = new FormControl('');
  private authFacade: AuthFacade = inject(AuthFacade);
  private router: Router = inject(Router);

  constructor() {
    const s1 = this.authFacade.currentUserJWTToken$.subscribe((token) => {
      console.log('JWTTOKEN EVENT ENTRY');
      //TODO Make that don't react to an unkwow event
      if (token) {
        console.log('TOKEN RECIBED: ', token);
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/home-page');
        console.log('>>> /home-page');
      }
    });
    this._subscriptions.push(s1);
  }

  login(): void {
    console.log('LOGIN CALLED');
    if (
      this.name.value !== null &&
      this.name.value !== '' &&
      this.password.value !== null &&
      this.password.value !== ''
    ) {
      console.log('LOG-STARTING THE FACADE CALL');
      this.authFacade.requestUser({
        name: this.name.value,
        password: this.password.value,
      });
    }
  }
  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe);
  }
}
