import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { HeadingComponent } from '../heading/heading.component';


@Component({
  selector: 'app-multi-mode-view',
  templateUrl: './multi-mode-view.component.html',
  styleUrls: ['./multi-mode-view.component.scss'],
})
export class MultiModeViewComponent implements OnInit {

  topStories = []
  dataOBS$!: Observable<any[]>;
  paginatedData: any = [];
  paginated: any = []

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  viewMode: string = '';

  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute, private router: Router) {
   
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res)
      this.viewMode = res.id
      // this.router.navigated=false;
    });
    this.getAPI(this.viewMode);
    console.log('act', this.activatedRoute)
  }

  onPageChange(event: PageEvent) {
    this.paginatedData = this.topStories.slice(event.pageIndex * 20, (event.pageIndex + 1) * 20);
    this.paginated = [];
    this.getStoryData()
  }



  getAPI(mode: string) {
    this.apiService.modeType(mode).subscribe((res: any) => {
      res = res.map((obj: any, index: number) => ({ 'id': obj, 'index': index + 1 }))
      this.topStories = res;
      this.paginatedData = this.topStories.slice(0, 20)
      this.getStoryData();
    })
  }

  getStoriesByIDs(id: any) {
    this.apiService.getStoryById(id).subscribe((res) => {
      this.paginated.push(res);
    })
  }

  getStoryData() {
    this.paginatedData.forEach((element: any) => {
      this.getStoriesByIDs(element.id)
    });
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

  open(url:any){
    window.open(url,'_blank');
  }

}
