import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HomeComponent } from './home/home.component';
import { EmployeeModule } from './employee/employee.module';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { EmployeeAddComponent } from './employee-add/employee-add.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    EmployeeDetailComponent
    // EmployeeAddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
