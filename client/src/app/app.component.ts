import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployeeApi } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Human Resources';
  employeesApi!: IEmployeeApi[];

  Employees!: [{
      Name: string;
      ID: number;
      Address: string;
      Role: string;
      Department: string;
      SkillSets: string;
      DateOfBirth: Date;
      DateOfJoining: Date;
      IsActive: boolean;
    }];


  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    // this.http.get('https://localhost:5001/api/employees').subscribe((response: IEmployeeApi) => {
    //   console.log('response: ', response);
    //   this.employeesApi = response;
    //   console.log('this.employeesApi: ', this.employeesApi);
    // }, error => {
    //   console.log('error: ', error);
    // });
  }

  // onEdit($event) {
  //   console.log('Hello onEdit: ', $event.target.name);
  // }

  // onDelete($event) {
  //   console.log('Hello onDelete: ',  $event.target.name);
  // }


}
