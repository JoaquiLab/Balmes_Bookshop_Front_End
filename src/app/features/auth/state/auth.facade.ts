import { LoginCredentials } from '../interfaces/login-credentials.interface';
import { UserActions } from './auth.actions';
import * as jwtTokenSelectors from './auth.selectors';
import { Store, StoreRootModule } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { filter, Observable, skip } from 'rxjs';
import { AppGlobalState } from '../../../shared/interfaces/global-interfaces/global-store.interface';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store: Store<AppGlobalState> = inject(Store);
  currentUserJWTToken$: Observable<string | null> = this.store
    .select(jwtTokenSelectors.jwtTokenSelector)
    // .pipe(skip(1));

  requestUser(credentials: LoginCredentials): void {
    console.log('DISPATCHING');
    this.store.dispatch(UserActions.loadUser({ credentials }));
  }

  /**
   *Restore the user allocated in the local storage
   */
  restoreUser(): void {
    const authUserFromLocalStore: string | null = localStorage.getItem('user');
    const authUser: User | null =
      authUserFromLocalStore !== null ? JSON.parse(authUserFromLocalStore) : null;
    if (authUser) {
      this.store.dispatch(UserActions.restoreUSer({ userFromLocalStorage: authUser }));
    }
  }

  deleteUser(): void {
    console.log('DISPATCHING');
    this.store.dispatch(UserActions.deleteUser());
  }
}
