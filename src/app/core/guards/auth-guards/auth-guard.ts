import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (): boolean => {
  const router: Router = inject(Router);
  console.log('THE-TOKEN-REQUEST SAYS!!! -', localStorage.getItem('token'));
  const token: string | null = localStorage.getItem('token');
  if (token === null || token === '') {
    router.navigateByUrl('/auth-page');
    console.log('NO TOKEN DETECTED => returned to the auth-page');
    return false;
  }
  console.log('TOKEN DETECTED => ACCESS TO THE ACEPTED');
  return true;
};
