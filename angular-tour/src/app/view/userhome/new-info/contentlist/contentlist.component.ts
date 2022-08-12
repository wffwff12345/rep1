import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css']
})
export class ContentlistComponent implements OnInit {
  @Input()
  item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
