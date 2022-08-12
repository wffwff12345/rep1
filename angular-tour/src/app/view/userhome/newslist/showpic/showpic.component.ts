import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-showpic',
  templateUrl: './showpic.component.html',
  styleUrls: ['./showpic.component.css']
})
export class ShowpicComponent implements OnInit {
  @Input()
  pictures:any;
  const=[];
  constructor() { }
  ngOnInit(): void {
    console.log('const')
    this.const=this.pictures.split(",");
    console.log(this.const[0])
  }

}
