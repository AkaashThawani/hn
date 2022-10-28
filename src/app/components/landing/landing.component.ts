
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map, Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  topStories = []
  dataOBS$!: Observable<any[]>;
  paginatedData: any = [];
  paginated: any = []

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private apiService: APIService) { }


  ngOnInit(): void {
    this.getTopStories()
  }

  onPageChange(event: PageEvent) {
    // console.log(event)
    this.paginatedData = this.topStories.slice(event.pageIndex * 20, (event.pageIndex + 1) * 20);
    // console.log(this.paginatedData)
    this.paginated=[];
    this.getStoryData()

  }

  getTopStories() {
    this.apiService.getTop500().subscribe((res: any) => {
      res = res.map((obj: any, index: number) => ({'id':obj, 'index': index + 1 }))
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

  getTime(time:number){
    return new Date(time*1000).toLocaleDateString();
  }

}
