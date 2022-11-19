import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { CommentsComponent } from '../comments/comments.component';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [
    HeadingComponent,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    NgIf,
    CommentsComponent,
    MatButtonModule,
    FlexLayoutModule
  ],
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
      this.getKidsData();

    })
  }

  getKidsData() {
    this.kidsArray = this.storyData.kids;
    this.kidsArray.forEach((kid) => {
      this.apiService.getCommentById(kid).subscribe((res2: any) => {
        var kidsData = this.getSubKids(res2);
        this.kidsArrayData.push(kidsData);
      })
    })
    console.log(this.kidsArrayData)
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
  getSubKids(commentData: any) {
    if (commentData.kids) {
      let temp: Object[] = [];
      commentData.kids.forEach((subkid: any) => {
        this.apiService.getCommentById(subkid).subscribe((res3) => {
          var kidsData = this.getSubKids(res3);
          temp.push(kidsData)
        })
      });
      // console.log("FINALLY" ,this.kidsArrayData)
      return { ...commentData, 'kidsData': temp }
    } else {
      // console.log("FINALLY" ,this.kidsArrayData)
      return commentData
    }
  }

}
