import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    standalone: false
})
export class UserComponent implements OnInit {

  username:string='';
  userData:any=[]
  constructor(private activatedRoute:ActivatedRoute,private apiService:APIService) { }

  ngOnInit(): void {
    this.username=this.activatedRoute.snapshot.params['id'];
    this.getUserInfo();
  }

  getUserInfo(){
    this.apiService.getUserByName(this.username).subscribe((res:any)=>{
      this.userData=res;
    })
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

}
