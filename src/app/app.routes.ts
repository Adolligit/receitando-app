import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPage,
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterPage,
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/menu/menu.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },

];
