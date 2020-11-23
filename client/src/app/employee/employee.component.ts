import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
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
    { headerName: 'ID', field: 'ID', sortable: true, filter: true, checkboxSelection: true, width: '100px' },
    { headerName: 'Name', field: 'Name', sortable: true, filter: true },
    { headerName: 'Address', field: 'Address', sortable: true, filter: true, resizable: true },
    { headerName: 'Role', field: 'Role', sortable: true, filter: true, resizable: true  },
    { headerName: 'Department', field: 'Department', sortable: true, filter: true, resizable: true  },
    { headerName: 'SkillSets', field: 'SkillSets', sortable: true, filter: true, resizable: true  },
    { headerName: 'Date of Birth', field: 'DateOfBirth', sortable: true, filter: true, width: '125px'  },
    { headerName: 'Date of Joining', field: 'DateOfJoining', sortable: true, filter: true, width: '125px'  },
    { headerName: 'Is Active', field: 'IsActiveDisplay', sortable: true, filter: true, width: '100px' }
  ];

  rowData!: IEmployee[]; // IEmployeeApi[];

  constructor(private employeeService: EmployeeService,
    private router: Router) {

  }

  ngOnInit(): void {
    // this.agGrid.gridOptions = {
    //   rowDoubleClicked: onRowDoubleClicked
    // };

    this.employeeService.getEmployees().subscribe(response => {
      console.log('response: ', response);
      // set delay to see loading icon
      // setTimeout(() => {
      //   this.rowData = response;
      // }, 3000);
      this.rowData = response.map(r => ({
        ID: r.id,
        Name: r.firstName + ' ' + r.lastName,
        Address: this.createAddress(r),
        Role: r.role,
        Department: r.department,
        SkillSets: r.skillSets,
        DateOfBirth: formatDate(r.dateOfBirth, 'MM/dd/yyyy', 'en_US'),
        DateOfJoining: formatDate(r.dateOfJoining, 'MM/dd/yyyy', 'en_US'),
        IsActiveDisplay: r.isActive ? 'Yes' : 'No'
      }));
      console.log('this.employees: ', this.rowData);
    }, error => {
      console.log('error: ', error);
    });
  }

  createAddress(row: any): string {
    let address = row.address1;
    if (row.address2) {
      address += ' ' + row.address2;
    }
    address += ' ';
    address += row.city + ', ' + row.state + ' ' + row.zipCode;

    return address;
  }

  onRowDoubleClicked(): void {
    alert('hello');
  }

  // In general we are selecting 1 row at a time. In the future, just enable multiple selection
  // in the grid these methods pass back a csv list of selected ids
  getSelectedRows(): string {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    // console.log('freddie selectedNodes: ', selectedNodes);
    const selectedData = selectedNodes.map(node => node.data );
    console.log('freddie selectedData: ', selectedData);
    const idCsv = selectedData.map(node => node.ID).join(',');
    return idCsv;
  }

  addItem(): void {
    this.router.navigateByUrl('addEmployee');
    // const selectedId = this.getSelectedRows();
    // const message = this.employeeService.addEmployee();
    // alert('Add message: ' + message);
  }

  editItem(): void {
    const selectedId = this.getSelectedRows();
    const message = this.employeeService.editEmployee(selectedId);
    alert('Edit message: ' + message);
  }

  deleteItem(): void {
    const selectedId = this.getSelectedRows();
    console.log('delete selectedId: ', selectedId);
    const message = this.employeeService.deleteEmployee(selectedId);
    alert('Delete message: ' + message);
  }

}
