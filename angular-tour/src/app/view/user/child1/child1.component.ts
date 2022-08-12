import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from './user.service';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
import { getuserdto } from '../getuserdto';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  msg:string='这是第一个子组件'
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder,private service:UserService,private message:NzMessageService,private router:Router) {
    this.validateForm = this.fb.group({
      name:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      password: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
     /*  confirm: ['jack',  [this.confirmValidator]], */
      age:[null,[Validators.required,Validators.pattern(/^\d{1,3}$/)]],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required,Validators.pattern(/^[1][3-9]\d{9}$/)]],
      status:['0', [Validators.required,Validators.pattern(/^[0|1]$/)]]
    })
  }
  userid:any
  listOfData: user[] = []
  getdto :getuserdto={
    name: '',
    page: 1,
    size: 5
  }
  isVisible = false;
  total=0
  isloading=false
  ngOnInit(): void {
    this.getusers()
  }

  async getusers() {
    const {name,page,size}=this.getdto
    const reqdto={name,page,size}
    this.isloading=true
    this.service.getuser(reqdto).subscribe((res: any) => {
      console.log(reqdto)
      this.listOfData = res.data
      console.log(res.data)
      this.total=res.total
      this.isloading=false
    })

  }
  search(){
    this.getusers()
  }
  clean(){
    this.getdto.name=''
    this.getusers()
  }
     
  deletecancel(){
    this.message.info('已取消删除!')
  }
  delete(id :number){
    console.log(id)
    this.service.deleteuser(id).subscribe((res:any)=>{
      console.log(res)
      if(res.code==1001){
        this.message.success("删除成功!")
        this.search()
      }else{
        this.message.error(res.message)
      }
    })
  }
  updatecancel(){
    this.message.info('已取消编辑!')
  }
  update(id :number){
    this.userid=id
    this.isVisible = true;
    this.service.getByid(id).subscribe((res:any)=>{
        console.log(res)
        if(res.code===1001){
          const {name,age,email,phone}=res.data
          let s:number=res.data.status
          const r=s+''
          const dto={name,age,email,phone,status:r}
          this.validateForm.patchValue(dto)
        }
        else{
          this.message.error(res.message)
        }
    })
  }
  trackById(index:number,item:any){
    return item.id;
  }
  handleCancel(){
    this.isVisible=false
  }
  handleOk(){
    this.submitForm();
  }
  statuscancel(id:number){
    this.message.info('取消用户权限操作')
  }
  status(id :number,status:number){
    if(status==0){
      status=1
    }else{
      status=0
    }
    this.service.changestatus({status:status},id).subscribe((res:any)=>{
      if(res.code==1001){
        this.getusers()
        console.log(res)
      }else{
        console.log(res)
      }
    })
  }
  async submitForm(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(!this.validateForm.valid){
      console.log('验证失败！')
      return 
    }
    const {name,password,age,email,phone,status}=this.validateForm.value
    const uid=this.userid
    const dto={name,password,age,email,phone,status}
    console.log(dto)
    this.service.editor(dto,uid).subscribe((res:any)=>{
        console.log(res)
        if(res.code==1001){
         /*  const user=this.listOfData.find(x=>x.id=uid)
          const {id,name,age,date,email,phone,status}=res.data
          this.listOfData[uid]={id,name,age,date,email,phone,status} */
          this.getusers()
          this.isVisible=false
          this.validateForm.reset();
          for (const key in this.validateForm.controls) {
            if (this.validateForm.controls.hasOwnProperty(key)) {
              this.validateForm.controls[key].markAsPristine();
              this.validateForm.controls[key].updateValueAndValidity();
            }
          }
          this.router.navigate(['/home/user/userlist'])
          this.message.success('成功编辑用户',{
            nzDuration:2000
          })
        }
        else{
          this.message.error(res.message)
        }
    })
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

}

