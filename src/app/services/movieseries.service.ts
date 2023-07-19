import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  Search: any[];
  totalResults: string;
  Response: string;
  Error:string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieseriesService {

  private apikey: string ='dfd56bae';
  private baseUrl: string ='https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  //function  for api call
  getMoviesSeries(type:string,search:string,year:number): Observable<ApiResult> {
    const searchText = search?search:'star wars';
    return this.http.get<ApiResult>(`${this.baseUrl}?type=${type}&y=${year}&page=1&s=${searchText}&apikey=${this.apikey}`);
  }

  //function  for item details
  getMovieSeriesDetails(id:string) {
    return this.http.get(`${this.baseUrl}?i=${id}&apikey=${this.apikey}`);
  }

  //function to get the rating
  getRatingItem(id:string): Observable<any>{
    return this.http.get(`${this.baseUrl}?i=${id}&apikey=${this.apikey}`);
  }
}
