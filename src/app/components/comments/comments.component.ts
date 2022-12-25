import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  @Input() data: any[] = [];
  @Input() expand: boolean = true;
  @Output() removeBlo = new EventEmitter<boolean>;
  @ViewChild("", { static: false }) span!: Element;
  @ViewChild("", { static: false }) next: HTMLElement | undefined;

  constructor() { }

  ngOnInit(): void {
    this.sortCommentsOnTime();
  }
  scrollToNext(obj: any, index: number) {
    if (!this.expand) {
      this.removeBlo.emit(true)
    }
    if (this.next) {
      console.log('prev=>', this.next)
      this.next.classList.remove('blo')
    }
    if (obj[index + 1]) {
      this.next = document.getElementById(obj[index + 1].id) ?? undefined
      console.log('current =>', this.next)
      this.next?.classList.add('blo');
      setTimeout(()=>{
        this.next?.classList.add('blo-remove')
      },2000)
      this.next?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  removeParentBlo(event:any){

  }

  sortCommentsOnTime() {
    this.data.sort(({ time: a }, { time: b }) => a > b ? 1 : a < b ? -1 : 0)
  }
  getTime(time: number) {
    var currentDateAndTime = new Date().getTime();
    var k: any = new Date(time * 1000).getTime();
    if (currentDateAndTime - k <= 3600000) {
      return new Date(currentDateAndTime - k).getUTCMinutes() + ' minutes';
    }
    else {
      return new Date(currentDateAndTime - k).getUTCHours() + ' hours';
    }
  }

}
