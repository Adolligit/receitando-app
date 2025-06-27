import { Routes } from '@angular/router';
import { MenuPage } from './menu.page';

export const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../../pages/favorite/favorite.page').then(
            (m) => m.FavoritePage
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../pages/profile/profile.page').then((m) => m.ProfilePage),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../../pages/register/register.page').then((m) => m.RegisterPage),
  },
];
