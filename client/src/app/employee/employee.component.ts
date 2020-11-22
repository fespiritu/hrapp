import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from '../models/employee';
import { EmployeeService } from './employee.service';
import { IEmployeeApi } from './../models/employee';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // employees!: IEmployee[];
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  columnDefs = [
    // { headerName: '', filter: true, button: true, width: '100px' },
    { headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true, width: '100px' },
    { headerName: 'Name', field: 'firstName', sortable: true, filter: true },
    { headerName: 'Address', field: 'address1', sortable: true, filter: true },
    { headerName: 'Role', field: 'role', sortable: true, filter: true },
    { headerName: 'Department', field: 'department', sortable: true, filter: true },
    { headerName: 'SkillSets', field: 'skillSets', sortable: true, filter: true },
    { headerName: 'Date of Birth', field: 'dateOfBirth', sortable: true, filter: true, width: '125px'  },
    { headerName: 'Date of Joining', field: 'dateOfJoining', sortable: true, filter: true, width: '125px'  },
    { headerName: 'Is Active', field: 'isActive', sortable: true, filter: true, width: '100px' }
  ];

  rowData!: IEmployeeApi[]; // IEmployeeApi[];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(response => {
      console.log('response: ', response);
      // set delay to see loading icon
      // setTimeout(() => {
      //   this.rowData = response;
      // }, 3000);
      this.rowData = response;
      console.log('this.employees: ', this.rowData);
    }, error => {
      console.log('error: ', error);
    });
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log('freddie selectedNodes: ', selectedNodes);
    const selectedData = selectedNodes.map(node => node.data );
    console.log('freddie selectedData: ', selectedData);
    const selectedDataStringPresentation = selectedData.map(node => node.id + ' ' + node.firstName).join(', ');
    console.log('freddie selectedDataStringPresentation: ', selectedDataStringPresentation);
    const idList = selectedData.map(node => node.id).join(',');
    const message = this.employeeService.deleteEmployees(idList);
    alert('Delete message: ' + message);
}
  // onEdit($event) {
  //   console.log('Hello onEdit: ', $event.target.name);
  // }

  // onDelete($event) {
  //   console.log('Hello onDelete: ',  $event.target.name);
  // }



}
