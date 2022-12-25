import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { APIService } from '../../services/api.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {


  @Input() data: any[] = [];
  @Input() expand: boolean = true;
  @Output() removeBlo = new EventEmitter<boolean>;
  @ViewChild("", { static: false }) mep!: MatExpansionPanel;
  @ViewChild("", { static: false }) next: HTMLElement | undefined;
  kidsArray: any[] = [];
  kidsArrayData: any[] = [];
  myData: any[] = [];

  constructor(private apiService: APIService, private router: Router) {

  }


  ngOnInit(): void {
    this.myData = this.data;
    this.getKidsData();
  }

  ngAfterViewInit() {
    this.sortCommentsOnTime()
    this.getTime()
  }

  kidTrackBy(index: number, kidData: any): string {
    return kidData.id;
  }

  goToUser(by: string) {
    this.router.navigate(["/user/", by])
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
  getTime() {
    this.kidsArray.forEach((e) => {
      var currentDateAndTime = new Date().getTime();
      var k: any = new Date(e.data.time * 1000).getTime();
      if (currentDateAndTime - k <= 3600000) {
        e.data.time = new Date(currentDateAndTime - k).getUTCMinutes() + ' minutes';
      }
      else {
        e.data.time = new Date(currentDateAndTime - k).getUTCHours() + ' hours';
      }
    })
  }

  expandR() {
    this.mep.expanded = !this.mep.expanded
  }

}
