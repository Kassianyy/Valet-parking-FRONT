import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./views/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'waiting',
    loadComponent: () => import('./views/waiting/waiting.page').then( m => m.WaitingPage)
  },
];
