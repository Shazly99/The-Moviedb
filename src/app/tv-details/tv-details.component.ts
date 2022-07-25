import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  id:any='';
  TVDetails:any={}
  imgPaht="https://image.tmdb.org/t/p/w500";

  constructor(public _HttpClient:HttpClient, public _MoviesService:MoviesService,public _ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id'];
  
    this._MoviesService.getTvDetailsTrending(this.id).subscribe((response)=>{
      this.TVDetails=response
    })
  
  }
  
}  
