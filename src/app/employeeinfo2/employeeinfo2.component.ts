import { Component, OnInit } from '@angular/core';
import { employees } from './employeeinfo2';

@Component({
  selector: 'app-employeeinfo2',
  templateUrl: './employeeinfo2.component.html',
  styleUrls: ['./employeeinfo2.component.scss',]
})
export class Employeeinfo2Component implements OnInit {
  employee: employees[] = [{
    empId: 101,
    fname: "Sandeep",
    lname: "Gupta",
    salary: 25000,
    dob: new Date('11/08/2000'),
    email: "guptasd101@gmail.com",
    action: "open"
  },
  {
    empId: 102,
    fname: "Sonu",
    lname: "Jaiswal",
    salary: 26000,
    dob: new Date('08/03/1999'),
    email: "sonu321@gmail.com",
    action: "open"
  }];
  showEdit: boolean = false;
  currentIndex: any;

  constructor() { }
  ngOnInit() { }

  EditEmp() {
    this.showEdit = true;
  }

  UpdateEmp() {
    this.showEdit = false;
  }
}
