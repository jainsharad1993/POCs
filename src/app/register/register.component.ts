import { Component, OnInit } from '@angular/core';
import { RegisterEmployee } from '../model/registerEmployee'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentDetails: any = {};

  registeredEmployees: RegisterEmployee []  = [];
  showBanner = false;
  constructor() { this.registeredEmployees = [];}

  ngOnInit() {
  }

   showDetails(studentDetails): void{
    this.showBanner = true;
    // console.log(JSON.stringify(this.studentDetails));
    this.registeredEmployees.push(this.studentDetails);
    this.studentDetails ={};
    console.log("size is "+this.registeredEmployees.length);
  }
  showRegisteredPlayer(): void{
    alert();
  }

}
