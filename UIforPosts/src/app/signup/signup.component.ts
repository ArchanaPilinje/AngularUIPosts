import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User
  successFlag: boolean
  errorFlag: boolean
  progressFlag: boolean

  constructor(public auth: AuthService) { 
    this.user=new User()
  }

  ngOnInit(): void {

  }

  signUpSubmit(signUpForm) {
    this.progressFlag = true
    this.successFlag = false
    this.errorFlag = false

    this.auth.signUp(this.user).subscribe(dbUser => {

      if (dbUser === null) {
        this.errorFlag = true
      }

      else {
        this.successFlag = true
      }

      this.progressFlag = false
    })

    this.user = new User()
    signUpForm.form.markAsPristine()
  }

}
