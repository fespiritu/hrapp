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


  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
  }

}
