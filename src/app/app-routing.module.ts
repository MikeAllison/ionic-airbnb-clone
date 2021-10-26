import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/places/discover',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'places',
    redirectTo: '/places/discover',
  },
  {
    path: 'places/discover',
    loadChildren: () =>
      import('./places/discover/discover.module').then(
        (m) => m.DiscoverPageModule
      ),
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./bookings/bookings.module').then((m) => m.BookingsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
