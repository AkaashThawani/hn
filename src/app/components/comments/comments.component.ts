import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() data:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.sortCommentsOnTime();
  }

  sortCommentsOnTime(){
    this.data.sort(({ time: a }, {time: b }) => a > b ? 1 : a < b ? -1 : 0)
    console.log("DS AFTER SORTING",this.data)
  }

  getTime(time:number){
    return new Date(time*1000).toLocaleDateString();
  }

}
