import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[]=[];
  trendingTV:any[]=[];
  trendingPeople:any[]=[];

  imgPaht="https://image.tmdb.org/t/p/w500";
  constructor(public _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies=response.results
      console.log(this.trendingMovies)
       this.trendingMovies=this.trendingMovies.filter((x)=>{return x.media_type=="movie"}).slice(0,10)
    })
    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTV=response.results.slice(0,10)
    })
    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.trendingPeople=response.results.slice(0,10)
    })
  }

}
