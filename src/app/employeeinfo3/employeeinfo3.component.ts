import { Component, OnInit } from '@angular/core';
import { employee } from './employeeinfo3';

@Component({
  selector: 'app-employeeinfo3',
  templateUrl: './employeeinfo3.component.html',
  styleUrls: ['./employeeinfo3.component.scss']
})
export class Employeeinfo3Component implements OnInit {
  employee: employee[] = [{
    empId: 1,
    fname: "Sandeep",
    lname: "Gupta",
    salary: 25000,
    dob: new Date('11/08/2000'),
    email: "guptasd101@gmail.com"
  },
  {
    empId: 2,
    fname: "Sumit",
    lname: "Mishra",
    salary: 26000,
    dob: new Date('06/05/2001'),
    email: "sumit@gmail.com"
  },
  {
    empId: 3,
    fname: "Harshit",
    lname: "Rai",
    salary: 27000,
    dob: new Date('11/13/1995'),
    email: "harshit@gmail.com"
  },
  {
    empId: 4,
    fname: "Ravi",
    lname: "Kumar",
    salary: 28000,
    dob: new Date('07/22/1999'),
    email: "ravi@gmail.com"
  },
  {
    empId: 5,
    fname: "Raju",
    lname: "Sinha",
    salary: 29000,
    dob: new Date('05/26/1989'),
    email: "sinharaju@gmail.com"
  }];
  constructor() { }
  ngOnInit() { }
}
