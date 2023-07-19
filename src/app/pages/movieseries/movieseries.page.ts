import { Component, OnInit } from '@angular/core';
import { MovieseriesService } from 'src/app/services/movieseries.service';

@Component({
  selector: 'app-movieseries',
  templateUrl: './movieseries.page.html',
  styleUrls: ['./movieseries.page.scss'],
})
export class MovieseriesPage implements OnInit {
  movieseries:any[] =[];
  isMovie:boolean=false;
  isAlphabetically:boolean=false;
  searchText:string='';
  errorText:string='';


  allRating:any[]=[];
  currentRating:number=0;

  years:any[]=[];
  yearSelected:number=0;

  constructor(private movieseriesService: MovieseriesService) { }

  ngOnInit() {
    this.getYears();
    this.loadMovieSeries();
    this.getRating();
  }
  async loadMovieSeries(){
    const type = this.isMovie?'series':'movie';
    const search = this.searchText;
    const year = this.yearSelected;
    const rating = this.currentRating;
    const filteredRating:any[]=[];

    //API call for searching
    this.movieseriesService.getMoviesSeries(type,search,year).subscribe((result)=>{
      console.log(result);

      this.movieseries = result.Search;
      //if is required to be in order alphabetic
      if(this.movieseries && this.isAlphabetically){
        this.movieseries.sort((a, b) => a.Title.localeCompare(b.Title));
      }
      //if is required a minimun rating
      if(rating>0){
        this.movieseries.forEach(item =>{
          this.movieseriesService.getRatingItem(item.imdbID).subscribe((result) =>{
            if(Math.floor(parseFloat(result.imdbRating)) >= rating){
              filteredRating.push(result);
            }
          });
        })
        this.movieseries = filteredRating;
      }
      //if result wanna receive a error
      if(result.Error && result.Error=='Too many results.'){
        this.errorText = 'Too many results, try again trying to be more specific!';
      }else if(result.Error){
        this.errorText = `we can't find the ${type} you requested, try writing something else.`
      }else{
        this.errorText='';
      }
    });
  }
  //get rating list
  getRating(){
    for(let i=0;i<=10;i++){
      this.allRating.push(i);
    }
  }
  //get year list
  getYears(){
    const currentYear = new Date().getFullYear();
    this.yearSelected = currentYear;
    const allYears=[];

    for(let i = currentYear;i>= currentYear-70;i--){
      allYears.push(i);
    }
    this.years= allYears;
  }
  //change dark and light theme
  toggleTheme(event:any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','light');
    }
  }
}
