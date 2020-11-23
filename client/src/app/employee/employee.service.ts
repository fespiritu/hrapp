import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeApi } from '../models/iemployee';
import { Observable } from 'rxjs';
import { Employee } from './../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployeeApi[]> {
    return this.http.get<IEmployeeApi[]>(this.baseUrl + 'employees');

  }

  addEmployee(employee: Employee): any {
    console.log('service add: ', employee);
    return this.http.post<any>(this.baseUrl + 'employees', employee);
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
