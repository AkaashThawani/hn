import { Component, Input ,OnInit ,ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

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

  @Input() viewMode:string='';

  constructor(private apiService: APIService) { }


  ngOnInit(): void {
    // console.log('viewMode',this.viewMode)
    this.getAPI(this.viewMode);
  }

  onPageChange(event: PageEvent) {
    // console.log(event)
    this.paginatedData = this.topStories.slice(event.pageIndex * 20, (event.pageIndex + 1) * 20);
    // console.log(this.paginatedData)
    this.paginated=[];
    this.getStoryData()

  }



  getAPI(mode:string) {
    this.apiService.modeType(mode).subscribe((res: any) => {
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
