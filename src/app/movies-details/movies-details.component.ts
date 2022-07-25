import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  id:any='';
  MoviesDetails:any={}
  TVDetails:any={}
  imgPaht="https://image.tmdb.org/t/p/w500";
  constructor(public _HttpClient:HttpClient, public _MoviesService:MoviesService,public _ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMoviesDetailsTrending(this.id).subscribe((response)=>{
      this.MoviesDetails=response
    })
  }

}
