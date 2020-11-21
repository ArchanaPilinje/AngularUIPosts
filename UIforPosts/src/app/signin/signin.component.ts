import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { User } from '../Model/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:User
  errorFlag: boolean
  progressFlag: boolean

  constructor(public auth:AuthService,public router:Router) { 
    this.user=new User()
  }

  ngOnInit(): void {

  }

  signInSubmit(signInForm){
    this.progressFlag = true
    this.errorFlag = false
    this.auth.signIn(this.user).subscribe((dbUser:User)=>{
      if (dbUser === null) {
        this.errorFlag = true
      }

      else{
        this.auth.currentUser=dbUser
        this.router.navigateByUrl('/posts')
      }

      this.progressFlag = false
    })

    this.user = new User()
     signInForm.form.markAsPristine()
  }
  
}
