import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  })
  
  constructor(public router:Router) { }
  ngOnInit(): void { }
  checkUser() {
    let user = this.loginRef.value.user;
    let pass = this.loginRef.value.pass;
    let sessionUser: any = sessionStorage.getItem(user);
    if (sessionUser != null) {                        //user-password check
      sessionUser = JSON.parse(sessionUser as string);
      let sessionPass = sessionUser.pass;
      if(pass == sessionPass) {
        sessionStorage.setItem("CurrentUser", user);
        this.router.navigate(["portfolio"]);
      } 
    } 
  }
}
