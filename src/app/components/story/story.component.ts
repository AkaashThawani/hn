import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  storyId: string = '';
  storyData: any = [];
  kidsArray = [];
  kidsArrayData: any = [];
  constructor(private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.storyId = this.activatedRoute.snapshot.params['id'];
    this.getStoryData();
  }

  getStoryData() {
    this.apiService.getStoryById(this.storyId).subscribe((res: any) => {
      this.storyData = res;
      this.kidsArray = this.storyData.kids;
      console.log(this.storyData.kids)
      // this.getKidsData();
    })
  }

  getKidsData() {
    // this.kidsArray = this.storyData.kids;
    // this.kidsArray.forEach((kid) => {
    //   this.apiService.getCommentById(kid).subscribe((res2: any) => {
    //     // var kidsData = this.getSubKids(res2);
    //     this.kidsArrayData.push(res2);
    //   })
    // })
    // console.log(this.kidsArrayData)
  }

  open(url: any) {
    window.open(url, '_blank')
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
