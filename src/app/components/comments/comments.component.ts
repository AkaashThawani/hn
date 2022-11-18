import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-comments',
  standalone:true,
  imports:[
    CommonModule,
    MatExpansionModule,
    RouterLink,
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() data: any[] = [];
  @ViewChild("", { static: false }) span!: Element;

  constructor() { }

  ngOnInit(): void {
    this.sortCommentsOnTime();
  }
  scrollToNext(obj: any, index: number) {
    if (obj[index + 1]) {
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
    }

  sortCommentsOnTime() {
    this.data.sort(({ time: a }, { time: b }) => a > b ? 1 : a < b ? -1 : 0)
  }

  getTime(time: number) {
    return new Date(time * 1000).toLocaleDateString();
  }

}
