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
          import('../../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'notification',
        loadComponent: () =>
          import('../../notification/notification.page').then(
            (m) => m.NotificationPage
          ),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../../favorite/favorite.page').then((m) => m.FavoritePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'exit',
        loadComponent: () =>
          import('../../exit/exit.page').then((m) => m.ExitPage),
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
