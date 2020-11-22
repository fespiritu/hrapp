import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee';
import { EmployeeService } from './employee.service';
import { IEmployeeApi } from './../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // employees!: IEmployee[];
  Employees!: IEmployeeApi[];


  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(response => {
      this.Employees = response;
      console.log('this.employees: ', this.Employees);
    }, error => {
      console.log('error: ', error);
    });
  }

  // onEdit($event) {
  //   console.log('Hello onEdit: ', $event.target.name);
  // }

  // onDelete($event) {
  //   console.log('Hello onDelete: ',  $event.target.name);
  // }



}
