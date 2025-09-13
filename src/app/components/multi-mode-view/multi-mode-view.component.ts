import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIService } from 'src/app/services/api.service';

// --- Angular and Material Modules ---
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-multi-mode-view',
  templateUrl: './multi-mode-view.component.html',
  styleUrls: ['./multi-mode-view.component.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule,HeadingComponent, MatCardModule,
    MatTableModule, MatPaginatorModule, MatProgressBarModule
  ],
})
export class MultiModeViewComponent implements OnInit {

  // --- STATE MANAGEMENT ---
  allStoryIds: number[] = [];
  private storyCache = new Map<number, any>(); // Cache for fetched story data to prevent re-fetching

  // The DataSource will only ever hold the 10 visible items
  ds = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['story'];
  isLoading = true; // Flag to control showing the skeleton loader

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      // 1. Get the list of all 500 story IDs just once
      this.apiService.modeType(params.id).subscribe((ids: number[]) => {
        this.allStoryIds = ids;
        // 2. Load the very first page of data
        this.loadPage(0);
      });
    });
  }

  // --- PAGINATION LOGIC ---
  onPageChange(event: PageEvent) {
    this.loadPage(event.pageIndex);
  }

  loadPage(pageIndex: number) {
    this.isLoading = true;
    this.ds.data = []; // Clear the table to ensure the skeleton shows

    const pageSize = 10;
    const startIndex = pageIndex * pageSize;

    // Get IDs for the current page and the NEXT page (for preloading)
    const currentPageIds = this.allStoryIds.slice(startIndex, startIndex + pageSize);
    const nextPageIds = this.allStoryIds.slice(startIndex + pageSize, startIndex + (2 * pageSize));
    const idsToFetch = [...currentPageIds, ...nextPageIds];

    // From the combined list, find which ones we don't already have in our cache
    const idsNotInCache = idsToFetch.filter(id => !this.storyCache.has(id));

    // If all the stories for this page and the next are already cached, load instantly
    if (idsNotInCache.length === 0) {
      this.updateDataSourceFromCache(currentPageIds);
      return;
    }

    // Create an array of API calls only for the stories we don't have
    const apiCalls = idsNotInCache.map(id =>
      this.apiService.getStoryById(id).pipe(
        map(storyData => ({ id, data: storyData }))
      )
    );

    // Run all required API calls in parallel
    forkJoin(apiCalls).subscribe(newStories => {
      // Add the newly fetched stories to our cache for future use
      newStories.forEach(story => this.storyCache.set(story.id, story.data));
      // Now, update the view with the data for the current page
      this.updateDataSourceFromCache(currentPageIds);
    });
  }

  private updateDataSourceFromCache(pageIds: number[]) {
    const pageData = pageIds.map(id => {
      const data = this.storyCache.get(id);
      // Process the time string right before displaying
      if (data && !data.processedTime) {
        data.processedTime = this.getTime(data);
      }
      return { id, data };
    });

    this.ds.data = pageData; // This will now be an array of exactly 10 items
    this.isLoading = false; // Hide the skeleton, show the table
  }

  // --- HELPER FUNCTIONS ---
  getTime(e: any): string {
    const currentDate = new Date().getTime();
    const storyDate = new Date(e.time * 1000).getTime();
    const diff = currentDate - storyDate;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else {
      return `${hours} hours ago`;
    }
  }

  open(url: any): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  tableTrackBy(index: number, item: any): number {
    return item.id;
  }
}