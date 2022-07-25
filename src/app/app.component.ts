import { AuhtService } from './auht.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _AuhtService:AuhtService){
    _AuhtService.userData.subscribe(()=>{
      if (_AuhtService.userData.getValue()!=null) {
        setInterval(()=>_AuhtService.LogOut(),5000)
      }
    })


  }

  title = 'movies_v1';
}
