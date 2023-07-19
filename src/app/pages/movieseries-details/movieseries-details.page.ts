import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieseriesService } from 'src/app/services/movieseries.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movieseries-details',
  templateUrl: './movieseries-details.page.html',
  styleUrls: ['./movieseries-details.page.scss'],
})
export class MovieseriesDetailsPage implements OnInit {
  movieseries:any=null;
  constructor(private route: ActivatedRoute,private movieseriesService: MovieseriesService,private location:Location) { }

  //function to return to the previous page
  goBack(){
    this.location.back();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    //check id and call of function to obtain details
    if(typeof id === 'string'){
      this.movieseriesService.getMovieSeriesDetails(id).subscribe((result) =>{
        this.movieseries = result;
      })
    }
  }

}
