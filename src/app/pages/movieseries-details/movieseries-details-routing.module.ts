import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieseriesDetailsPage } from './movieseries-details.page';

const routes: Routes = [
  {
    path: '',
    component: MovieseriesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieseriesDetailsPageRoutingModule {}
