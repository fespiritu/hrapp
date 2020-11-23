import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  addEmployee!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addEmployee = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      lastName:  new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      address1:  new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      address2:  new FormControl(null),
      city:  new FormControl(null, [Validators.required, Validators.maxLength(60)]),
      state:  new FormControl(null, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      zipCode:  new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      role:  new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      department:  new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      skillSets:  new FormControl(null, [Validators.maxLength(1000)]),
      dateOfBirth:  new FormControl(null),
      dateOfJoining:  new FormControl(null),
      isActive:  new FormControl(true)
    });

  }

  get firstName(): any { return this.addEmployee.get('firstName'); }
  get lastName(): any { return this.addEmployee.get('lastName'); }
  get address1(): any { return this.addEmployee.get('address1'); }
  get city(): any { return this.addEmployee.get('city'); }
  get state(): any { return this.addEmployee.get('state'); }
  get zipCode(): any { return this.addEmployee.get('zipCode'); }
  get role(): any { return this.addEmployee.get('role'); }
  get department(): any { return this.addEmployee.get('department'); }
  get skillSets(): any { return this.addEmployee.get('skillSets'); }

  onSubmitClick(): void {
    // this.addEmployee['submitted'] = true;
    console.log('this.addEmployee : ', this.addEmployee );
  }
  saveItem(): void {
    console.log('this.addEmployee : ', this.addEmployee );
    alert('Save');
    // this.router.navigateByUrl('employees');
  }

  cancel(): void {
   // this.router.navigateByUrl('addEmployee');
   this.router.navigateByUrl('employees');
  }
}
