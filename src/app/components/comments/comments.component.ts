import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { APIService } from '../../services/api.service';
import { forkJoin, map } from 'rxjs';

// --- Other imports remain the same ---
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip'; // Import for matTooltip

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatCardModule, MatTableModule,
    MatPaginatorModule, MatExpansionModule, MatTooltipModule
  ],
})
export class CommentsComponent implements OnInit {

  @Input() data: number[] = []; // Expecting an array of comment IDs
  @Input() expand: boolean = true;

  kidsArray: any[] = []; // This will hold the final, complete comment objects
  isLoading = true; // Flag for showing the initial skeleton

  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit(): void {
    if (this.data && this.data.length > 0) {
      this.getKidsData();
    } else {
      this.isLoading = false;
    }
  }

  getKidsData() {
    // Create an array of API calls, one for each comment ID
    const commentObservables = this.data.map(id =>
      this.apiService.getCommentById(id).pipe(
        // Use the map operator to process the data as soon as it arrives
        map((commentData: any) => {
          if (commentData) {
            commentData.processedTime = this.processTime(commentData.time);
          }
          return { id, data: commentData };
        })
      )
    );

    // Run all API calls in parallel and wait for them all to complete
    forkJoin(commentObservables).subscribe(comments => {
      // Sort the comments by original timestamp before assigning
      this.kidsArray = comments.sort((a, b) => a.data.time - b.data.time);
      this.isLoading = false;
    });
  }

  // --- TEMPLATE INTERACTION METHODS ---

  // The panel reference is now passed directly from the template
  expandR(panel: MatExpansionPanel) {
    panel.expanded = !panel.expanded;
  }

  scrollToNext(allComments: any[], currentIndex: number) {
    const nextComment = allComments[currentIndex + 1];
    if (nextComment && nextComment.data && nextComment.data.id) {
      const nextElement = document.getElementById(String(nextComment.data.id));
      nextElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // --- HELPER FUNCTIONS ---

  goToUser(by: string) {
    if (by) {
      this.router.navigate(["/user/", by]);
    }
  }

  kidTrackBy(index: number, kidData: any): number {
    return kidData.id;
  }

  processTime(time: number): string {
    const currentDate = new Date().getTime();
    const commentDate = new Date(time * 1000).getTime();
    const diff = currentDate - commentDate;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);

    if (minutes < 1) { return 'just now'; }
    if (minutes < 60) { return `${minutes} minute${minutes > 1 ? 's' : ''} ago`; }
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
}