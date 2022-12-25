import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { APIService } from '../../services/api.service';


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
  kidsArray: any[] = [];
  kidsArrayData: any[] = [];
  myData: any[] = [];

  constructor(private apiService: APIService) {

  }


  ngOnInit(): void {
    this.myData = this.data;
    this.getKidsData();
  }

  ngAfterViewInit() {
    this.sortCommentsOnTime()
  }

  getKidsData() {
    this.kidsArray = this.data.map(e => ({ 'id': e, 'data': [] }));
    this.kidsArray.forEach((kid, index) => {
      this.apiService.getCommentById(kid.id).subscribe((res2: any) => {
        // console.log(this.kidsArray[index].data)
        this.kidsArray[index].data = res2;
        // console.log(this.kidsArray[index])
      })
    })
  }


  scrollToNext(obj: any, index: number) {
    if (this.next) {
      // console.log('prev=>', this.next)
      this.next.classList.remove('blo')
    }
    if (obj[index + 1]) {
      this.next = document.getElementById(obj[index + 1].id) ?? undefined
      // console.log('current =>', this.next)
      this.next?.classList.add('blo');
      this.next?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  sortCommentsOnTime() {
    this.kidsArrayData.sort(({ time: a }, { time: b }) => a > b ? 1 : a < b ? -1 : 0)
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
