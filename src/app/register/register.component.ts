import { Component, OnInit } from '@angular/core';
import { RegisterEmployee } from '../model/registerEmployee'
import { AppService } from '../app-service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentDetails: any = {};

  registeredEmployees: RegisterEmployee[] = [];
  showBanner = false;
  tableHeader: string[] = ["Name", "Father's Name", "DoB", "Age", "Address", "Total Ammount Paid"];

  constructor(private appService: AppService) {
    this.registeredEmployees = [];
  }

  ngOnInit() {
  }

  showDetails(studentDetails): void {
    this.showBanner = true;
    // this.registeredEmployees.push(this.studentDetails);
    this.appService.setRegisteredEmployees(this.studentDetails);
    this.studentDetails = {};
    console.log("size is " + this.registeredEmployees.length);
  }
  sortBasedOnName(i): void {
   if(i==0)
   this.appService.sortStudent();
  }

}
