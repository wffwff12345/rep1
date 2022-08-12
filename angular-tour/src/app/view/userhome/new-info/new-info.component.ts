import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewinfoService } from './newinfo.service';
@Component({
  selector: 'app-new-info',
  templateUrl: './new-info.component.html',
  styleUrls: ['./new-info.component.css']
})
export class NewInfoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:NewinfoService) { }
  id=this.route.snapshot.params['id'];
  title:string|null=null;
  contents:content[]=[];
  date:any;
  authorname:any;
  ngOnInit(): void {
    console.log(this.id);
    this.service.getOne(this.id).subscribe((res:any)=>{
      this.title=res.data.title;
      this.contents=JSON.parse(res.data.content);
      console.log(this.contents);
      this.date=res.data.createTime;
      this.authorname=res.data.author;
    })
  }
  
}

interface data{
  id:number;
  title:string;
  channel:string;
  content:string;
  cover:string;
  type:number;
  createTime:string;
  author:string;
}
interface content{
  type:string;
  content:string;
}