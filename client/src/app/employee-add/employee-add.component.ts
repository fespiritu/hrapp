import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  addEmployee!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addEmployee = new FormGroup({
      firstName: new FormControl(null),
      lastName:  new FormControl(null),
      address1:  new FormControl(null),
      address2:  new FormControl(null),
      city:  new FormControl(null),
      state:  new FormControl(null),
      zipCode:  new FormControl(null),
      role:  new FormControl(null),
      department:  new FormControl(null),
      skillSets:  new FormControl(null),
      dateOfBirth:  new FormControl(null),
      dateOfJoining:  new FormControl(null),
      isActive:  new FormControl(true)
    });

  }

  saveItem(): void {

    alert('Save');
    this.router.navigateByUrl('employees');
  }

  cancel(): void {
   // this.router.navigateByUrl('addEmployee');
   this.router.navigateByUrl('employees');
  }
}
