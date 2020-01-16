import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName: string = 'Randall';
  lastName: string = 'Carlisle';
  gender: string = 'Male';
  age: number = 65;

  pageHeader: string = "Employee Details";
  imagePath: string = "wp-content/uploads/2019/02/pargim-logo-1.png";

  isDisabled: boolean = false;
  columnSpan: number = 4;
  showDetails: boolean = false;
  name: string = this.firstName;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
  
  getFullName() : string {
    return this.firstName + ' ' + this.lastName;
  }

  constructor() { }

  ngOnInit() {
  console.log("Employee Details: ", this.pageHeader);
  }

  callAlert() {
    this.isDisabled=true;
    alert('Button disabled!')
  }
}
