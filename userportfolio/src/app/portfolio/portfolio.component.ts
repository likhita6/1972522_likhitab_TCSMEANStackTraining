import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  currentUser:string = "";
  user:string = " ";
  @ViewChild('name') contactName:any;
  @ViewChild('number') contactNumber:any;

  ngOnInit(): void { }

    constructor() {
    this.currentUser = sessionStorage.getItem("CurrentUser") as string;
    let sessionInfo = JSON.parse(sessionStorage.getItem(this.currentUser) as string);
    this.user = sessionInfo.user;
     }
  
  Contact(name:any,number:any) {
    let table:any = document.getElementById("contactList");
    let body = table.getElementsByTagName("tbody")[0]; 
    let newRow = body.insertRow(body.length);   
    
    let cell1 = newRow.insertCell(0);           
    cell1.innerHTML=name;                  

    let cell2 = newRow.insertCell(1);          
    cell2.innerHTML=number;                 
    this.reset();
  }
  reset(){
    this.contactName.nativeElement.value = "";
    this.contactNumber.nativeElement.value = "";

  }
}