import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieseriesPageRoutingModule } from './movieseries-routing.module';

import { MovieseriesPage } from './movieseries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieseriesPageRoutingModule
  ],
  declarations: [MovieseriesPage]
})
export class MovieseriesPageModule {}
