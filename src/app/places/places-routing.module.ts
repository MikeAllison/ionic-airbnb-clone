import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/places/discover',
    pathMatch: 'full',
  },
  {
    path: 'discover',
    loadChildren: () =>
      import('./discover/discover.module').then((m) => m.DiscoverPageModule),
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersPageModule),
  },
  {
    path: '**',
    redirectTo: '/places/discover',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {}
