import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-multi-mode-view',
  templateUrl: './multi-mode-view.component.html',
  styleUrls: ['./multi-mode-view.component.scss'],
})
export class MultiModeViewComponent implements OnInit, AfterViewInit {

  topStories = []
  paginatedData: any = [];
  paginated: any[] = [];
  ds: MatTableDataSource<any> = new MatTableDataSource<any>([{data:[]},{data:[]},{data:[]},{data:[]},{data:[]},{data:[]},{data:[]},{data:[]},{data:[]},{data:[]},{data:[]}]);
  displayedColumns: string[] = ['story'];


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  viewMode: string = '';

  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.viewMode = res.id
    });
    this.getAPI(this.viewMode);

  }

  ngAfterViewInit(): void {
    this.ds.paginator = this.paginator;
    this.getTime()
  }


  onPageChange(event: PageEvent) {
    this.paginatedData = this.topStories.slice(event.pageIndex+1 * 10, (event.pageIndex + 2) * 10);
    this.getStoryData(this.paginatedData)
    // console.log([this.paginatedData])
  }



  getAPI(mode: string) {
    this.apiService.modeType(mode).subscribe((res: any) => {
      res = res.map((obj: any, index: number) => ({ 'id': obj, 'index': index + 1, 'data': [] }))
      this.topStories = res;
      var temp = this.topStories.slice(0, 20)
      this.getStoryData(temp);
    })
  }


  getStoryData(tempDs:any) {
    // console.log(tempDs)
    tempDs.forEach((element: any) => {
      // console.log(element.index)
      this.getStoriesByIDs(element.id)
    });
  }
  tableTrackBy(index:number,data:any):string{
    return data.id;
  }


  getStoriesByIDs(id: any) {
    this.apiService.getStoryById(id).subscribe((res) => {
      this.topStories.forEach((e: any) => {
        if (e.id == id) {
          e.data = res
        }
      })
      this.ds.data = this.topStories;
      // console.log(this.topStories)
    })
  }

  getTime() {
    this.paginatedData.forEach((e:any) => {
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

  open(url: any) {
    window.open(url, '_blank');
  }

}
