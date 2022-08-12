import { Component, OnInit,NgZone ,ChangeDetectorRef, ViewChild} from '@angular/core';
import { NewseditorService } from './newseditor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditorComponent } from '../editor/editor.component';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newseditor',
  templateUrl: './newseditor.component.html',
  styleUrls: ['./newseditor.component.css']
})
export class NewseditorComponent implements OnInit {
  @ViewChild('appeditor')
  appeditor!: EditorComponent;
  form!: FormGroup;
  channel:any;
  date:any;
  type:any;
  onePic:any;
  threePic:any;
  threePicList:Array<string>|any=[null,null,null];
  editors:any;
  id=this.route.snapshot.queryParams['id'];
  contents:content[]=[];
  constructor(private service:NewseditorService,private formBuilder: FormBuilder,private ngZone:NgZone,private changeDetectorRef: ChangeDetectorRef,private router:Router,private message:NzMessageService,private route:ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [ Validators.required ,Validators.minLength(3),Validators.maxLength(50)]],
    });
    if(this.id){
      this.editor(this.id);
    }
  }
  clean(){
    this.form = this.formBuilder.group({
      title: ['', [ Validators.required ,Validators.minLength(3),Validators.maxLength(50)]],
    });
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  /* editor() {
    let arr = [{ "type": "text", "content": "1111" }, { "type": "image", "content": "https://wffyy.oss-cn-huhehaote.aliyuncs.com/90f2adf9-1978-45c5-a996-6f64817f683a.jpeg" }]
    const contents = arr;
    console.log(contents);
    const reqdto = { title: "这是测试数据", cover: "https://wffyy.oss-cn-huhehaote.aliyuncs.com/0bde0e4c-53e6-4f78-85a1-2b5a33fc9204.jpeg", type: 3, author: "jack", channel: "体育", content: contents }
    this.service.insert(reqdto).subscribe((res: any) => {
      console.log(res)
    })
  } */
  editor(id:number){
    console.log("修改新闻")
    this.service.getOne(id).subscribe((res:any)=>{
      this.form = this.formBuilder.group({
        title: [res.data.title, [ Validators.required ,Validators.minLength(3),Validators.maxLength(50)]],
      });
      console.log(res);
      this.channel=res.data.channel;
      this.type=res.data.type+'';
      this.date=res.data.createTime;
      console.log(JSON.parse(res.data.content));
      this.contents = JSON.parse(res.data.content);
      console.log(this.contents)
      this.appeditor.setcontent(this.contents);
      this.getImages(res.data.cover);
    })
  }
  getImages(image:string){
    if(this.type==1){
      this.onePic=image
    }else if(this.type==3){
      const images:string[]=image.split(",");
      this.threePicList=[...images]
    }
  }
  selectOne(){
    console.log("one");
    this.currentType.type='one';
    this.uploadpic=true;
    this.listByStstus();
  }
  selectThree(id:number){
    console.log("three")
    this.currentType.type='three';
    this.currentType.key=id;
    this.uploadpic=true;
    this.listByStstus();
  }
  uploadpic=false;
  dto={
    page:1,
    size:4,
    status:'1'
  };
  list:result[]=[];
  total:any;
  currentType={
    key:0,
    type:'',
  }
  selectPic:any;
  listByStstus(){
    this.service.list(this.dto).subscribe((res: any) => {
      console.log(res.data)
      this.list=res.data;
      this.total=res.total;
      console.log(this.list);
    })
  }
  image(id:number,url:string){
    this.selectPic={id,url};
  }
  picCancel(){
    this.uploadpic=false;
  }
  saveImage(){
    if(this.selectPic.url){
      if(this.currentType.type=='one'){
        this.onePic=this.selectPic.url;
      }else if(this.currentType.type=='three'){
        this.threePicList[this.currentType.key]=this.selectPic.url;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    }
    this.currentType={
      key:0,
      type:'',
    };
    this.selectPic={};
    this.uploadpic=false;

  }
  handlechange(e:any,element:any){

  }
  getImage(){
    if(this.type==1||this.type==3){
      if(this.type==1){
        return this.onePic? [this.onePic]:[]
      }else{
        return this.threePicList.map((item: any)=>item);
      }

    }
    return [];
  }
  submit(){
    const {title}=this.form.value;
    const image:[]=this.getImage();
    this.appeditor.cancel();
    const content=this.appeditor.getContent();
    const dto={title:title,channel:this.channel,content:content,createTime:this.date,cover:image,type:this.type}
    console.log(dto);
    if(title.minLength<3||title.maxLength>50){
      this.message.error("新闻标题长度应在3-50内");
      this.appeditor.setcontent([]);
      return;
    }
    if(this.channel==null||this.channel.maxLength>10){
      this.message.error("频道不为空且频道长度不能大于10");
      this.appeditor.setcontent([]);
      return;
    }
    if(this.date==null){
      this.message.error("日期为必选项!");
      this.appeditor.setcontent([])
      return;
    }
    if((this.type=='1'&&this.getImage().length!==1)||(this.type=='3'&&this.getImage().length!==3)){
      this.message.error("请设置新闻封面");
      this.appeditor.setcontent([]);
      return;
    }
    for(let i=0;i<dto.cover.length;i++){
      if(dto.cover[i]==null){
        this.message.error("请设置新闻封面");
        this.appeditor.setcontent([]);
        return;
      }
    }
    this.service.insert(dto).subscribe((res:any)=>{
      console.log(res);
      if(res.code==1001){
        this.router.navigate(['/uhome/newslist']);
        this.message.success(`成功${this.id? '编辑':'新增'}新闻`,{
          nzDuration:2000
        });
      }
      else{
        this.message.error('发布新闻失败');
      }
    })
  }
}
interface result{
  id:number;
  url:string;
  createTime:string;
  type:number;
  status:number;

}
interface content{
  type:string;
  content:string;
}