import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieseriesPage } from './movieseries.page';

const routes: Routes = [
  {
    path: '',
    component: MovieseriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieseriesPageRoutingModule {}
