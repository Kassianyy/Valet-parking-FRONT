import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./views/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () => import('./views/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./views/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'waiting',
    loadComponent: () => import('./views/waiting/waiting.page').then( m => m.WaitingPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reg-vehiculo',
    loadComponent: () => import('./views/reg-vehiculo/reg-vehiculo.page').then( m => m.RegVehiculoPage),
    canActivate: [AuthGuard]
  },

];
