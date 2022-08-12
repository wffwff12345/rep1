import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder,private service:LoginService,private message:NzMessageService,private router:Router,private location:Location) {
    }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(!this.validateForm.valid){
      console.log('验证失败！')
      return 
    }
    const {name,password}=this.validateForm.value;
    let logindto={name,password}
    this.service.login(logindto).subscribe((res:any)=>{
      console.log(res.message)
      console.log(res)
      if (res.code == 1009) {
        this.message.error(`${res.message}，请注册`)
      }
      else if(res.code == 1006){
        const token=res.data.token
        localStorage.setItem("token",token)
        this.router.navigate(['/home'])
        this.message.success(res.message)
      }
      else{
      this.message.success(res.message)
      }
    })


  }
  back(){
    this.router.navigate(['/first'])
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [ 'jack', [ Validators.required ] ],
      password: [ 123, [ Validators.required ,Validators.minLength(3),Validators.maxLength(9)]],

    });
  }
}
//   name:string='';
//   password:string='';
//   //user:User[]=[];
//   userdto:userDto={size:7,page:1}
//   result:any
//   result1:any
//   users:any
//   user:any
//   a:any
//   b:any
//   constructor(private service:UserService) { }
//   ngOnInit(){
    
//   }
//  /*  ngOnInit(){
//     this.a=this.get()
//   } */
//   // ngOnInit():any{
//   //   this.service.getall(this.userdto).subscribe(res => {
//   //     console.log(typeof (res.body));
//   //     console.log(res.body);
//   //     this.result = res.body
//   //   })
//   //   return this.result
//   // }
//   ngAfterContentInit():any{
//     console.log(this.name)
//     console.log(this.password)
//     this.service.login({name:this.name,password:this.password}).subscribe(date => {
//       this.result1 = date.body
//     })
//     return this.result1
//   }
  
//   // ngOnChanges(){
//   //   alert(this.user)
//   // }  
//   // ngAfterContentInit(){
//   //   alert(this.user)
//   // }
//   // ngAfterViewInit()	{
//   //   alert(this.user)
//   // }
//   get():User{
//     this.service.getall(this.userdto).subscribe(res => {
//       console.log(typeof (res.body));
//       console.log(res.body);
//       this.result = res.body
//     })
//     return this.result
//   }
//   getAll() {
//     let user1: User = this.get();
//     this.users = user1.data;
//   }
//   post():User{
//     console.log(this.name)
//     console.log(this.password)
//     this.service.login({name:this.name,password:this.password}).subscribe(date => {
//       this.result1 = date.body
//     })
//     return this.result1
//   }
//   onLoginClick(){
//     let res=this.ngAfterContentInit()
//     alert(res.message)
//   }
// }
// class people {
//   id: number = 0;
//   name: string = "";
//   age: number = 0;
//   date: string = '';

// }
// class User{
//   code:number=0
//   currentpage:number=0
//   data: people={
//     id: 0,
//     name: '',
//     age: 0,
//     date: ''
//   }
//   message:string=''
//   size:number=0
//   total:number=0

// }



