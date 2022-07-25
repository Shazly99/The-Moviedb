import { AuhtService } from './../auht.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false
   constructor(public _AuhtService:AuhtService) {}
   
  ngOnInit(): void {

    this._AuhtService.userData.subscribe(()=>{
      if (this._AuhtService.userData.getValue()!=null) {
        this.isLogin=true
      }else{
        this.isLogin=false
      }
    })
  }

  LogOut(){
    this._AuhtService.LogOut()
  }
}
