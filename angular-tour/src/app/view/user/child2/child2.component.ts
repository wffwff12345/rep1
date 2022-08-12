import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { UserService } from './user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder,private service:UserService,private message:NzMessageService,private router:Router) {
    this.validateForm = this.fb.group({
      name:[null, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      password: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
     /*  confirm: ['jack',  [this.confirmValidator]], */
      age:[null, [Validators.required,Validators.pattern(/^\d{1,3}$/)]],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required,Validators.pattern(/^[1][3-9]\d{9}$/)]],
      status:['0', [Validators.required,Validators.pattern(/^[0|1]$/)]]
    })
  }
  submitForm(): void {
    console.log('submit', this.validateForm.value);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(!this.validateForm.valid){
      console.log('验证失败！')
      return 
    }
    const {name,password,age,email,phone,status}=this.validateForm.value
    const dto={name,password,age,email,phone,status}
    this.service.adduser(dto).subscribe((res:any)=>{
        console.log(res)
        if(res.code==1001){
          this.validateForm.reset();
          for (const key in this.validateForm.controls) {
            if (this.validateForm.controls.hasOwnProperty(key)) {
              this.validateForm.controls[key].markAsPristine();
              this.validateForm.controls[key].updateValueAndValidity();
            }
          }
          this.router.navigate(['/home/user/userlist'])
          this.message.success('成功新增用户',{
            nzDuration:2000
          })
        }
        else{
          this.message.error(res.message)
        }
    })
  }
  verify():any{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    const {password,confirm}=this.validateForm.value
    return {password,confirm}
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls['confirm'].updateValueAndValidity());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
/*   confirmValidator(): { [s: string]: boolean } {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    const {password,confirm}=this.validateForm.value
    const obj={password,confirm}
    if (!obj.confirm) {
      return { error: true, required: true };
    } else if (obj.confirm!==obj.password) {
      return { confirm: true, error: true };
    }
    return {};
  } */
  confirmValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.value.password) {
      return { confirm: true, error: true };
    }
    return {}
  };


  
  ngOnInit(): void {
}}
