import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'movieseries',
    pathMatch: 'full'
  },
  {
    path: 'movieseries',
    loadChildren: () => import('./pages/movieseries/movieseries.module').then( m => m.MovieseriesPageModule)
  },
  {
    path: 'movieseries/:id',
    loadChildren: () => import('./pages/movieseries-details/movieseries-details.module').then( m => m.MovieseriesDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
