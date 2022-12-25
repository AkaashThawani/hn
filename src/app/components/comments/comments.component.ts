import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() expand :boolean = true;
  @ViewChild("", { static: false }) span!: Element;
  next:any

  constructor() { }

  ngOnInit(): void {
    this.sortCommentsOnTime();
  }
  scrollToNext(obj: any, index: number) {
    if(this.next)
    if (obj[index + 1]) {
      this.next = document.getElementById(obj[index + 1].id)
      this.next?.classList.add('blo');
      this.next?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }else{
      // console.log('parent scroll trig')
      this.scrollToParentNext(obj[index].parent)
    }
    // console.log(obj)
  }

  scrollToParentNext(parentId:any){
    // console.log(parentId)
    }

  sortCommentsOnTime() {
    this.data.sort(({ time: a }, { time: b }) => a > b ? 1 : a < b ? -1 : 0)
  }
  getTime(time: number) {
    var currentDateAndTime = new Date().getTime();
    var k: any = new Date(time * 1000).getTime();
    if (currentDateAndTime - k <= 3600000) {
      return new Date(currentDateAndTime - k ).getUTCMinutes() + ' minutes';
    }
    else {
      return new Date(currentDateAndTime - k ).getUTCHours() + ' hours';
    }
  }

}
