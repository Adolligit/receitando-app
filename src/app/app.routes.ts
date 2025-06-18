import { Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
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
];
