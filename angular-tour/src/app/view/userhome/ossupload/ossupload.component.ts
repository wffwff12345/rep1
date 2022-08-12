import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { UserService } from './user.service';
@Component({
  selector: 'app-ossupload',
  templateUrl: './ossupload.component.html',
  styleUrls: ['./ossupload.component.css']
})
export class OssuploadComponent implements OnInit {
  constructor(private service:UserService){}
  ngOnInit(): void {
  }
  file: any;
  upload(e:any){
    this.file=e.target.files[0];
    const fd=new FormData();
    fd.append('file',this.file,this.file.name);
    this.service.upload(fd).subscribe((res:any)=>{
      console.log("上传图片！")
      console.log(res);
    })
  }
}