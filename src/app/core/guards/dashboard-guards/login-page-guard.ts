import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '@features/auth';
import { inject } from '@angular/core';

/* If exists a token in the localStorage orders
 to the facace to restablishthe token and  redirects to the Home route,
  else returns true
 * @param route
 * @param state
 * @returns
 */
export const loginPageGuard: CanActivateFn = (route, state): boolean => {
  const authtoken = localStorage.getItem('token');
  if (authtoken === null) {
    return true;
  }
  const authFacade: AuthFacade = inject(AuthFacade);
  authFacade.restoreUser;
  const router: Router = inject(Router);
  //TODO FIND A SOLUTION TO THE BUG THAT A USER
  router.navigateByUrl('/task-page');
  return false;
};
