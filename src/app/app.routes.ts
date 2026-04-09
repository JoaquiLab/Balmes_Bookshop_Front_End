import { Routes } from '@angular/router';
import { AuthPageComponent } from './features/auth/auth-page.component';
import { authGuard } from './core/guards/auth-guards/auth-guard';
import { loginPageGuard } from './core/guards/dashboard-guards/login-page-guard';
import { AppContentComponent } from '@features/app-content';

export const routes: Routes = [
  //Must direct to the home-page, if the token does not exist, it must redirect to the auth-page
  {
    path: 'home-page',
    canActivate: [authGuard],
    component: AppContentComponent,
  },
  {
    path: 'auth-page',
    canActivate: [loginPageGuard],
    component: AuthPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home-page',
  },
];
