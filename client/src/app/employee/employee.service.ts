import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeApi } from './../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployeeApi[]> {
    return this.http.get<IEmployeeApi[]>(this.baseUrl + 'employees');

  }

  addEmployee(): string {
    console.log('service add: ');
    return 'add';
  }
  editEmployee(id: string): string {
    console.log('service edit: ', id);
    return 'Edit';
  }

  deleteEmployee(id: string): void {
    console.log('service deleteEmployees: ', id);
    const url = this.baseUrl + 'employees/' + id;
    console.log('url: ', url);
    this.http.delete(url);

  }
}
