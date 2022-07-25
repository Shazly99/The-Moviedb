import { AuhtService } from './../auht.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string=''
  registerForm:FormGroup=new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    age: new FormControl(null, [Validators.min(15), Validators.max(60), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z][a-z0-9]{3,9}$`)]) 
   })
   constructor(public _auth:AuhtService,public  _Router:Router) { }

  submit(registerForm:FormGroup){
    if (registerForm.valid) {
      this._auth.register(registerForm.value).subscribe((respose)=>{
        console.log(respose)
        if (respose.message=='success') {
          this._Router.navigate(['login'])
           console.log('true')
        }else{
          this.error=respose.errors.email.message
          console.log( 'error', this.error)
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
