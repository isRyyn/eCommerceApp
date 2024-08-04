import { RemoteEntryComponent } from 'apps/login/src/app/remote-entry/entry.component';
import { LoginComponent } from './login/login.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'loginApp',
    loadChildren: () => import('loginApp/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'product',
    loadChildren: () => import('product/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: RemoteEntryComponent,
  },
];
