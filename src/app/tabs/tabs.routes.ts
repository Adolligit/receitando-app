import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'notification',
        loadComponent: () =>
          import('../notification/notification.page').then((m) => m.NotificationPage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../favorite/favorite.page').then((m) => m.FavoritePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'exit',
        loadComponent: () =>
          import('../exit/exit.page').then((m) => m.ExitPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
