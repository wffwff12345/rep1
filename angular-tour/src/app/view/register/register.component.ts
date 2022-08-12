import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder,private router:Router) {
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.router.navigate(['/login'])


  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [ 'jack', [ Validators.required ] ],
      password: [ 123, [ Validators.required ,Validators.minLength(3),Validators.maxLength(9)]],

    });
  }
}