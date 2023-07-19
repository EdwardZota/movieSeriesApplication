import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieseriesDetailsPageRoutingModule } from './movieseries-details-routing.module';

import { MovieseriesDetailsPage } from './movieseries-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieseriesDetailsPageRoutingModule
  ],
  declarations: [MovieseriesDetailsPage]
})
export class MovieseriesDetailsPageModule {}
