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

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'firstName' },
    { headerName: 'Address', field: 'address1' },
    { headerName: 'Role', field: 'role' },
    { headerName: 'Department', field: 'department' },
    { headerName: 'SkillSets', field: 'skillSets' },
    { headerName: 'Date of Birth', field: 'dateOfBirth' },
    { headerName: 'Date of Joining', field: 'dateOfJoining' },
    { headerName: 'Is Active', field: 'isActive' }
  ];

  rowData!: any[]; // IEmployeeApi[]; // IEmployeeApi[];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(response => {
      console.log('response: ', response);
      this.rowData = response;
      console.log('this.employees: ', this.rowData);
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
