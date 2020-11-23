import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from './../employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  addEmployee!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private employeeService: EmployeeService) { }

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
  get address2(): any { return this.addEmployee.get('address2'); }
  get city(): any { return this.addEmployee.get('city'); }
  get state(): any { return this.addEmployee.get('state'); }
  get zipCode(): any { return this.addEmployee.get('zipCode'); }
  get role(): any { return this.addEmployee.get('role'); }
  get department(): any { return this.addEmployee.get('department'); }
  get skillSets(): any { return this.addEmployee.get('skillSets'); }

  get dateOfBirth(): any { return this.addEmployee.get('dateOfBirth'); }
  get dateOfJoining(): any { return this.addEmployee.get('dateOfJoining'); }
  get isActive(): any { return this.addEmployee.get('isActive'); }

  onSubmitClick(): void {
    // this.addEmployee['submitted'] = true;
    console.log('this.addEmployee : ', this.addEmployee );
    const employee = new Employee(
      this.firstName.value,
      this.lastName.value,
       this.address1.value,
      this.address2.value,
      this.city.value,
       this.state.value,
      this.zipCode.value,
      this.role.value,
      this.department.value,
      this.skillSets.value,
      this.dateOfBirth.value,
      this.dateOfJoining.value,
      this.isActive.value
    );
    // employee.firstName = this.firstName.value;
    // employee.lastName = this.lastName.value;
    // employee.address1 = this.address1.value;
    // employee.address2 = this.address2.value;
    // employee.city = this.city.value;
    // employee.state = this.state.value;
    // employee.zipCode = this.zipCode.value;
    // employee.role = this.role.value;
    // employee.department = this.department.value;
    // employee.skillSets = this.skillSets.value;
    // employee.dateOfBirth = this.dateOfBirth.value;
    // employee.dateOfJoining = this.dateOfJoining.value;
    // employee.isActive = this.isActive.value;
    const message = this.employeeService.addEmployee(employee);

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
