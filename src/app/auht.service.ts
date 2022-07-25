import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuhtService {
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if (localStorage.getItem('Token')!=null) {
      this.saveData()
    }
   }

  userData=new BehaviorSubject(null);
  saveData()
  {
    let encodeduserdata=JSON.stringify(localStorage.getItem('Token'))
    this.userData.next(jwtDecode(encodeduserdata)) 
    console.log(this.userData)
  }
  LogOut()
  {
    localStorage.removeItem('Token');
    this.userData.next(null)
    this._Router.navigate(['login'])
  }

  register(formData:any):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`,formData)
  }

  login(formData:any):Observable<any>{
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,formData)
  }
}
