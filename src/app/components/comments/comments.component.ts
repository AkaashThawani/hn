import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() data: any[] = [];
  @ViewChild("", { static: false }) span!: Element;

  constructor() { }

  ngOnInit(): void {
    this.sortCommentsOnTime();
    // console.log(this.span)
    // this.span.childNodes//.scrollIntoView({ behavior: "smooth", block: "start" })

  }
  scrollToNext(obj: any, index: number) {
    if (obj[index + 1]) {
      // console.log(obj[index + 1].id)
      var next = document.getElementById(obj[index + 1].id)
      next?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }else{
      console.log('parent scroll trig')
      this.scrollToParentNext(obj[index].parent)
    }
    console.log(obj)
  }

  scrollToParentNext(parentId:any){
    console.log(parentId)
    // var nextSibling = document.getElementById(parentId)?.
    // console.log(nextSibling)
    // nextSibling?.scrollIntoView(({ behavior: 'smooth', block: 'start' }))
    }

  sortCommentsOnTime() {
    this.data.sort(({ time: a }, { time: b }) => a > b ? 1 : a < b ? -1 : 0)
    // console.log("DS AFTER SORTING",this.data)
  }

  getTime(time: number) {
    return new Date(time * 1000).toLocaleDateString();
  }

}
