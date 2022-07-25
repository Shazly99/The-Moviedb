import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any;
  imgPaht="https://image.tmdb.org/t/p/w500";
  num:any;
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies(1)
  }
  getAllMovies(pageNum:number){

     if (pageNum>0) {
      this._MoviesService.getMoviesBypage(pageNum).subscribe((respond)=>{
        this.movies=respond.results
       })
      this.num=pageNum
     }
    
  }

}
