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

  deleteEmployees(idCsv: string): string {
    console.log('service deleteEmployees: ', idCsv);
    return 'Hello';
  }
}
