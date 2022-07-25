import { AuhtService } from './../auht.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string=''
  userData:any=null
  loginForm:FormGroup=new FormGroup({
     email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z][a-z0-9]{3,9}$`)]) 
   })
   constructor(public _auth:AuhtService,public  _Router:Router) { }
   submit(loginForm:FormGroup)
   {
    if (loginForm.valid)
    {
      this._auth.login(loginForm.value).subscribe((respose)=>{
        if (respose.message=='success') 
        {
          localStorage.setItem('Token',respose.token)
          this._Router.navigate(['home'])
          this.userData= this._auth.saveData()
        }else{
          this.error=respose.errors.email.message
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
