import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {
  registrationRef = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  });
  msg: string = "";

  constructor() { }
  ngOnInit(): void { }

  updateUser() {
    this.saveToSession();
    this.msg = "Sucess!!! Go back to login page";
  }
  saveToSession() {
    let key = this.registrationRef.value.user;
    sessionStorage.setItem(key, JSON.stringify(this.registrationRef.value));
  }
}
