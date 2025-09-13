import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { HeadingComponent } from '../heading/heading.component';
import { CommentsComponent } from '../comments/comments.component';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeadingComponent,
    CommentsComponent,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule // Add MatButtonModule
  ],
})
export class StoryComponent implements OnInit {

  storyId: string = '';
  storyData: any = {}; // Initialize as an object
  kidsArray: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.storyId = this.activatedRoute.snapshot.params['id'];
    this.getStoryData();
  }

  getStoryData() {
    this.apiService.getStoryById(this.storyId).subscribe((res: any) => {
      // Process the time before assigning the data
      res.processedTime = this.getTime(res.time);
      this.storyData = res;
      this.kidsArray = this.storyData.kids || []; // Ensure kidsArray is always an array
    });
  }

  open(url: any) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getTime(time: number): string {
    const currentDate = new Date().getTime();
    const storyDate = new Date(time * 1000).getTime();
    const diff = currentDate - storyDate;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);

    if (minutes < 1) {
      return 'just now';
    }
    if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
}