import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvShows:any;
  imgPaht="https://image.tmdb.org/t/p/w500";

  num:any;
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.getAllTvShow(1)
  }

  getAllTvShow(pageNum:number){

    if (pageNum > 0) {
      this._MoviesService.getTvBypage(pageNum).subscribe((respond)=>{
        this.tvShows=respond.results
      })
    }
    
  }


}
